/**
 * deliver.ts — Send lesson summaries to a specific recipient and update their progress.
 *
 * Usage: npx tsx scripts/deliver.ts <recipientName>
 *
 * Reads PROGRESS.json, finds all series where lastDaySent < latestDay,
 * sends one lesson per series (lastDaySent + 1), updates lastDaySent, saves progress.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

const ROOT = resolve(import.meta.dirname ?? new URL('.', import.meta.url).pathname, '..');

function getTelegramToken(): string {
  const config = JSON.parse(readFileSync(resolve(process.env.HOME!, '.openclaw/openclaw.json'), 'utf-8'));
  return config.channels.telegram.botToken;
}

async function main() {
  const recipientName = process.argv[2];
  if (!recipientName) {
    console.error('Usage: npx tsx scripts/deliver.ts <recipientName>');
    process.exit(1);
  }

  const config = JSON.parse(readFileSync(resolve(ROOT, 'SERIES_CONFIG.json'), 'utf-8'));
  const progress = JSON.parse(readFileSync(resolve(ROOT, 'PROGRESS.json'), 'utf-8'));

  let telegramId = '';
  const lessons: Array<{ emoji: string; seriesName: string; title: string; day: number; seriesId: string }> = [];

  for (const series of config.series) {
    const { seriesId, seriesName, seriesEmoji } = series;
    const sp = progress[seriesId];
    if (!sp) continue;

    const recip = sp.recipients?.[recipientName];
    if (!recip) continue;

    telegramId = recip.telegramId;
    const { lastDaySent } = recip;
    const { latestDay } = sp;

    if (lastDaySent < latestDay) {
      const nextDay = lastDaySent + 1;
      try {
        const lessonJson = execSync(
          `./node_modules/.bin/tsx scripts/get-lesson.ts ${seriesId} ${nextDay}`,
          { cwd: ROOT, encoding: 'utf-8', stdio: ['inherit', 'pipe', 'pipe'] }
        ).trim();
        const lesson = JSON.parse(lessonJson);
        lessons.push({ emoji: seriesEmoji, seriesName, title: lesson.title, day: nextDay, seriesId });
        // Update progress in memory
        recip.lastDaySent = nextDay;
      } catch (err) {
        console.error(`Failed to get lesson ${seriesId} day ${nextDay}: ${err}`);
      }
    }
  }

  if (lessons.length === 0) {
    console.error(`No new lessons to deliver to ${recipientName}.`);
    process.exit(0);
  }

  // Send Telegram message
  const token = getTelegramToken();
  const lines = ['📚 *Today\'s Lessons*\n'];
  for (const l of lessons) {
    lines.push(`${l.emoji} *${l.seriesName}* — ${l.title}`);
    lines.push(`https://camptracker.github.io/parable/#/${l.seriesId}/lesson/${l.day}\n`);
  }
  const text = lines.join('\n');

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: telegramId,
      text,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`Telegram error: ${err}`);
    process.exit(1);
  }

  console.error(`Sent ${lessons.length} lessons to ${recipientName} (${telegramId})`);

  // Save progress
  writeFileSync(resolve(ROOT, 'PROGRESS.json'), JSON.stringify(progress, null, 2) + '\n', 'utf-8');
  console.error('Progress saved');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
