// Bookmark utilities using localStorage
// One bookmark per series

interface Bookmarks {
  [seriesId: string]: number; // seriesId -> day number
}

const STORAGE_KEY = 'parable-bookmarks';

export function getBookmarks(): Bookmarks {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function setBookmark(seriesId: string, day: number): void {
  const bookmarks = getBookmarks();
  bookmarks[seriesId] = day;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

export function getBookmark(seriesId: string): number | null {
  const bookmarks = getBookmarks();
  return bookmarks[seriesId] ?? null;
}

export function removeBookmark(seriesId: string): void {
  const bookmarks = getBookmarks();
  delete bookmarks[seriesId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

export function isBookmarked(seriesId: string, day: number): boolean {
  const bookmarks = getBookmarks();
  return bookmarks[seriesId] === day;
}
