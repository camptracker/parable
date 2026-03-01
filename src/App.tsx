import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SeriesPage from './pages/SeriesPage';
import LessonPage from './pages/LessonPage';

type ThemeMode = 'dark' | 'light' | 'auto';

function getSystemTheme(): 'dark' | 'light' {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function getInitialMode(): ThemeMode {
  const saved = localStorage.getItem('parable-theme');
  if (saved === 'light' || saved === 'dark' || saved === 'auto') return saved;
  return 'auto';
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>(getSystemTheme);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const handler = () => setSystemTheme(mq.matches ? 'light' : 'dark');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const resolved = mode === 'auto' ? systemTheme : mode;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolved);
    localStorage.setItem('parable-theme', mode);
  }, [mode, resolved]);

  return (
    <HashRouter>
      <div className="app-layout">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} mode={mode} resolvedTheme={resolved} onToggleTheme={() => setMode(m => m === 'auto' ? 'light' : m === 'light' ? 'dark' : 'auto')} />
        <div className="main-content">
          <button className="hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            ☰
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:seriesId" element={<SeriesPage />} />
            <Route path="/:seriesId/lesson/:day" element={<LessonPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
