import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SeriesPage from './pages/SeriesPage';
import LessonPage from './pages/LessonPage';

function getInitialTheme(): 'dark' | 'light' {
  const saved = localStorage.getItem('parable-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('parable-theme', theme);
  }, [theme]);

  return (
    <HashRouter>
      <div className="app-layout">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
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
