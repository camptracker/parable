import { Link } from 'react-router-dom';
import { series } from '../data/lessons';

export default function Home() {
  return (
    <div className="container">
      <header className="home-header">
        <h1>📜 Parable</h1>
        <p className="subtitle">Daily Lessons Through Stories</p>
      </header>
      <div className="series-grid">
        {series.map(s => {
          const latest = s.lessons[s.lessons.length - 1];
          return (
            <Link to={`/${s.id}`} key={s.id} className="series-card">
              <h2 className="series-card-name">{s.name}</h2>
              <p className="series-card-theme">{s.theme}</p>
              <div className="series-card-meta">
                <span>{s.lessons.length} lesson{s.lessons.length !== 1 ? 's' : ''}</span>
                {latest && <span className="series-card-latest">Latest: {latest.title}</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
