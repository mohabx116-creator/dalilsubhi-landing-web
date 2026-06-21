import { ArrowLeft, Home, Wrench, Megaphone, MessageCircle, Users, Building } from 'lucide-react';
import { SERVICES_URL, RENTALS_URL, OWNERS_URL, WHATSAPP_GROUP_URL, FACEBOOK_GROUP_URL } from '../lib/config/links';


export default function MainGatewaySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#faf8f2] to-[#f6f9f8] py-24 z-10">
      {/* Decorative blurred background elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b25e]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-[#0fa37f]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black text-[#071614] sm:text-5xl mb-4 tracking-tight">اختر وجهتك</h2>
        <p className="text-xl text-gray-600/90 mb-16 max-w-2xl mx-auto">

        </p>

        {/* Main Conversion Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-right">

          {/* Services Card */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,163,127,0.08)] p-8 border border-[#0fa37f]/20 group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0fa37f]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0fa37f]/10 transition group-hover:bg-[#0fa37f]/20 group-hover:scale-105 duration-300">
              <Wrench size={32} className="text-[#0fa37f]" />
            </div>
            <h3 className="mb-3 text-3xl font-black text-[#071614]">خدمات المنطقة</h3>
            <p className="mb-8 flex-1 text-lg text-gray-600 leading-relaxed">
              استعرض المرافق والخدمات الفنية .
            </p>
            <a href={SERVICES_URL} className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] px-6 text-lg font-bold text-white shadow-md shadow-[#0fa37f]/20 transition hover:shadow-lg hover:shadow-[#0fa37f]/30">
              دخول خدمات المنطقة
              <ArrowLeft size={20} />
            </a>
          </div>

          {/* Rentals Card */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(214,178,94,0.12)] p-8 border border-[#d6b25e]/30 group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d6b25e]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d6b25e]/10 transition group-hover:bg-[#d6b25e]/20 group-hover:scale-105 duration-300">
              <Home size={32} className="text-[#d6b25e]" />
            </div>
            <h3 className="mb-3 text-3xl font-black text-[#071614]">الإيجارات</h3>
            <p className="mb-8 flex-1 text-lg text-gray-600 leading-relaxed">
              تصفح الإعلانات المتاحة أو أعلن عن وحدتك بسهولة.
            </p>
            <a href={RENTALS_URL} className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d6b25e] to-[#cda44b] px-6 text-lg font-bold text-[#071614] shadow-md shadow-[#d6b25e]/20 transition hover:shadow-lg hover:shadow-[#d6b25e]/30">
              دخول الإيجارات
              <ArrowLeft size={20} />
            </a>
          </div>

          {/* Real Estate Coming Soon Card */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm shadow-sm p-8 border border-gray-100 opacity-90">
            <div className="absolute top-8 left-8 rounded-full border border-[#d6b25e]/20 bg-[#d6b25e]/5 px-4 py-1 text-sm font-bold text-[#d6b25e]">
              قريباً
            </div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100">
              <Building size={32} className="text-gray-400" />
            </div>
            <h3 className="mb-3 text-3xl font-black text-gray-400">العقارات</h3>
            <p className="mb-8 flex-1 text-lg text-gray-400/80 leading-relaxed">
              قسم مخصص لعرض فرص العقارات والأراضي في المنطقة سيتم إطلاقه قريباً.
            </p>
            <div className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gray-50 border border-gray-100 px-6 text-lg font-bold text-gray-400 cursor-not-allowed">
              قريباً
            </div>
          </div>
        </div>

        {/* Secondary CTA Row */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a href={OWNERS_URL} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-2.5 text-sm font-bold text-gray-600 shadow-sm transition hover:bg-white hover:border-[#d6b25e] hover:text-[#071614] hover:shadow-md">
            <Megaphone size={16} className="text-[#d6b25e]" />
            أعلن عن وحدتك
          </a>
          <a href={WHATSAPP_GROUP_URL} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-2.5 text-sm font-bold text-gray-600 shadow-sm transition hover:bg-white hover:border-[#25D366] hover:text-[#071614] hover:shadow-md">
            <MessageCircle size={16} className="text-[#25D366]" />
            خدمة العملاء
          </a>
          <a href={FACEBOOK_GROUP_URL} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-2.5 text-sm font-bold text-gray-600 shadow-sm transition hover:bg-white hover:border-[#1877F2] hover:text-[#071614] hover:shadow-md">
            <Users size={16} className="text-[#1877F2]" />
            جروب الفيس بوك
          </a>
        </div>
      </div>
    </section>
  );
}
