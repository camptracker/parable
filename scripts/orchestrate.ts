import { readFileSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

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

interface DeliveryLesson {
  emoji: string;
  seriesName: string;
  title: string;
  day: number;
  seriesId: string;
}

async function main() {
  const config = JSON.parse(readFileSync(resolve(ROOT, 'SERIES_CONFIG.json'), 'utf-8'));
  const progress = JSON.parse(readFileSync(resolve(ROOT, 'PROGRESS.json'), 'utf-8'));

  const deliveryMap: Record<string, DeliveryLesson[]> = {};

  for (const series of config.series) {
    const { seriesId, seriesName, seriesEmoji } = series;
    const seriesProgress = progress[seriesId];
    if (!seriesProgress) {
      console.error(`No progress entry for ${seriesId}, skipping`);
      continue;
    }

    const { latestDay, recipients } = seriesProgress;
    let needsGeneration = false;
    const recipientsAtLatest: string[] = [];

    // Process each recipient
    for (const [name, recip] of Object.entries(recipients) as [string, any][]) {
      const { telegramId, lastDaySent } = recip;

      if (lastDaySent < latestDay) {
        // Catch-up: send existing lesson
        const catchUpDay = lastDaySent + 1;
        console.error(`Catch-up: ${name} in ${seriesId} day ${catchUpDay}`);
        const lessonJson = run(`npx tsx scripts/get-lesson.ts ${seriesId} ${catchUpDay}`);
        const lesson = JSON.parse(lessonJson);

        if (!deliveryMap[telegramId]) deliveryMap[telegramId] = [];
        deliveryMap[telegramId].push({
          emoji: seriesEmoji,
          seriesName,
          title: lesson.title,
          day: catchUpDay,
          seriesId,
        });

        run(`npx tsx scripts/update-progress.ts ${seriesId} ${name} ${catchUpDay}`);
      } else if (lastDaySent === latestDay) {
        needsGeneration = true;
        recipientsAtLatest.push(name);
      }
    }

    if (needsGeneration) {
      const newDay = latestDay + 1;
      console.error(`Generating new lesson: ${seriesId} day ${newDay}`);

      // Generate lesson content
      const lessonJson = run(`npx tsx scripts/generate-lesson.ts ${seriesId}`);
      const generated = JSON.parse(lessonJson);

      // Extract title from standard (first line pattern: emoji Day N: Title)
      const titleMatch = generated.standard.match(/Day \d+:\s*(.+)/);
      const title = titleMatch ? titleMatch[1].replace(/\*\*/g, '').trim() : `Day ${newDay}`;

      // Generate image
      const imagePath = `images/${seriesId}/day-${newDay}.jpg`;
      const fullImagePath = resolve(ROOT, 'public', imagePath);
      try {
        run(`npx tsx scripts/generate-image.ts ${JSON.stringify(generated.dallePrompt)} ${fullImagePath}`);
      } catch (err) {
        console.error(`Image generation failed for ${seriesId} day ${newDay}, continuing without image`);
      }

      // Add lesson to series file
      const lessonObj = {
        day: newDay,
        title,
        date: new Date().toISOString().split('T')[0],
        image: imagePath,
        standard: generated.standard,
        parable: generated.parable,
        sonnet: generated.sonnet,
      };
      run(`npx tsx scripts/add-lesson.ts ${seriesId}`, JSON.stringify(lessonObj));

      // Update progress for all recipients at latest
      for (const name of recipientsAtLatest) {
        run(`npx tsx scripts/update-progress.ts ${seriesId} ${name} ${newDay}`);
        const telegramId = recipients[name].telegramId;
        if (!deliveryMap[telegramId]) deliveryMap[telegramId] = [];
        deliveryMap[telegramId].push({
          emoji: seriesEmoji,
          seriesName,
          title,
          day: newDay,
          seriesId,
        });
      }
    }
  }

  // Build and deploy
  console.error('Building site...');
  run('npm run build');

  console.error('Deploying to GitHub Pages...');
  try {
    run('npx gh-pages -d dist');
  } catch (err) {
    console.error('gh-pages deploy failed, continuing...');
  }

  console.error('Committing and pushing...');
  try {
    run('git add -A && git commit -m "Daily lessons update" && git push');
  } catch (err) {
    console.error('Git push failed or nothing to commit');
  }

  // Send summaries
  const deliveries = Object.entries(deliveryMap).map(([recipientId, lessons]) => ({
    recipientId,
    lessons,
  }));

  if (deliveries.length > 0) {
    console.error('Sending summaries...');
    run('npx tsx scripts/send-summary.ts', JSON.stringify(deliveries));
  } else {
    console.error('No lessons to deliver today.');
  }

  console.error('Done!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
