import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50/50 py-10 sm:py-16 backdrop-blur-[4px]">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-black text-[#071614] sm:text-4xl">عن دليل السبحي</h2>
        <p className="mb-4 text-sm sm:text-lg leading-relaxed text-gray-600">
          دليل السبحي هو المنصة الرسمية التي تجمع الإيجارات والعقارات والخدمات الخاصة بالمنطقة في مكان واحد منظم. يتيح الوصول إلى الإعلانات والخدمات والروابط المهمة بطريقة واضحة وسهلة، مع توجيه الزوار إلى الأقسام المناسبة مثل خدمات المنطقة والإيجارات والعقارات، حتى يجد السكان والزوار ما يحتاجونه بثقة ودون تكرار أو تشتيت. ويحافظ المحتوى المعروض على لغة مباشرة تساعد المستخدم على فهم الخيارات المتاحة قبل الانتقال إلى الخدمة المناسبة.
        </p>
        <p className="text-[11px] sm:text-sm text-gray-500">
          <Link to="/publishing-policy" className="underline underline-offset-4 transition hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
            نلتزم بمعايير واضحة للنشر والإعلان بما يحفظ جودة المحتوى وموثوقيته.
          </Link>
        </p>
      </div>
    </section>
  );
}
