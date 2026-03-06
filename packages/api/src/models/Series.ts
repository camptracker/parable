import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ICharacter {
  name: string;
  pronoun: string;
  age?: string;
  personality?: string;
  role?: string;
}

export interface ISeries extends Document {
  title: string;
  key: string;
  description: string;
  anchor: string;
  emoji?: string;
  wisdomLabel?: string;
  characters: ICharacter[];
  subscriberCount: number;
  deletedAt?: Date;
  createdBy?: Types.ObjectId;
  createdAt: Date;
}

const CharacterSchema = new Schema<ICharacter>({
  name: { type: String, required: true },
  pronoun: { type: String, required: true },
  age: String,
  personality: String,
  role: String,
}, { _id: false });

const SeriesSchema = new Schema<ISeries>({
  title: { type: String, required: true },
  key: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  anchor: { type: String, required: true },
  emoji: String,
  wisdomLabel: String,
  characters: [CharacterSchema],
  subscriberCount: { type: Number, default: 0 },
  deletedAt: Date,
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

export const Series = mongoose.model<ISeries>('Series', SeriesSchema);
