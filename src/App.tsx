import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import ComingSoonPage from './pages/ComingSoonPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import PublishingPolicyPage from './pages/PublishingPolicyPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publishing-policy" element={<PublishingPolicyPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
