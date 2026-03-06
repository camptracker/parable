import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IProgress extends Document {
  seriesId: Types.ObjectId;
  userId: Types.ObjectId;
  lessonId: Types.ObjectId;
}

const ProgressSchema = new Schema<IProgress>({
  seriesId: { type: Schema.Types.ObjectId, ref: 'Series', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
});

ProgressSchema.index({ userId: 1, seriesId: 1 }, { unique: true });

export const Progress = mongoose.model<IProgress>('Progress', ProgressSchema);
