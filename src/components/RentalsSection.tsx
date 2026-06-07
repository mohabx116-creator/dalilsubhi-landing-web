import { ArrowLeft, KeyRound } from 'lucide-react';
import { RENTALS_URL } from '../lib/config/links';

const rentalsImage =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85';

export default function RentalsSection() {
  return (
    <section id="rentals" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="rounded-[28px] border border-white/12 bg-white/[.055] p-7 sm:p-10">
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d6b25e]/35 bg-[#d6b25e]/12 text-[#f4d98c]">
            <KeyRound size={26} />
          </div>
          <h2 className="mt-7 text-3xl font-black text-white sm:text-4xl">بوابة إيجارات منظمة وآمنة</h2>
          <p className="mt-5 max-w-xl text-lg leading-9 text-white/70">
            استعرض الوحدات المتاحة، أرسل طلب معاينة، وتواصل مع الإدارة بدون كشف بيانات الملاك للعامة.
          </p>
          <a className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d6b25e] px-6 py-3 font-bold text-[#071614] transition hover:bg-[#f4d98c]" href={RENTALS_URL} rel="noopener noreferrer" target="_blank">
            تصفح وحدات الإيجار
            <ArrowLeft size={18} />
          </a>
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-[28px] border border-white/12">
          <img alt="وحدات سكنية داخل الكمبوند" className="h-full min-h-72 w-full object-cover" src={rentalsImage} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,20,.08),rgba(7,22,20,.78))]" />
          <div className="absolute bottom-5 right-5 rounded-2xl border border-white/16 bg-[#071614]/74 px-5 py-4 backdrop-blur-lg">
            <p className="text-sm font-bold text-[#f4d98c]">خصوصية واضحة</p>
            <p className="mt-1 text-white/78">طلبات الإيجار بدون كشف بيانات الملاك للعامة</p>
          </div>
        </div>
      </div>
    </section>
  );
}
