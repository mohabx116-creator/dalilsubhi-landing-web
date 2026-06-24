import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import { SERVICES_URL, RENTALS_URL, WHATSAPP_GROUP_URL } from '../lib/config/links';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ebdcb9]/40 bg-[#fdfbf7]/90 shadow-[0_4px_30px_rgba(214,178,94,0.03)] backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:h-20 lg:px-8 lg:py-0">
        <Link
          to="/"
          className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-[#d6b25e]/30 shadow-sm transition group-hover:border-[#d6b25e]/50 sm:h-11 sm:w-11">
            <img src={dalilSubhiLogo} alt="دليل السبحي" className="h-full w-full object-contain" />
          </div>
          <span className="text-base font-black leading-none text-[#071614] transition group-hover:text-tertiary sm:text-lg">
            دليل السبحي
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-xs font-bold text-[#071614] lg:flex">
          <a href={SERVICES_URL} className="transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
            خدمات المنطقة
          </a>
          <a href={RENTALS_URL} className="transition-colors hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]">
            الإيجارات
          </a>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
          >
            خدمة العملاء
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SERVICES_URL}
            className="hidden min-h-9 items-center rounded-full bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-4.5 py-2 text-xs font-bold text-white shadow-md shadow-[#0fa37f]/15 transition hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f] md:inline-flex"
          >
            تصفح الخدمات
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ebdcb9] bg-white text-[#071614] transition hover:border-[#d6b25e] hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e] lg:hidden"
            aria-label="القائمة الرئيسية"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 w-full border-t border-[#ebdcb9]/20 bg-[#fdfbf7] px-4 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1.5 text-sm font-bold text-[#071614]">
            <a href={SERVICES_URL} className="rounded-xl bg-white px-4 py-2.5 transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
              خدمات المنطقة
            </a>
            <a href={RENTALS_URL} className="rounded-xl bg-white px-4 py-2.5 transition-colors hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]">
              الإيجارات
            </a>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-4 py-2.5 transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
            >
              خدمة العملاء
            </a>
            <a
              href={SERVICES_URL}
              className="mt-1 rounded-xl bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-6 py-2.5 text-center text-xs font-bold text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
            >
              تصفح الخدمات
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
