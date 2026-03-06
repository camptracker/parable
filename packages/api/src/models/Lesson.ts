import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ILesson extends Document {
  seriesId: Types.ObjectId;
  sortOrder: number;
  title: string;
  date: Date;
  image?: string;
  standardId?: Types.ObjectId;
  parable?: string;
  sonnet?: string;
  deletedAt?: Date;
  createdAt: Date;
}

const LessonSchema = new Schema<ILesson>({
  seriesId: { type: Schema.Types.ObjectId, ref: 'Series', required: true, index: true },
  sortOrder: { type: Number, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  image: String,
  standardId: { type: Schema.Types.ObjectId, ref: 'Standard' },
  parable: String,
  sonnet: String,
  deletedAt: Date,
  createdAt: { type: Date, default: Date.now },
});

LessonSchema.index({ seriesId: 1, sortOrder: 1 }, { unique: true });
LessonSchema.index({ seriesId: 1, deletedAt: 1 });

export const Lesson = mongoose.model<ILesson>('Lesson', LessonSchema);
