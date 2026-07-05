import { ArrowLeft, Building, Home, Map, Megaphone, MessageCircle, Users, Wrench } from 'lucide-react';
import { FACEBOOK_GROUP_URL, OWNERS_URL, REAL_ESTATE_URL, RENTALS_URL, SERVICES_URL, WHATSAPP_GROUP_URL, COMMUNITY_HUB_URL } from '../lib/config/links';

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
    btnClass: 'bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] text-white shadow-md shadow-[#0fa37f]/20 hover:shadow-lg hover:shadow-[#0fa37f]/30 focus-visible:outline-[#0fa37f]',
    tags: ['ابن حميدو', 'الشامي السوري', 'كش ملك', 'كشري هند', 'أرقام الطوارئ', 'إرشادات عامة'],
    screenshot: '/landing-previews/community.png',
    alt: 'لقطة من البوابة المجتمعية في دليل السبحي'
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
      btnClass: 'bg-gradient-to-r from-[#2c3a30] to-[#1e2821] text-white shadow-md shadow-[#2c3a30]/20 hover:shadow-lg hover:shadow-[#2c3a30]/30 focus-visible:outline-[#2c3a30]',
      tags: ['وحدات للبيع', 'تفاصيل منظمة', 'تواصل مباشر'],
      screenshot: '/landing-previews/realestate.png',
      alt: 'لقطة من صفحة العقارات في دليل السبحي'
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
      btnClass: 'bg-gradient-to-r from-[#d6b25e] to-[#cda44b] text-[#071614] shadow-md shadow-[#d6b25e]/20 hover:shadow-lg hover:shadow-[#d6b25e]/30 focus-visible:outline-[#d6b25e]',
      tags: ['سكن وإقامات', 'تفاصيل واضحة', 'خيارات منظمة'],
      screenshot: '/landing-previews/rentals.png',
      alt: 'لقطة من صفحة الإيجارات في دليل السبحي'
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
      btnClass: 'bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] text-white shadow-md shadow-[#0fa37f]/20 hover:shadow-lg hover:shadow-[#0fa37f]/30 focus-visible:outline-[#0fa37f]',
      tags: ['خدمات منزلية', 'مرافق', 'روابط مهمة', 'تصنيفات منظمة'],
      screenshot: '/landing-previews/services.png',
      alt: 'لقطة من دليل الخدمات في دليل السبحي'
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
            className={`group flex h-full flex-col overflow-hidden rounded-[24px] sm:rounded-[30px] border bg-white/95 p-5 sm:p-8 md:p-10 shadow-lg backdrop-blur-md transition ${communityCard.colorClass} lg:col-span-3 lg:flex-row lg:items-center lg:gap-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 ${communityCard.gradientClass}" />

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
                className={`inline-flex min-h-11 sm:min-h-14 items-center justify-center gap-2 rounded-2xl px-5 py-2 text-sm sm:text-lg font-bold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${communityCard.btnClass}`}
              >
                {communityCard.cta}
                <ArrowLeft size={18} />
              </span>
            </div>

            <div className="mt-6 lg:mt-0 flex-1 overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-md sm:shadow-lg">
              <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-100 px-3 py-2 sm:px-4 sm:py-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="block">
                <img
                  src={communityCard.screenshot}
                  alt={communityCard.alt}
                  className="w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] h-40 sm:h-64 lg:h-72"
                  decoding="async"
                  loading="lazy"
                />
              </div>
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
                className={`group flex h-full flex-col overflow-hidden rounded-[24px] sm:rounded-[30px] border bg-white/95 p-5 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md transition ${card.colorClass} lg:col-span-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]`}
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

                <div className="mb-5 overflow-hidden rounded-xl border border-gray-200/80 bg-gray-50 shadow-sm sm:shadow-md">
                  <div className="flex items-center gap-1 border-b border-gray-200 bg-gray-100 px-2.5 py-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]" />
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]" />
                    <div className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="block">
                    <img
                      src={card.screenshot}
                      alt={card.alt}
                      className="w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] h-32 sm:h-44 md:h-48"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </div>

                <span
                  className={`mt-auto inline-flex min-h-11 sm:min-h-14 items-center justify-center gap-2 rounded-2xl px-5 text-sm sm:text-base font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${card.btnClass}`}
                >
                  {card.cta}
                  <ArrowLeft size={16} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-16 sm:gap-4">
          <a
            href={OWNERS_URL}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-5 py-2.5 text-sm font-bold text-gray-600 shadow-sm backdrop-blur-sm transition hover:border-[#d6b25e] hover:bg-white hover:text-[#071614] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]"
          >
            <Megaphone size={16} className="text-[#d6b25e]" />
            أعلن عن وحدتك
          </a>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-5 py-2.5 text-sm font-bold text-gray-600 shadow-sm backdrop-blur-sm transition hover:border-[#25D366] hover:bg-white hover:text-[#071614] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            خدمة العملاء
          </a>
          <a
            href={FACEBOOK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-5 py-2.5 text-sm font-bold text-gray-600 shadow-sm backdrop-blur-sm transition hover:border-[#1877F2] hover:bg-white hover:text-[#071614] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1877F2]"
          >
            <Users size={16} className="text-[#1877F2]" />
            جروب الفيس بوك
          </a>
        </div>
      </div>
    </section>
  );
}
