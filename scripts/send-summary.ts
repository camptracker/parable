import { readFileSync } from 'fs';
import { resolve } from 'path';

function getTelegramToken(): string {
  const config = JSON.parse(readFileSync(resolve(process.env.HOME!, '.openclaw/openclaw.json'), 'utf-8'));
  return config.channels.telegram.botToken;
}

async function main() {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  const input = Buffer.concat(chunks).toString('utf-8').trim();
  const deliveries: Array<{ recipientId: string; lessons: Array<{ emoji: string; seriesName: string; title: string; day: number; seriesId: string }> }> = JSON.parse(input);

  const token = getTelegramToken();

  for (const delivery of deliveries) {
    const lines = ['📚 *Today\'s Lessons*\n'];
    for (const l of delivery.lessons) {
      lines.push(`${l.emoji} *${l.seriesName}* — ${l.title}`);
      lines.push(`https://camptracker.github.io/parable/#/${l.seriesId}/lesson/${l.day}\n`);
    }
    const text = lines.join('\n');

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: delivery.recipientId,
        text,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error(`Telegram error for ${delivery.recipientId}: ${err}`);
    } else {
      console.error(`Sent summary to ${delivery.recipientId}`);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
