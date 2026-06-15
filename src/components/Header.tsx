import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, Users, X, ArrowLeft } from 'lucide-react';
import { RENTALS_URL, RESIDENT_APP_URL, SERVICES_URL } from '../lib/config/links';

const navItems = [
  { label: 'الرئيسية', href: '/' },
  { label: 'الخدمات والمرافق', href: SERVICES_URL },
  { label: 'الإيجارات', href: '/#rentals' },
  { label: 'خدمات السكان', href: '/#resident-services' },
  { label: 'المرافق', href: '/#facilities' },
  { label: 'تواصل معنا', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleAnchorClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      window.setTimeout(() => {
        document.getElementById(href.split('#')[1])?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071614]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d6b25e]/50 bg-[#d6b25e]/15 text-[#f4d98c]">
            <Home size={22} />
          </span>
          <span className="text-xl font-black text-white">دليل السبحي</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/72 lg:flex">
          {navItems.map((item) =>
            item.href.startsWith('/#') ? (
              <a className="transition hover:text-[#f4d98c]" href={item.href} key={item.label} onClick={() => handleAnchorClick(item.href)}>
                {item.label}
              </a>
            ) : item.href.startsWith('http') ? (
              <a className="transition hover:text-[#f4d98c]" href={item.href} key={item.label} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link className="transition hover:text-[#f4d98c]" key={item.label} to={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-[#d6b25e]/55 hover:text-[#f4d98c]" href={RESIDENT_APP_URL} rel="noopener noreferrer" target="_blank">
            <Users size={18} />
            دخول السكان
          </a>
          <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d6b25e] px-5 py-3 text-sm font-bold text-[#071614] shadow-[0_18px_45px_rgba(214,178,94,.24)] transition hover:bg-[#f4d98c]" href={RENTALS_URL} rel="noopener noreferrer" target="_blank">
            تصفح الإيجارات
            <ArrowLeft size={18} />
          </a>
        </div>

        <button aria-label="القائمة" className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/8 lg:hidden" onClick={() => setIsOpen((value) => !value)} type="button">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <nav className="mx-4 mb-4 grid gap-2 rounded-3xl border border-white/12 bg-[#071614]/95 p-4 text-right shadow-2xl backdrop-blur-xl lg:hidden">
          {navItems.map((item) =>
            item.href.startsWith('/#') ? (
              <a className="rounded-2xl px-4 py-3 text-white/78 hover:bg-white/8" href={item.href} key={item.label} onClick={() => handleAnchorClick(item.href)}>
                {item.label}
              </a>
            ) : item.href.startsWith('http') ? (
              <a className="rounded-2xl px-4 py-3 text-white/78 hover:bg-white/8 text-right block" href={item.href} key={item.label} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ) : (
              <Link className="rounded-2xl px-4 py-3 text-white/78 hover:bg-white/8" key={item.label} onClick={() => setIsOpen(false)} to={item.href}>
                {item.label}
              </Link>
            ),
          )}
          <a className="mt-2 rounded-full bg-[#d6b25e] px-5 py-3 text-center font-bold text-[#071614]" href={RENTALS_URL} rel="noopener noreferrer" target="_blank">
            تصفح الإيجارات
          </a>
          <a className="rounded-full border border-white/14 px-5 py-3 text-center font-bold text-white" href={RESIDENT_APP_URL} rel="noopener noreferrer" target="_blank">
            دخول السكان
          </a>
        </nav>
      ) : null}
    </header>
  );
}
