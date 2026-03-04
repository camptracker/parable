import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { getSeriesById } from '../data/lessons';

export default function SeriesPage() {
  const { seriesId } = useParams();
  const s = getSeriesById(seriesId || '');
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const total = s?.lessons.length || 0;

  // Scroll to latest lesson on mount
  useEffect(() => {
    if (s && scrollRef.current) {
      const lastIdx = s.lessons.length - 1;
      const el = scrollRef.current;
      requestAnimationFrame(() => {
        el.scrollTo({ left: lastIdx * el.offsetWidth, behavior: 'instant' as ScrollBehavior });
        setCurrent(lastIdx);
      });
    }
  }, [seriesId, s?.lessons.length]);

  // Track scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setCurrent(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  if (!s) return <Navigate to="/" replace />;

  const lessons = s.lessons;
  const lesson = lessons[current];

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < total && scrollRef.current) {
      scrollRef.current.scrollTo({ left: idx * scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="series-page">
      {/* Top bar */}
      <div className="series-topbar">
        <Link to="/" className="series-back">← Home</Link>
        <span className="series-counter">{current + 1} / {total}</span>
        <span className="series-name">{s.name}</span>
      </div>

      {/* Carousel */}
      <div className="carousel" ref={scrollRef}>
        {lessons.map((l) => (
          <div className="carousel-slide" key={l.day} onClick={() => navigate(`/${s.id}/lesson/${l.day}`)}>
            {l.image && (
              <img src={`${import.meta.env.BASE_URL}${l.image}`} alt={l.title} className="carousel-img" />
            )}
            <div className="carousel-overlay">
              <span className="carousel-day">Day {l.day}</span>
              <span className="carousel-title">{l.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom controls */}
      <div className="series-bottom">
        <button className="series-btn" disabled={current <= 0} onClick={() => goTo(current - 1)}>← Previous</button>
        <button className="series-btn primary" onClick={() => navigate(`/${s.id}/lesson/${lesson?.day}`)}>Read</button>
        <button className="series-btn" disabled={current >= total - 1} onClick={() => goTo(current + 1)}>Next →</button>
      </div>
    </div>
  );
}
