import { Bell, Building2, KeyRound, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

const facilities = [
  { title: 'بيئة سكنية منظمة', icon: Building2 },
  { title: 'متابعة طلبات السكان', icon: Bell },
  { title: 'بوابة إيجارات داخلية', icon: KeyRound },
  { title: 'إدارة رقمية آمنة', icon: ShieldCheck },
  { title: 'تواصل ودعم', icon: MessageCircle },
  { title: 'تجربة استخدام حديثة', icon: Sparkles },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold text-[#f4d98c]">المرافق ونمط الحياة</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            تجربة سكنية منظمة بتفاصيل واضحة
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ title, icon: Icon }) => (
            <article className="feature-card" key={title}>
              <Icon className="text-[#f4d98c]" size={27} />
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">منصة امنة لجميع عقارات وخدمات المنطقة.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
