import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FacilitiesSection from '../components/FacilitiesSection';
import SiteRatingPrompt from '../components/SiteRatingPrompt';
import Footer from '../components/Footer';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';


export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 font-sans" dir="rtl">
      {/* Fixed Background Watermark */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-center bg-no-repeat opacity-[0.20] mix-blend-multiply"
        style={{
          backgroundImage: `url(${dalilSubhiLogo})`,
          backgroundSize: '800px',
        }}
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FacilitiesSection />
        </main>
        <Footer />
        <SiteRatingPrompt />
      </div>
    </div>
  );
}
