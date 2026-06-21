import { Link } from 'react-router-dom';
import { useState } from 'react';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import { SERVICES_URL, RENTALS_URL, WHATSAPP_GROUP_URL } from '../lib/config/links';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d6b25e]/20 bg-[#fdfbf7]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(214,178,94,0.06)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#d6b25e]/30 shadow-sm transition group-hover:shadow-md group-hover:border-[#d6b25e]/50">
            <img src={dalilSubhiLogo} alt="دليل السبحي" className="h-full w-full object-contain" />
          </div>
          <span className="text-xl font-black text-[#071614] transition group-hover:text-[#d6b25e]">دليل السبحي</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex text-[#071614] font-bold text-[15px]">
          <a href={SERVICES_URL} className="relative group transition-colors hover:text-[#0fa37f]">
            خدمات المنطقة
            <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-[#0fa37f] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href={RENTALS_URL} className="relative group transition-colors hover:text-[#d6b25e]">
            الإيجارات
            <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-[#d6b25e] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="relative group transition-colors hover:text-[#0fa37f]">
            خدمة العملاء
            <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-[#0fa37f] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href={SERVICES_URL} className="hidden rounded-full bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#0fa37f]/20 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0fa37f]/30 md:inline-flex">
            تصفح الخدمات
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-[#071614] p-2 transition hover:text-[#d6b25e]"
            aria-label="القائمة الرئيسية"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#d6b25e]/10 bg-[#fdfbf7] px-4 py-4 shadow-lg absolute w-full left-0">
          <nav className="flex flex-col gap-4 text-[#071614] font-bold text-[16px]">
            <a href={SERVICES_URL} className="py-2 hover:text-[#0fa37f] transition-colors">
              خدمات المنطقة
            </a>
            <a href={RENTALS_URL} className="py-2 hover:text-[#d6b25e] transition-colors">
              الإيجارات
            </a>
            <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#0fa37f] transition-colors">
              خدمة العملاء
            </a>
            <a href={SERVICES_URL} className="mt-2 text-center rounded-xl bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-6 py-3 text-white shadow-md">
              تصفح الخدمات
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
