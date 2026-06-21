import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PublishingPolicyPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#fdfbf7] font-sans text-gray-900" dir="rtl">
      <Header />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#0fa37f]/10 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-12">
          <h1 className="mb-8 text-3xl font-black text-[#071614] sm:text-4xl">سياسة النشر والإعلان</h1>

          <ol className="list-inside list-decimal space-y-6 text-lg leading-relaxed text-gray-700">
            <li>الالتزام بالمصداقية والشفافية في جميع البيانات والمعلومات الخاصة بالإعلان.</li>
            <li>لكل نوع من الإعلانات سياسة خاصة، ويمكن التعرّف عليها من خلال خدمة العملاء.</li>
            <li>يتم التعامل وفق اللوائح المنظمة بحسب نوع الإعلان ومكانه.</li>
            <li>عند عدم الالتزام بالقواعد السابقة، يحق لإدارة الموقع حذف الإعلان.</li>
          </ol>

          <div className="mt-12 flex justify-center border-t border-gray-100 pt-8">
            <Link
              to="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gray-100 px-8 text-base font-bold text-gray-700 transition hover:bg-gray-200 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
            >
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
