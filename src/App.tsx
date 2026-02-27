import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LessonPage from './pages/LessonPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:day" element={<LessonPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
