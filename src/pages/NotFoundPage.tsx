import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-[76svh] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold text-[#f4d98c]">صفحة غير موجودة</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">الرابط الذي طلبته غير متاح</h1>
        <p className="mt-5 text-lg leading-9 text-white/70">
          يمكنك العودة إلى الصفحة الرئيسية أو التواصل معنا للحصول على مساعدة.
        </p>
        <div className="mt-8 flex justify-center">
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d6b25e] px-6 py-3 font-bold text-[#071614] transition hover:bg-[#f4d98c]" to="/">
            العودة للرئيسية
            <ChevronLeft size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
