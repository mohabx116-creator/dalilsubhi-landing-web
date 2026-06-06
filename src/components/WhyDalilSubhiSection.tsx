import { CheckCircle2 } from 'lucide-react';

const values = [
  'تنظيم الخدمات',
  'حماية بيانات التواصل',
  'تجربة رقمية سهلة',
  'متابعة إدارية واضحة',
];

export default function WhyDalilSubhiSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold text-[#f4d98c]">لماذا دليل السبحي</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            قيمة عملية للسكان والزوار والإدارة
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div className="rounded-3xl border border-[#d6b25e]/25 bg-[#d6b25e]/10 p-6" key={value}>
              <CheckCircle2 className="text-[#f4d98c]" size={28} />
              <h3 className="mt-5 text-xl font-extrabold text-white">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
