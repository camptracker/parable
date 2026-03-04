import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { getSeriesById } from '../data/lessons';

export default function SeriesPage() {
  const { seriesId } = useParams();
  const s = getSeriesById(seriesId || '');
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [swipeX, setSwipeX] = useState(0);
  const swiping = useRef(false);

  // Reset to last card when series changes
  useEffect(() => {
    if (s) setCurrent(s.lessons.length - 1);
  }, [seriesId, s?.lessons.length]);

  if (!s) return <Navigate to="/" replace />;

  const lessons = s.lessons;
  const total = lessons.length;
  const lesson = lessons[current];

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < total) setCurrent(idx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    swiping.current = false;
    setSwipeX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.touches[0].clientX - touchStart.current.x;
    const dy = e.touches[0].clientY - touchStart.current.y;
    // Only swipe if horizontal movement dominates
    if (!swiping.current && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      swiping.current = true;
    }
    if (swiping.current) {
      e.preventDefault();
      setSwipeX(dx);
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(swipeX) > 60) {
      if (swipeX > 0) goTo(current - 1); // swipe right = previous
      else goTo(current + 1); // swipe left = next
    }
    setSwipeX(0);
    touchStart.current = null;
    swiping.current = false;
  };

  const handleClick = () => {
    if (!swiping.current && lesson) {
      navigate(`/${s.id}/lesson/${lesson.day}`);
    }
  };

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
      </header>

      {/* Counter */}
      <div className="deck-counter">{current + 1} / {total}</div>

      {/* Deck */}
      <div className="deck-wrapper">
        <div
          className="deck-card"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
          style={{ transform: swipeX ? `translateX(${swipeX}px) rotate(${swipeX * 0.03}deg)` : undefined, transition: swipeX ? 'none' : 'transform 0.3s ease' }}
        >
          {lesson?.image && (
            <img src={`${import.meta.env.BASE_URL}${lesson.image}`} alt={lesson.title} className="deck-card-img" />
          )}
          <div className="deck-card-text">
            <span className="deck-day">Day {lesson?.day}</span>
            <span className="deck-title">{lesson?.title}</span>
          </div>
        </div>

        {/* Desktop arrows */}
        {current > 0 && (
          <button className="deck-arrow deck-arrow-left" onClick={(e) => { e.stopPropagation(); goTo(current - 1); }}>‹</button>
        )}
        {current < total - 1 && (
          <button className="deck-arrow deck-arrow-right" onClick={(e) => { e.stopPropagation(); goTo(current + 1); }}>›</button>
        )}
      </div>

      {/* Dots */}
      <div className="deck-dots">
        {lessons.map((_, i) => (
          <button key={i} className={`deck-dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>

      {/* Caption */}
      <p className="deck-caption">
        {current < total - 1 ? '← Swipe to browse lessons →' : 'Tap to read →'}
      </p>
    </div>
  );
}
