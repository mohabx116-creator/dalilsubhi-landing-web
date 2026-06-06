import { Mail, Phone } from 'lucide-react';

const phone = '+201027613133';
const email = 'mohabx116@gmail.com';

export default function ContactPage() {
  return (
    <main className="min-h-[76svh] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold text-[#f4d98c]">تواصل معنا</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">يسعدنا استقبال رسالتك</h1>
        <p className="mt-5 text-lg leading-9 text-white/70">
          للتواصل بخصوص الإيجارات أو خدمات السكان داخل دليل السبحي، استخدم بيانات التواصل التالية.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          <a className="contact-tile" href={`tel:${phone}`}>
            <Phone className="text-[#f4d98c]" size={28} />
            <span>{phone}</span>
          </a>
          <a className="contact-tile" href={`mailto:${email}`}>
            <Mail className="text-[#f4d98c]" size={28} />
            <span>{email}</span>
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d6b25e] px-7 py-4 font-bold text-[#071614] transition hover:bg-[#f4d98c]" href={`tel:${phone}`}>
            <Phone size={19} />
            اتصل بنا
          </a>
          <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/8 px-7 py-4 font-bold text-white transition hover:border-[#d6b25e]/55 hover:text-[#f4d98c]" href={`mailto:${email}`}>
            <Mail size={19} />
            إرسال بريد إلكتروني
          </a>
        </div>
      </div>
    </main>
  );
}
