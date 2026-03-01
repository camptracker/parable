import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const ROOT = resolve(import.meta.dirname!, '..');
const PROGRESS_PATH = resolve(ROOT, 'PROGRESS.json');

const seriesId = process.argv[2];
const recipientName = process.argv[3];
const newDay = parseInt(process.argv[4]);

if (!seriesId || !recipientName || isNaN(newDay)) {
  console.error('Usage: npx tsx scripts/update-progress.ts <seriesId> <recipientName> <newDay>');
  process.exit(1);
}

const progress = JSON.parse(readFileSync(PROGRESS_PATH, 'utf-8'));

if (!progress[seriesId]) {
  console.error(`Series "${seriesId}" not found in PROGRESS.json`);
  process.exit(1);
}

if (!progress[seriesId].recipients[recipientName]) {
  console.error(`Recipient "${recipientName}" not found in series "${seriesId}"`);
  process.exit(1);
}

progress[seriesId].recipients[recipientName].lastDaySent = newDay;

if (newDay > progress[seriesId].latestDay) {
  progress[seriesId].latestDay = newDay;
}

writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2) + '\n', 'utf-8');
console.error(`Updated ${recipientName} in ${seriesId} to day ${newDay}`);
