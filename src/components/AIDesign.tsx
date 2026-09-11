import { useState } from 'react';
import { CodeBlock, InfoCard, ComparisonTable, SectionHeading, ProgressBar, Accordion } from './ui';
import { InteractiveFlow, AnimatedProcess, ScenarioSimulator, FlashCards } from './ui/interactive';

const lessons = [
  { id: 1, title: 'مقدمه‌ای بر طراحی با AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی' },
  { id: 2, title: 'اصول طراحی UI/UX', duration: '۶۰ دقیقه', difficulty: 'مبتدی' },
  { id: 3, title: 'طراحی لوگو با AI', duration: '۷۵ دقیقه', difficulty: 'متوسط' },
  { id: 4, title: 'طراحی بنر و پوستر', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 5, title: 'طراحی UI وب‌سایت با AI', duration: '۹۰ دقیقه', difficulty: 'متوسط' },
  { id: 6, title: 'طراحی اپلیکیشن موبایل', duration: '۹۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 7, title: 'طراحی بسته‌بندی محصول', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 8, title: 'هویت بصری برند', duration: '۷۵ دقیقه', difficulty: 'پیشرفته' },
  { id: 9, title: 'ویرایش و بهینه‌سازی تصاویر', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 10, title: 'فروش خدمات طراحی', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
];

function Lesson1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">مقدمه‌ای بر طراحی با AI</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        هوش مصنوعی انقلابی در دنیای طراحی ایجاد کرده است. اکنون هر کسی می‌تواند با کمک AI طرح‌های حرفه‌ای ایجاد کند، حتی بدون دانش قبلی گرافیک.
      </p>

      <ComparisonTable title="ابزارهای طراحی با AI" headers={['ابزار', 'بهترین برای', 'قیمت', 'سطح']} rows={[
        ['Midjourney', 'تصاویر هنری و خلاقانه', 'از $10/ماه', 'متوسط'],
        ['DALL-E 3', 'تصاویر دقیق با متن', 'شامل ChatGPT+', 'مبتدی'],
        ['Leonardo AI', 'Game Art و کاراکتر', 'رایگان / $12', 'متوسط'],
        ['Canva AI', 'طراحی سریع', 'رایگان / $13', 'مبتدی'],
        ['Adobe Firefly', 'ویرایش حرفه‌ای', 'شامل Creative Cloud', 'پیشرفته'],
        ['v0 by Vercel', 'طراحی UI', 'رایگان / $20', 'متوسط'],
        ['Galileo AI', 'طراحی UI از متن', 'از $20/ماه', 'مبتدی'],
        ['Uizard', 'پروتوتایپ سریع', 'رایگان / $19', 'مبتدی'],
      ]} />

      <InteractiveFlow title="فرآیند طراحی با AI" steps={[
        { id: 'brief', title: 'بریف طراحی', description: 'نیازها و الزامات پروژه را مشخص کنید.', icon: '\u{1F4CB}', color: 'bg-gradient-to-br from-purple-500 to-indigo-500',
          details: ['هدف طراحی', 'مخاطب هدف', 'سبک مورد نظر', 'محدودیت‌ها و الزامات'] },
        { id: 'research', title: 'تحقیق و الهام', description: 'ایده‌ها و نمونه‌های مرتبط را بررسی کنید.', icon: '\u{1F50D}', color: 'bg-gradient-to-br from-pink-500 to-rose-500',
          details: ['بررسی رقبا', 'جمع‌آوری Moodboard', 'شناسایی ترندها', 'انتخاب پالت رنگی'] },
        { id: 'generate', title: 'تولید با AI', description: 'با ابزارهای AI طرح‌های اولیه بسازید.', icon: '\u{1F3A8}', color: 'bg-gradient-to-br from-cyan-500 to-blue-500',
          details: ['نوشتن پرامپت', 'تولید چندین نسخه', 'انتخاب بهترین‌ها', 'تکرار و بهبود'] },
        { id: 'refine', title: 'ویرایش و بهینه‌سازی', description: 'طرح‌ها را در ابزارهای گرافیکی ویرایش کنید.', icon: '\u{270F}', color: 'bg-gradient-to-br from-amber-500 to-orange-500',
          details: ['تنظیم رنگ و نور', 'حذف المان‌های اضافی', 'افزودن متن', 'بهینه‌سازی ابعاد'] },
        { id: 'deliver', title: 'تحویل', description: 'فایل‌های نهایی را در فرمت‌های مختلف تحویل دهید.', icon: '\u{1F4E6}', color: 'bg-gradient-to-br from-emerald-500 to-teal-500',
          details: ['فرمت‌های مختلف (PNG, SVG, PDF)', 'سایزهای مختلف', 'راهنمای استفاده', 'فایل لایه‌باز'] },
      ]} />

      <FlashCards title="اصول پایه طراحی" cards={[
        { front: 'قانون یک‌سوم (Rule of Thirds)', back: 'تصویر را به ۹ قسمت مساوی تقسیم کنید. المان‌های مهم را روی خطوط یا نقاط تقاطع قرار دهید. این کار ترکیب‌بندی جذاب‌تری ایجاد می‌کند.', category: 'ترکیب‌بندی' },
        { front: 'سلسله‌مراتب بصری (Visual Hierarchy)', back: 'با اندازه، رنگ، و موقعیت، اهمیت المان‌ها را مشخص کنید. المان مهم‌تر = بزرگ‌تر و برجسته‌تر. این کار چشم مخاطب را هدایت می‌کند.', category: 'اصول طراحی' },
        { front: 'فضای منفی (White Space)', back: 'فضای خالی اطراف المان‌ها به طرح نفس می‌دهد. فضای منفی زیاد = حس لوکس و مینیمال. فضای منفی کم = حس شلوغ و ارزان.', category: 'اصول طراحی' },
        { front: 'تضاد (Contrast)', back: 'تفاوت بین المان‌ها (رنگ، اندازه، شکل) توجه را جلب می‌کند. تضاد زیاد = جذابیت بصری بالا. تضاد کم = یکنواختی.', category: 'اصول طراحی' },
        { front: 'هماهنگی (Harmony)', back: 'تمام المان‌ها باید با هم سازگار باشند. از پالت رنگی محدود، فونت‌های مکمل، و سبک یکپارچه استفاده کنید.', category: 'اصول طراحی' },
      ]} />
    </div>
  );
}

function Lesson3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">طراحی لوگو با AI</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        طراحی لوگو یکی از پرتقاضاترین خدمات طراحی است. با AI می‌توانید لوگوهای حرفه‌ای در زمان بسیار کوتاه بسازید.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">پرامپت‌های حرفه‌ای طراحی لوگو</h3>

      <Accordion title="لوگو مینیمال">
        <CodeBlock title="پرامپت Midjourney" language="text" code={`/imagine minimalist logo design for [نام برند],
clean geometric shapes, modern and elegant,
[رنگ اصلی] and [رنگ ثانویه] color scheme,
white background, vector style, professional
--v 6 --style raw --ar 1:1 --q 2`} />
      </Accordion>

      <Accordion title="لوگو حرفه‌ای شرکتی">
        <CodeBlock title="پرامپت Midjourney" language="text" code={`/imagine professional corporate logo for [نام شرکت],
[صنعت: تکنولوژی/مالی/پزشکی/...] style,
abstract symbol with company initials,
sophisticated and trustworthy, navy blue and silver,
white background, flat design, scalable
--v 6 --style raw --ar 1:1 --q 2`} />
      </Accordion>

      <Accordion title="لوگو خلاقانه و هنری">
        <CodeBlock title="پرامپت Midjourney" language="text" code={`/imagine creative artistic logo for [نام برند],
unique and memorable design, [سبک: vintage/modern/playful],
clever use of negative space, vibrant colors,
white background, illustration style
--v 6 --ar 1:1 --q 2 --s 500`} />
      </Accordion>

      <InfoCard type="warning" title="نکات مهم طراحی لوگو">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>همیشه پس‌زمینه سفید درخواست کنید</li>
          <li>از style raw برای نتیجه واقعی‌تر استفاده کنید</li>
          <li>لوگو باید در سایز کوچک هم خوانا باشد</li>
          <li>حداقل ۳ نسخه مختلف بسازید و مقایسه کنید</li>
          <li>بعد از انتخاب، در Illustrator وکتورایز کنید</li>
          <li>نسخه‌های تک‌رنگ و معکوس هم آماده کنید</li>
        </ul>
      </InfoCard>
    </div>
  );
}

function Lesson10() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">فروش خدمات طراحی</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        طراحی با AI یکی از پردرآمدترین خدمات در بازار است. تقاضا برای طراحی لوگو، بنر، و UI بسیار بالاست.
      </p>

      <ComparisonTable title="قیمت‌گذاری خدمات طراحی" headers={['خدمت', 'قیمت حداقل', 'قیمت متوسط', 'قیمت حرفه‌ای']} rows={[
        ['طراحی لوگو', '۵۰۰ هزار', '۱.۵ میلیون', '۵ میلیون'],
        ['هویت بصری کامل', '۳ میلیون', '۱۰ میلیون', '۳۰ میلیون'],
        ['بنر تبلیغاتی', '۲۰۰ هزار', '۵۰۰ هزار', '۱.۵ میلیون'],
        ['پست اینستاگرام (هر عدد)', '۱۰۰ هزار', '۳۰۰ هزار', '۷۰۰ هزار'],
        ['طراحی UI وب‌سایت', '۳ میلیون', '۱۰ میلیون', '۳۰ میلیون'],
        ['طراحی UI اپلیکیشن', '۵ میلیون', '۱۵ میلیون', '۴۰ میلیون'],
        ['طراحی بسته‌بندی', '۱ میلیون', '۳ میلیون', '۱۰ میلیون'],
        ['تمپلیت شبکه اجتماعی (پکیج)', '۵۰۰ هزار', '۱.۵ میلیون', '۴ میلیون'],
      ]} />

      <ScenarioSimulator title="سناریوهای فروش" scenarios={[
        { situation: 'یک استارتاپ تازه‌تأسیس می‌خواهد هویت بصری کامل داشته باشد. چگونه پیشنهاد می‌دهید؟', options: [
          { text: 'فقط لوگو با Midjourney', result: 'ناکافی. استارتاپ به هویت بصری کامل نیاز دارد. فقط لوگو حرفه‌ای به نظر نمی‌رسد.', quality: 'good' },
          { text: 'پکیج هویت بصری: لوگو + پالت رنگی + تایپوگرافی + تمپلیت شبکه اجتماعی + راهنمای برند', result: 'پیشنهاد حرفه‌ای. هزینه: ۱۵ میلیون. زمان: ۲ هفته. شامل تمام المان‌های لازم برای شروع.', quality: 'best' },
          { text: 'لوگو + کارت ویزیت', result: 'خیلی محدود. استارتاپ به حضور آنلاین قوی نیاز دارد.', quality: 'better' },
        ]},
      ]} />
    </div>
  );
}

const lessonComponents: Record<number, React.FC> = { 1: Lesson1, 3: Lesson3, 10: Lesson10 };

function GenericLesson({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        این درس شامل محتوای جامع و کاربردی درباره {title} است.
      </p>
      <InfoCard type="info" title="سرفصل‌های این درس">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>مفاهیم پایه و اصول طراحی</li>
          <li>معرفی ابزارها و تکنیک‌ها</li>
          <li>پرامپت‌های آماده و حرفه‌ای</li>
          <li>مثال‌های عملی و پروژه‌محور</li>
          <li>نکات طلایی و اشتباهات رایج</li>
        </ul>
      </InfoCard>
    </div>
  );
}

export default function AIDesign() {
  const [activeLesson, setActiveLesson] = useState(0);
  const CustomComponent = lessonComponents[activeLesson + 1];
  const ActiveComponent = CustomComponent || (() => <GenericLesson title={lessons[activeLesson].title} />);

  const difficultyColors: Record<string, string> = {
    'مبتدی': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'متوسط': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'پیشرفته': 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="طراحی گرافیک با AI" subtitle="خلق طرح‌های حرفه‌ای بدون نیاز به مهارت گرافیکی" badge="۱۰ درس | ۱۸ ساعت آموزش" />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-pink-300">سرفصل‌های دوره</h3>
                <span className="text-xs text-gray-500">{activeLesson + 1}/{lessons.length}</span>
              </div>
              <div className="mb-4"><ProgressBar value={activeLesson + 1} max={lessons.length} label="پیشرفت دوره" color="pink" /></div>
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pl-1">
                {lessons.map((lesson, index) => (
                  <button key={lesson.id} onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-3 py-3 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 ${
                      activeLesson === index ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                      : index < activeLesson ? 'text-gray-300 hover:bg-white/5 border border-transparent'
                      : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeLesson === index ? 'bg-pink-500 text-white' : index < activeLesson ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-gray-500'
                    }`}>
                      {index < activeLesson ? <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> : index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{lesson.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{lesson.duration}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded border ${difficultyColors[lesson.difficulty]}`}>{lesson.difficulty}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="glass-card p-6 sm:p-8"><ActiveComponent /></div>
            <div className="flex justify-between mt-6">
              <button onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))} disabled={activeLesson === 0}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                درس قبلی
              </button>
              <button onClick={() => setActiveLesson(Math.min(lessons.length - 1, activeLesson + 1))} disabled={activeLesson === lessons.length - 1}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all flex items-center gap-2">
                درس بعدی
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
