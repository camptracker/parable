import { readFileSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

const ROOT = resolve(import.meta.dirname!, '..');

function getAnthropicKey(): string {
  const authProfiles = JSON.parse(readFileSync(resolve(process.env.HOME!, '.openclaw/agents/main/agent/auth-profiles.json'), 'utf-8'));
  return authProfiles.profiles['anthropic:default'].key;
}

function getSeriesConfig(seriesId: string) {
  const config = JSON.parse(readFileSync(resolve(ROOT, 'SERIES_CONFIG.json'), 'utf-8'));
  return config.series.find((s: any) => s.seriesId === seriesId);
}

function getAllLessons(seriesId: string): { latestDay: number; lessons: any[] } {
  const out = execSync(`./node_modules/.bin/tsx -e "
    const { getSeriesById, getLatestDay } = require('./src/data/lessons');
    const s = getSeriesById('${seriesId}');
    const latestDay = s ? getLatestDay('${seriesId}') : 0;
    console.log(JSON.stringify({ latestDay, lessons: s?.lessons || [] }));
  "`, { cwd: ROOT, encoding: 'utf-8' });
  return JSON.parse(out);
}

function extractTitleAndQuestion(lesson: any): { day: number; title: string; question: string | null } {
  const titleMatch = lesson.standard?.match(/Day \d+:\s*(.+)/);
  const title = titleMatch ? titleMatch[1].trim().replace(/\*\*/g, '') : lesson.title || 'Unknown';
  const qMatch = lesson.standard?.match(/Tomorrow's Question[^—]*—\s*(.*?)$/ms);
  const question = qMatch ? qMatch[1].trim() : null;
  return { day: lesson.day, title, question };
}

async function main() {
  const seriesId = process.argv[2];
  if (!seriesId) {
    console.error('Usage: ./node_modules/.bin/tsx scripts/generate-lesson.ts <seriesId>');
    process.exit(1);
  }

  const config = getSeriesConfig(seriesId);
  if (!config) {
    console.error(`Series "${seriesId}" not found in SERIES_CONFIG.json`);
    process.exit(1);
  }

  const { latestDay, lessons } = getAllLessons(seriesId);
  const newDay = latestDay + 1;

  // Extract titles and questions from ALL previous lessons
  const previousLessons = lessons.map(extractTitleAndQuestion);
  const lastLesson = previousLessons.length > 0 ? previousLessons[previousLessons.length - 1] : null;
  const tomorrowQuestion = lastLesson?.question ?? null;

  // Build history summary for context
  const historyLines = previousLessons.map(l =>
    `- Day ${l.day}: "${l.title}"${l.question ? ` → Q: "${l.question}"` : ''}`
  ).join('\n');

  const { seriesName, seriesTheme, seriesEmoji, wisdomLabel, parableCharacters } = config;

  const historyBlock = historyLines
    ? `\nPrevious lessons (DO NOT repeat these titles or questions):\n${historyLines}\n`
    : '';

  const systemPrompt = `You are a lesson generator for the "${seriesName}" series.
Theme: ${seriesTheme}
Emoji: ${seriesEmoji}
Wisdom Label: ${wisdomLabel}
Parable Characters: ${parableCharacters}
${historyBlock}
Generate a lesson in JSON format with these exact keys: standard, parable, sonnet, dallePrompt

The "standard" must follow this format exactly:
${seriesEmoji} Day ${newDay}: [Title]
${tomorrowQuestion ? `[IMPORTANT: The previous lesson ended with this question: "${tomorrowQuestion}" — You MUST open the lesson by directly answering this question in 2-3 sentences before moving on. This creates continuity between lessons.]` : `[Brief intro to the topic if Day 1]`}
🧱 The Concept [1-2 sentences]
❓ Why It Matters [2-3 sentences]
⚙️ How It Works [3-5 sentences with concrete examples]
🎯 ${wisdomLabel} [1-2 sentences]
❓ Tomorrow's Question — Use the Socratic method: ask a thought-provoking question that challenges assumptions, invites deeper thinking, and naturally leads to the next concept. Don't ask a simple factual question — ask one that makes the reader wrestle with an idea. IMPORTANT: Do NOT repeat or rephrase any previous question listed above.

Use ** for bold markdown on section headers and key terms.

The "parable" must continue the story using ${parableCharacters}, teaching the EXACT same concept as the standard. End with a moral and a teaser for tomorrow. Use rich, literary prose.

The "sonnet" must be a 14-line Shakespearean sonnet (ABAB CDCD EFEF GG), titled "🪶 Sonnet [Roman numeral for day ${newDay}]: [Title]". Wrap the title in **bold**. The final couplet must be italicized with *. The sonnet should capture the lesson's essence poetically.

The "dallePrompt" should describe a classical oil painting scene inspired by the sonnet's imagery. Do NOT include this boilerplate in dallePrompt — just describe the scene. I will add the style instructions.

Return ONLY valid JSON. No markdown code fences. No explanation.`;

  let userPrompt: string;
  if (tomorrowQuestion) {
    userPrompt = `The previous lesson ended with this question: "${tomorrowQuestion}"\n\nYour new lesson MUST begin by answering this question directly and thoughtfully. This is the #1 priority — the reader is expecting this answer. Then transition naturally into the new topic.\n\nGenerate Day ${newDay}.`;
  } else if (previousLessons.length > 0) {
    userPrompt = `Continue the series. Generate Day ${newDay}.`;
  } else {
    userPrompt = `This is the first lesson. Start from the series theme. Generate Day ${newDay}.`;
  }

  const apiKey = getAnthropicKey();

  const requestBody = JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4096,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  });

  // Use curl instead of fetch to avoid Node.js fetch hanging issues
  const { writeFileSync, unlinkSync } = await import('fs');
  const tmpBody = resolve(ROOT, `.tmp-request-${seriesId}-${Date.now()}.json`);
  writeFileSync(tmpBody, requestBody);
  let curlOut: string;
  try {
    curlOut = execSync(`curl -s --max-time 120 https://api.anthropic.com/v1/messages -H "Content-Type: application/json" -H "x-api-key: ${apiKey}" -H "anthropic-version: 2023-06-01" -d @${tmpBody}`, { cwd: ROOT, encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 });
  } finally {
    try { unlinkSync(tmpBody); } catch {}
  }

  const data = JSON.parse(curlOut) as any;
  if (data.type === 'error') {
    console.error(`Anthropic API error: ${JSON.stringify(data.error)}`);
    process.exit(1);
  }
  const text = data.content[0].text;

  // Parse JSON from response (strip code fences if present)
  let jsonStr = text.trim();
  if (jsonStr.startsWith('```')) {
    jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  }

  const result = JSON.parse(jsonStr);

  // Add style to dallePrompt
  result.dallePrompt = `Classical oil painting with Rembrandt lighting, rich golden amber tones, dramatic chiaroscuro. Scene inspired by this sonnet: ${result.sonnet} Do not include any text or words in the image.`;

  console.log(JSON.stringify(result));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
