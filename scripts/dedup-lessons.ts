import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { series } from '../src/data/lessons';

const ROOT = resolve(import.meta.dirname!, '..');

for (const s of series) {
  const seen = new Set<number>();
  const dupes: number[] = [];
  for (const l of s.lessons) {
    if (seen.has(l.day)) dupes.push(l.day);
    seen.add(l.day);
  }
  if (dupes.length === 0) continue;

  console.error(`${s.id}: removing duplicate days ${dupes}`);
  const filePath = resolve(ROOT, 'src/data/series', `${s.id}.ts`);
  let content = readFileSync(filePath, 'utf-8');

  // For each dupe day, find the SECOND occurrence of that lesson block and remove it
  for (const day of dupes) {
    // Match lesson blocks: { day: N, ... },
    const pattern = new RegExp(`  \\{\\n    day: ${day},.*?\\},`, 'gs');
    let matchCount = 0;
    content = content.replace(pattern, (match) => {
      matchCount++;
      return matchCount === 1 ? match : ''; // keep first, remove second
    });
  }

  // Clean up double newlines
  content = content.replace(/\n\n\n+/g, '\n\n');
  writeFileSync(filePath, content, 'utf-8');
  console.error(`  Fixed ${s.id}`);
}
console.error('Dedup complete');
