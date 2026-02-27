import { Link } from 'react-router-dom';
import { lessons } from '../data/lessons';

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Home() {
  return (
    <div className="container">
      <header className="home-header">
        <h1>📜 Parable</h1>
        <p className="subtitle">Daily Lessons on Financial Independence</p>
      </header>
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <Link to={`/lesson/${lesson.day}`} key={lesson.day} className="lesson-card">
            <span className="lesson-day">Day {lesson.day}</span>
            <span className="lesson-title">{lesson.title}</span>
            <span className="lesson-date">{formatDate(lesson.date)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
