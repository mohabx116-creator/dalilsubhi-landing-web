import { MapPin, Wrench, Users } from 'lucide-react';
import { SERVICES_URL } from '../lib/config/links';

export default function ServicesSection() {
  const cards = [
    {
      title: 'مرافق المنطقة',
      text: 'تعرف على أهم المرافق المتاحة حولك ومعلومات التواصل والموقع.',
      cta: 'تصفح المرافق',
      link: SERVICES_URL,
      icon: <MapPin size={32} className="text-[#0fa37f]" />
    },
    {
      title: 'الخدمات الفنية',
      text: 'وصول سريع إلى خدمات الصيانة والتشطيب والخدمات المساندة.',
      cta: 'تصفح الخدمات',
      link: SERVICES_URL,
      icon: <Wrench size={32} className="text-[#0fa37f]" />
    },
    {
      title: 'روابط المجتمع',
      text: 'روابط مباشرة لجروبات المنطقة ومصادر التواصل المهمة.',
      cta: 'روابط المجتمع',
      link: '#community',
      icon: <Users size={32} className="text-[#0fa37f]" />
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-[#071614] sm:text-4xl">خدمات المنطقة</h2>
        <p className="mt-4 text-lg text-gray-600">استعرض المرافق والخدمات الفنية وروابط المجتمع بسهولة.</p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-right">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl shadow-gray-200/50 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200/60 p-8 border border-gray-100">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0fa37f]/10">
                {card.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#071614]">{card.title}</h3>
              <p className="mb-8 flex-1 text-gray-600 leading-relaxed">{card.text}</p>
              <a href={card.link} className="inline-flex items-center text-lg font-bold text-[#0fa37f] hover:text-[#071614] transition">
                {card.cta} &larr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
