import { Building2, Home, Users, Zap } from 'lucide-react';

export default function AnimatedPlatformSection() {
  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-[#d6b25e]" />,
      title: 'خدمات محلية منظمة',
      desc: 'دليل متكامل لأفضل الخدمات في المنطقة'
    },
    {
      icon: <Home className="w-5 h-5 text-[#d6b25e]" />,
      title: 'عقارات وإيجارات في مكان واحد',
      desc: 'تصفح أحدث العروض والوحدات المتاحة'
    },
    {
      icon: <Users className="w-5 h-5 text-[#d6b25e]" />,
      title: 'بوابة مجتمعية للمنطقة',
      desc: 'تواصل وتفاعل مع جيرانك بكل سهولة'
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#d6b25e]" />,
      title: 'تجربة موحدة',
      desc: 'واجهة بسيطة تجمع كل احتياجاتك'
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#071614] to-[#0a2420]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-[#107760]/20 px-3 py-1 text-sm font-medium text-[#0fa37f] ring-1 ring-inset ring-[#0fa37f]/30 mb-6">
              منصة دليل السبحي
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              كل ما يخص المنطقة في <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6b25e] to-[#e8d195]">تجربة رقمية واحدة</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              تنقّل بين الخدمات، العقارات، الإيجارات والبوابة المجتمعية من واجهة واحدة بسيطة وواضحة. صُممت لتسهيل وصولك لكل ما تحتاجه في منطقتك.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side (Mockups) */}
          <div className="relative h-[480px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0 w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none mx-auto">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[400px] h-[280px] md:h-[400px] bg-[#0fa37f] opacity-20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Mockup 1: Services/Community (Behind & Left in LTR, Behind & Right in RTL context visual) */}
            <div 
              className="absolute right-0 md:right-8 top-0 md:top-10 w-[220px] md:w-[260px] h-[460px] md:h-[540px] rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[8px] border-[#1a1a1a] bg-[#0a1a18] shadow-2xl overflow-hidden animate-float opacity-80 md:opacity-90 transform -rotate-6 origin-bottom"
              style={{ animationDelay: '0s' }}
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-5 md:h-6 flex justify-center z-10">
                <div className="w-20 md:w-24 h-4 bg-[#1a1a1a] rounded-b-xl"></div>
              </div>
              
              {/* Fake UI: Services */}
              <div className="p-4 md:p-5 pt-8 md:pt-10 h-full flex flex-col gap-3 md:gap-4 relative z-0">
                <div className="w-full h-8 md:h-10 bg-white/10 rounded-full flex items-center px-4">
                  <span className="text-white/30 text-[10px] md:text-xs">بحث عن خدمات...</span>
                </div>
                <div className="flex gap-2">
                  <div className="h-7 md:h-8 px-3 md:w-16 bg-[#0fa37f]/40 rounded-full flex items-center justify-center">
                    <span className="text-[9px] md:text-[10px] text-white">الكل</span>
                  </div>
                  <div className="h-7 md:h-8 px-3 md:w-16 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-[9px] md:text-[10px] text-white/70">صيانة</span>
                  </div>
                  <div className="h-7 md:h-8 px-3 md:w-16 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-[9px] md:text-[10px] text-white/70">مرافق</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-full bg-white/5 rounded-2xl p-2 md:p-3 flex gap-3">
                      <div className="w-12 md:w-16 h-12 md:h-full min-h-[48px] md:min-h-[64px] bg-white/10 rounded-lg shrink-0"></div>
                      <div className="flex-1 flex flex-col justify-center space-y-2 py-1">
                        <div className="h-2.5 md:h-3 w-3/4 bg-white/20 rounded"></div>
                        <div className="h-2 md:h-2.5 w-1/2 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mockup 2: Real Estate/Rentals (Front & Left in RTL context visual) */}
            <div 
              className="absolute left-0 md:left-4 bottom-0 md:bottom-10 w-[230px] md:w-[280px] h-[480px] md:h-[560px] rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[8px] border-[#111] bg-[#06110f] shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden animate-float transform rotate-3 origin-bottom z-10"
              style={{ animationDelay: '-3.5s' }}
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-5 md:h-6 flex justify-center z-10">
                <div className="w-20 md:w-24 h-4 bg-[#111] rounded-b-xl"></div>
              </div>
              
              {/* Fake UI: Real Estate */}
              <div className="p-4 md:p-5 pt-8 md:pt-10 h-full flex flex-col gap-3 md:gap-4 relative z-0">
                <div className="w-full h-28 md:h-32 bg-[#d6b25e]/20 rounded-2xl relative overflow-hidden flex items-end p-2 md:p-3">
                  <div className="px-2 py-1 bg-[#d6b25e]/90 backdrop-blur rounded text-black text-[9px] md:text-[10px] font-bold">
                    وحدة للإيجار
                  </div>
                </div>
                <div className="w-3/4 h-4 md:h-5 bg-white/20 rounded mt-1"></div>
                <div className="w-1/2 h-3 md:h-4 bg-white/10 rounded"></div>
                
                <div className="mt-2 grid grid-cols-2 gap-2 md:gap-3">
                  <div className="h-20 md:h-24 bg-white/5 rounded-xl flex items-end p-2">
                    <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="h-20 md:h-24 bg-white/5 rounded-xl flex items-end p-2">
                    <div className="w-2/3 h-2 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="mt-auto w-full h-10 md:h-12 bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] rounded-xl flex items-center justify-center shadow-lg shadow-[#0fa37f]/20">
                  <span className="text-white text-xs md:text-sm font-bold">تفاصيل الوحدة</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
