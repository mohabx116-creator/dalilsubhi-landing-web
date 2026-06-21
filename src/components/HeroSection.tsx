
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
        <h1 className="sr-only">دليل السبحي - منصة أمنة لجميع عقارات و خدمات المنطقة</h1>

        {/* Logo Container */}
        <div className="mx-auto flex flex-col items-center justify-center pt-6 pb-2">
          {/* 
            Container uses a translucent light background (frosted glass).
            Image uses mix-blend-multiply to remove its solid white background, 
            allowing the frosted glass to show through as the logo's new background.
          */}
          <div className="relative flex h-56 w-56 sm:h-72 sm:w-72 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem] items-center justify-center overflow-hidden rounded-full border border-[#d6b25e]/30 bg-[#fdfbf7]/75 shadow-[0_0_50px_rgba(214,178,94,0.25)] backdrop-blur-md transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d6b25e]/15 via-transparent to-transparent opacity-50" />

            <img
              src={dalilSubhiLogo}
              alt="شعار دليل السبحي الرسمي"
              className="relative z-10 h-[95%] w-[95%] object-contain mix-blend-multiply drop-shadow-sm"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
                maskImage: 'radial-gradient(circle, black 55%, transparent 72%)'
              }}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
