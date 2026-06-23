import { Building2, Home, Wrench } from 'lucide-react';
import heroBg from '../assets/sebahi-gardens-hero.png';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';

export default function HeroSection() {
  const highlights = [
    { label: 'Ø§Ù„Ø®Ø¯Ù…Ø§Øª', icon: Wrench, tone: 'text-[#0fa37f]' },
    { label: 'Ø§Ù„Ø¥ÙŠØ¬Ø§Ø±Ø§Øª', icon: Home, tone: 'text-[#d6b25e]' },
    { label: 'Ø§Ù„Ø¹Ù‚Ø§Ø±Ø§Øª', icon: Building2, tone: 'text-[#8a6d22]' },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] to-white text-[#071614]">
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-[0.08] mix-blend-multiply grayscale-[30%]"
          src={heroBg}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/50 via-white/78 to-white" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[52vh] w-full max-w-6xl flex-col items-center px-4 pb-12 pt-10 text-center sm:px-6 sm:pb-14 sm:pt-14 lg:min-h-[60vh] lg:px-8 lg:pt-16">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8dcc0] bg-white/80 px-4 py-2 text-sm font-bold text-[#5d4c18] shadow-sm backdrop-blur-md">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#0fa37f]" />
          بوابة دايل شاملة للخدمات والإيجارات والعقارات
        </div>

        <div className="mx-auto flex flex-col items-center justify-center pt-2 pb-4 sm:pt-4">
          <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border border-[#d6b25e]/20 bg-white/78 shadow-[0_15px_40px_rgba(214,178,94,0.12)] backdrop-blur-sm transition-transform duration-700 hover:scale-[1.03] sm:h-60 sm:w-60 md:h-[18rem] md:w-[18rem] lg:h-[22rem] lg:w-[22rem]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d6b25e]/5 via-transparent to-transparent opacity-50" />
            <img
              src={dalilSubhiLogo}
              alt="Ø´Ø¹Ø§Ø± Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø³Ø¨Ø­ÙŠ Ø§Ù„Ø±Ø³Ù…ÙŠ"
              className="relative z-10 h-[94%] w-[94%] object-contain mix-blend-multiply drop-shadow-sm"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
                maskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
              }}
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-3xl font-black leading-[1.35] tracking-tight text-[#071614] sm:text-4xl sm:leading-[1.2] md:text-5xl">
            منصة واحدة لبحث الخدمات والإيجارات والعقارات في المنطقة
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#55605d] sm:text-lg sm:leading-9">
            وصول أوضح إلى ما يهم السكان والباحثين عن السكن والخدمات، مع مسارات مباشرة ومحسوبة لكل قسم.
          </p>
        </div>

        <div className="mt-6 grid w-full max-w-4xl gap-3 text-right sm:grid-cols-3">
          {highlights.map(({ label, icon: Icon, tone }) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-[22px] border border-[#e8dcc0] bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(7,22,20,0.05)] backdrop-blur-md"
            >
              <div>
                <p className="text-sm font-bold text-[#7d6c49]">القسم</p>
                <p className="mt-0.5 text-base font-black text-[#071614]">{label}</p>
              </div>
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white ${tone} shadow-sm`}>
                <Icon className="h-5 w-5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
