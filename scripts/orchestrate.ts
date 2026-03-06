import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { execSync, exec } from 'child_process';

const __dir = import.meta.dirname ?? new URL('.', import.meta.url).pathname;
const ROOT = resolve(__dir, '..');

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
  // Parse args
  const testMode = process.argv.includes('--test');
  const noSend = process.argv.includes('--no-send');
  const recipientIdx = process.argv.indexOf('--recipient');
  const recipientFilter = recipientIdx !== -1 ? process.argv[recipientIdx + 1] : null;

  if (testMode) console.error('🧪 TEST MODE: only processing jon');
  if (noSend) console.error('📭 NO-SEND MODE: generating only, no delivery');
  if (recipientFilter) console.error(`👤 RECIPIENT MODE: only processing ${recipientFilter}`);

  const config = JSON.parse(readFileSync(resolve(ROOT, 'SERIES_CONFIG.json'), 'utf-8'));
  const progress = JSON.parse(readFileSync(resolve(ROOT, 'PROGRESS.json'), 'utf-8'));
  const today = new Date().toISOString().split('T')[0];

  const deliveryMap: Record<string, DeliveryLesson[]> = {};
  const generationQueue: Array<{ seriesId: string; seriesName: string; seriesEmoji: string; newDay: number; recipientsAtLatest: string[] }> = [];

  // ── Phase 1: Collect work ──
  console.error('Phase 1: Collecting work...');
  for (const series of config.series) {
    const { seriesId, seriesName, seriesEmoji } = series;

    // Find the actual latest day from the series data file (not progress)
    let latestDay = 0;
    try {
      const latestJson = run(`./node_modules/.bin/tsx scripts/get-latest.ts ${seriesId}`);
      const latest = JSON.parse(latestJson);
      latestDay = latest.latestDay || 0;
    } catch { /* new series with no lessons yet */ }

    // Always queue generation for next lesson
    generationQueue.push({ seriesId, seriesName, seriesEmoji, newDay: latestDay + 1, recipientsAtLatest: [] });

    // Ensure progress entry exists
    if (!progress[seriesId]) {
      progress[seriesId] = { latestDay, recipients: {} };
    }
  }

  // Handle delivery (only when not --no-send)
  if (!noSend) {
    for (const series of config.series) {
      const { seriesId, seriesName, seriesEmoji } = series;
      const sp = progress[seriesId];
      if (!sp?.recipients) continue;

      for (const [name, recip] of Object.entries(sp.recipients) as [string, any][]) {
        if (testMode && name !== 'jon') continue;
        if (recipientFilter && name !== recipientFilter) continue;

        const { telegramId, lastDaySent } = recip;
        const latestDay = sp.latestDay || 0;

        if (lastDaySent < latestDay) {
          const catchUpDay = lastDaySent + 1;
          console.error(`  Catch-up: ${name} in ${seriesId} day ${catchUpDay}`);
          const lessonJson = run(`./node_modules/.bin/tsx scripts/get-lesson.ts ${seriesId} ${catchUpDay}`);
          const lesson = JSON.parse(lessonJson);

          if (!deliveryMap[telegramId]) deliveryMap[telegramId] = [];
          deliveryMap[telegramId].push({ emoji: seriesEmoji, seriesName, title: lesson.title, day: catchUpDay, seriesId });
          recip._newDay = catchUpDay;
        }
      }
    }
  }

  console.error(`  ${generationQueue.length} series need new lessons`);

  // ── Phase 2: Generate all lessons in parallel ──
  console.error('Phase 2: Generating lessons in parallel...');
  const lessonTasks = generationQueue.map(q => async () => {
    console.error(`  Generating ${q.seriesId} day ${q.newDay}...`);
    const lessonJson = await runAsync(`./node_modules/.bin/tsx scripts/generate-lesson.ts ${q.seriesId}`);
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

  const lessonResults = await pooled(lessonTasks, 2);
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
      await runAsync(`./node_modules/.bin/tsx scripts/generate-image.ts ${JSON.stringify(g.dallePrompt)} ${fullImagePath}`);
    } catch (err) {
      console.error(`  Image failed for ${g.seriesId} day ${g.newDay}, continuing`);
    }
  });

  await pooled(imageTasks, 3);
  console.error('  Images done');

  // Phase 3.5: Audio generation removed

  // ── Phase 4: Write lessons (sequential) ──
  console.error('Phase 4: Writing lessons...');
  for (const g of generatedLessons) {
    const lessonObj = {
      day: g.newDay,
      title: g.title,
      date: today,
      image: g.imagePath,
      audio: `audio/${g.seriesId}/day-${g.newDay}`,
      standard: g.standard,
      parable: g.parable,
      sonnet: g.sonnet,
    };
    run(`./node_modules/.bin/tsx scripts/add-lesson.ts ${g.seriesId}`, JSON.stringify(lessonObj));

    // Update latestDay
    progress[g.seriesId].latestDay = g.newDay;
  }

  // ── Phase 5: Build + Deploy (skip if no new lessons written) ──
  if (generatedLessons.length > 0) {
    console.error('Phase 5: Building and deploying...');
    run('npm run build');
    try { run('npx gh-pages -d dist'); } catch { console.error('  gh-pages deploy failed, continuing'); }
    try { run('git add -A && git commit -m "Daily lessons update" && git push'); } catch { console.error('  Git push failed or nothing to commit'); }
  } else {
    console.error('Phase 5: No new lessons, skipping build/deploy.');
  }

  // ── Phase 6: Batch progress update (single write) ──
  console.error('Phase 6: Updating progress...');
  for (const [seriesId, sp] of Object.entries(progress) as [string, any][]) {
    for (const [name, recip] of Object.entries(sp.recipients) as [string, any][]) {
      if (recip._newDay !== undefined) {
        if (!noSend) recip.lastDaySent = recip._newDay;
        delete recip._newDay;
      }
    }
  }
  writeFileSync(resolve(ROOT, 'PROGRESS.json'), JSON.stringify(progress, null, 2) + '\n', 'utf-8');
  console.error('  Progress saved');

  if (!noSend) {
    // ── Phase 7: Send batch summary ──
    const deliveries = Object.entries(deliveryMap).map(([recipientId, lessons]) => ({ recipientId, lessons }));

    if (deliveries.length > 0) {
      console.error('Phase 7: Sending summaries...');
      run('./node_modules/.bin/tsx scripts/send-summary.ts', JSON.stringify(deliveries));
    } else {
      console.error('Phase 7: No lessons to deliver today.');
    }
  } else {
    console.error('Phase 7: Skipped (--no-send mode).');
  }

  console.error('Done! ✅');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
