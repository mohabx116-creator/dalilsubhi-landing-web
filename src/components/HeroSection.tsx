import { ArrowLeft, CheckCircle2, Sparkles, Users } from 'lucide-react';
import luxuryInterior from '../assets/luxury-interior.png';
import { RENTALS_URL, RESIDENT_APP_URL } from '../lib/config/links';

const compoundImage =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85';

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20">
        <img alt="مجمع سكني حديث" className="h-full w-full object-cover opacity-35" src={compoundImage} />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#06110f_0%,rgba(7,22,20,.95)_34%,rgba(9,42,35,.78)_66%,rgba(7,22,20,.9)_100%)]" />
      </div>
      <div className="absolute -right-16 top-28 -z-10 h-64 w-64 rounded-full bg-[#0fa37f]/24 blur-3xl" />
      <div className="absolute -left-20 bottom-20 -z-10 h-72 w-72 rounded-full bg-[#d6b25e]/18 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 pt-10 lg:grid-cols-[1.04fr_.96fr]">
        <div className="max-w-3xl text-right">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6b25e]/40 bg-[#d6b25e]/12 px-4 py-2 text-sm font-semibold text-[#f4d98c] shadow-[0_0_40px_rgba(214,178,94,.18)]">
            <Sparkles size={17} />
            منصة رقمية راقية لخدمات الكمباوند
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            دليل السبحي — بوابتك الذكية لخدمات الكمباوند
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/76 sm:text-xl">
            تجربة رقمية راقية تجمع الإيجارات، خدمات السكان، التواصل، والمتابعة في مكان واحد داخل كمباوند السبحي.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d6b25e] px-7 py-4 font-bold text-[#071614] shadow-[0_18px_45px_rgba(214,178,94,.24)] transition hover:bg-[#f4d98c]" href={RENTALS_URL} rel="noopener noreferrer" target="_blank">
              تصفح الإيجارات
              <ArrowLeft size={20} />
            </a>
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/8 px-7 py-4 font-bold text-white transition hover:border-[#d6b25e]/55 hover:text-[#f4d98c]" href={RESIDENT_APP_URL} rel="noopener noreferrer" target="_blank">
              <Users size={20} />
              دخول السكان
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel animate-float rounded-[28px] p-4 sm:p-5">
            <div className="overflow-hidden rounded-[22px]">
              <img alt="واجهة سكنية فاخرة" className="aspect-[4/3] w-full object-cover" src={luxuryInterior} />
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {['إيجارات', 'طلبات', 'دعم'].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4" key={item}>
                  <CheckCircle2 className="mb-3 text-[#f4d98c]" size={21} />
                  <p className="text-sm font-bold text-white">{item}</p>
                  <p className="mt-1 text-xs text-white/58">متابعة منظمة</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
