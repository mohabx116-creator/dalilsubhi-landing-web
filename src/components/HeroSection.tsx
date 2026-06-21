import heroBg from '../assets/sebahi-gardens-hero.png';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-gradient-to-b from-[#fdfbf7] to-white pt-24 pb-12 text-[#071614]">
      <div className="absolute inset-0 z-0">
        <img alt="" aria-hidden="true" className="h-full w-full object-cover object-center opacity-[0.08] mix-blend-multiply grayscale-[30%]" src={heroBg} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/40 via-white/70 to-white" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <h1 className="sr-only">دليل السبحي</h1>

        <div className="mx-auto flex flex-col items-center justify-center pt-6 pb-2">
          <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border border-[#d6b25e]/20 bg-white/70 shadow-[0_15px_40px_rgba(214,178,94,0.12)] backdrop-blur-sm transition-transform duration-700 hover:scale-105 sm:h-72 sm:w-72 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d6b25e]/5 via-transparent to-transparent opacity-50" />
            <img
              src={dalilSubhiLogo}
              alt="شعار دليل السبحي الرسمي"
              className="relative z-10 h-[95%] w-[95%] object-contain mix-blend-multiply drop-shadow-sm"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
                maskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
              }}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
