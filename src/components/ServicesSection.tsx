import { Home, ShieldCheck, Users } from 'lucide-react';

export default function ServicesSection() {
  const cards = [
    {
      title: 'خدمات آمنة',
      text: 'روابط مباشرة للخدمات والمرافق المهمة في المنطقة.',
      icon: <ShieldCheck size={32} className="text-[#0fa37f]" />,
    },
    {
      title: 'إيجارات المنطقة',
      text: 'وصول سريع لإعلانات الإيجار المعتمدة والتواصل عبر واتساب.',
      icon: <Home size={32} className="text-[#d6b25e]" />,
    },
    {
      title: 'تواصل واضح',
      text: 'روابط مهمة لمتابعة أخبار المنطقة والتواصل مع خدمة العملاء.',
      icon: <Users size={32} className="text-[#0fa37f]" />,
    },
  ];

  return (
    <section className="bg-gray-50/50 py-12 sm:py-20 backdrop-blur-[4px]">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-[#071614] sm:text-4xl">محتوى الدليل</h2>
        <div className="mt-8 grid gap-5 text-right sm:grid-cols-3 sm:gap-8">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white/90 p-5 sm:p-8 shadow-lg shadow-gray-200/40">
              <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50">
                {card.icon}
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold text-[#071614]">{card.title}</h3>
              <p className="text-xs sm:text-base leading-relaxed text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
