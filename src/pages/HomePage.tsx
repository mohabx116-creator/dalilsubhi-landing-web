import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import RentalsSection from '../components/RentalsSection';
import CommunityLinksSection from '../components/CommunityLinksSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" dir="rtl">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <RentalsSection />
        <CommunityLinksSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
