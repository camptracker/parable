import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getSeriesById, series, getLatestDay } from '../data/lessons';
import { setBookmark, isBookmarked, removeBookmark } from '../utils/bookmarks';

export default function LessonPage() {
  const { seriesId, day } = useParams();
  const s = getSeriesById(seriesId || '');
  const dayNum = Number(day);
  const lesson = s?.lessons.find((l) => l.day === dayNum);
  const [mode, setMode] = useState<'parable' | 'standard'>('parable');
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    if (s) {
      setBookmarked(isBookmarked(s.id, dayNum));
    }
  }, [seriesId, day, s, dayNum]);

  const toggleBookmark = () => {
    if (!s) return;
    if (bookmarked) {
      removeBookmark(s.id);
      setBookmarked(false);
    } else {
      setBookmark(s.id, dayNum);
      setBookmarked(true);
    }
  };

  if (!s) return <Navigate to="/" replace />;
  if (!lesson) {
    return (
      <div className="container">
        <p>Lesson not found.</p>
        <Link to={`/${s.id}`} className="nav-link">← Back to {s.name}</Link>
      </div>
    );
  }

  const prev = s.lessons.find((l) => l.day === dayNum - 1);
  const next = s.lessons.find((l) => l.day === dayNum + 1);
  const contentText = mode === 'parable' ? lesson.parable : lesson.standard;

  return (
    <div className="container">
      <button 
        onClick={toggleBookmark}
        className={`bookmark-fixed ${bookmarked ? 'active' : ''}`}
        title={bookmarked ? "Remove bookmark" : "Bookmark this lesson"}
        aria-label={bookmarked ? "Remove bookmark" : "Bookmark this lesson"}
      >
        {bookmarked ? '🔖' : '📑'}
      </button>

      <nav className="breadcrumb">
        <Link to="/" className="nav-link">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <Link to={`/${s.id}`} className="nav-link">{s.name}</Link>
        <span className="breadcrumb-sep">›</span>
        <span>Day {lesson.day}</span>
      </nav>

      {lesson.image && (
        <div className="lesson-hero">
          <img src={`${import.meta.env.BASE_URL}${lesson.image}`} alt={lesson.title} />
        </div>
      )}

      <header className="lesson-header">
        <span className="lesson-day-badge">Day {lesson.day}</span>
        <h1>{lesson.title}</h1>
      </header>

      <div className="toggle-container">
        <button className={`toggle-btn ${mode === 'parable' ? 'active' : ''}`} onClick={() => setMode('parable')}>🏰 Parable</button>
        <button className={`toggle-btn ${mode === 'standard' ? 'active' : ''}`} onClick={() => setMode('standard')}>📖 Standard</button>
      </div>

      <article className={`lesson-content ${mode}`} key={mode}>
        <ReactMarkdown>{contentText}</ReactMarkdown>
      </article>

      <nav className="bottom-nav">
        {prev ? <Link to={`/${s.id}/lesson/${prev.day}`} className="nav-link">← Day {prev.day}</Link> : <span />}
        {next ? <Link to={`/${s.id}/lesson/${next.day}`} className="nav-link">Day {next.day} →</Link> : <span />}
      </nav>

      {(() => {
        const idx = series.findIndex(x => x.id === s.id);
        const prevSeries = idx > 0 ? series[idx - 1] : null;
        const nextSeries = idx < series.length - 1 ? series[idx + 1] : null;
        const prevLatest = prevSeries ? getLatestDay(prevSeries.id) : 0;
        const nextLatest = nextSeries ? getLatestDay(nextSeries.id) : 0;
        return (
          <nav className="series-nav">
            {prevSeries && prevLatest > 0 ? (
              <Link to={`/${prevSeries.id}/lesson/${prevLatest}`} className="series-nav-link prev">
                <span className="series-nav-label">Previous Series</span>
                <span className="series-nav-name">{prevSeries.name}</span>
              </Link>
            ) : <span />}
            {nextSeries && nextLatest > 0 ? (
              <Link to={`/${nextSeries.id}/lesson/${nextLatest}`} className="series-nav-link next">
                <span className="series-nav-label">Next Series</span>
                <span className="series-nav-name">{nextSeries.name}</span>
              </Link>
            ) : <span />}
          </nav>
        );
      })()}
    </div>
  );
}
