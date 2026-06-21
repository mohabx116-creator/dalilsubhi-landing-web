import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50/50 backdrop-blur-[4px] py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-[#071614] sm:text-4xl mb-6">عن دليل السبحي</h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-6">
          دليل السبحي منصة امنة لجميع عقارات و خدمات المنطقة.
        </p>
        <p className="text-sm text-gray-500">
          <Link to="/publishing-policy" className="hover:text-[#0fa37f] transition underline underline-offset-4">
            نلتزم بمعايير واضحة للنشر والإعلان بما يحفظ جودة المحتوى وموثوقيته.
          </Link>
        </p>
      </div>
    </section>
  );
}
