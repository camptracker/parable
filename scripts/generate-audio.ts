import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { execSync } from 'child_process';

const ROOT = resolve(import.meta.dirname ?? new URL('.', import.meta.url).pathname, '..');

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

async function generateOne(text: string, outputPath: string, apiKey: string) {
  mkdirSync(dirname(outputPath), { recursive: true });

  // Step 1: Generate TTS audio
  for (let attempt = 1; attempt <= 3; attempt++) {
    console.error(`  TTS attempt ${attempt}/3 → ${outputPath}`);
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: 'gpt-4o-mini-tts',
        voice: 'fable',
        input: text,
        instructions: 'Speak like a calm, warm teacher reading a story to a class of young children. Gentle pace, soft tone, with occasional wonder and emphasis on key moments. Let pauses breathe naturally.',
        response_format: 'mp3',
      }),
    });
    if (response.ok) {
      const buffer = Buffer.from(await response.arrayBuffer());
      writeFileSync(outputPath, buffer);
      console.error(`  Saved: ${outputPath}`);
      break;
    }
    const err = await response.text();
    console.error(`  Failed (${response.status}): ${err}`);
    if (attempt < 3) await new Promise(r => setTimeout(r, attempt * 5000));
    if (attempt === 3) throw new Error(`All 3 TTS attempts failed for ${outputPath}`);
  }

  // Step 2: Get word-level timestamps via Whisper
  const timestampsPath = outputPath.replace('.mp3', '.json');
  console.error(`  Generating timestamps → ${timestampsPath}`);
  const audioBlob = readFileSync(outputPath);
  const form = new FormData();
  form.append('file', new Blob([audioBlob], { type: 'audio/mpeg' }), 'audio.mp3');
  form.append('model', 'whisper-1');
  form.append('response_format', 'verbose_json');
  form.append('timestamp_granularities[]', 'word');

  for (let attempt = 1; attempt <= 3; attempt++) {
    console.error(`  Whisper attempt ${attempt}/3...`);
    const resp = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}` },
      body: form,
    });
    if (resp.ok) {
      const data = await resp.json() as { words?: Array<{ word: string; start: number; end: number }> };
      writeFileSync(timestampsPath, JSON.stringify(data.words || [], null, 2));
      console.error(`  Timestamps saved: ${timestampsPath}`);
      return;
    }
    const err = await resp.text();
    console.error(`  Whisper failed (${resp.status}): ${err}`);
    if (attempt < 3) await new Promise(r => setTimeout(r, attempt * 3000));
  }
  console.error(`  WARNING: Timestamps failed for ${outputPath}, continuing without`);
}

async function main() {
  const seriesId = process.argv[2];
  const day = process.argv[3];
  const modeArg = process.argv.indexOf('--mode');
  const modes = modeArg !== -1 ? [process.argv[modeArg + 1]] : ['parable', 'standard'];

  if (!seriesId || !day) {
    console.error('Usage: npx tsx scripts/generate-audio.ts <seriesId> <day> [--mode parable|standard]');
    process.exit(1);
  }

  const fromFileIdx = process.argv.indexOf('--from-file');
  let parableText: string | undefined;
  let standardText: string | undefined;

  if (fromFileIdx !== -1 && process.argv[fromFileIdx + 1]) {
    // --from-file provides JSON with { parable, standard }
    const raw = readFileSync(process.argv[fromFileIdx + 1], 'utf-8').trim();
    try {
      const obj = JSON.parse(raw);
      parableText = obj.parable;
      standardText = obj.standard;
    } catch {
      // Legacy: plain text = parable only
      parableText = raw;
    }
  } else {
    const lessonJson = execSync(`npx tsx scripts/get-lesson.ts ${seriesId} ${day}`, {
      cwd: ROOT, encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024,
    }).trim();
    const lesson = JSON.parse(lessonJson);
    parableText = lesson.parable;
    standardText = lesson.standard;
  }

  const OPENAI_KEY = getOpenAIKey();
  const base = resolve(ROOT, `public/audio/${seriesId}`);

  for (const mode of modes) {
    const text = mode === 'parable' ? parableText : standardText;
    if (!text) { console.error(`  No ${mode} text, skipping`); continue; }
    await generateOne(stripMarkdown(text), resolve(base, `day-${day}-${mode}.mp3`), OPENAI_KEY);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
