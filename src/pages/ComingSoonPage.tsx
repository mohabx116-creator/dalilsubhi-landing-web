import logo from '../assets/dalil-subhi-logo.jpg';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen w-full bg-[#faf8f5] flex flex-col items-center justify-center p-6 select-none">
      <div className="flex flex-col items-center text-center">
        {/* Centered Logo Container */}
        <div className="w-[260px] sm:w-[360px] md:w-[400px] lg:w-[420px] mb-6 transition-transform duration-500 ease-out hover:scale-[1.01]">
          <img 
            src={logo} 
            alt="دليل السبحي - Dalil Subhi" 
            className="w-full h-auto object-contain mix-blend-multiply"
            draggable="false"
          />
        </div>

        {/* Coming Soon Subtitle */}
        <div className="space-y-2 mt-2">
          <span className="block text-[#c49a3a] font-bold tracking-[0.3em] text-xs sm:text-sm uppercase pr-[0.3em]">
            COMING SOON
          </span>
          <span className="block text-[#172414] font-black text-xs sm:text-sm tracking-wide opacity-80">
            قريباً
          </span>
        </div>
      </div>
    </div>
  );
}
