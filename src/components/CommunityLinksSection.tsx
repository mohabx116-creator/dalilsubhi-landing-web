import { MessageCircle, Map } from 'lucide-react';
import { FACEBOOK_GROUP_URL, WHATSAPP_GROUP_URL, COMMUNITY_HUB_URL } from '../lib/config/links';

export default function CommunityLinksSection() {
  return (
    <section id="community" className="bg-white/50 py-10 sm:py-16 backdrop-blur-[4px]">
      <div id="contact" className="scroll-mt-20" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-black text-[#071614] sm:text-3xl">روابط التواصل</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#128C7E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]">
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            خدمة العملاء
          </a>
          <a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-lg font-bold text-white shadow-lg shadow-[#1877F2]/30 transition hover:bg-[#0c5bce] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1877F2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="sm:w-6 sm:h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            جروب الفيس بوك
          </a>
        </div>

        <div className="hidden sm:block mx-auto mt-16 max-w-2xl rounded-3xl border border-[#0fa37f]/20 bg-white p-8 text-right shadow-[0_8px_30px_rgba(15,163,127,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,163,127,0.1)] sm:p-10">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0fa37f]/10 text-[#0fa37f]">
            <Map size={28} />
          </div>
          <h3 className="mb-3 text-2xl font-black text-[#071614] sm:text-3xl">البوابة المجتمعية</h3>
          <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
            مطاعم، طوارئ، إرشادات وروابط مهمة في مكان واحد.
          </p>
          <a
            href={COMMUNITY_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#071614] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#071614]/20 transition hover:bg-[#0a2420] hover:shadow-[#071614]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#071614]"
          >
            استكشف البوابة المجتمعية
          </a>
        </div>
      </div>
    </section>
  );
}
