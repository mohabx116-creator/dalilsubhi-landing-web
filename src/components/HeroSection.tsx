import { ArrowLeft } from 'lucide-react';
import { SERVICES_URL, RENTALS_URL } from '../lib/config/links';
import heroBg from '../assets/hero-compound.png';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#071614] text-white">
      <div className="absolute inset-0 z-0">
        <img alt="دليل صبحي" className="h-full w-full object-cover opacity-20" src={heroBg} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071614]/80 via-[#071614]/60 to-[#071614]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
          دليل صبحي
        </h1>
        <p className="mt-6 text-xl font-bold text-[#d6b25e] sm:text-2xl lg:text-3xl">
          منصة رقمية لتسهيل الوصول إلى خدمات المنطقة والإيجارات والمرافق المهمة.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          كل ما تحتاجه في مكان واحد: خدمات، إيجارات، وروابط مجتمعية موثوقة.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={SERVICES_URL} className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#d6b25e] px-8 text-lg font-bold text-[#071614] transition hover:bg-[#f4d98c]">
            تصفح خدمات المنطقة
            <ArrowLeft size={20} />
          </a>
          <a href={RENTALS_URL} className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 text-lg font-bold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10">
            تصفح الإيجارات
          </a>
        </div>
      </div>
    </section>
  );
}
