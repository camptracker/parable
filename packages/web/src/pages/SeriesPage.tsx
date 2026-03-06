import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api, { type APISeries, type APILesson } from '../lib/api.js';
import { useAuth } from '../hooks/useAuth.js';

export default function SeriesPage() {
  const { seriesKey } = useParams<{ seriesKey: string }>();
  const { user } = useAuth();
  const [series, setSeries] = useState<APISeries | null>(null);
  const [lessons, setLessons] = useState<APILesson[]>([]);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subLoading, setSubLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!seriesKey) return;
    setLoading(true);

    api.get<APISeries[]>('/series')
      .then(r => {
        const found = r.data.find(s => s.key === seriesKey);
        if (!found) { setNotFound(true); return; }
        setSeries(found);
        return Promise.all([
          api.get<{ lessons: APILesson[] }>(`/series/${found._id}/lessons`),
          user ? api.get<{ _id: string; seriesId: APISeries }[]>('/subscriptions') : Promise.resolve(null),
        ]);
      })
      .then(results => {
        if (!results) return;
        const [lessonsRes, subsRes] = results;
        if (lessonsRes) setLessons(lessonsRes.data.lessons);
        if (subsRes && series) {
          const sub = subsRes.data.find((s: { seriesId: APISeries }) => s.seriesId._id === series._id);
          setSubscribed(!!sub);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seriesKey, user]);

  const handleSubscribe = async () => {
    if (!series || !user) return;
    setSubLoading(true);
    try {
      if (subscribed) {
        await api.delete(`/series/${series._id}/subscribe`);
        setSubscribed(false);
        setSeries(prev => prev ? { ...prev, subscriberCount: prev.subscriberCount - 1 } : prev);
      } else {
        await api.post(`/series/${series._id}/subscribe`);
        setSubscribed(true);
        setSeries(prev => prev ? { ...prev, subscriberCount: prev.subscriberCount + 1 } : prev);
      }
    } catch (err) {
      console.error('Subscribe error:', err);
    } finally {
      setSubLoading(false);
    }
  };

  if (notFound) return <Navigate to="/" replace />;
  if (loading) return <div className="container"><div className="loading">Loading...</div></div>;
  if (!series) return null;

  return (
    <div className="container">
      <nav className="breadcrumb">
        <Link to="/" className="nav-link">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <span>{series.title}</span>
      </nav>

      <header className="home-header">
        <div className="series-title-row">
          {series.emoji && <span className="series-hero-emoji">{series.emoji}</span>}
          <h1>{series.title}</h1>
        </div>
        <p className="subtitle">{series.description}</p>
        <div className="series-meta-row">
          <span className="series-subscriber-count">{series.subscriberCount} subscriber{series.subscriberCount !== 1 ? 's' : ''}</span>
          {user && (
            <button
              className={`btn-subscribe ${subscribed ? 'subscribed' : ''}`}
              onClick={handleSubscribe}
              disabled={subLoading}
            >
              {subscribed ? 'Unsubscribe' : 'Subscribe'}
            </button>
          )}
        </div>
      </header>

      <div className="lesson-list">
        {lessons.map(lesson => (
          <Link to={`/${series.key}/lesson/${lesson.sortOrder}`} key={lesson._id} className="lesson-card">
            {lesson.image && (
              <img src={lesson.image} alt={lesson.title} className="lesson-card-img" />
            )}
            <div className="lesson-card-text">
              <span className="lesson-day">Day {lesson.sortOrder}</span>
              <span className="lesson-title">{lesson.title}</span>
            </div>
          </Link>
        ))}
        {lessons.length === 0 && (
          <p className="empty-state">Lessons are being generated...</p>
        )}
      </div>
    </div>
  );
}
