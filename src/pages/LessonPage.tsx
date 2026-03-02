import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { getSeriesById } from '../data/lessons';
import KaraokeText from '../components/KaraokeText';

export default function LessonPage() {
  const { seriesId, day } = useParams();
  const s = getSeriesById(seriesId || '');
  const dayNum = Number(day);
  const lesson = s?.lessons.find((l) => l.day === dayNum);
  const [mode, setMode] = useState<'parable' | 'standard'>('parable');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [seriesId, day]);

  // Stop audio when switching tabs
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [mode]);

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
  const audioBase = lesson.audio ? `${import.meta.env.BASE_URL}${lesson.audio}` : null;
  const audioSrc = audioBase ? `${audioBase}-${mode}.mp3` : null;
  const timestampsUrl = audioBase ? `${audioBase}-${mode}.json` : null;
  const contentText = mode === 'parable' ? lesson.parable : lesson.standard;

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
      </header>

      <div className="toggle-container">
        <button className={`toggle-btn ${mode === 'parable' ? 'active' : ''}`} onClick={() => setMode('parable')}>🏰 Parable</button>
        <button className={`toggle-btn ${mode === 'standard' ? 'active' : ''}`} onClick={() => setMode('standard')}>📖 Standard</button>
        {audioSrc && (
          <>
            <button className={`audio-btn${isPlaying ? ' playing' : ''}`} onClick={() => {
              const audio = audioRef.current;
              if (!audio) return;
              if (audio.paused) {
                audio.play();
                setIsPlaying(true);
              } else {
                audio.pause();
                setIsPlaying(false);
              }
            }}>
              {isPlaying ? '⏸️ Pause' : '🎧 Listen'}
            </button>
            <audio
              ref={audioRef}
              key={audioSrc}
              src={audioSrc}
              onEnded={() => setIsPlaying(false)}
            />
          </>
        )}
      </div>

      <article className={`lesson-content ${mode}`} key={mode}>
        {timestampsUrl ? (
          <KaraokeText
            text={contentText}
            audioRef={audioRef}
            isPlaying={isPlaying}
            timestampsUrl={timestampsUrl}
          />
        ) : (
          <ReactMarkdown>{contentText}</ReactMarkdown>
        )}
      </article>

      <nav className="bottom-nav">
        {prev ? <Link to={`/${s.id}/lesson/${prev.day}`} className="nav-link">← Day {prev.day}</Link> : <span />}
        {next ? <Link to={`/${s.id}/lesson/${next.day}`} className="nav-link">Day {next.day} →</Link> : <span />}
      </nav>
    </div>
  );
}
