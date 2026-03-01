import { getLesson, getSeriesById } from '../src/data/lessons';

const seriesId = process.argv[2];
const day = parseInt(process.argv[3]);

if (!seriesId || isNaN(day)) {
  console.error('Usage: npx tsx scripts/get-lesson.ts <seriesId> <day>');
  process.exit(1);
}

const s = getSeriesById(seriesId);
if (!s) {
  console.error(`Series "${seriesId}" not found`);
  process.exit(1);
}

const lesson = getLesson(seriesId, day);
if (!lesson) {
  console.error(`Day ${day} not found in "${seriesId}"`);
  process.exit(1);
}

console.log(JSON.stringify(lesson, null, 2));
