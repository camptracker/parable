import { Router, Request, Response } from 'express';
import { Lesson } from '../models/Lesson.js';
import { Standard } from '../models/Standard.js';
import { Progress } from '../models/Progress.js';
import { Read } from '../models/Read.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

const router = Router();

// GET /api/series/:seriesId/lessons - paginate 20, compute dayNumber
router.get('/series/:seriesId/lessons', async (req: Request, res: Response) => {
  const { seriesId } = req.params;
  const page = parseInt(req.query.page as string) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  const [lessons, total] = await Promise.all([
    Lesson.find({ seriesId, deletedAt: { $exists: false } })
      .sort({ sortOrder: 1 })
      .skip(skip)
      .limit(limit),
    Lesson.countDocuments({ seriesId, deletedAt: { $exists: false } }),
  ]);

  const lessonsWithDay = lessons.map(l => ({
    ...l.toObject(),
    dayNumber: l.sortOrder,
  }));

  res.json({ lessons: lessonsWithDay, total, page, pages: Math.ceil(total / limit) });
});

// GET /api/lessons/:lessonId - with standard populated
router.get('/:lessonId', async (req: Request, res: Response) => {
  const { lessonId } = req.params;
  const lesson = await Lesson.findOne({ _id: lessonId, deletedAt: { $exists: false } });

  if (!lesson) {
    res.status(404).json({ error: 'Lesson not found' });
    return;
  }

  const standard = lesson.standardId
    ? await Standard.findById(lesson.standardId)
    : null;

  res.json({ ...lesson.toObject(), standard });
});

// DELETE /api/lessons/:lessonId - soft delete (admin)
router.delete('/:lessonId', requireAdmin, async (req: Request, res: Response) => {
  const { lessonId } = req.params;
  const lesson = await Lesson.findById(lessonId);
  if (!lesson) {
    res.status(404).json({ error: 'Lesson not found' });
    return;
  }
  lesson.deletedAt = new Date();
  await lesson.save();
  res.json({ ok: true });
});

// GET /api/series/:seriesId/progress - lessons up to progress + read status (auth)
router.get('/series/:seriesId/progress', requireAuth, async (req: Request, res: Response) => {
  const { seriesId } = req.params;
  const userId = req.authUser!.userId;

  const progress = await Progress.findOne({ userId, seriesId });
  const progressLessonId = progress?.lessonId;

  let query: Record<string, unknown> = { seriesId, deletedAt: { $exists: false } };

  if (progressLessonId) {
    const progressLesson = await Lesson.findById(progressLessonId);
    if (progressLesson) {
      query = { seriesId, deletedAt: { $exists: false }, sortOrder: { $lte: progressLesson.sortOrder } };
    }
  } else {
    // No progress yet - just show first lesson
    const firstLesson = await Lesson.findOne({ seriesId, deletedAt: { $exists: false } }).sort({ sortOrder: 1 });
    if (!firstLesson) {
      res.json({ lessons: [], progress: null });
      return;
    }
    query = { seriesId, deletedAt: { $exists: false }, sortOrder: { $lte: firstLesson.sortOrder } };
  }

  const lessons = await Lesson.find(query).sort({ sortOrder: 1 });
  const lessonIds = lessons.map(l => String(l._id));

  const reads = await Read.find({ userId, lessonId: { $in: lessonIds } });
  const readSet = new Set(reads.map(r => String(r.lessonId)));

  const result = lessons.map(l => ({
    ...l.toObject(),
    dayNumber: l.sortOrder,
    read: readSet.has(String(l._id)),
  }));

  res.json({ lessons: result, progress: progressLessonId || null });
});

// POST /api/lessons/:lessonId/read - mark as read, upsert (auth)
router.post('/:lessonId/read', requireAuth, async (req: Request, res: Response) => {
  const { lessonId } = req.params;
  const userId = req.authUser!.userId;

  const lesson = await Lesson.findOne({ _id: lessonId, deletedAt: { $exists: false } });
  if (!lesson) {
    res.status(404).json({ error: 'Lesson not found' });
    return;
  }

  await Read.findOneAndUpdate(
    { userId, lessonId },
    { readAt: new Date() },
    { upsert: true, new: true }
  );

  res.json({ ok: true });
});

export default router;
