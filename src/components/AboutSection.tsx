export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-[#0fa37f]/10 px-6 py-2 text-sm font-bold text-[#0fa37f] mb-6">
          عن المنصة
        </div>
        <h2 className="text-3xl font-black text-[#071614] sm:text-4xl mb-6">عن دليل صبحي</h2>
        <p className="text-xl leading-relaxed text-gray-600">
          دليل صبحي منصة محلية تساعد سكان المنطقة والزوار على الوصول إلى الخدمات والإيجارات والمعلومات المهمة بشكل أسهل وأوضح.
        </p>
      </div>
    </section>
  );
}
