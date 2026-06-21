import { Bell, Building2, KeyRound, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

const facilities = [
  { title: 'بيئة سكنية منظمة', icon: Building2 },
  { title: 'متابعة أخبار المنطقة', icon: Bell },
  { title: 'دليل الإيجارات', icon: KeyRound },
  { title: 'إدارة رقمية آمنة', icon: ShieldCheck },
  { title: 'تواصل ودعم', icon: MessageCircle },
  { title: 'تجربة استخدام حديثة', icon: Sparkles },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-[#fdfbf7] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold text-[#b88622]">المرافق ونمط الحياة</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#071614] sm:text-4xl lg:text-5xl">
            تجربة سكنية منظمة بتفاصيل واضحة
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ title, icon: Icon }) => (
            <article className="rounded-3xl border border-[#d6b25e]/18 bg-white/85 p-6 shadow-sm" key={title}>
              <Icon className="text-[#b88622]" size={27} />
              <h3 className="mt-5 text-xl font-bold text-[#071614]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">محتوى واضح يساعدك في الوصول إلى خدمات المنطقة وروابطها الأساسية.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
