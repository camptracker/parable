import { Link, useParams, Navigate } from 'react-router-dom';
import { getSeriesById } from '../data/lessons';

export default function SeriesPage() {
  const { seriesId } = useParams();
  const s = getSeriesById(seriesId || '');

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
      </header>
      <div className="lesson-list">
        {s.lessons.map((lesson) => (
          <Link to={`/${s.id}/lesson/${lesson.day}`} key={lesson.day} className="lesson-card">
            {lesson.image && (
              <img src={`${import.meta.env.BASE_URL}${lesson.image}`} alt={lesson.title} className="lesson-card-img" />
            )}
            <div className="lesson-card-text">
              <span className="lesson-day">Day {lesson.day}</span>
              <span className="lesson-title">{lesson.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
