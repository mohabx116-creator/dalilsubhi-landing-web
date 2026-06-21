
import heroBg from '../assets/sebahi-gardens-hero.png';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#071614] text-white pt-24 pb-12">
      <div className="absolute inset-0 z-0 bg-[#05110e]">
        <img alt="دليل السبحي خلفية" className="h-full w-full object-cover object-center opacity-[0.25] mix-blend-luminosity" src={heroBg} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071614]/85 via-[#071614]/65 to-[#071614]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        {/* Semantic H1 preserved for SEO/Accessibility */}
        <h1 className="sr-only">دليل السبحي - منصة أمنة لجميع خدمات المنطقة</h1>

        {/* Logo Container */}
        <div className="mx-auto flex flex-col items-center justify-center pt-8 pb-4">
          <div className="relative flex h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 items-center justify-center overflow-hidden rounded-full border border-[#d6b25e]/30 bg-[#05110e]/40 shadow-[0_0_40px_rgba(214,178,94,0.15)] backdrop-blur-sm transition-transform duration-700 hover:scale-105">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d6b25e]/10 via-transparent to-transparent opacity-60" />
            
            <img 
              src={dalilSubhiLogo} 
              alt="شعار دليل السبحي الرسمي" 
              className="relative z-10 h-full w-full object-cover mix-blend-screen"
              // Note: using mix-blend-screen safely removes black background from the JPG if it exists,
              // while object-cover + rounded-full ensures it's elegantly cropped if it has a white/solid bg.
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
