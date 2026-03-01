import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { execSync, exec } from 'child_process';

const ROOT = resolve(import.meta.dirname!, '..');

const run = (cmd: string, input?: string) => {
  console.error(`> ${cmd}`);
  return execSync(cmd, {
    cwd: ROOT,
    encoding: 'utf-8',
    stdio: input ? ['pipe', 'pipe', 'pipe'] : ['inherit', 'pipe', 'pipe'],
    input,
    maxBuffer: 10 * 1024 * 1024,
  }).trim();
};

const runAsync = (cmd: string, input?: string): Promise<string> => {
  console.error(`> (async) ${cmd}`);
  return new Promise((res, rej) => {
    const child = exec(cmd, { cwd: ROOT, encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) return rej(err);
      res(stdout.trim());
    });
    if (input && child.stdin) {
      child.stdin.write(input);
      child.stdin.end();
    }
  });
};

// Run promises with concurrency limit
async function pooled<T>(tasks: (() => Promise<T>)[], concurrency: number): Promise<PromiseSettledResult<T>[]> {
  const results: PromiseSettledResult<T>[] = new Array(tasks.length);
  let idx = 0;

  async function worker() {
    while (idx < tasks.length) {
      const i = idx++;
      try {
        const value = await tasks[i]();
        results[i] = { status: 'fulfilled', value };
      } catch (reason: any) {
        results[i] = { status: 'rejected', reason };
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, tasks.length) }, () => worker()));
  return results;
}

interface DeliveryLesson {
  emoji: string;
  seriesName: string;
  title: string;
  day: number;
  seriesId: string;
}

interface GeneratedLesson {
  seriesId: string;
  newDay: number;
  title: string;
  imagePath: string;
  standard: string;
  parable: string;
  sonnet: string;
  dallePrompt: string;
}

async function main() {
  const config = JSON.parse(readFileSync(resolve(ROOT, 'SERIES_CONFIG.json'), 'utf-8'));
  const progress = JSON.parse(readFileSync(resolve(ROOT, 'PROGRESS.json'), 'utf-8'));
  const today = new Date().toISOString().split('T')[0];

  const deliveryMap: Record<string, DeliveryLesson[]> = {};
  const generationQueue: Array<{ seriesId: string; seriesName: string; seriesEmoji: string; newDay: number; recipientsAtLatest: string[] }> = [];

  // ── Phase 1: Collect work (read-only) ──
  console.error('Phase 1: Collecting work...');
  for (const series of config.series) {
    const { seriesId, seriesName, seriesEmoji } = series;
    const seriesProgress = progress[seriesId];
    if (!seriesProgress) {
      console.error(`  No progress entry for ${seriesId}, skipping`);
      continue;
    }

    const { latestDay, recipients } = seriesProgress;
    const recipientsAtLatest: string[] = [];

    for (const [name, recip] of Object.entries(recipients) as [string, any][]) {
      const { telegramId, lastDaySent } = recip;

      if (lastDaySent < latestDay) {
        // Catch-up: queue delivery for next day only
        const catchUpDay = lastDaySent + 1;
        console.error(`  Catch-up: ${name} in ${seriesId} day ${catchUpDay}`);
        const lessonJson = run(`npx tsx scripts/get-lesson.ts ${seriesId} ${catchUpDay}`);
        const lesson = JSON.parse(lessonJson);

        if (!deliveryMap[telegramId]) deliveryMap[telegramId] = [];
        deliveryMap[telegramId].push({ emoji: seriesEmoji, seriesName, title: lesson.title, day: catchUpDay, seriesId });

        // Queue progress update (applied in Phase 6)
        recip._newDay = catchUpDay;
      } else if (lastDaySent === latestDay) {
        recipientsAtLatest.push(name);
      }
    }

    if (recipientsAtLatest.length > 0) {
      // Date guard: skip if we already generated a NEW lesson today
      // (i.e., latestDay increased today). Check by seeing if latestDay's date is today
      // AND latestDay > what it was at the start of this run (meaning orchestrate already bumped it)
      try {
        const latestJson = run(`npx tsx scripts/get-latest.ts ${seriesId}`);
        const latest = JSON.parse(latestJson);
        if (latest.lesson?.date === today && latest.latestDay > latestDay) {
          console.error(`  ${seriesId} already generated today (day ${latest.latestDay}), skipping`);
          continue;
        }
      } catch { /* no lessons yet, proceed */ }

      generationQueue.push({ seriesId, seriesName, seriesEmoji, newDay: latestDay + 1, recipientsAtLatest });
    }
  }

  console.error(`  ${generationQueue.length} series need new lessons`);

  // ── Phase 2: Generate all lessons in parallel ──
  console.error('Phase 2: Generating lessons in parallel...');
  const lessonTasks = generationQueue.map(q => async () => {
    console.error(`  Generating ${q.seriesId} day ${q.newDay}...`);
    const lessonJson = await runAsync(`npx tsx scripts/generate-lesson.ts ${q.seriesId}`);
    const generated = JSON.parse(lessonJson);
    const titleMatch = generated.standard.match(/Day \d+:\s*(.+)/);
    const title = titleMatch ? titleMatch[1].replace(/\*\*/g, '').trim() : `Day ${q.newDay}`;
    return {
      ...q,
      title,
      imagePath: `images/${q.seriesId}/day-${q.newDay}.jpg`,
      standard: generated.standard,
      parable: generated.parable,
      sonnet: generated.sonnet,
      dallePrompt: generated.dallePrompt,
    } as GeneratedLesson & typeof q;
  });

  const lessonResults = await pooled(lessonTasks, 4);
  const generatedLessons: (GeneratedLesson & { seriesEmoji: string; seriesName: string; recipientsAtLatest: string[] })[] = [];

  for (const r of lessonResults) {
    if (r.status === 'fulfilled') {
      generatedLessons.push(r.value);
    } else {
      console.error(`  Lesson generation failed: ${r.reason}`);
    }
  }
  console.error(`  ${generatedLessons.length}/${generationQueue.length} lessons generated`);

  // ── Phase 3: Generate all images in parallel (concurrency 3) ──
  console.error('Phase 3: Generating images in parallel (max 3)...');
  const imageTasks = generatedLessons.map(g => async () => {
    const fullImagePath = resolve(ROOT, 'public', g.imagePath);
    console.error(`  Image: ${g.seriesId} day ${g.newDay}...`);
    try {
      await runAsync(`npx tsx scripts/generate-image.ts ${JSON.stringify(g.dallePrompt)} ${fullImagePath}`);
    } catch (err) {
      console.error(`  Image failed for ${g.seriesId} day ${g.newDay}, continuing`);
    }
  });

  await pooled(imageTasks, 3);
  console.error('  Images done');

  // ── Phase 4: Write lessons (sequential) ──
  console.error('Phase 4: Writing lessons...');
  for (const g of generatedLessons) {
    const lessonObj = {
      day: g.newDay,
      title: g.title,
      date: today,
      image: g.imagePath,
      standard: g.standard,
      parable: g.parable,
      sonnet: g.sonnet,
    };
    run(`npx tsx scripts/add-lesson.ts ${g.seriesId}`, JSON.stringify(lessonObj));

    // Queue deliveries for recipients at latest
    for (const name of g.recipientsAtLatest) {
      const telegramId = progress[g.seriesId].recipients[name].telegramId;
      if (!deliveryMap[telegramId]) deliveryMap[telegramId] = [];
      deliveryMap[telegramId].push({ emoji: g.seriesEmoji, seriesName: g.seriesName, title: g.title, day: g.newDay, seriesId: g.seriesId });

      // Queue progress update
      progress[g.seriesId].recipients[name]._newDay = g.newDay;
    }
    progress[g.seriesId].latestDay = g.newDay;
  }

  // ── Phase 5: Build + Deploy ──
  console.error('Phase 5: Building and deploying...');
  run('npm run build');

  try { run('npx gh-pages -d dist'); } catch { console.error('  gh-pages deploy failed, continuing'); }
  try { run('git add -A && git commit -m "Daily lessons update" && git push'); } catch { console.error('  Git push failed or nothing to commit'); }

  // ── Phase 6: Batch progress update (single write) ──
  console.error('Phase 6: Updating progress...');
  for (const [seriesId, sp] of Object.entries(progress) as [string, any][]) {
    for (const [name, recip] of Object.entries(sp.recipients) as [string, any][]) {
      if (recip._newDay !== undefined) {
        recip.lastDaySent = recip._newDay;
        delete recip._newDay;
      }
    }
  }
  writeFileSync(resolve(ROOT, 'PROGRESS.json'), JSON.stringify(progress, null, 2) + '\n', 'utf-8');
  console.error('  Progress saved');

  // ── Phase 7: Send batch summary ──
  const deliveries = Object.entries(deliveryMap).map(([recipientId, lessons]) => ({ recipientId, lessons }));

  if (deliveries.length > 0) {
    console.error('Phase 7: Sending summaries...');
    run('npx tsx scripts/send-summary.ts', JSON.stringify(deliveries));
  } else {
    console.error('Phase 7: No lessons to deliver today.');
  }

  console.error('Done! ✅');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
