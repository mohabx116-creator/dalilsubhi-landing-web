import { Bell, Building2, KeyRound, MessageCircle, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';
import { SERVICES_URL } from '../lib/config/links';

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
              <p className="mt-3 text-sm leading-7 text-white/62">واجهة واضحة تساعد على الوصول للخدمة المناسبة بسرعة وهدوء.</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[28px] border border-white/12 bg-white/[.055] p-8 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <h3 className="text-2xl font-black text-white">الخدمات والمرافق</h3>
          <p className="mt-4 text-white/70 text-lg leading-8 max-w-2xl mx-auto">
            تصفح مرافق الكمبوند واطلب الخدمات الفنية بسهولة من مكان واحد.
          </p>
          <div className="mt-7">
            <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d6b25e] px-8 py-3.5 font-bold text-[#071614] transition hover:bg-[#f4d98c] shadow-[0_18px_45px_rgba(214,178,94,.24)]" href={SERVICES_URL} rel="noopener noreferrer" target="_blank">
              تصفح الخدمات
              <ArrowLeft size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
