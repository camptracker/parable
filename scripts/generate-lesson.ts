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

function getLatestLesson(seriesId: string): { latestDay: number; lesson: any } {
  const out = execSync(`npx tsx scripts/get-latest.ts ${seriesId}`, { cwd: ROOT, encoding: 'utf-8' });
  return JSON.parse(out);
}

async function main() {
  const seriesId = process.argv[2];
  if (!seriesId) {
    console.error('Usage: npx tsx scripts/generate-lesson.ts <seriesId>');
    process.exit(1);
  }

  const config = getSeriesConfig(seriesId);
  if (!config) {
    console.error(`Series "${seriesId}" not found in SERIES_CONFIG.json`);
    process.exit(1);
  }

  const { latestDay, lesson } = getLatestLesson(seriesId);
  const previousStandard = lesson?.standard ?? null;
  const newDay = latestDay + 1;

  // Extract "Tomorrow's Question" from previous lesson if it exists
  let tomorrowQuestion: string | null = null;
  if (previousStandard) {
    const tqMatch = previousStandard.match(/Tomorrow's Question[^—]*—\s*(.*?)$/ms);
    if (tqMatch) {
      tomorrowQuestion = tqMatch[1].trim();
    }
  }

  const { seriesName, seriesTheme, seriesEmoji, wisdomLabel, parableCharacters } = config;

  const systemPrompt = `You are a lesson generator for the "${seriesName}" series.
Theme: ${seriesTheme}
Emoji: ${seriesEmoji}
Wisdom Label: ${wisdomLabel}
Parable Characters: ${parableCharacters}

Generate a lesson in JSON format with these exact keys: standard, parable, sonnet, dallePrompt

The "standard" must follow this format exactly:
${seriesEmoji} Day ${newDay}: [Title]
${tomorrowQuestion ? `[IMPORTANT: The previous lesson ended with this question: "${tomorrowQuestion}" — You MUST open the lesson by directly answering this question in 2-3 sentences before moving on. This creates continuity between lessons.]` : `[Brief intro to the topic if Day 1]`}
🧱 The Concept [1-2 sentences]
❓ Why It Matters [2-3 sentences]
⚙️ How It Works [3-5 sentences with concrete examples]
📖 Definitions (bullet list of key terms)
🎯 ${wisdomLabel} [1-2 sentences]
❓ Tomorrow's Question — Use the Socratic method: ask a thought-provoking question that challenges assumptions, invites deeper thinking, and naturally leads to the next concept. Don't ask a simple factual question — ask one that makes the reader wrestle with an idea.

Use ** for bold markdown on section headers and key terms.

The "parable" must continue the story using ${parableCharacters}, teaching the EXACT same concept as the standard. End with a moral and a teaser for tomorrow. Use rich, literary prose.

The "sonnet" must be a 14-line Shakespearean sonnet (ABAB CDCD EFEF GG), titled "🪶 Sonnet [Roman numeral for day ${newDay}]: [Title]". Wrap the title in **bold**. The final couplet must be italicized with *. The sonnet should capture the lesson's essence poetically.

The "dallePrompt" should describe a classical oil painting scene inspired by the sonnet's imagery. Do NOT include this boilerplate in dallePrompt — just describe the scene. I will add the style instructions.

Return ONLY valid JSON. No markdown code fences. No explanation.`;

  let userPrompt: string;
  if (previousStandard) {
    userPrompt = `Here is the previous lesson's standard text:\n\n${previousStandard}\n\n`;
    if (tomorrowQuestion) {
      userPrompt += `CRITICAL: The previous lesson posed this question to the reader: "${tomorrowQuestion}"\nYour new lesson MUST begin by answering this question directly and thoughtfully. This is the #1 priority — the reader is expecting this answer. Then transition naturally into the new topic.\n\n`;
    }
    userPrompt += `Generate Day ${newDay}.`;
  } else {
    userPrompt = `This is the first lesson. Start from the series theme. Generate Day ${newDay}.`;
  }

  const apiKey = getAnthropicKey();

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`Anthropic API error ${response.status}: ${err}`);
    process.exit(1);
  }

  const data = await response.json() as any;
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
