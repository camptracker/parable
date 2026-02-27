import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { lessons } from '../data/lessons';

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

export default function LessonPage() {
  const { day } = useParams();
  const dayNum = Number(day);
  const lesson = lessons.find((l) => l.day === dayNum);
  const [mode, setMode] = useState<'parable' | 'standard' | 'sonnet'>('parable');

  if (!lesson) {
    return (
      <div className="container">
        <p>Lesson not found.</p>
        <Link to="/" className="nav-link">← Home</Link>
      </div>
    );
  }

  const prev = lessons.find((l) => l.day === dayNum - 1);
  const next = lessons.find((l) => l.day === dayNum + 1);

  return (
    <div className="container">
      <nav className="top-nav">
        <Link to="/" className="nav-link">← Home</Link>
      </nav>

      {lesson.image && (
        <div className="lesson-hero">
          <img src={`${import.meta.env.BASE_URL}${lesson.image}`} alt={lesson.title} />
        </div>
      )}

      <header className="lesson-header">
        <span className="lesson-day-badge">Day {lesson.day}</span>
        <h1>{lesson.title}</h1>
        <p className="lesson-date">{formatDate(lesson.date)}</p>
      </header>

      <div className="toggle-container">
        <button
          className={`toggle-btn ${mode === 'parable' ? 'active' : ''}`}
          onClick={() => setMode('parable')}
        >
          🏰 Parable
        </button>
        <button
          className={`toggle-btn ${mode === 'standard' ? 'active' : ''}`}
          onClick={() => setMode('standard')}
        >
          📖 Standard
        </button>
        {lesson.sonnet && (
          <button
            className={`toggle-btn ${mode === 'sonnet' ? 'active' : ''}`}
            onClick={() => setMode('sonnet')}
          >
            🪶 Sonnet
          </button>
        )}
      </div>

      <article className={`lesson-content ${mode}`} key={mode}>
        <ReactMarkdown>{mode === 'parable' ? lesson.parable : mode === 'sonnet' ? (lesson.sonnet || '') : lesson.standard}</ReactMarkdown>
      </article>

      <nav className="bottom-nav">
        {prev ? <Link to={`/lesson/${prev.day}`} className="nav-link">← Day {prev.day}</Link> : <span />}
        {next ? <Link to={`/lesson/${next.day}`} className="nav-link">Day {next.day} →</Link> : <span />}
      </nav>
    </div>
  );
}
