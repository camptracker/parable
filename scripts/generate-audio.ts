import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { execSync } from 'child_process';

const ROOT = resolve(import.meta.dirname!, '..');

function getOpenAIKey(): string {
  const authProfiles = JSON.parse(readFileSync(resolve(process.env.HOME!, '.openclaw/agents/main/agent/auth-profiles.json'), 'utf-8'));
  return authProfiles.profiles['openai:default'].key;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/^#+\s*/gm, '')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1');
}

async function main() {
  const seriesId = process.argv[2];
  const day = process.argv[3];

  if (!seriesId || !day) {
    console.error('Usage: npx tsx scripts/generate-audio.ts <seriesId> <day> [--from-file <path>]');
    process.exit(1);
  }

  const fromFileIdx = process.argv.indexOf('--from-file');
  let parableText: string;

  if (fromFileIdx !== -1 && process.argv[fromFileIdx + 1]) {
    parableText = readFileSync(process.argv[fromFileIdx + 1], 'utf-8').trim();
  } else {
    const lessonJson = execSync(`npx tsx scripts/get-lesson.ts ${seriesId} ${day}`, {
      cwd: ROOT, encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024,
    }).trim();
    const lesson = JSON.parse(lessonJson);
    parableText = lesson.parable;
  }

  const cleanText = stripMarkdown(parableText);
  const outputPath = resolve(ROOT, `public/audio/${seriesId}/day-${day}.mp3`);
  mkdirSync(dirname(outputPath), { recursive: true });

  const OPENAI_KEY = getOpenAIKey();

  let success = false;
  for (let attempt = 1; attempt <= 3; attempt++) {
    console.error(`Generating audio with TTS (attempt ${attempt}/3)...`);
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: 'tts-1',
        voice: 'fable',
        input: cleanText,
        response_format: 'mp3',
      }),
    });

    if (response.ok) {
      const buffer = Buffer.from(await response.arrayBuffer());
      writeFileSync(outputPath, buffer);
      console.error(`Saved to ${outputPath}`);
      success = true;
      break;
    }

    const err = await response.text();
    console.error(`Attempt ${attempt} failed (${response.status}): ${err}`);
    if (attempt < 3) {
      const delay = attempt * 5000;
      console.error(`Retrying in ${delay / 1000}s...`);
      await new Promise(r => setTimeout(r, delay));
    }
  }

  if (!success) {
    console.error('All 3 attempts failed');
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
