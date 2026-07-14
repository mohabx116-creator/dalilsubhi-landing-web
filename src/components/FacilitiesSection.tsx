import { Bell, Building2, KeyRound, MessageCircle, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';

const SERVICES_URL = 'https://services-ds-core-91.dalilsubhi.com';
const COMMUNITY_URL = 'https://services-ds-core-91.dalilsubhi.com/community';
const RENTALS_URL = 'https://rentals-ds-core-91.dalilsubhi.com/rentals';
const WHATSAPP_URL = 'https://chat.whatsapp.com/ECEZfbsvjlU43eDvKa9XUu';
const PUBLISHING_POLICY_URL = 'https://dalilsubhi.com/publishing-policy';

const facilities = [
  {
    title: 'بيئة سكنية منظمة',
    icon: Building2,
    description: 'بنوفر لك كل الخدمات والمرافق اللي بتحتاجها في مكان واحد، عشان تعيش براحة وتوفر وقتك.',
    href: SERVICES_URL,
    cta: 'تصفح الخدمات',
  },
  {
    title: 'متابعة أخبار المنطقة',
    icon: Bell,
    description: 'خليك دايمًا في الصورة واعرف أحدث الأخبار والأنشطة اللي بتهم سكان المنطقة أول بأول.',
    href: COMMUNITY_URL,
    cta: 'البوابة المجتمعية',
  },
  {
    title: 'موثوقية المحتوى',
    icon: Sparkles,
    description: 'نلتزم بمعايير واضحة للنشر والاعلان بما يحفظ جودة المحتوى وموثوقيته.',
    href: PUBLISHING_POLICY_URL,
    cta: 'سياسة النشر',
  },
  {
    title: 'إدارة رقمية آمنة',
    icon: ShieldCheck,
    description: 'بنهتم بتأمين بياناتك وتوفير بيئة رقمية آمنة ومريحة في كل تعاملاتك داخل المنصة.',
    href: SERVICES_URL,
    cta: 'اعرف أكثر',
  },
  {
    title: 'تواصل ودعم',
    icon: MessageCircle,
    description: 'لو احتجت أي مساعدة أو واجهتك مشكلة، فريقنا دايماً موجود عشان يسمعك ويساعدك.',
    href: WHATSAPP_URL,
    cta: 'تواصل معنا',
    external: true,
  },
  {
    title: 'دليل الإيجارات',
    icon: KeyRound,
    description: 'تصفح كل الشقق والمحلات المتاحة للإيجار في المنطقة، وتواصل مع الملاك مباشرة بدون وسطاء.',
    href: RENTALS_URL,
    cta: 'شوف الإيجارات',
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-[#fdfbf7] px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 sm:mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-black leading-snug text-[#071614] sm:text-4xl lg:text-5xl">
            عن دليل السبحي
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ title, icon: Icon, description, href, cta, external }) => (
            <article
              className="flex flex-col rounded-2xl sm:rounded-3xl border border-[#d6b25e]/18 bg-white/85 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              key={title}
            >
              <Icon className="text-[#b88622] sm:w-[27px] sm:h-[27px]" size={24} />
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#071614]">{title}</h3>
              <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-gray-600">{description}</p>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0fa37f] transition hover:gap-2.5 hover:opacity-80"
              >
                {cta}
                <ArrowLeft size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
