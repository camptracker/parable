export interface Lesson {
  day: number;
  title: string;
  date: string;
  standard: string;
  parable: string;
  sonnet?: string;
  image?: string;
}

export interface Series {
  id: string;
  name: string;
  theme: string;
  lessons: Lesson[];
}

import { lessons as fiLessons } from './series/financial-independence';
import { lessons as nutritionLessons } from './series/nutrition-science';
import { lessons as negotiationLessons } from './series/negotiation';
import { lessons as stoicLessons } from './series/stoic-philosophy';
import { lessons as musicLessons } from './series/music-theory';
import { lessons as realEstateLessons } from './series/real-estate';
import { lessons as storytellingLessons } from './series/storytelling';
import { lessons as relationshipLessons } from './series/building-relationships';

export const series: Series[] = [
  { id: "financial-independence", name: "Financial Independence", theme: "Warren Buffett's teachings and mathematical principles", lessons: fiLessons },
  { id: "nutrition-science", name: "Nutrition Science", theme: "the science of how food fuels your body, from macronutrients to metabolism", lessons: nutritionLessons },
  { id: "negotiation", name: "Negotiation", theme: "FBI hostage negotiation tactics, persuasion psychology, and everyday deal-making", lessons: negotiationLessons },
  { id: "stoic-philosophy", name: "Stoic Philosophy", theme: "ancient Stoic teachings — mental resilience, emotional control, and living with purpose", lessons: stoicLessons },
  { id: "music-theory", name: "Music Theory", theme: "the building blocks of music — notes, scales, chords, rhythm, harmony, and why certain sounds make you feel things", lessons: musicLessons },
  { id: "real-estate", name: "Real Estate Investing", theme: "building wealth through property — from your first rental to cash flow analysis and passive income", lessons: realEstateLessons },
  { id: "storytelling", name: "Storytelling", theme: "the craft of storytelling — narrative structure, character arcs, tension, pacing, dialogue, and what makes stories unforgettable", lessons: storytellingLessons },
  { id: "building-relationships", name: "Building Relationships", theme: "the science and art of building lasting romantic relationships — communication, love languages, conflict resolution, emotional intelligence, trust, and growing together", lessons: relationshipLessons },
];

// Find a series by id
export function getSeriesById(id: string): Series | undefined {
  return series.find(s => s.id === id);
}

// Get the latest day number for a series
export function getLatestDay(seriesId: string): number {
  const s = getSeriesById(seriesId);
  if (!s || s.lessons.length === 0) return 0;
  return Math.max(...s.lessons.map(l => l.day));
}

// Get a specific lesson by series id and day
export function getLesson(seriesId: string, day: number): Lesson | undefined {
  const s = getSeriesById(seriesId);
  return s?.lessons.find(l => l.day === day);
}
