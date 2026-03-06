import cron from 'node-cron';
import pLimit from 'p-limit';
import { Series } from '../models/Series.js';
import { Lesson } from '../models/Lesson.js';
import { Subscription } from '../models/Subscription.js';
import { Progress } from '../models/Progress.js';
import { Read } from '../models/Read.js';
import { createLessonForSeries } from '../services/generationService.js';

// Midnight: generate next lesson for all active series (concurrency 3)
export function startOrchestrateSeriesCron(): void {
  cron.schedule('0 0 * * *', async () => {
    console.log('[cron] orchestrateSeries starting...');
    try {
      const allSeries = await Series.find({ deletedAt: { $exists: false } });
      const limit = pLimit(3);
      await Promise.all(
        allSeries.map(s => limit(() => createLessonForSeries(String(s._id))))
      );
      console.log(`[cron] orchestrateSeries done: ${allSeries.length} series`);
    } catch (err) {
      console.error('[cron] orchestrateSeries error:', err);
    }
  }, { timezone: 'UTC' });
}

// 7AM: advance progress if user has read current lesson
export function startOrchestrateProgressCron(): void {
  cron.schedule('0 7 * * *', async () => {
    console.log('[cron] orchestrateProgress starting...');
    try {
      const subscriptions = await Subscription.find({});
      let advanced = 0;

      for (const sub of subscriptions) {
        const progress = await Progress.findOne({ userId: sub.userId, seriesId: sub.seriesId });

        if (!progress) {
          // Set progress to first lesson
          const firstLesson = await Lesson.findOne({
            seriesId: sub.seriesId,
            deletedAt: { $exists: false },
          }).sort({ sortOrder: 1 });
          if (firstLesson) {
            await Progress.findOneAndUpdate(
              { userId: sub.userId, seriesId: sub.seriesId },
              { lessonId: firstLesson._id },
              { upsert: true }
            );
            advanced++;
          }
          continue;
        }

        // Check if current lesson has been read
        const currentRead = await Read.findOne({ userId: sub.userId, lessonId: progress.lessonId });
        if (!currentRead) continue;

        // Find next lesson
        const currentLesson = await Lesson.findById(progress.lessonId);
        if (!currentLesson) continue;

        const nextLesson = await Lesson.findOne({
          seriesId: sub.seriesId,
          deletedAt: { $exists: false },
          sortOrder: { $gt: currentLesson.sortOrder },
        }).sort({ sortOrder: 1 });

        if (nextLesson) {
          progress.lessonId = nextLesson._id;
          await progress.save();
          advanced++;
        }
      }

      console.log(`[cron] orchestrateProgress done: advanced ${advanced} users`);
    } catch (err) {
      console.error('[cron] orchestrateProgress error:', err);
    }
  }, { timezone: 'UTC' });
}
