
import { COMMUNITY_HUB_URL, SERVICES_URL, RENTALS_URL, REAL_ESTATE_URL } from '../lib/config/links';
import heroBg from '../assets/sebahi-gardens-hero.png';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import servicesIcon from '../assets/services-icon.webp';

export default function HeroSection() {
  const highlights = [
    { label: 'البوابة المجتمعية', imageUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Handshake/3D/handshake_3d.png', href: COMMUNITY_HUB_URL },
    { label: 'الخدمات', imageUrl: servicesIcon, href: SERVICES_URL },
    { label: 'الإيجارات', imageUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/House%20with%20garden/3D/house_with_garden_3d.png', href: RENTALS_URL },
    { label: 'العقارات', imageUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Office%20building/3D/office_building_3d.png', href: REAL_ESTATE_URL },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] to-white text-[#071614]">
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-[0.06] mix-blend-multiply grayscale-[30%]"
          src={heroBg}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/50 via-white/78 to-white" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-8 sm:py-14 text-center sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto flex flex-col items-center justify-center pt-1 pb-3 sm:pt-4">
          <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border border-[#ebdcb9]/40 bg-white/80 shadow-[0_8px_30px_rgba(214,178,94,0.08)] backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02] sm:h-72 sm:w-72 md:h-96 md:w-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d6b25e]/5 via-transparent to-transparent opacity-50" />
            <img
              src={dalilSubhiLogo}
              alt="شعار دليل السبحي الرسمي"
              className="relative z-10 h-[92%] w-[92%] object-contain mix-blend-multiply drop-shadow-sm"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
                maskImage: 'radial-gradient(circle, black 55%, transparent 72%)',
              }}
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="mt-2 mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#ebdcb9] bg-white/80 px-3.5 py-1.5 text-xs font-bold text-[#5d4c18] shadow-sm backdrop-blur-md">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#0fa37f]" />
          المنصة الامنة لجميع خدمات المنطقة
        </div>


        <div className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-2 text-right sm:grid-cols-4 sm:gap-3">
          {highlights.map(({ label, imageUrl, href }) => (
            <a
              key={label}
              href={href}
              className="group flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between rounded-2xl border border-[#ebdcb9]/40 bg-white/60 p-3 sm:px-5 sm:py-4 shadow-[0_8px_30px_rgba(7,22,20,0.03)] backdrop-blur-md gap-2 sm:gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b25e]/60 hover:bg-white hover:shadow-[0_12px_40px_rgba(214,178,94,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b25e]"
            >
              <div className="text-center sm:text-right">
                <p className="text-sm sm:text-base font-black text-[#071614]">{label}</p>
              </div>
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fcf9f2] border border-[#ebdcb9]/60 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ebdcb9]/30 group-hover:border-[#ebdcb9]">
                <img src={imageUrl} alt={label} className="h-8 w-8 sm:h-9 sm:w-9 object-contain drop-shadow-sm" loading="lazy" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
