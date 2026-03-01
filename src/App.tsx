import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SeriesPage from './pages/SeriesPage';
import LessonPage from './pages/LessonPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const apply = () => document.documentElement.setAttribute('data-theme', mq.matches ? 'light' : 'dark');
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <HashRouter>
      <div className="app-layout">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
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
