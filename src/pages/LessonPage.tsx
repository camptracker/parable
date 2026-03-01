import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getSeriesById } from '../data/lessons';

export default function LessonPage() {
  const { seriesId, day } = useParams();
  const s = getSeriesById(seriesId || '');
  const dayNum = Number(day);
  const lesson = s?.lessons.find((l) => l.day === dayNum);
  const [mode, setMode] = useState<'parable' | 'standard' | 'sonnet'>('parable');

  useEffect(() => { window.scrollTo(0, 0); }, [seriesId, day]);

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

  return (
    <div className="container">
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
{/* date removed */}
      </header>

      <div className="toggle-container">
        <button className={`toggle-btn ${mode === 'parable' ? 'active' : ''}`} onClick={() => setMode('parable')}>🏰 Parable</button>
        <button className={`toggle-btn ${mode === 'standard' ? 'active' : ''}`} onClick={() => setMode('standard')}>📖 Standard</button>
        {lesson.sonnet && (
          <button className={`toggle-btn ${mode === 'sonnet' ? 'active' : ''}`} onClick={() => setMode('sonnet')}>🪶 Sonnet</button>
        )}
      </div>

      <article className={`lesson-content ${mode}`} key={mode}>
        <ReactMarkdown>{mode === 'parable' ? lesson.parable : mode === 'sonnet' ? (lesson.sonnet || '') : lesson.standard}</ReactMarkdown>
      </article>

      <nav className="bottom-nav">
        {prev ? <Link to={`/${s.id}/lesson/${prev.day}`} className="nav-link">← Day {prev.day}</Link> : <span />}
        {next ? <Link to={`/${s.id}/lesson/${next.day}`} className="nav-link">Day {next.day} →</Link> : <span />}
      </nav>
    </div>
  );
}
