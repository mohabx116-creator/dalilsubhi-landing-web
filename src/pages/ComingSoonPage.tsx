import logo from '../assets/dalil-subhi-logo.jpg';

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fefaf4_0%,#faf8f5_38%,#f3efe6_100%)] px-6 py-10 text-[#172414]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(214,178,94,0.08),transparent_24%,transparent_76%,rgba(16,37,28,0.06))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#d6b25e]/12 blur-3xl" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center justify-center">
        <section className="w-full max-w-2xl rounded-[2rem] border border-[#d6b25e]/20 bg-white/75 px-6 py-12 text-center shadow-[0_24px_80px_rgba(16,37,28,0.08)] backdrop-blur-md sm:px-10 sm:py-14">
          <div className="mx-auto mb-8 w-[240px] sm:w-[320px] md:w-[360px]">
            <img
              src={logo}
              alt="شعار دليل السبحي الرسمي"
              className="h-auto w-full object-contain"
              draggable="false"
            />
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[#071614] sm:text-5xl">
            دليل السبحي
          </h1>
          <p className="mt-4 text-base font-semibold text-[#0f5f4a] sm:text-lg">
            الموقع الرسمي لدليل السبحي
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-9 text-[#334155] sm:text-xl">
            نعمل حالياً على تجهيز التجربة الكاملة قريباً
          </p>

          <div className="mt-9 inline-flex items-center rounded-full border border-[#d6b25e]/25 bg-[#d6b25e]/10 px-5 py-2 text-sm font-bold tracking-[0.22em] text-[#9f7a1f]">
            COMING SOON
          </div>
        </section>
      </div>
    </main>
  );
}
