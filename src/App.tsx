import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ComingSoonPage from './pages/ComingSoonPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const showComingSoon = import.meta.env.VITE_SHOW_COMING_SOON === 'true';

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {showComingSoon ? (
          <Route path="/" element={<ComingSoonPage />} />
        ) : (
          <Route path="/" element={<Layout><HomePage /></Layout>} />
        )}
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/landing-preview" element={<Layout><HomePage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicyPage /></Layout>} />
        <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
