import { Home, ShieldCheck, Users } from 'lucide-react';

export default function ServicesSection() {
  const cards = [
    {
      title: 'خدمات آمنة',
      text: 'روابط مباشرة للخدمات والمرافق المهمة في المنطقة.',
      icon: <ShieldCheck size={32} className="text-[#0fa37f]" />,
      href: '#services-card',
    },
    {
      title: 'إيجارات المنطقة',
      text: 'وصول سريع لإعلانات الإيجار المعتمدة والتواصل عبر واتساب.',
      icon: <Home size={32} className="text-[#d6b25e]" />,
      href: '#rentals-card',
    },
    {
      title: 'تواصل واضح',
      text: 'روابط مهمة لمتابعة أخبار المنطقة والتواصل مع خدمة العملاء.',
      icon: <Users size={32} className="text-[#0fa37f]" />,
      href: '#community-card',
    },
  ];

  return (
    <section id="services" className="bg-gray-50/50 py-12 sm:py-20 scroll-mt-24 md:scroll-mt-32 backdrop-blur-[4px]">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-[#071614] sm:text-4xl">محتوى الدليل</h2>
        <div className="mt-8 grid gap-5 text-right sm:grid-cols-3 sm:gap-8">
          {cards.map((card) => (
            <a 
              key={card.title} 
              href={card.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200/40 bg-white/90 p-5 sm:p-8 shadow-[0_4px_20px_rgba(7,22,20,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ebdcb9] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b25e]"
            >
              <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-gray-100 bg-[#fdfbf7]/60 transition-all duration-300 group-hover:scale-105 group-hover:border-[#ebdcb9]/40 group-hover:bg-[#ebdcb9]/10">
                {card.icon}
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-bold text-[#071614] transition-colors duration-300 group-hover:text-[#b88622]">{card.title}</h3>
              <p className="text-xs sm:text-base leading-relaxed text-gray-600">{card.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
