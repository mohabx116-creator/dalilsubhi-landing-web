import { MessageCircle, ArrowLeft } from 'lucide-react';
import { WHATSAPP_GROUP_URL, FACEBOOK_GROUP_URL, SERVICES_URL } from '../lib/config/links';

export default function CommunityLinksSection() {
  return (
    <section id="community" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-[#071614] sm:text-4xl">روابط المجتمع</h2>
        <p className="mt-4 text-lg text-gray-600">تابع أخبار المنطقة وتواصل مع المجتمع من خلال الروابط الرسمية.</p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#128C7E]">
            <MessageCircle size={24} />
            جروب الواتساب
          </a>
          <a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#1877F2] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#1877F2]/30 transition hover:bg-[#0c5bce]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            جروب الفيس بوك
          </a>
          <a href={SERVICES_URL} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-[#0fa37f] bg-transparent px-8 py-4 text-lg font-bold text-[#0fa37f] transition hover:bg-[#0fa37f] hover:text-white">
            خدمات المنطقة
            <ArrowLeft size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
