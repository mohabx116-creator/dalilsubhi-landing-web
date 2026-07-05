import { Building2, Home, Wrench } from 'lucide-react';
import heroBg from '../assets/sebahi-gardens-hero.png';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';

export default function HeroSection() {
  const highlights = [
    { label: 'الخدمات', icon: Wrench, tone: 'text-[#0fa37f]' },
    { label: 'الإيجارات', icon: Home, tone: 'text-[#d6b25e]' },
    { label: 'العقارات', icon: Building2, tone: 'text-[#8a6d22]' },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] to-white text-[#071614]">
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-[0.06] mix-blend-multiply grayscale-[30%]"
          src={heroBg}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/50 via-white/78 to-white" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-8 sm:py-14 text-center sm:px-6 lg:px-8 lg:pt-16">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ebdcb9] bg-white/80 px-3.5 py-1.5 text-xs font-bold text-[#5d4c18] shadow-sm backdrop-blur-md">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#0fa37f]" />
          بوابة آمنة وشاملة للمنطقة
        </div>

        <div className="mx-auto flex flex-col items-center justify-center pt-1 pb-3 sm:pt-4">
          <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-[#ebdcb9]/40 bg-white/80 shadow-[0_8px_30px_rgba(214,178,94,0.08)] backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02] sm:h-56 sm:w-56 md:h-64 md:w-64">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d6b25e]/5 via-transparent to-transparent opacity-50" />
            <img
              src={dalilSubhiLogo}
              alt="شعار دليل السبحي الرسمي"
              className="relative z-10 h-[92%] w-[92%] object-contain mix-blend-multiply drop-shadow-sm"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
                maskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
              }}
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-2xl font-black leading-snug tracking-tight text-[#071614] sm:text-4xl md:text-5xl">
            دليل السبحي: منصة آمنة تجمع الخدمات والإيجارات والعقارات
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-base leading-relaxed text-[#55605d]">
            ابحث بثقة عن ما تحتاجه في المنطقة، مع مسارات واضحة ومباشرة لكل قسم.
          </p>
        </div>

        <div className="mt-6 grid w-full max-w-3xl grid-cols-3 gap-2 text-right sm:gap-3">
          {highlights.map(({ label, icon: Icon, tone }) => (
            <a
              key={label}
              href="#ecosystem"
              className="group flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between rounded-2xl border border-[#ebdcb9]/60 bg-white/80 p-2 sm:px-4 sm:py-3 shadow-[0_8px_30px_rgba(7,22,20,0.02)] backdrop-blur-md gap-1.5 sm:gap-2 transition hover:border-[#d6b25e] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b25e]"
            >
              <div className="text-center sm:text-right">
                <p className="text-[9px] font-bold text-[#8c7a52] sm:text-[10px] hidden sm:block">القسم</p>
                <p className="text-xs sm:text-sm font-black text-[#071614]">{label}</p>
              </div>
              <span className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-neutral-50 ${tone} shadow-sm border border-neutral-100 transition group-hover:scale-110`}>
                <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
