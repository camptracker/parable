import { getLatestDay, getLesson, getSeriesById } from '../src/data/lessons';

const seriesId = process.argv[2];
if (!seriesId) {
  console.error('Usage: npx tsx scripts/get-latest.ts <seriesId>');
  process.exit(1);
}

const s = getSeriesById(seriesId);
if (!s) {
  console.error(`Series "${seriesId}" not found`);
  process.exit(1);
}

const latestDay = getLatestDay(seriesId);
if (latestDay === 0) {
  console.log(JSON.stringify({ seriesId, latestDay: 0, lesson: null }, null, 2));
  process.exit(0);
}

const lesson = getLesson(seriesId, latestDay);
console.log(JSON.stringify({ seriesId, latestDay, lesson }, null, 2));
