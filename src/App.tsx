import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SeriesPage from './pages/SeriesPage';
import LessonPage from './pages/LessonPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
