import { Home, Megaphone, MessageCircle } from 'lucide-react';
import { RENTALS_URL, OWNERS_URL } from '../lib/config/links';
import bgImage from '../assets/luxury-interior.png';

export default function RentalsSection() {
  const cards = [
    {
      title: 'الإيجارات المتاحة',
      text: 'اعرض الوحدات المتاحة وتواصل عبر واتساب لاستكمال الحجز.',
      cta: 'تصفح الإيجارات',
      link: RENTALS_URL,
      icon: <Home size={32} className="text-[#d6b25e]" />
    },
    {
      title: 'أعلن عن وحدتك',
      text: 'أرسل بيانات وحدتك للمراجعة ليتم نشر الإعلان بعد موافقة الإدارة.',
      cta: 'أعلن عن وحدتك',
      link: OWNERS_URL,
      icon: <Megaphone size={32} className="text-[#d6b25e]" />
    },
    {
      title: 'حجز عبر واتساب',
      text: 'التواصل والحجز يتم من خلال واتساب بدون تعقيد.',
      cta: 'ابدأ الآن',
      link: RENTALS_URL,
      icon: <MessageCircle size={32} className="text-[#d6b25e]" />
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#071614] py-24 text-white">
      <div className="absolute inset-0 z-0">
        <img alt="إيجارات المنطقة" className="h-full w-full object-cover opacity-10" src={bgImage} />
        <div className="absolute inset-0 bg-[#071614]/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-white sm:text-4xl">إيجارات المنطقة</h2>
        <p className="mt-4 text-lg text-white/70">تصفح الإعلانات المتاحة وقارن السعر والمواصفات، أو أعلن عن وحدتك بسهولة.</p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-right">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-md transition hover:bg-white/10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d6b25e]/10">
                {card.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">{card.title}</h3>
              <p className="mb-8 flex-1 text-white/70 leading-relaxed">{card.text}</p>
              <a href={card.link} className="inline-flex items-center text-lg font-bold text-[#d6b25e] hover:text-white transition">
                {card.cta} &larr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
