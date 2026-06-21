import { ShieldCheck, Home, Users } from 'lucide-react';

export default function ServicesSection() {
  const cards = [
    {
      title: 'خدمات امنة',
      text: 'روابط مباشرة للخدمات والمرافق المهمة في المنطقة.',
      icon: <ShieldCheck size={32} className="text-[#0fa37f]" />
    },
    {
      title: 'إيجارات المنطقة',
      text: 'وصول سريع لإعلانات الإيجار المتاحة وطلب التواصل والحجز.',
      icon: <Home size={32} className="text-[#d6b25e]" />
    },
    {
      title: 'تواصل مع الادارة للاستفسارات والاخبار',
      text: 'جروبات وروابط مهمة لمتابعة أخبار المنطقة.',
      icon: <Users size={32} className="text-[#0fa37f]" />
    }
  ];

  return (
    <section className="bg-gray-50/50 backdrop-blur-[4px] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-[#071614] sm:text-4xl">محتوى الدليل</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3 text-right">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-3xl bg-white/90 shadow-lg shadow-gray-200/40 p-8 border border-gray-100">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100">
                {card.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#071614]">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
