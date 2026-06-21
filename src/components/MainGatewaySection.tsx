import { ArrowLeft, Building, Home, Megaphone, MessageCircle, Users, Wrench } from 'lucide-react';
import { FACEBOOK_GROUP_URL, OWNERS_URL, RENTALS_URL, SERVICES_URL, WHATSAPP_GROUP_URL } from '../lib/config/links';

export default function MainGatewaySection() {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#faf8f2] to-[#f6f9f8] py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b25e]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-[#0fa37f]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto mb-16 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#071614] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          منصة آمنة لجميع عقارات وخدمات المنطقة
        </h2>

        <div className="grid gap-8 text-right sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#0fa37f]/20 bg-white/95 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,163,127,0.08)]">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0fa37f]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0fa37f]/10 transition duration-300 group-hover:scale-105 group-hover:bg-[#0fa37f]/20">
              <Wrench size={32} className="text-[#0fa37f]" />
            </div>
            <h3 className="mb-3 text-3xl font-black text-[#071614]">خدمات المنطقة</h3>
            <p className="mb-8 flex-1 text-lg leading-relaxed text-gray-600">
              استعرض دليل الخدمات والمرافق المتاحة للمنطقة من مكان واحد.
            </p>
            <a href={SERVICES_URL} className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-6 text-lg font-bold text-white shadow-md shadow-[#0fa37f]/20 transition hover:shadow-lg hover:shadow-[#0fa37f]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
              دخول خدمات المنطقة
              <ArrowLeft size={20} />
            </a>
          </div>

          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#d6b25e]/30 bg-white/95 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(214,178,94,0.12)]">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d6b25e]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d6b25e]/10 transition duration-300 group-hover:scale-105 group-hover:bg-[#d6b25e]/20">
              <Home size={32} className="text-[#d6b25e]" />
            </div>
            <h3 className="mb-3 text-3xl font-black text-[#071614]">الإيجارات</h3>
            <p className="mb-8 flex-1 text-lg leading-relaxed text-gray-600">
              تصفح إعلانات الإيجار المعتمدة أو أعلن عن وحدتك بسهولة.
            </p>
            <a href={RENTALS_URL} className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d6b25e] to-[#cda44b] px-6 text-lg font-bold text-[#071614] shadow-md shadow-[#d6b25e]/20 transition hover:shadow-lg hover:shadow-[#d6b25e]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]">
              دخول الإيجارات
              <ArrowLeft size={20} />
            </a>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white/60 p-8 opacity-90 shadow-sm backdrop-blur-sm">
            <div className="absolute top-8 left-8 rounded-full border border-[#d6b25e]/20 bg-[#d6b25e]/5 px-4 py-1 text-sm font-bold text-[#c4962c]">
              قريباً
            </div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50">
              <Building size={32} className="text-gray-400" />
            </div>
            <h3 className="mb-3 text-3xl font-black text-gray-500">العقارات</h3>
            <p className="mb-8 flex-1 text-lg leading-relaxed text-gray-500">
              قسم مخصص لعرض فرص العقارات والأراضي في المنطقة سيتم إطلاقه قريباً.
            </p>
            <div className="inline-flex min-h-[56px] cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-6 text-lg font-bold text-gray-400">
              قريباً
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a href={OWNERS_URL} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-6 py-2.5 text-sm font-bold text-gray-600 shadow-sm backdrop-blur-sm transition hover:border-[#d6b25e] hover:bg-white hover:text-[#071614] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b25e]">
            <Megaphone size={16} className="text-[#d6b25e]" />
            أعلن عن وحدتك
          </a>
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-6 py-2.5 text-sm font-bold text-gray-600 shadow-sm backdrop-blur-sm transition hover:border-[#25D366] hover:bg-white hover:text-[#071614] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]">
            <MessageCircle size={16} className="text-[#25D366]" />
            خدمة العملاء
          </a>
          <a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-6 py-2.5 text-sm font-bold text-gray-600 shadow-sm backdrop-blur-sm transition hover:border-[#1877F2] hover:bg-white hover:text-[#071614] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1877F2]">
            <Users size={16} className="text-[#1877F2]" />
            جروب الفيس بوك
          </a>
        </div>
      </div>
    </section>
  );
}
