import { useState, useEffect } from 'react';
import { Building2, Home, Users, Zap } from 'lucide-react';
import dalilSubhiLogoFancy from '../assets/dalil-subhi-logo-fancy.png';
import communityMotion from '../assets/community-motion.png';
import rentalsMotion from '../assets/rentals-motion.png';
import { fetchPlatformStats } from '../lib/platform-stats';
import type { PlatformStatsData } from '../types/platform-stats';

export default function AnimatedPlatformSection() {
  const [stats, setStats] = useState<PlatformStatsData | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchPlatformStats().then((data) => {
      if (mounted && data) {
        setStats(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const getStat = (field: keyof PlatformStatsData) => {
    if (!stats || stats.isFallback) return null;
    if (stats.unavailableCounts.includes(field)) return null;
    const val = stats[field];
    return typeof val === 'number' && val > 0 ? val : null;
  };

  const servicesStat = getStat('servicesCount');
  const realEstateStat = getStat('realEstateListingsCount');
  const communityStat = getStat('categoriesCount'); // Categories representation of community
  const rentalStat = getStat('rentalListingsCount');

  const highlights = [
    {
      icon: <Zap className="h-5 w-5 text-[#d6b25e]" />,
      title: servicesStat ? `${servicesStat} خدمة محلية` : 'خدمات محلية منظمة',
      desc: 'دليل متكامل لأفضل الخدمات في المنطقة',
    },
    {
      icon: <Home className="h-5 w-5 text-[#d6b25e]" />,
      title: realEstateStat ? `${realEstateStat} عقار متاح` : 'عقارات وإيجارات في مكان واحد',
      desc: 'تصفح أحدث العروض والوحدات المتاحة',
    },
    {
      icon: <Users className="h-5 w-5 text-[#d6b25e]" />,
      title: communityStat ? `${communityStat} قسم منظم` : 'بوابة مجتمعية للمنطقة',
      desc: 'تواصل وتفاعل مع جيرانك بكل سهولة',
    },
    {
      icon: <Building2 className="h-5 w-5 text-[#d6b25e]" />,
      title: rentalStat ? `${rentalStat} وحدة للإيجار` : 'تجربة موحدة للخدمات والعقارات',
      desc: 'واجهة بسيطة تجمع كل احتياجاتك',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071614] to-[#0a2420] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,163,127,0.14),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(214,178,94,0.10),transparent_22%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center rounded-full bg-[#107760]/20 px-3 py-1 text-sm font-medium text-[#0fa37f] ring-1 ring-inset ring-[#0fa37f]/30">
              منصة دليل السبحي
            </span>

            <h2 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl">
              كل ما يخص المنطقة في
              <span className="bg-gradient-to-r from-[#d6b25e] to-[#e8d195] bg-clip-text text-transparent">
                {' '}تجربة رقمية واحدة
              </span>
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-gray-300">
              نتنقل بين الخدمات، العقارات، الإيجارات والبوابة المجتمعية من واجهة واحدة
              بسيطة وواضحة. صُممت لتسهيل وصولك لكل ما تحتاجه في منطقتك.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex h-[480px] w-full max-w-[360px] items-center justify-center sm:max-w-[420px] lg:max-w-none lg:h-[600px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0fa37f] opacity-20 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[110px]" />

            <div
              className="absolute right-0 top-2 h-[460px] w-[220px] origin-bottom overflow-hidden rounded-[2.25rem] border-[6px] border-[#111] bg-[#06110f] shadow-2xl opacity-90 sm:right-8 sm:top-10 sm:h-[540px] sm:w-[260px] sm:border-[8px] animate-float transform -rotate-6"
              style={{ animationDelay: '0s' }}
            >
              <div className="absolute inset-x-0 top-0 z-10 flex h-6 justify-center">
                <div className="h-4 w-24 rounded-b-xl bg-[#111]" />
              </div>

              <div className="relative h-full p-3 pt-8 sm:p-5 sm:pt-10">
                <img
                  src={rentalsMotion}
                  alt="لقطة من واجهة دليل السبحي"
                  className="h-full w-full rounded-[1.5rem] object-cover object-center"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-black/8 via-transparent to-black/35" />
                <div className="absolute inset-x-4 bottom-4 overflow-hidden rounded-[1.15rem] border border-white/20 bg-white/85 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                  <img
                    src={communityMotion}
                    alt="محتوى البوابة المجتمعية"
                    className="h-[44%] w-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="bg-white px-3 py-3">
                    <div className="mb-2 h-2.5 w-2/3 rounded-full bg-[#d8dfdb]" />
                    <div className="mb-2 h-2.5 w-1/2 rounded-full bg-[#e6ebe8]" />
                    <div className="flex gap-2">
                      <span className="h-2.5 w-14 rounded-full bg-[#f1ead5]" />
                      <span className="h-2.5 w-20 rounded-full bg-[#e3f2ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute left-0 bottom-0 z-10 h-[480px] w-[230px] origin-bottom overflow-hidden rounded-[2.25rem] border-[6px] border-[#111] bg-[#f6f0df] shadow-[0_20px_60px_rgba(0,0,0,0.7)] sm:left-4 sm:bottom-10 sm:h-[560px] sm:w-[280px] sm:border-[8px] animate-float transform rotate-3"
              style={{ animationDelay: '-3.5s' }}
            >
              <div className="absolute inset-x-0 top-0 z-10 flex h-6 justify-center">
                <div className="h-4 w-24 rounded-b-xl bg-[#111]" />
              </div>

              <div className="relative h-full p-4 pt-10 sm:p-5 sm:pt-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(255,255,255,0.88),transparent_30%),linear-gradient(180deg,#fffdf7_0%,#f3ebd2_100%)]" />
                <div className="absolute inset-x-6 top-20 h-28 rounded-full bg-[#d6b25e]/14 blur-2xl" />
                <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-[#d6b25e]/20 bg-white/90 p-1.5 shadow-[0_12px_24px_rgba(95,78,28,0.12)] backdrop-blur-sm sm:h-16 sm:w-16">
                    <img
                      src={dalilSubhiLogoFancy}
                      alt="شعار دليل السبحي"
                      className="h-full w-full object-contain"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="relative z-10 flex h-full flex-col items-center pt-1 text-center">
                  <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-[#d6b25e]/20 bg-white/85 p-3 shadow-[0_18px_38px_rgba(95,78,28,0.14)] backdrop-blur-sm sm:h-32 sm:w-32">
                    <img
                      src={dalilSubhiLogoFancy}
                      alt="شعار دليل السبحي"
                      className="h-full w-full object-contain"
                      loading="eager"
                    />
                  </div>
                  <h3 className="text-[12px] font-black leading-tight text-[#2d2413] sm:text-sm">
                    منصة أمنا لجميع خدمات المنطقة
                  </h3>
                  <p className="mt-1 max-w-[170px] text-[9px] leading-4 text-[#6f6140] sm:text-[10px]">
                    بوابة موثوقة تجمع الخدمات، الإيجارات، والعقارات في مكان واحد.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-x-6 bottom-6 h-24 rounded-[2rem] bg-white/20 blur-2xl" />
                <div className="pointer-events-none absolute inset-x-8 bottom-8 h-[1px] bg-gradient-to-r from-transparent via-[#b89448]/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
