import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50/50 py-16 backdrop-blur-[4px]">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-black text-[#071614] sm:text-4xl">عن دليل السبحي</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          دليل السبحي منصة آمنة لجميع عقارات وخدمات المنطقة، تجمع الروابط المهمة في تجربة واضحة وسهلة الوصول.
        </p>
        <p className="text-sm text-gray-500">
          <Link to="/publishing-policy" className="underline underline-offset-4 transition hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
            نلتزم بمعايير واضحة للنشر والإعلان بما يحفظ جودة المحتوى وموثوقيته.
          </Link>
        </p>
      </div>
    </section>
  );
}
