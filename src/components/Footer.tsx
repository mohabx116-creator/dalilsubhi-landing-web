import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { ADMIN_URL } from '../lib/config/links';

const phone = '+201027613133';
const email = 'mohabx116@gmail.com';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05110f] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl font-black text-white">دليل السبحي</h2>
          <p className="mt-4 max-w-md leading-8 text-white/62">
            منصة مستقلة لتنظيم الإيجارات وخدمات السكان والتواصل داخل الكمباوند.
          </p>
        </div>
        <div className="space-y-3 text-white/70">
          <a className="flex items-center gap-2 hover:text-[#f4d98c]" href={`tel:${phone}`}>
            <Phone size={17} />
            {phone}
          </a>
          <a className="flex items-center gap-2 hover:text-[#f4d98c]" href={`mailto:${email}`}>
            <Mail size={17} />
            {email}
          </a>
        </div>
        <nav className="grid gap-3 text-white/70 sm:grid-cols-2 lg:grid-cols-1">
          <Link to="/privacy-policy">سياسة الخصوصية</Link>
          <Link to="/terms">الشروط والأحكام</Link>
          <Link to="/contact">تواصل معنا</Link>
          <a href={ADMIN_URL} rel="noopener noreferrer" target="_blank">لوحة الإدارة</a>
        </nav>
      </div>
    </footer>
  );
}
