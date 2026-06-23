import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import { SERVICES_URL, RENTALS_URL, WHATSAPP_GROUP_URL } from '../lib/config/links';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d6b25e]/20 bg-[#fdfbf7]/95 shadow-[0_4px_30px_rgba(214,178,94,0.06)] backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:h-20 lg:px-8 lg:py-0">
        <Link
          to="/"
          className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d6b25e]/30 shadow-sm transition group-hover:border-[#d6b25e]/50 group-hover:shadow-md sm:h-12 sm:w-12">
            <img src={dalilSubhiLogo} alt="Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø³Ø¨Ø­ÙŠ" className="h-full w-full object-contain" />
          </div>
          <span className="text-[1.05rem] font-black leading-none text-[#071614] transition group-hover:text-[#d6b25e] sm:text-xl">
            Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø³Ø¨Ø­ÙŠ
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[15px] font-bold text-[#071614] lg:flex">
          <a href={SERVICES_URL} className="transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
            Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù…Ù†Ø·Ù‚Ø©
          </a>
          <a href={RENTALS_URL} className="transition-colors hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]">
            Ø§Ù„Ø¥ÙŠØ¬Ø§Ø±Ø§Øª
          </a>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
          >
            Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SERVICES_URL}
            className="hidden min-h-11 items-center rounded-full bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-5 text-sm font-bold text-white shadow-md shadow-[#0fa37f]/20 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0fa37f]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f] md:inline-flex"
          >
            ØªØµÙØ­ Ø§Ù„Ø®Ø¯Ù…Ø§Øª
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e8dcc0] bg-white text-[#071614] transition hover:border-[#d6b25e] hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e] lg:hidden"
            aria-label="Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 w-full border-t border-[#d6b25e]/10 bg-[#fdfbf7] px-4 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 text-[16px] font-bold text-[#071614]">
            <a href={SERVICES_URL} className="rounded-2xl bg-white px-4 py-3 transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
              Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù…Ù†Ø·Ù‚Ø©
            </a>
            <a href={RENTALS_URL} className="rounded-2xl bg-white px-4 py-3 transition-colors hover:text-[#d6b25e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]">
              Ø§Ù„Ø¥ÙŠØ¬Ø§Ø±Ø§Øª
            </a>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-4 py-3 transition-colors hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
            >
              Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡
            </a>
            <a
              href={SERVICES_URL}
              className="mt-1 rounded-2xl bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-6 py-3 text-center text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
            >
              ØªØµÙØ­ Ø§Ù„Ø®Ø¯Ù…Ø§Øª
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
