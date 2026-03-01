import { existsSync } from 'fs';
import { resolve } from 'path';
import { series } from '../src/data/lessons';

const root = resolve(import.meta.dirname!, '..');
const missing: string[] = [];

for (const s of series) {
  for (const l of s.lessons) {
    const img = l.image || 'NULL';
    const absPath = img !== 'NULL' ? resolve(root, 'public', img) : '';
    const hasFile = absPath ? existsSync(absPath) : false;
    if (!hasFile || img === 'NULL') {
      missing.push(`${s.id} day-${l.day} | image=${img} | fileExists=${hasFile}`);
    }
  }
}

if (missing.length === 0) {
  console.log('All images present ✅');
} else {
  console.log(`Found ${missing.length} missing images:`);
  missing.forEach(m => console.log(`  MISSING: ${m}`));
}
