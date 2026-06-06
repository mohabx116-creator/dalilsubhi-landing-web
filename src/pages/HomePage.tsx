import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import RentalsSection from '../components/RentalsSection';
import ResidentServicesSection from '../components/ResidentServicesSection';
import FacilitiesSection from '../components/FacilitiesSection';
import WhyDalilSubhiSection from '../components/WhyDalilSubhiSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <RentalsSection />
      <ResidentServicesSection />
      <FacilitiesSection />
      <WhyDalilSubhiSection />
      <ContactSection />
    </main>
  );
}
