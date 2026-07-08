import type { ReactNode } from 'react';
import { ArrowLeft, BadgeCheck, Building, Building2, Filter, HeartPulse, Home, Map, MapPin, Megaphone, MessageCircle, Search, ShieldCheck, Sparkles, Users, UtensilsCrossed, Wrench } from 'lucide-react';
import { FACEBOOK_GROUP_URL, OWNERS_URL, REAL_ESTATE_URL, RENTALS_URL, SERVICES_URL, WHATSAPP_GROUP_URL, COMMUNITY_HUB_URL } from '../lib/config/links';

type MockupCard = {
  title: string;
  icon: ReactNode;
  tone: string;
};

function MockupShell({
  featured = false,
  toneClass,
  surfaceClass,
  glowClass,
  children,
}: {
  featured?: boolean;
  toneClass: string;
  surfaceClass: string;
  glowClass: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative flex h-full min-h-[340px] flex-col overflow-hidden ${featured ? 'rounded-[30px] sm:rounded-[32px]' : 'rounded-[26px] sm:rounded-[28px]'} border ${toneClass} bg-gradient-to-br ${surfaceClass} p-4 shadow-[0_24px_70px_rgba(17,70,58,0.10)] sm:min-h-[380px] sm:p-5`}
    >
      <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${glowClass}`} />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-white/40 blur-3xl" />
      <div className="relative flex flex-1 flex-col">
        <div className="mb-3 flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef6b5a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f6c85f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4fc27b]" />
          </div>
          <div className="h-1.5 w-20 rounded-full bg-black/5" />
        </div>
        <div className="flex flex-1 flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

function MockupBar({ className = '' }: { className?: string }) {
  return <div className={`h-2 rounded-full bg-black/10 ${className}`} />;
}

function CommunityMockup() {
  const cards: MockupCard[] = [
    { title: 'support', icon: <HeartPulse size={14} />, tone: 'bg-[#0fa37f]/10 text-[#0fa37f]' },
    { title: 'food', icon: <UtensilsCrossed size={14} />, tone: 'bg-[#d6b25e]/12 text-[#8a6d22]' },
    { title: 'verified', icon: <ShieldCheck size={14} />, tone: 'bg-[#dcefe8] text-[#0f3b35]' },
  ];

  return (
    <MockupShell
      featured
      toneClass="border-[#d7efe7]"
      surfaceClass="from-[#ffffff] via-[#fbfffc] to-[#effaf5]"
      glowClass="bg-[#0fa37f]/12"
    >
      <div className="flex h-full flex-col space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e3eee8] bg-white/90 px-3 py-1.5 shadow-sm">
            <Search size={13} className="text-[#0fa37f]" />
            <div className="h-2.5 w-24 rounded-full bg-slate-200/80 sm:w-40" />
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-[#0fa37f]/15 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-[#0f3b35] shadow-sm sm:inline-flex">
            <MapPin size={11} className="text-[#0fa37f]" />
            <span>محيط حي</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['h-8 w-20', 'h-8 w-24', 'h-8 w-16', 'h-8 w-18'].map((chip, index) => (
            <span
              key={chip}
              className={`inline-flex items-center gap-2 rounded-full border px-3 ${index === 1 ? 'border-[#d6b25e]/18 bg-[#fffaf0]' : 'border-[#d8e8e1] bg-white/80'} shadow-sm`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${index === 1 ? 'bg-[#d6b25e]' : 'bg-[#0fa37f]'}`} />
              <span className={`rounded-full bg-black/10 ${chip}`} />
            </span>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-[0_12px_24px_rgba(17,70,58,0.06)]"
            >
              <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl ${card.tone}`}>
                {card.icon}
              </div>
              <MockupBar className="mb-2 w-3/4" />
              <MockupBar className="mb-3 w-1/2" />
              <div className="flex items-center justify-between">
                <span className="h-2.5 w-14 rounded-full bg-[#0fa37f]/10" />
                <span className="h-2.5 w-8 rounded-full bg-[#d6b25e]/18" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 rounded-3xl border border-[#dcefe5] bg-gradient-to-br from-[#f7fcf8] via-white to-[#eef8f1] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-24 rounded-full bg-slate-200/80" />
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#0f3b35] shadow-sm">
              <BadgeCheck size={11} className="text-[#0fa37f]" />
              <span>جاهز</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="rounded-2xl border border-white/80 bg-white/80 p-2 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-7 w-7 rounded-xl bg-[#0fa37f]/10" />
                <div className="flex-1">
                  <MockupBar className="mb-1 w-2/3" />
                  <MockupBar className="w-1/2" />
                </div>
              </div>
              <div className="h-14 rounded-xl bg-gradient-to-br from-[#eaf8f1] to-white" />
            </div>
            <div className="col-span-3 rounded-2xl border border-dashed border-[#cfe7db] bg-white/70 p-3">
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <MockupBar className="mb-2 w-1/2" />
                  <MockupBar className="w-3/4" />
                </div>
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <MockupBar className="mb-2 w-2/3" />
                  <MockupBar className="w-1/2" />
                </div>
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <MockupBar className="mb-2 w-1/2" />
                  <MockupBar className="w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function ServicesMockup() {
  const services: MockupCard[] = [
    { title: 'service', icon: <Wrench size={14} />, tone: 'bg-[#0fa37f]/10 text-[#0fa37f]' },
    { title: 'verified', icon: <BadgeCheck size={14} />, tone: 'bg-[#d6b25e]/12 text-[#8a6d22]' },
    { title: 'community', icon: <Users size={14} />, tone: 'bg-[#eff5fb] text-[#3b6b8b]' },
    { title: 'filter', icon: <Filter size={14} />, tone: 'bg-[#f1f4ef] text-[#4c5b4f]' },
  ];

  return (
    <MockupShell
      toneClass="border-[#d8e8df]"
      surfaceClass="from-[#ffffff] via-[#f8fdfb] to-[#eff7f3]"
      glowClass="bg-[#0fa37f]/12"
    >
      <div className="flex h-full flex-col space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe8e1] bg-white/90 px-3 py-1.5 shadow-sm">
            <Sparkles size={13} className="text-[#0fa37f]" />
            <div className="h-2.5 w-20 rounded-full bg-slate-200/80" />
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0fa37f]/10 px-3 py-1.5 text-[10px] font-bold text-[#0f3b35]">
            <ShieldCheck size={11} className="text-[#0fa37f]" />
            <span>موثوق</span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm">
              <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl ${service.tone}`}>
                {service.icon}
              </div>
              <MockupBar className="mb-2 w-3/4" />
              <MockupBar className="mb-3 w-1/2" />
              <div className="flex gap-1.5">
                <span className="h-2.5 w-8 rounded-full bg-black/10" />
                <span className="h-2.5 w-12 rounded-full bg-[#0fa37f]/10" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-2xl border border-[#dceee6] bg-[#f7fcf8] p-3">
            <div className="mb-2 h-2.5 w-16 rounded-full bg-slate-200/80" />
            <div className="h-14 rounded-xl bg-white shadow-sm" />
          </div>
          <div className="rounded-2xl border border-[#dceee6] bg-[#f7fcf8] p-3">
            <div className="mb-2 h-2.5 w-20 rounded-full bg-slate-200/80" />
            <div className="h-14 rounded-xl bg-white shadow-sm" />
          </div>
          <div className="rounded-2xl border border-[#dceee6] bg-[#f7fcf8] p-3">
            <div className="mb-2 h-2.5 w-14 rounded-full bg-slate-200/80" />
            <div className="h-14 rounded-xl bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function RentalsMockup() {
  return (
    <MockupShell
      toneClass="border-[#ead9b1]"
      surfaceClass="from-[#fffefb] via-[#fff9ef] to-[#f8f2e5]"
      glowClass="bg-[#d6b25e]/16"
    >
      <div className="flex h-full flex-col space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex h-8 items-center gap-2 rounded-full border border-[#ead9b1] bg-[#fffaf0] px-3 shadow-sm">
            <Home size={12} className="text-[#8a6d22]" />
            <span className="h-2.5 w-14 rounded-full bg-black/10" />
          </span>
          <span className="inline-flex h-8 items-center gap-2 rounded-full border border-[#ead9b1]/70 bg-white/80 px-3 shadow-sm">
            <Filter size={12} className="text-[#b08c35]" />
            <span className="h-2.5 w-10 rounded-full bg-black/10" />
          </span>
          <span className="inline-flex h-8 items-center gap-2 rounded-full border border-[#ead9b1]/60 bg-white/80 px-3 shadow-sm">
            <BadgeCheck size={12} className="text-[#b08c35]" />
            <span className="h-2.5 w-12 rounded-full bg-black/10" />
          </span>
        </div>

        <div className="grid flex-1 gap-2 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/80 bg-white/90 p-3 shadow-[0_12px_30px_rgba(138,109,34,0.07)]">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#f4e8c8] via-[#fffaf0] to-[#e9f4ec]" />
              <div className="flex-1">
                <MockupBar className="mb-2 w-2/3" />
                <MockupBar className="mb-2 w-1/2" />
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-12 rounded-full bg-[#d6b25e]/18" />
                  <span className="h-2.5 w-16 rounded-full bg-[#0fa37f]/12" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded-2xl bg-[#f7f3e8]" />
              <div className="h-10 rounded-2xl bg-[#f8faf7]" />
              <div className="h-10 rounded-2xl bg-[#f7f3e8]" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <MockupBar className="w-16" />
                <span className="h-2.5 w-10 rounded-full bg-[#d6b25e]/18" />
              </div>
              <MockupBar className="mb-2 w-2/3" />
              <MockupBar className="w-1/2" />
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <MockupBar className="w-12" />
                <span className="h-2.5 w-12 rounded-full bg-[#0fa37f]/12" />
              </div>
              <MockupBar className="mb-2 w-3/4" />
              <MockupBar className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function RealEstateMockup() {
  return (
    <MockupShell
      toneClass="border-[#dde7d7]"
      surfaceClass="from-[#ffffff] via-[#f8faf6] to-[#edf2eb]"
      glowClass="bg-[#2c3a30]/12"
    >
      <div className="flex h-full flex-col space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2eadf] bg-white/90 px-3 py-1.5 shadow-sm">
            <Building2 size={13} className="text-[#2c3a30]" />
            <div className="h-2.5 w-20 rounded-full bg-slate-200/80" />
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2c3a30]/10 px-3 py-1.5 text-[10px] font-bold text-[#2c3a30]">
            <MapPin size={11} />
            <span>موقع</span>
          </div>
        </div>

        <div className="grid flex-1 gap-2 sm:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/80 bg-white/90 p-3 shadow-sm">
            <div className="mb-3 h-20 rounded-2xl bg-gradient-to-br from-[#eef3ea] via-[#fbfcfa] to-[#e5eadf]" />
            <div className="mb-2 flex items-center justify-between">
              <MockupBar className="w-24" />
              <span className="h-2.5 w-10 rounded-full bg-[#2c3a30]/10" />
            </div>
            <MockupBar className="mb-2 w-3/4" />
            <MockupBar className="w-1/2" />
          </div>

          <div className="space-y-2">
            <div className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <MockupBar className="w-16" />
                <span className="h-2.5 w-14 rounded-full bg-[#d6b25e]/18" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-2xl bg-[#f4f7f2] p-2">
                  <div className="mb-2 h-10 rounded-xl bg-white" />
                  <MockupBar className="mb-2 w-3/4" />
                  <MockupBar className="w-1/2" />
                </div>
                <div className="rounded-2xl bg-[#f4f7f2] p-2">
                  <div className="mb-2 h-10 rounded-xl bg-white" />
                  <MockupBar className="mb-2 w-2/3" />
                  <MockupBar className="w-1/2" />
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <ShieldCheck size={12} className="text-[#2c3a30]" />
                <MockupBar className="w-20" />
              </div>
              <div className="flex gap-2">
                <span className="h-2.5 w-16 rounded-full bg-[#2c3a30]/10" />
                <span className="h-2.5 w-12 rounded-full bg-[#d6b25e]/16" />
                <span className="h-2.5 w-14 rounded-full bg-[#0fa37f]/12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function GatewayMockup({ kind }: { kind: 'community' | 'services' | 'rentals' | 'realEstate' }) {
  switch (kind) {
    case 'community':
      return <CommunityMockup />;
    case 'services':
      return <ServicesMockup />;
    case 'rentals':
      return <RentalsMockup />;
    case 'realEstate':
    default:
      return <RealEstateMockup />;
  }
}

export default function MainGatewaySection() {
  const communityCard = {
    title: 'البوابة المجتمعية',
    text: 'مطاعم، طوارئ، إرشادات وروابط مهمة لأهل المنطقة.',
    cta: 'استكشف البوابة المجتمعية',
    link: COMMUNITY_HUB_URL,
    icon: <Map size={36} className="text-[#0fa37f]" />,
    colorClass: 'border-[#0fa37f]/30 hover:shadow-[0_20px_40px_rgba(15,163,127,0.12)]',
    gradientClass: 'via-[#0fa37f]/60',
    iconBgClass: 'bg-[#0fa37f]/10 group-hover:bg-[#0fa37f]/20',
    btnClass: 'bg-gradient-to-r from-[#0fa37f] to-[#0a8a6b] text-white shadow-sm shadow-[#0fa37f]/10 transition-all duration-300 group-hover:shadow-md group-hover:shadow-[#0fa37f]/20 group-hover:-translate-y-0.5 focus-visible:outline-[#0fa37f]',
    tags: ['ابن حميدو', 'الشامي السوري', 'كش ملك', 'كشري هند', 'أرقام الطوارئ', 'إرشادات عامة'],
    mockup: 'community' as const,
  };

  const cards = [
    {
      title: 'العقارات',
      text: 'مدخل سريع لفرص البيع والشراء والعروض العقارية المنظمة.',
      cta: 'تصفح العقارات',
      link: REAL_ESTATE_URL,
      icon: <Building size={28} className="text-[#2c3a30]" />,
      colorClass: 'border-[#2c3a30]/20 hover:shadow-[0_20px_40px_rgba(44,58,48,0.08)]',
      gradientClass: 'via-[#2c3a30]/60',
      iconBgClass: 'bg-[#2c3a30]/10 group-hover:bg-[#2c3a30]/20',
      btnClass: 'bg-[#2c3a30]/5 text-[#2c3a30] border border-[#2c3a30]/10 group-hover:bg-[#2c3a30] group-hover:text-white group-hover:border-[#2c3a30] group-hover:shadow-sm focus-visible:outline-[#2c3a30]',
      tags: ['وحدات للبيع', 'تفاصيل منظمة', 'تواصل مباشر'],
      mockup: 'realEstate' as const,
    },
    {
      title: 'الإيجارات',
      text: 'خيارات سكن وإقامات مناسبة بروابط واضحة.',
      cta: 'شوف الإيجارات',
      link: RENTALS_URL,
      icon: <Home size={28} className="text-[#d6b25e]" />,
      colorClass: 'border-[#d6b25e]/30 hover:shadow-[0_20px_40px_rgba(214,178,94,0.12)]',
      gradientClass: 'via-[#d6b25e]/60',
      iconBgClass: 'bg-[#d6b25e]/10 group-hover:bg-[#d6b25e]/20',
      btnClass: 'bg-[#d6b25e]/10 text-[#8a6d22] border border-[#d6b25e]/15 group-hover:bg-[#d6b25e] group-hover:text-[#071614] group-hover:border-[#d6b25e] group-hover:shadow-sm focus-visible:outline-[#d6b25e]',
      tags: ['سكن وإقامات', 'تفاصيل واضحة', 'خيارات منظمة'],
      mockup: 'rentals' as const,
    },
    {
      title: 'الخدمات',
      text: 'دليل مبسط للوصول إلى الخدمات والمرافق وروابط التواصل المهمة.',
      cta: 'تصفح الخدمات',
      link: SERVICES_URL,
      icon: <Wrench size={28} className="text-[#0fa37f]" />,
      colorClass: 'border-[#0fa37f]/20 hover:shadow-[0_20px_40px_rgba(15,163,127,0.08)]',
      gradientClass: 'via-[#0fa37f]/60',
      iconBgClass: 'bg-[#0fa37f]/10 group-hover:bg-[#0fa37f]/20',
      btnClass: 'bg-[#0fa37f]/5 text-[#0fa37f] border border-[#0fa37f]/10 group-hover:bg-[#0fa37f] group-hover:text-white group-hover:border-[#0fa37f] group-hover:shadow-sm focus-visible:outline-[#0fa37f]',
      tags: ['خدمات منزلية', 'مرافق', 'روابط مهمة', 'تصنيفات منظمة'],
      mockup: 'services' as const,
    }
  ];

  return (
    <section id="ecosystem" className="relative z-10 overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#faf8f2] to-[#f6f9f8] py-12 sm:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b25e]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-[#0fa37f]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto mb-4 max-w-4xl text-2xl font-black leading-snug tracking-tight text-[#071614] sm:text-4xl md:text-5xl">
          لمحات من داخل دليل السبحي
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xs sm:text-lg text-gray-600 sm:mb-16">
          محتوى حقيقي من أقسام المنصة: مطاعم، طوارئ، عقارات، إيجارات وخدمات — بروابط مباشرة وتجربة سهلة.
        </p>

        <div className="grid gap-6 text-right lg:grid-cols-3 sm:gap-8">
          <a 
            id="community-card"
            href={communityCard.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex h-full flex-col overflow-hidden rounded-[24px] sm:rounded-[30px] border bg-white/95 p-5 sm:p-8 md:p-10 shadow-lg backdrop-blur-md transition ${communityCard.colorClass} lg:col-span-3 lg:flex-row lg:items-center lg:gap-10 scroll-mt-24 md:scroll-mt-32 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]`}
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 ${communityCard.gradientClass}`} />

            <div className="flex-1">
              <div className={`mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl transition duration-300 ${communityCard.iconBgClass}`}>
                {communityCard.icon}
              </div>
              <h3 className="mb-3 text-xl font-black text-[#071614] sm:text-3xl lg:text-4xl">{communityCard.title}</h3>
              <p className="mb-5 sm:mb-8 text-sm leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
                {communityCard.text}
              </p>

              <div className="mb-5 sm:mb-8 flex flex-wrap gap-1.5 sm:gap-2">
                {communityCard.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex rounded-full border border-[#0fa37f]/20 bg-[#0fa37f]/5 px-2.5 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm font-bold text-[#0fa37f] transition hover:bg-[#0fa37f]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span
                className={`inline-flex min-h-11 sm:min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${communityCard.btnClass}`}
              >
                {communityCard.cta}
                <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
            </div>

            <div className="mt-6 lg:mt-0 flex-1">
              <GatewayMockup kind={communityCard.mockup} />
            </div>
          </a>

          {cards.map((card) => {
            let cardId = '';
            if (card.link === REAL_ESTATE_URL) cardId = 'realestate-card';
            else if (card.link === RENTALS_URL) cardId = 'rentals-card';
            else if (card.link === SERVICES_URL) cardId = 'services-card';

            return (
              <a 
                id={cardId}
                key={card.title} 
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col overflow-hidden rounded-[24px] sm:rounded-[30px] border bg-white/95 p-5 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md transition ${card.colorClass} lg:col-span-1 scroll-mt-24 md:scroll-mt-32 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 ${card.gradientClass}`} />
                <div className={`mb-4 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-2xl transition duration-300 ${card.iconBgClass}`}>
                  {card.icon}
                </div>
                <h3 className="mb-2 text-lg font-black text-[#071614] sm:text-2xl">{card.title}</h3>
                <p className="mb-4 text-xs sm:text-base leading-relaxed text-gray-600">
                  {card.text}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex rounded-full border border-gray-100 bg-gray-50 px-2 py-0.5 text-[10px] sm:px-2.5 sm:py-1 sm:text-xs font-bold text-gray-600 transition hover:border-gray-300 hover:bg-white hover:text-gray-900 group-hover:border-gray-200 group-hover:bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-5 flex flex-1">
                  <GatewayMockup kind={card.mockup} />
                </div>

                <span
                  className={`mt-auto inline-flex min-h-10 sm:min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-xs sm:text-sm font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${card.btnClass}`}
                >
                  {card.cta}
                  <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-16 sm:gap-4">
          <a
            href={OWNERS_URL}
            className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#ebdcb9]/60 bg-white/90 px-6 py-2.5 text-sm font-bold text-[#5d4c18] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d6b25e] hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b25e]"
          >
            <Megaphone size={16} className="text-[#d6b25e]" />
            أعلن عن وحدتك
          </a>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#25D366]/20 bg-white/90 px-6 py-2.5 text-sm font-bold text-[#128C7E] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            خدمة العملاء
          </a>
          <a
            href={FACEBOOK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#1877F2]/20 bg-white/90 px-6 py-2.5 text-sm font-bold text-[#0c5bce] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1877F2] hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877F2]"
          >
            <Users size={16} className="text-[#1877F2]" />
            جروب الفيس بوك
          </a>
        </div>
      </div>
    </section>
  );
}
