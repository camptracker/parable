import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ISubscription extends Document {
  seriesId: Types.ObjectId;
  userId: Types.ObjectId;
  createdAt: Date;
}

const SubscriptionSchema = new Schema<ISubscription>({
  seriesId: { type: Schema.Types.ObjectId, ref: 'Series', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

SubscriptionSchema.index({ userId: 1, seriesId: 1 }, { unique: true });
SubscriptionSchema.index({ seriesId: 1 });

export const Subscription = mongoose.model<ISubscription>('Subscription', SubscriptionSchema);
