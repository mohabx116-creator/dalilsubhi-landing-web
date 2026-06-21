import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import { SERVICES_URL, RENTALS_URL, WHATSAPP_GROUP_URL } from '../lib/config/links';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d6b25e]/20 bg-[#fdfbf7]/95 shadow-[0_4px_30px_rgba(214,178,94,0.06)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#d6b25e]/30 shadow-sm transition group-hover:border-[#d6b25e]/50 group-hover:shadow-md">
            <img src={dalilSubhiLogo} alt="دليل السبحي" className="h-full w-full object-contain" />
          </div>
          <span className="text-xl font-black text-[#071614] transition group-hover:text-[#d6b25e]">دليل السبحي</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-bold text-[#071614] md:flex">
          <a href={SERVICES_URL} className="relative transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
            خدمات المنطقة
          </a>
          <a href={RENTALS_URL} className="relative transition-colors hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]">
            الإيجارات
          </a>
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="relative transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
            خدمة العملاء
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href={SERVICES_URL} className="hidden rounded-full bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#0fa37f]/20 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0fa37f]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f] md:inline-flex">
            تصفح الخدمات
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#071614] transition hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e] md:hidden"
            aria-label="القائمة الرئيسية"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 w-full border-t border-[#d6b25e]/10 bg-[#fdfbf7] px-4 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4 text-[16px] font-bold text-[#071614]">
            <a href={SERVICES_URL} className="py-2 transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
              خدمات المنطقة
            </a>
            <a href={RENTALS_URL} className="py-2 transition-colors hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]">
              الإيجارات
            </a>
            <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="py-2 transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
              خدمة العملاء
            </a>
            <a href={SERVICES_URL} className="mt-2 rounded-xl bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-6 py-3 text-center text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
              تصفح الخدمات
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
