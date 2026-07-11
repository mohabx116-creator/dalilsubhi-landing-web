import { ArrowLeft, Megaphone } from 'lucide-react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MainGatewaySection from '../components/MainGatewaySection';
import ServicesSection from '../components/ServicesSection';
import FacilitiesSection from '../components/FacilitiesSection';
import CommunityLinksSection from '../components/CommunityLinksSection';
import AboutSection from '../components/AboutSection';
import AnimatedPlatformSection from '../components/AnimatedPlatformSection';
import Footer from '../components/Footer';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import { OWNERS_URL } from '../lib/config/links';

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
          <section className="px-4 pb-6 md:hidden">
            <div className="mx-auto max-w-7xl">
              <a
                href={OWNERS_URL}
                className="flex items-start gap-4 rounded-[28px] border border-[#d6b25e]/25 bg-white/90 px-5 py-5 text-right shadow-[0_18px_50px_rgba(7,22,20,0.08)] backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(7,22,20,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0fa37f] to-[#0c8a6b] text-white shadow-lg shadow-[#0fa37f]/20">
                  <Megaphone className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-black leading-7 text-[#071614]">أعلن عن وحدتك للإيجار</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">أضف بيانات وحدتك وسنتواصل معك</p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#071614] px-4 py-2 text-sm font-bold text-white">
                    إعلان الوحدة
                    <ArrowLeft className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </div>
          </section>
          <MainGatewaySection />
          <AnimatedPlatformSection />
          <ServicesSection />
          <FacilitiesSection />
          <CommunityLinksSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
