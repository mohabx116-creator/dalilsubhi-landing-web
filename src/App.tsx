import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import ComingSoonPage from './pages/ComingSoonPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

