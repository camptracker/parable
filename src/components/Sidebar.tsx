import { Link, useLocation } from 'react-router-dom';
import { series } from '../data/lessons';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  mode: 'dark' | 'light' | 'auto';
  resolvedTheme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Sidebar({ open, onClose, mode, resolvedTheme, onToggleTheme }: SidebarProps) {
  const location = useLocation();
  const currentSeriesId = location.pathname.split('/')[1] || '';

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-brand" onClick={onClose}>📜 Parable</Link>
        </div>
        <nav className="sidebar-nav">
          {series.map(s => (
            <Link
              key={s.id}
              to={`/${s.id}`}
              className={`sidebar-item ${currentSeriesId === s.id ? 'active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar-item-name">{s.name}</span>
              <span className="sidebar-item-count">{s.lessons.length}</span>
            </Link>
          ))}
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme} title={`Theme: ${mode}`}>
          {mode === 'auto' ? '🖥️' : resolvedTheme === 'dark' ? '☀️' : '🌙'}
        </button>
      </aside>
    </>
  );
}
