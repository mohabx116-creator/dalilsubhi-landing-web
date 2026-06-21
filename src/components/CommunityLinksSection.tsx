import { MessageCircle } from 'lucide-react';
import { FACEBOOK_GROUP_URL, WHATSAPP_GROUP_URL } from '../lib/config/links';

export default function CommunityLinksSection() {
  return (
    <section id="community" className="bg-white/50 py-16 backdrop-blur-[4px]">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black text-[#071614]">روابط التواصل</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#128C7E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]">
            <MessageCircle size={24} />
            خدمة العملاء
          </a>
          <a href={FACEBOOK_GROUP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#1877F2]/30 transition hover:bg-[#0c5bce] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1877F2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            جروب الفيس بوك
          </a>
        </div>
      </div>
    </section>
  );
}
