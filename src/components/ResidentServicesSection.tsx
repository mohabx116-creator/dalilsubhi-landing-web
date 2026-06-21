import { Bell, MessageCircle, ShieldCheck, Users } from 'lucide-react';
import luxuryInterior from '../assets/luxury-interior.png';

export default function ResidentServicesSection() {
  const cards = [
    { title: 'الطلبات والشكاوى', icon: MessageCircle },
    { title: 'الإشعارات', icon: Bell },
    { title: 'الدعم داخل الكمبوند', icon: ShieldCheck },
  ];

  return (
    <section id="resident-services" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-72 overflow-hidden rounded-[28px] border border-white/12 lg:order-2">
          <img alt="خدمات السكان داخل الكمبوند" className="h-full min-h-72 w-full object-cover" src={luxuryInterior} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,20,.1),rgba(7,22,20,.78))]" />
        </div>
        <div className="rounded-[28px] border border-white/12 bg-white/[.055] p-7 sm:p-10">
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d6b25e]/35 bg-[#d6b25e]/12 text-[#f4d98c]">
            <Users size={26} />
          </div>
          <h2 className="mt-7 text-3xl font-black text-white sm:text-4xl">خدمات السكان في مكان واحد</h2>
          <p className="mt-5 max-w-xl text-lg leading-9 text-white/70">
            هذا القسم مخصص للعرض التعريفي فقط ولا يفتح أي بوابة داخلية من الصفحة العامة.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {cards.map(({ title, icon: Icon }) => (
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4" key={title}>
                <Icon className="text-[#f4d98c]" size={21} />
                <p className="mt-3 text-sm font-bold text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
