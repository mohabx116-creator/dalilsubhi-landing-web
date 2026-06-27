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

      <div className="relative z-10 mx-auto flex min-h-[52vh] w-full max-w-6xl flex-col items-center px-4 pb-12 pt-10 text-center sm:px-6 sm:pb-14 sm:pt-14 lg:min-h-[60vh] lg:px-8 lg:pt-16">
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#ebdcb9] bg-white/80 px-4 py-1.5 text-xs font-bold text-[#5d4c18] shadow-sm backdrop-blur-md">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#0fa37f]" />
          بوابة آمنة وشاملة للمنطقة
        </div>

        <div className="mx-auto flex flex-col items-center justify-center pt-2 pb-4 sm:pt-4">
          <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-[#ebdcb9]/40 bg-white/80 shadow-[0_8px_30px_rgba(214,178,94,0.08)] backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02] sm:h-56 sm:w-56 md:h-64 md:w-64">
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
          <h1 className="text-3xl font-black leading-[1.3] tracking-tight text-[#071614] sm:text-4xl md:text-5xl">
            منصة آمنة تجمع الخدمات والإيجارات والعقارات
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#55605d] sm:text-base sm:leading-8">
            ابحث بثقة عن ما تحتاجه في المنطقة، مع مسارات واضحة ومباشرة لكل قسم.
          </p>
        </div>

        <div className="mt-8 grid w-full max-w-3xl gap-3 text-right sm:grid-cols-3">
          {highlights.map(({ label, icon: Icon, tone }) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl border border-[#ebdcb9]/60 bg-white/80 px-4 py-3 shadow-[0_8px_30px_rgba(7,22,20,0.02)] backdrop-blur-md"
            >
              <div>
                <p className="text-[10px] font-bold text-[#8c7a52]">القسم</p>
                <p className="mt-0.5 text-sm font-black text-[#071614]">{label}</p>
              </div>
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-50 ${tone} shadow-sm border border-neutral-100`}>
                <Icon className="h-4.5 w-4.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
