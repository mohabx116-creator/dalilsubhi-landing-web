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
          <div className="relative h-[600px] hidden md:flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0fa37f] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Mockup 1: Services/Community (Behind & Left) */}
            <div 
              className="absolute right-12 top-10 w-[260px] h-[540px] rounded-[2.5rem] border-[8px] border-[#1a1a1a] bg-[#0a1a18] shadow-2xl overflow-hidden animate-float opacity-90 transform -rotate-6"
              style={{ animationDelay: '0s' }}
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                <div className="w-24 h-4 bg-[#1a1a1a] rounded-b-xl"></div>
              </div>
              
              {/* Fake UI: Services */}
              <div className="p-5 pt-10 h-full flex flex-col gap-4">
                <div className="w-full h-10 bg-white/10 rounded-full"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-16 bg-[#0fa37f]/40 rounded-full"></div>
                  <div className="h-8 w-16 bg-white/10 rounded-full"></div>
                  <div className="h-8 w-16 bg-white/10 rounded-full"></div>
                </div>
                <div className="flex-1 space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-full h-24 bg-white/5 rounded-2xl p-3 flex gap-3">
                      <div className="w-16 h-full bg-white/10 rounded-lg"></div>
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-3 w-3/4 bg-white/20 rounded"></div>
                        <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mockup 2: Real Estate/Rentals (Front & Right) */}
            <div 
              className="absolute left-8 bottom-10 w-[280px] h-[560px] rounded-[2.5rem] border-[8px] border-[#111] bg-[#06110f] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden animate-float transform rotate-3"
              style={{ animationDelay: '-3.5s' }}
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                <div className="w-24 h-4 bg-[#111] rounded-b-xl"></div>
              </div>
              
              {/* Fake UI: Real Estate */}
              <div className="p-5 pt-10 h-full flex flex-col gap-4">
                <div className="w-full h-32 bg-[#d6b25e]/20 rounded-2xl relative overflow-hidden">
                  <div className="absolute bottom-2 right-2 h-4 w-16 bg-[#d6b25e]/40 rounded"></div>
                </div>
                <div className="w-3/4 h-5 bg-white/20 rounded"></div>
                <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div className="h-24 bg-white/5 rounded-xl"></div>
                  <div className="h-24 bg-white/5 rounded-xl"></div>
                </div>
                <div className="mt-auto w-full h-12 bg-gradient-to-r from-[#0fa37f] to-[#0c8a6b] rounded-xl"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
