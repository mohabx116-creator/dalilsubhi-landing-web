import { Home, ShieldCheck, Users } from 'lucide-react';

export default function ServicesSection() {
  const cards = [
    {
      title: 'خدمات آمنة',
      text: 'روابط مباشرة للخدمات والمرافق المهمة في المنطقة.',
      icon: <ShieldCheck size={32} className="text-[#0fa37f]" />,
      href: '#ecosystem',
    },
    {
      title: 'إيجارات المنطقة',
      text: 'وصول سريع لإعلانات الإيجار المعتمدة والتواصل عبر واتساب.',
      icon: <Home size={32} className="text-[#d6b25e]" />,
      href: '#ecosystem',
    },
    {
      title: 'تواصل واضح',
      text: 'روابط مهمة لمتابعة أخبار المنطقة والتواصل مع خدمة العملاء.',
      icon: <Users size={32} className="text-[#0fa37f]" />,
      href: '#ecosystem',
    },
  ];

  return (
    <section id="services" className="bg-gray-50/50 py-12 sm:py-20 backdrop-blur-[4px]">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-[#071614] sm:text-4xl">محتوى الدليل</h2>
        <div className="mt-8 grid gap-5 text-right sm:grid-cols-3 sm:gap-8">
          {cards.map((card) => (
            <a 
              key={card.title} 
              href={card.href}
              className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white/90 p-5 sm:p-8 shadow-lg shadow-gray-200/40 transition hover:-translate-y-1 hover:border-[#d6b25e]/30 hover:shadow-xl hover:shadow-[#d6b25e]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b25e]"
            >
              <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 transition group-hover:scale-110 group-hover:border-[#d6b25e]/20 group-hover:bg-[#d6b25e]/5">
                {card.icon}
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold text-[#071614] transition group-hover:text-[#d6b25e]">{card.title}</h3>
              <p className="text-xs sm:text-base leading-relaxed text-gray-600">{card.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
