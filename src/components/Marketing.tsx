import { useState } from 'react';
import { Accordion, Tabs, CodeBlock, InfoCard, Timeline, ComparisonTable, FlowDiagram, ProgressBar, SectionHeading, DonutChart } from './ui';

const lessons = [
  { id: 1, title: 'مفاهیم پایه بازاریابی AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی' },
  { id: 2, title: 'سئو با هوش مصنوعی', duration: '۹۰ دقیقه', difficulty: 'متوسط' },
  { id: 3, title: 'تبلیغات هوشمند', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 4, title: 'ایمیل مارکتینگ با AI', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 5, title: 'تحلیل داده و اتوماسیون', duration: '۷۵ دقیقه', difficulty: 'پیشرفته' },
  { id: 6, title: 'بازاریابی شبکه‌های اجتماعی', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
];

function Lesson1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">مفاهیم پایه بازاریابی با AI</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        بازاریابی با AI یعنی استفاده از ابزارهای هوش مصنوعی برای بهبود تمام جنبه‌های بازاریابی کسب‌وکار. از تحقیقات بازار گرفته تا اجرای کمپین و تحلیل نتایج.
      </p>

      <DonutChart title="توزیع بودجه بازاریابی دیجیتال با AI" segments={[
        { label: 'محتوا و سئو', value: 30, color: '#a855f7' },
        { label: 'تبلیغات کلیکی', value: 25, color: '#ec4899' },
        { label: 'شبکه‌های اجتماعی', value: 20, color: '#06b6d4' },
        { label: 'ایمیل مارکتینگ', value: 15, color: '#f59e0b' },
        { label: 'تحلیل و بهینه‌سازی', value: 10, color: '#10b981' },
      ]} />

      <ComparisonTable title="حوزه‌های بازاریابی با AI" headers={['حوزه', 'ابزار AI', 'تأثیر', 'ROI']} rows={[
        ['سئو و محتوا', 'ChatGPT + Surfer SEO', 'افزایش ۱۵۰٪ ترافیک', '۵x'],
        ['تبلیغات کلیکی', 'AdCreative.ai', 'کاهش ۳۰٪ هزینه', '۳x'],
        ['ایمیل مارکتینگ', 'Mailchimp AI', 'افزایش ۴۰٪ تبدیل', '۴x'],
        ['شبکه‌های اجتماعی', 'Buffer AI', 'افزایش ۲۰۰٪ engagement', '۳x'],
        ['تحلیل داده', 'Google Analytics AI', 'تصمیم‌گیری بهتر', '۲x'],
        ['پشتیبانی مشتری', 'ChatBot', 'کاهش ۶۰٪ هزینه', '۴x'],
      ]} />

      <FlowDiagram title="چرخه بازاریابی هوشمند" nodes={[
        { label: 'تحقیق', sublabel: 'بازار و رقبا', color: 'from-purple-500 to-indigo-500' },
        { label: 'استراتژی', sublabel: 'برنامه‌ریزی', color: 'from-pink-500 to-rose-500' },
        { label: 'تولید', sublabel: 'محتوا و تبلیغ', color: 'from-cyan-500 to-blue-500' },
        { label: 'انتشار', sublabel: 'پلتفرم‌ها', color: 'from-amber-500 to-orange-500' },
        { label: 'تحلیل', sublabel: 'داده و نتایج', color: 'from-emerald-500 to-teal-500' },
        { label: 'بهینه‌سازی', sublabel: 'بهبود مداوم', color: 'from-violet-500 to-purple-500' },
      ]} />
    </div>
  );
}

function Lesson2() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">سئو حرفه‌ای با AI</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        سئو یکی از مؤثرترین کانال‌های بازاریابی است. با AI می‌توانید فرآیند سئو را ۱۰ برابر سریع‌تر و مؤثرتر انجام دهید.
      </p>

      <FlowDiagram title="فرآیند سئو با AI" nodes={[
        { label: 'تحقیق کلمات', sublabel: 'Keyword Research', color: 'from-purple-500 to-indigo-500' },
        { label: 'تحلیل رقبا', sublabel: 'Competitor Analysis', color: 'from-pink-500 to-rose-500' },
        { label: 'تولید محتوا', sublabel: 'Content Creation', color: 'from-cyan-500 to-blue-500' },
        { label: 'بهینه‌سازی', sublabel: 'On-Page SEO', color: 'from-amber-500 to-orange-500' },
        { label: 'لینک‌سازی', sublabel: 'Link Building', color: 'from-emerald-500 to-teal-500' },
      ]} />

      <Tabs tabs={[
        { label: 'تحقیق کلمات کلیدی', content: (
          <div>
            <CodeBlock title="پرامپت تحقیق کلمات کلیدی" language="text" code={`من یک فروشگاه آنلاین فروش لوازم آرایشی بهداشتی دارم.
۵۰ کلمه کلیدی مرتبط با "خرید آنلاین لوازم آرایشی" پیشنهاد بده.

دسته‌بندی کن به:
1. کلمات کلیدی اصلی (Search Volume بالا) - ۱۰ مورد
2. کلمات کلیدی طولانی (Long-tail) - ۱۵ مورد
3. سوالات متداول کاربران - ۱۵ مورد
4. کلمات کلیدی محلی (مخصوص ایران) - ۱۰ مورد

برای هر کلمه، intent کاربر را مشخص کن:
- Informational (اطلاعاتی)
- Navigational (ناوبری)
- Transactional (خرید)
- Commercial (تحقیق تجاری)`} />
          </div>
        )},
        { label: 'تولید محتوای سئو', content: (
          <div>
            <CodeBlock title="پرامپت مقاله سئو شده" language="text" code={`یک مقاله ۳۰۰۰ کلمه‌ای درباره "بهترین کرم ضد آفتاب برای پوست چرب" بنویس.

کلمه کلیدی اصلی: بهترین کرم ضد آفتاب پوست چرب
کلمات LSI: ضد آفتاب فاقد چربی، SPF 50، کرم ضد آفتاب مات

ساختار:
H1: بهترین کرم ضد آفتاب برای پوست چرب [سال] + راهنمای خرید
H2: چرا پوست چرب به ضد آفتاب مخصوص نیاز دارد؟
H2: ویژگی‌های بهترین ضد آفتاب پوست چرب
  H3: فاقد چربی (Oil-Free)
  H3: SPF مناسب
  H3: بافت سبک و جذب سریع
H2: معرفی ۱۰ بهترین کرم ضد آفتاب (با جدول مقایسه)
H2: راهنمای خرید
H2: سوالات متداول (FAQ)
H2: جمع‌بندی

الزامات:
- پاراگراف اول شامل کلمه کلیدی
- هر ۳۰۰ کلمه یک زیرعنوان
- جدول مقایسه محصولات
- متا دیسکریپشن ۱۵۵ کاراکتری`} />
          </div>
        )},
        { label: 'بهینه‌سازی On-Page', content: (
          <div>
            <ComparisonTable title="چک‌لیست On-Page SEO" headers={['عنصر', 'بهترین حالت', 'ابزار AI']} rows={[
              ['Title Tag', 'شامل کلمه کلیدی + جذاب (۶۰ کاراکتر)', 'ChatGPT'],
              ['Meta Description', 'شامل CTA + کلمه کلیدی (۱۵۵ کاراکتر)', 'ChatGPT'],
              ['URL', 'کوتاه + شامل کلمه کلیدی', '-'],
              ['H1', 'یک عدد + شامل کلمه کلیدی', 'Surfer SEO'],
              ['تصاویر', 'بهینه + alt text توصیفی', 'ChatGPT'],
              ['Internal Links', 'حداقل ۳-۵ لینک مرتبط', 'Surfer SEO'],
              ['Schema Markup', 'FAQ, Product, Article', 'ChatGPT'],
              ['Core Web Vitals', 'LCP < 2.5s, FID < 100ms', 'PageSpeed'],
            ]} />
          </div>
        )},
      ]} />

      <InfoCard type="tip" title="ابزارهای ترکیبی سئو">
        بهترین نتیجه از ترکیب ابزارها به دست می‌آید: ChatGPT (تحقیق + تولید) + Surfer SEO (بهینه‌سازی) + Ahrefs (تحلیل رقبا) + Google Search Console (مانیتورینگ)
      </InfoCard>
    </div>
  );
}

function Lesson3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">تبلیغات هوشمند</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        تبلیغات کلیکی یکی از سریع‌ترین راه‌های جذب مشتری است. با AI می‌توانید بنرهای تبلیغاتی بهتر و کپی‌های مؤثرتر بسازید.
      </p>

      <CodeBlock title="پرامپت کپی تبلیغاتی گوگل ادز" language="text" code={`۱۰ نسخه متن تبلیغاتی برای گوگل ادز بنویس.

محصول: دوره آموزش آنلاین اکسل
مخاطب: کارمندان و دانشجویان
USP: یادگیری در ۲ هفته + مدرک معتبر + پشتیبانی
قیمت: ۱.۵ میلیون تومان
تخفیف: ۴۰٪ فقط تا آخر هفته

فرمت هر نسخه:
- Headline 1 (حداکثر ۳۰ کاراکتر)
- Headline 2 (حداکثر ۳۰ کاراکتر)
- Headline 3 (حداکثر ۳۰ کاراکتر)
- Description 1 (حداکثر ۹۰ کاراکتر)
- Description 2 (حداکثر ۹۰ کاراکتر)

استراتژی‌ها:
1-3: تمرکز بر فایده
4-6: تمرکز بر تخفیف/FOMO
7-10: تمرکز بر اعتبار/نتایج`} />

      <Accordion title="تحلیل و بهینه‌سازی کمپین">
        <CodeBlock title="پرامپت تحلیل کمپین" language="text" code={`این داده‌های کمپین تبلیغاتی من را تحلیل کن:

کمپین A: CTR 3.2%, CPC 5000T, Conv Rate 2.1%, Cost/Conv: 238K
کمپین B: CTR 1.8%, CPC 3000T, Conv Rate 4.5%, Cost/Conv: 667K  
کمپین C: CTR 5.1%, CPC 8000T, Conv Rate 1.2%, Cost/Conv: 667K

بودجه کل: ۱۰ میلیون تومان/ماه

پیشنهاد بده:
1. کدام کمپین را افزایش بدهم؟
2. کدام را متوقف کنم؟
3. بودجه را چگونه تخصیص دهم؟
4. چه تغییراتی در هر کمپین اعمال کنم؟
5. KPI‌های هدف برای ماه بعد`} />
      </Accordion>
    </div>
  );
}

function Lesson4() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">ایمیل مارکتینگ با AI</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        ایمیل مارکتینگ همچنان بالاترین ROI را در بازاریابی دیجیتال دارد. با AI می‌توانید ایمیل‌های شخصی‌سازی‌شده و مؤثر بنویسید.
      </p>

      <CodeBlock title="پرامپت زنجیره ایمیل فروش" language="text" code={`یک زنجیره ۷ ایمیلی welcome series بنویس.

محصول: دوره آموزش دیجیتال مارکتینگ
مخاطب: کسانی که در وبینار رایگان ثبت‌نام کردند
هدف: تبدیل به مشتری پرداختی

ایمیل ۱ (فوری): تشکر + دسترسی به وبینار + یک نکته اضافی
ایمیل ۲ (روز ۲): ارزش اضافی + نکته کاربردی + داستان کوتاه
ایمیل ۳ (روز ۴): داستان موفقیت دانشجوی قبلی (Case Study)
ایمیل ۴ (روز ۶): معرفی دوره + مزایا + قیمت + تضمین
ایمیل ۵ (روز ۸): رفع اعتراضات (FAQ) + گارانتی بازگشت وجه
ایمیل ۶ (روز ۱۰): تخفیف ۳۰٪ + محدودیت زمانی ۴۸ ساعت
ایمیل ۷ (روز ۱۲): آخرین فرصت + FOMO + نتایج دانشجویان

برای هر ایمیل:
- Subject Line (۳ نسخه برای A/B test)
- Preheader
- Body (۲۰۰-۳۰۰ کلمه)
- CTA مشخص`} />

      <ComparisonTable title="نرخ‌های استاندارد ایمیل مارکتینگ" headers={['متریک', 'معدل صنعت', 'هدف با AI', 'بهترین حالت']} rows={[
        ['نرخ باز شدن', '۲۰-۲۵٪', '۳۰-۳۵٪', '۴۰٪+'],
        ['نرخ کلیک', '۲-۳٪', '۴-۶٪', '۸٪+'],
        ['نرخ تبدیل', '۱-۲٪', '۳-۵٪', '۷٪+'],
        ['نرخ آن‌سابسکرایب', '۰.۵-۱٪', '۰.۲-۰.۵٪', '۰.۱٪'],
      ]} />
    </div>
  );
}

function Lesson5() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">تحلیل داده و اتوماسیون</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        تحلیل داده و اتوماسیون، بازاریابی شما را از حدسی به علمی تبدیل می‌کند.
      </p>

      <CodeBlock title="پرامپت تحلیل داده فروش" language="text" code={`این داده‌های فروش ۳ ماه گذشته من را تحلیل کن:

ماه اول: ۱۵۰ مشتری، میانگین خرید ۸۰۰ هزار، نرخ بازگشت ۱۵٪
ماه دوم: ۲۰۰ مشتری، میانگین خرید ۶۵۰ هزار، نرخ بازگشت ۱۸٪
ماه سوم: ۱۸۰ مشتری، میانگین خرید ۹۰۰ هزار، نرخ بازگشت ۲۲٪

تحلیل کن:
1. روند کلی کسب‌وکار (رشد/کاهش)
2. نقاط قوت و ضعف
3. محاسبه CAC، LTV، و نسبت LTV/CAC
4. پیشنهادات بهبود (حداقل ۵ مورد)
5. پیش‌بینی ماه چهارم
6. KPI‌های هدف برای ۳ ماه آینده`} />

      <FlowDiagram title="اتوماسیون CRM" nodes={[
        { label: 'ثبت‌نام', sublabel: 'مشتری جدید', color: 'from-purple-500 to-indigo-500' },
        { label: 'ایمیل خوش‌آمد', sublabel: 'فوری', color: 'from-pink-500 to-rose-500' },
        { label: 'معرفی محصول', sublabel: 'روز ۲', color: 'from-cyan-500 to-blue-500' },
        { label: 'تخفیف', sublabel: 'روز ۵', color: 'from-amber-500 to-orange-500' },
        { label: 'پیگیری', sublabel: 'روز ۷', color: 'from-emerald-500 to-teal-500' },
        { label: 'خرید', sublabel: 'تبدیل', color: 'from-violet-500 to-purple-500' },
      ]} />
    </div>
  );
}

function Lesson6() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">بازاریابی شبکه‌های اجتماعی</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        شبکه‌های اجتماعی مهم‌ترین کانال بازاریابی در ایران هستند. با AI می‌توانید محتوای روزانه با کیفیت تولید کنید.
      </p>

      <CodeBlock title="پرامپت تقویم محتوایی" language="text" code={`یک تقویم محتوایی ۳۰ روزه برای پیج اینستاگرام یک کافه بنویس.

نوع محتوا:
- ۴۰٪ آموزشی (طرز تهیه قهوه، شناخت دانه‌ها)
- ۳۰٪ سرگرمی (میم، ریلز خلاقانه)
- ۲۰٪ فروش (محصولات جدید، تخفیف)
- ۱۰٪ پشت صحنه (تیم کافه، فرآیند کار)

فرمت هر پست:
- نوع (ریلز/پست/استوری/کاروسل)
- موضوع
- کپشن کامل
- ۱۰ هشتگ مرتبط
- بهترین زمان انتشار
- ایده برای استوری مکمل`} />

      <ComparisonTable title="بهترین زمان انتشار در ایران" headers={['پلتفرم', 'بهترین روز', 'بهترین ساعت', 'نرخ Engagement']} rows={[
        ['اینستاگرام', 'شنبه و سه‌شنبه', '۱۲-۱۴ و ۲۰-۲۲', 'بالا'],
        ['لینکدین', 'یکشنبه تا سه‌شنبه', '۸-۱۰ صبح', 'متوسط'],
        ['توییتر/X', 'روزانه', '۱۲-۱۴ و ۱۸-۲۰', 'متوسط'],
        ['تلگرام', 'روزانه', '۲۰-۲۳', 'بالا'],
        ['یوتیوب', 'پنجشنبه و جمعه', '۱۸-۲۱', 'بالا'],
      ]} />
    </div>
  );
}

const lessonComponents: Record<number, React.FC> = { 1: Lesson1, 2: Lesson2, 3: Lesson3, 4: Lesson4, 5: Lesson5, 6: Lesson6 };

export default function Marketing() {
  const [activeLesson, setActiveLesson] = useState(0);
  const ActiveComponent = lessonComponents[activeLesson + 1];

  const difficultyColors: Record<string, string> = {
    'مبتدی': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'متوسط': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'پیشرفته': 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="بازاریابی هوشمند با AI" subtitle="استراتژی‌های بازاریابی مدرن با قدرت هوش مصنوعی" badge="۶ درس | ۱۵ ساعت آموزش" />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-cyan-300">سرفصل‌های دوره</h3>
                <span className="text-xs text-gray-500">{activeLesson + 1}/{lessons.length}</span>
              </div>
              <div className="mb-4"><ProgressBar value={activeLesson + 1} max={lessons.length} label="پیشرفت دوره" color="cyan" /></div>
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pl-1">
                {lessons.map((lesson, index) => (
                  <button key={lesson.id} onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-3 py-3 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 ${
                      activeLesson === index ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : index < activeLesson ? 'text-gray-300 hover:bg-white/5 border border-transparent'
                      : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeLesson === index ? 'bg-cyan-500 text-white' : index < activeLesson ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-gray-500'
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
