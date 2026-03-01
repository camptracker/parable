import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const ROOT = resolve(import.meta.dirname!, '..');

function escapeBackticks(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

async function main() {
  const seriesId = process.argv[2];
  if (!seriesId) {
    console.error('Usage: echo \'{"day":2,...}\' | npx tsx scripts/add-lesson.ts <seriesId>');
    process.exit(1);
  }

  // Read stdin
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  const input = Buffer.concat(chunks).toString('utf-8').trim();
  const lesson = JSON.parse(input);

  const filePath = resolve(ROOT, 'src/data/series', `${seriesId}.ts`);
  let content = readFileSync(filePath, 'utf-8');

  // Build the lesson entry
  const entry = `  {
    day: ${lesson.day},
    title: ${JSON.stringify(lesson.title)},
    date: ${JSON.stringify(lesson.date)},
    image: ${JSON.stringify(lesson.image)},
    sonnet: \`${escapeBackticks(lesson.sonnet)}\`,
    standard: \`${escapeBackticks(lesson.standard)}\`,
    parable: \`${escapeBackticks(lesson.parable)}\`,
  },`;

  // Insert before the closing ];
  const closingIndex = content.lastIndexOf('];');
  if (closingIndex === -1) {
    console.error('Could not find closing ]; in series file');
    process.exit(1);
  }

  // Ensure there's a comma after the previous entry
  const before = content.slice(0, closingIndex).trimEnd();
  // If the last non-whitespace char before ]; is } (end of previous lesson), add comma
  const needsComma = before.endsWith('}') || before.endsWith('},');
  const prefix = before.endsWith(',') ? before : (before.endsWith('}') ? before + ',' : before);

  content = prefix + '\n' + entry + '\n' + content.slice(closingIndex);
  writeFileSync(filePath, content, 'utf-8');
  console.error(`Added day ${lesson.day} to ${seriesId}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
