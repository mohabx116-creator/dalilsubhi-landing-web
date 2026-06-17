import { Link } from 'react-router-dom';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import { SERVICES_URL, RENTALS_URL } from '../lib/config/links';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0fa37f]/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-100 shadow-sm">
            <img src={dalilSubhiLogo} alt="دليل صبحي" className="h-full w-full object-contain" />
          </div>
          <span className="text-xl font-black text-[#071614]">دليل صبحي</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex text-[#071614] font-bold">
          <a href={SERVICES_URL} className="hover:text-[#0fa37f] transition">خدمات المنطقة</a>
          <a href={RENTALS_URL} className="hover:text-[#0fa37f] transition">الإيجارات</a>
          <a href="#community" className="hover:text-[#0fa37f] transition">روابط المجتمع</a>
          <a href="#about" className="hover:text-[#0fa37f] transition">عن دليل صبحي</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href={SERVICES_URL} className="hidden rounded-full bg-[#071614] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#0fa37f] md:inline-flex">
            تصفح الخدمات
          </a>
          <button className="md:hidden text-[#071614] p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
