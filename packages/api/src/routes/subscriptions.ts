import { Router, Request, Response } from 'express';
import { Subscription } from '../models/Subscription.js';
import { Series } from '../models/Series.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// GET /api/subscriptions - user's subscriptions with series populated
router.get('/', requireAuth, async (req: Request, res: Response) => {
  const userId = req.authUser!.userId;
  const subs = await Subscription.find({ userId }).populate('seriesId');
  res.json(subs);
});

// POST /api/series/:seriesId/subscribe
router.post('/:seriesId/subscribe', requireAuth, async (req: Request, res: Response) => {
  const { seriesId } = req.params;
  const userId = req.authUser!.userId;

  const series = await Series.findOne({ _id: seriesId, deletedAt: { $exists: false } });
  if (!series) {
    res.status(404).json({ error: 'Series not found' });
    return;
  }

  const existing = await Subscription.findOne({ userId, seriesId });
  if (existing) {
    res.status(409).json({ error: 'Already subscribed' });
    return;
  }

  await Subscription.create({ userId, seriesId });
  await Series.findByIdAndUpdate(seriesId, { $inc: { subscriberCount: 1 } });

  res.status(201).json({ ok: true });
});

// DELETE /api/series/:seriesId/subscribe
router.delete('/:seriesId/subscribe', requireAuth, async (req: Request, res: Response) => {
  const { seriesId } = req.params;
  const userId = req.authUser!.userId;

  const result = await Subscription.findOneAndDelete({ userId, seriesId });
  if (!result) {
    res.status(404).json({ error: 'Subscription not found' });
    return;
  }

  await Series.findByIdAndUpdate(seriesId, { $inc: { subscriberCount: -1 } });
  res.json({ ok: true });
});

export default router;
