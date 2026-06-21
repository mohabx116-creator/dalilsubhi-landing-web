import { Link } from 'react-router-dom';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import { SERVICES_URL, RENTALS_URL, OWNERS_URL, WHATSAPP_GROUP_URL, FACEBOOK_GROUP_URL, MAIN_URL } from '../lib/config/links';

export default function Footer() {
  return (
    <footer className="border-t border-[#0fa37f]/10 bg-white/50 backdrop-blur-[4px] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-100 shadow-sm">
                <img src={dalilSubhiLogo} alt="دليل السبحي" className="h-full w-full object-contain" />
              </div>
              <span className="text-2xl font-black text-[#071614]">دليل السبحي</span>
            </Link>
            <p className="max-w-sm text-lg text-gray-600 leading-relaxed">
              منصة امنة لجميع عقارات و خدمات المنطقة .
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#071614]">روابط سريعة</h3>
            <ul className="space-y-4 font-medium text-gray-600">
              <li><a href={MAIN_URL} className="hover:text-[#0fa37f] transition">الصفحة الرئيسية</a></li>
              <li><a href={SERVICES_URL} className="hover:text-[#0fa37f] transition">خدمات المنطقة</a></li>
              <li><a href={RENTALS_URL} className="hover:text-[#0fa37f] transition">الإيجارات</a></li>
              <li><a href={OWNERS_URL} className="hover:text-[#0fa37f] transition">أعلن عن وحدتك</a></li>
              <li><Link to="/publishing-policy" className="hover:text-[#0fa37f] transition">سياسة النشر والإعلان</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#071614]">تواصل معنا</h3>
            <ul className="space-y-4 font-medium text-gray-600">
              <li><a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">خدمة العملاء</a></li>
              <li><a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition">جروب الفيس بوك</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} دليل السبحي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
