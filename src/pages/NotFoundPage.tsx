import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans text-gray-900" dir="rtl">
      <Header />
      <main className="z-10 flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-6 text-6xl font-black text-[#0fa37f]">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-[#071614]">عذراً، الصفحة غير موجودة</h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-gray-600">
          الرابط الذي تحاول الوصول إليه غير صحيح أو تم نقل الصفحة.
        </p>
        <Link
          to="/"
          className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-8 text-lg font-bold text-white shadow-md shadow-[#0fa37f]/20 transition hover:shadow-lg hover:shadow-[#0fa37f]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
        >
          العودة للصفحة الرئيسية
        </Link>
      </main>
      <Footer />
    </div>
  );
}
