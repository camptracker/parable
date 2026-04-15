import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getSeriesById } from '../data/lessons';
import { getBookmark } from '../utils/bookmarks';

export default function SeriesPage() {
  const { seriesId } = useParams();
  const s = getSeriesById(seriesId || '');
  const [bookmarkedDay, setBookmarkedDay] = useState<number | null>(null);
  const bookmarkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (s) {
      const bookmark = getBookmark(s.id);
      setBookmarkedDay(bookmark);
    }
  }, [s]);

  const scrollToBookmark = () => {
    if (bookmarkRef.current) {
      bookmarkRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!s) return <Navigate to="/" replace />;

  return (
    <div className="container">
      <nav className="breadcrumb">
        <Link to="/" className="nav-link">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <span>{s.name}</span>
      </nav>
      <header className="home-header">
        <h1>{s.name}</h1>
        <p className="subtitle">{s.theme}</p>
        {bookmarkedDay && (
          <button onClick={scrollToBookmark} className="scroll-to-bookmark-btn">
            🔖 Jump to Bookmark (Day {bookmarkedDay})
          </button>
        )}
      </header>
      <div className="lesson-list">
        {s.lessons.map((lesson) => {
          const isBookmarked = lesson.day === bookmarkedDay;
          return (
            <Link 
              to={`/${s.id}/lesson/${lesson.day}`} 
              key={lesson.day} 
              className={`lesson-card ${isBookmarked ? 'bookmarked' : ''}`}
              ref={isBookmarked ? bookmarkRef : null}
            >
              {lesson.image && (
                <img src={`${import.meta.env.BASE_URL}${lesson.image}`} alt={lesson.title} className="lesson-card-img" />
              )}
              <div className="lesson-card-text">
                <span className="lesson-day">
                  Day {lesson.day}
                  {isBookmarked && <span className="bookmark-indicator"> 🔖</span>}
                </span>
                <span className="lesson-title">{lesson.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
