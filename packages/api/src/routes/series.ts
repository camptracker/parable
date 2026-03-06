import { Router, Request, Response } from 'express';
import { Series } from '../models/Series.js';
import { Lesson } from '../models/Lesson.js';
import { Standard } from '../models/Standard.js';
import { Subscription } from '../models/Subscription.js';
import { GenerationJob } from '../models/GenerationJob.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';
import { checkCreateSeriesLimit } from '../middleware/rateLimiter.js';
import { createSeriesWithFirstLesson } from '../services/generationService.js';

const router = Router();

// GET /api/series - all active series
router.get('/', async (_req: Request, res: Response) => {
  const seriesList = await Series.find({ deletedAt: { $exists: false } }).sort({ subscriberCount: -1 });
  res.json(seriesList);
});

// GET /api/series/popular - top 20 by subscriberCount
router.get('/popular', async (_req: Request, res: Response) => {
  const seriesList = await Series.find({ deletedAt: { $exists: false } })
    .sort({ subscriberCount: -1 })
    .limit(20);
  res.json(seriesList);
});

// POST /api/series - create new series (auth, rate 3/user/day)
router.post('/', requireAuth, async (req: Request, res: Response) => {
  const userId = req.authUser!.userId;

  if (!checkCreateSeriesLimit(userId)) {
    res.status(429).json({ error: 'Rate limit: max 3 series per day' });
    return;
  }

  const { topic } = req.body;
  if (!topic || typeof topic !== 'string') {
    res.status(400).json({ error: 'topic is required' });
    return;
  }

  try {
    const series = await createSeriesWithFirstLesson(topic, userId);
    res.status(201).json(series);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Generation failed';
    res.status(500).json({ error: msg });
  }
});

// DELETE /api/series/:seriesId - soft delete + cleanup (admin)
router.delete('/:seriesId', requireAdmin, async (req: Request, res: Response) => {
  const { seriesId } = req.params;

  const series = await Series.findById(seriesId);
  if (!series) {
    res.status(404).json({ error: 'Series not found' });
    return;
  }

  // Soft delete series
  series.deletedAt = new Date();
  await series.save();

  // Soft delete all lessons
  await Lesson.updateMany({ seriesId }, { deletedAt: new Date() });

  // Clean up standards, subscriptions, jobs
  const lessonIds = (await Lesson.find({ seriesId }, '_id')).map(l => l._id);
  await Standard.deleteMany({ lessonId: { $in: lessonIds } });
  await Subscription.deleteMany({ seriesId });
  await GenerationJob.deleteOne({ seriesId });

  res.json({ ok: true });
});

export default router;
