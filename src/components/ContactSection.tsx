import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';

const phone = '+201027613133';
const email = 'mohabx116@gmail.com';

export default function ContactSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-white/12 bg-[linear-gradient(135deg,rgba(14,60,50,.82),rgba(8,22,20,.94))] p-6 shadow-2xl sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold text-[#f4d98c]">تواصل معنا</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">جاهزون لاستقبال استفسارك</h2>
            <div className="mt-6 flex flex-col gap-3 text-white/76 sm:flex-row sm:flex-wrap">
              <a className="inline-flex items-center gap-2" href={`tel:${phone}`}>
                <Phone size={18} />
                {phone}
              </a>
              <a className="inline-flex items-center gap-2" href={`mailto:${email}`}>
                <Mail size={18} />
                {email}
              </a>
            </div>
          </div>
          <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d6b25e] px-7 py-4 font-bold text-[#071614] transition hover:bg-[#f4d98c]" to="/contact">
            تواصل معنا
            <ArrowLeft size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
