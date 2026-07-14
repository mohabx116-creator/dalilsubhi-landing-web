import { Bell, Building2, KeyRound, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

const facilities = [
  { title: 'بيئة سكنية منظمة', icon: Building2, description: 'محتوى واضح يساعدك في الوصول إلى خدمات المنطقة وروابطها الأساسية.' },
  { title: 'متابعة أخبار المنطقة', icon: Bell, description: 'محتوى واضح يساعدك في الوصول إلى خدمات المنطقة وروابطها الأساسية.' },
  { title: 'دليل الإيجارات', icon: KeyRound, description: 'نلتزم بمعايير واضحة للنشر والاعلان بما يحفظ جودة المحتوى وموثوقيته' },
  { title: 'إدارة رقمية آمنة', icon: ShieldCheck, description: 'محتوى واضح يساعدك في الوصول إلى خدمات المنطقة وروابطها الأساسية.' },
  { title: 'تواصل ودعم', icon: MessageCircle, description: 'محتوى واضح يساعدك في الوصول إلى خدمات المنطقة وروابطها الأساسية.' },
  { title: 'تجربة استخدام حديثة', icon: Sparkles, description: 'محتوى واضح يساعدك في الوصول إلى خدمات المنطقة وروابطها الأساسية.' },
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
          {facilities.map(({ title, icon: Icon, description }) => (
            <article className="rounded-2xl sm:rounded-3xl border border-[#d6b25e]/18 bg-white/85 p-5 sm:p-6 shadow-sm" key={title}>
              <Icon className="text-[#b88622] sm:w-[27px] sm:h-[27px]" size={24} />
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#071614]">{title}</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
