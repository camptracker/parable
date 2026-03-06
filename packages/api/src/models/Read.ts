import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IRead extends Document {
  lessonId: Types.ObjectId;
  userId: Types.ObjectId;
  readAt: Date;
}

const ReadSchema = new Schema<IRead>({
  lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  readAt: { type: Date, default: Date.now },
});

ReadSchema.index({ userId: 1, lessonId: 1 }, { unique: true });

export const Read = mongoose.model<IRead>('Read', ReadSchema);
