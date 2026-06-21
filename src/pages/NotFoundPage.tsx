import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white text-gray-900 font-sans" dir="rtl">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center z-10">
        <h1 className="text-6xl font-black text-[#0fa37f] mb-6">404</h1>
        <h2 className="text-3xl font-bold text-[#071614] mb-4">عذراً، الصفحة غير موجودة</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          الرابط الذي تحاول الوصول إليه غير صحيح أو تم نقل الصفحة.
        </p>
        <Link 
          to="/" 
          className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-8 text-lg font-bold text-white shadow-md shadow-[#0fa37f]/20 transition hover:shadow-lg hover:shadow-[#0fa37f]/30"
        >
          العودة للصفحة الرئيسية
        </Link>
      </main>
      <Footer />
    </div>
  );
}
