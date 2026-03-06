import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import api, { type APILesson, type APISeries, type APIStandard } from '../lib/api.js';
import { useAuth } from '../hooks/useAuth.js';

type Tab = 'parable' | 'standard' | 'sonnet';

export default function LessonPage() {
  const { seriesKey, sortOrder } = useParams<{ seriesKey: string; sortOrder: string }>();
  const { user } = useAuth();
  const [series, setSeries] = useState<APISeries | null>(null);
  const [lesson, setLesson] = useState<APILesson | null>(null);
  const [standard, setStandard] = useState<APIStandard | null>(null);
  const [tab, setTab] = useState<Tab>('parable');
  const [loading, setLoading] = useState(true);
  const [marked, setMarked] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [seriesKey, sortOrder]);

  useEffect(() => {
    if (!seriesKey || !sortOrder) return;
    setLoading(true);

    api.get<APISeries[]>('/series')
      .then(r => {
        const found = r.data.find(s => s.key === seriesKey);
        if (!found) return;
        setSeries(found);
        return api.get<{ lessons: APILesson[] }>(`/series/${found._id}/lessons?page=1`);
      })
      .then(r => {
        if (!r) return;
        const all = r.data.lessons;
        const found = all.find(l => l.sortOrder === Number(sortOrder));
        if (!found) return;
        return api.get<APILesson>(`/lessons/${found._id}`);
      })
      .then(r => {
        if (!r) return;
        setLesson(r.data);
        if (r.data.standard) setStandard(r.data.standard);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [seriesKey, sortOrder]);

  const handleMarkRead = async () => {
    if (!lesson || !user) return;
    try {
      await api.post(`/lessons/${lesson._id}/read`);
      setMarked(true);
    } catch (err) {
      console.error('Mark read error:', err);
    }
  };

  if (loading) return <div className="container"><div className="loading">Loading lesson...</div></div>;
  if (!lesson || !series) return <div className="container"><p>Lesson not found.</p><Link to="/" className="nav-link">← Home</Link></div>;

  const sortNum = lesson.sortOrder;

  return (
    <div className="container">
      <nav className="breadcrumb">
        <Link to="/" className="nav-link">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <Link to={`/${series.key}`} className="nav-link">{series.title}</Link>
        <span className="breadcrumb-sep">›</span>
        <span>Day {sortNum}</span>
      </nav>

      {lesson.image && (
        <div className="lesson-hero">
          <img src={lesson.image} alt={lesson.title} />
        </div>
      )}

      <header className="lesson-header">
        <span className="lesson-day-badge">Day {sortNum}</span>
        <h1>{lesson.title}</h1>
        {user && (
          <button
            className={`btn-read ${marked ? 'read' : ''}`}
            onClick={handleMarkRead}
            disabled={marked}
          >
            {marked ? '✓ Read' : 'Mark as read'}
          </button>
        )}
      </header>

      <div className="toggle-container">
        {lesson.parable && (
          <button className={`toggle-btn ${tab === 'parable' ? 'active' : ''}`} onClick={() => setTab('parable')}>🏰 Parable</button>
        )}
        {standard && (
          <button className={`toggle-btn ${tab === 'standard' ? 'active' : ''}`} onClick={() => setTab('standard')}>📖 Standard</button>
        )}
        {lesson.sonnet && (
          <button className={`toggle-btn ${tab === 'sonnet' ? 'active' : ''}`} onClick={() => setTab('sonnet')}>📜 Sonnet</button>
        )}
      </div>

      <article className={`lesson-content ${tab}`} key={tab}>
        {tab === 'parable' && lesson.parable && (
          <ReactMarkdown>{lesson.parable}</ReactMarkdown>
        )}
        {tab === 'standard' && standard && (
          <div className="standard-content">
            {standard.review && (
              <div className="standard-section review">
                <h3>Review</h3>
                <p>{standard.review}</p>
              </div>
            )}
            <div className="standard-section">
              <h3>Concept</h3>
              <p>{standard.concept}</p>
            </div>
            <div className="standard-section">
              <h3>Why It Matters</h3>
              <p>{standard.whyItMatters}</p>
            </div>
            <div className="standard-section">
              <h3>How It Works</h3>
              <p>{standard.howItWorks}</p>
            </div>
            {standard.definitions.length > 0 && (
              <div className="standard-section">
                <h3>Definitions</h3>
                <dl className="definitions">
                  {standard.definitions.map(d => (
                    <div key={d.term} className="definition-item">
                      <dt>{d.term}</dt>
                      <dd>{d.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            <div className="standard-section wisdom">
              <h3>{series.wisdomLabel || 'Wisdom'}</h3>
              <blockquote>{standard.wisdom}</blockquote>
            </div>
            <div className="standard-section follow-up">
              <h3>To Consider</h3>
              <p className="follow-up-question">{standard.followUpQuestion}</p>
            </div>
          </div>
        )}
        {tab === 'sonnet' && lesson.sonnet && (
          <div className="sonnet-content">
            <ReactMarkdown>{lesson.sonnet}</ReactMarkdown>
          </div>
        )}
      </article>

      <nav className="bottom-nav">
        {sortNum > 1 ? (
          <Link to={`/${series.key}/lesson/${sortNum - 1}`} className="nav-link">← Day {sortNum - 1}</Link>
        ) : <span />}
        <Link to={`/${series.key}/lesson/${sortNum + 1}`} className="nav-link">Day {sortNum + 1} →</Link>
      </nav>
    </div>
  );
}
