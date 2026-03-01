import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { resolve } from 'path';
import { series } from '../src/data/lessons';

const ROOT = resolve(import.meta.dirname!, '..');
const keepMap: Record<string, number> = {
  'financial-independence': 4,
};
const defaultKeep = 1;

for (const s of series) {
  const maxDay = keepMap[s.id] ?? defaultKeep;
  const toRemove = s.lessons.filter(l => l.day > maxDay);
  if (toRemove.length === 0) continue;

  console.error(`${s.id}: keeping days 1-${maxDay}, removing ${toRemove.length} lessons`);

  // Remove image files
  for (const l of toRemove) {
    if (l.image) {
      const imgPath = resolve(ROOT, 'public', l.image);
      if (existsSync(imgPath)) {
        unlinkSync(imgPath);
        console.error(`  Deleted ${l.image}`);
      }
    }
  }

  // Rewrite series file keeping only days <= maxDay
  const filePath = resolve(ROOT, 'src/data/series', `${s.id}.ts`);
  let content = readFileSync(filePath, 'utf-8');

  // Remove lesson blocks for days > maxDay
  for (const l of toRemove) {
    const pattern = new RegExp(`  \\{\\n    day: ${l.day},.*?\\},?\\n`, 'gs');
    content = content.replace(pattern, '');
  }

  content = content.replace(/\n\n\n+/g, '\n');
  writeFileSync(filePath, content, 'utf-8');
}

// Update PROGRESS.json
const progress = JSON.parse(readFileSync(resolve(ROOT, 'PROGRESS.json'), 'utf-8'));
for (const [seriesId, sp] of Object.entries(progress) as [string, any][]) {
  const maxDay = keepMap[seriesId] ?? defaultKeep;
  sp.latestDay = maxDay;
  for (const [name, recip] of Object.entries(sp.recipients) as [string, any][]) {
    if (recip.lastDaySent > maxDay) recip.lastDaySent = maxDay;
  }
}
writeFileSync(resolve(ROOT, 'PROGRESS.json'), JSON.stringify(progress, null, 2) + '\n', 'utf-8');

console.error('Done! PROGRESS.json updated.');
