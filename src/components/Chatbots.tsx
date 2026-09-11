import { useState } from 'react';
import { CodeBlock, InfoCard, ComparisonTable, SectionHeading, ProgressBar, Accordion } from './ui';
import { InteractiveFlow, AnimatedProcess, ScenarioSimulator } from './ui/interactive';

const lessons = [
  { id: 1, title: 'مقدمه‌ای بر چت‌بات‌ها', duration: '۴۵ دقیقه', difficulty: 'مبتدی' },
  { id: 2, title: 'طراحی مکالمه (Conversation Design)', duration: '۷۵ دقیقه', difficulty: 'متوسط' },
  { id: 3, title: 'ساخت چت‌بات با Botpress', duration: '۹۰ دقیقه', difficulty: 'متوسط' },
  { id: 4, title: 'ساخت چت‌بات با Voiceflow', duration: '۹۰ دقیقه', difficulty: 'متوسط' },
  { id: 5, title: 'چت‌بات تلگرام با BotFather', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 6, title: 'چت‌بات اینستاگرام با ManyChat', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 7, title: 'چت‌بات هوشمند با GPT API', duration: '۹۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 8, title: 'یکپارچه‌سازی با CRM و دیتابیس', duration: '۷۵ دقیقه', difficulty: 'پیشرفته' },
  { id: 9, title: 'تحلیل و بهینه‌سازی چت‌بات', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 10, title: 'فروش خدمات چت‌بات', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
];

function Lesson1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">مقدمه‌ای بر چت‌بات‌ها</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        چت‌بات یک نرم‌افزار است که می‌تواند با کاربران به صورت خودکار گفتگو کند. چت‌بات‌های مدرن با استفاده از AI می‌توانند مکالمات پیچیده و طبیعی داشته باشند.
      </p>

      <ComparisonTable title="انواع چت‌بات" headers={['نوع', 'توضیح', 'هزینه', 'کاربرد']} rows={[
        ['Rule-Based', 'بر اساس قوانین از پیش تعریف‌شده', 'پایین', 'پاسخ به سوالات متداول'],
        ['AI-Based', 'با استفاده از مدل‌های زبانی', 'متوسط', 'مکالمات پیچیده و طبیعی'],
        ['Hybrid', 'ترکیب قوانین و AI', 'متوسط', 'پشتیبانی مشتری حرفه‌ای'],
        ['Voice Bot', 'چت‌بات صوتی', 'بالا', 'پشتیبانی تلفنی'],
      ]} />

      <InteractiveFlow title="اجزای یک چت‌بات" steps={[
        { id: 'trigger', title: 'تریگر', description: 'چه چیزی چت‌بات را فعال می‌کند؟', icon: '\u{26A1}', color: 'bg-gradient-to-br from-purple-500 to-indigo-500',
          details: ['کلمه کلیدی خاص', 'باز کردن صفحه خاص', 'کلیک روی دکمه', 'زمان مشخص'] },
        { id: 'nlu', title: 'درک زبان طبیعی', description: 'تشخیص منظور کاربر از پیام.', icon: '\u{1F9E0}', color: 'bg-gradient-to-br from-pink-500 to-rose-500',
          details: ['تشخیص Intent (قصد)', 'استخراج Entity (موجودیت)', 'درک Context (زمینه)', 'مدیریت ابهام'] },
        { id: 'logic', title: 'منطق مکالمه', description: 'تصمیم‌گیری درباره پاسخ مناسب.', icon: '\u{2699}', color: 'bg-gradient-to-br from-cyan-500 to-blue-500',
          details: ['Flow مکالمه', 'شرط‌ها و انشعاب‌ها', 'مدیریت خطا', 'Fallback'] },
        { id: 'response', title: 'تولید پاسخ', description: 'ایجاد پاسخ مناسب برای کاربر.', icon: '\u{1F4AC}', color: 'bg-gradient-to-br from-amber-500 to-orange-500',
          details: ['پاسخ متنی', 'دکمه‌ها و گزینه‌ها', 'تصاویر و ویدیو', 'لینک‌ها'] },
        { id: 'integration', title: 'اتصال به سیستم‌ها', description: 'ارتباط با سایر ابزارها.', icon: '\u{1F517}', color: 'bg-gradient-to-br from-emerald-500 to-teal-500',
          details: ['CRM', 'دیتابیس', 'API‌های خارجی', 'سیستم پرداخت'] },
      ]} />

      <InfoCard type="tip" title="کاربردهای چت‌بات در کسب‌وکارهای ایرانی">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>پشتیبانی مشتری ۲۴/۷ (فروشگاه آنلاین)</li>
          <li>رزرو نوبت (مطب، آرایشگاه، رستوران)</li>
          <li>سفارش‌گیری (رستوران، فست‌فود)</li>
          <li>مشاوره اولیه (وکالت، پزشکی، مشاوره)</li>
          <li>آموزش و آزمون (مراکز آموزشی)</li>
          <li>جمع‌آوری لید (B2B)</li>
        </ul>
      </InfoCard>
    </div>
  );
}

function Lesson3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">ساخت چت‌بات با Botpress</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Botpress یک پلتفرم اپن‌سورس قدرتمند برای ساخت چت‌بات‌های هوشمند است. در این درس، مرحله به مرحله یک چت‌بات کامل می‌سازیم.
      </p>

      <AnimatedProcess title="مراحل ساخت چت‌بات" steps={[
        { label: 'ثبت‌نام', description: 'در botpress.com ثبت‌نام کنید.', icon: '\u{1F4DD}', duration: '۵ دقیقه' },
        { label: 'ایجاد Bot', description: 'یک Bot جدید بسازید و نام آن را انتخاب کنید.', icon: '\u{2795}', duration: '۳ دقیقه' },
        { label: 'طراحی Flow', description: 'فلوچارت مکالمه را طراحی کنید.', icon: '\u{1F5FA}', duration: '۳۰ دقیقه' },
        { label: 'تعریف Intents', description: 'قصد‌های کاربر را تعریف کنید.', icon: '\u{1F3AF}', duration: '۲۰ دقیقه' },
        { label: 'تعریف Entities', description: 'موجودیت‌ها را تعریف کنید.', icon: '\u{1F4CB}', duration: '۱۵ دقیقه' },
        { label: 'تست', description: 'چت‌بات را تست کنید.', icon: '\u{2705}', duration: '۱۵ دقیقه' },
        { label: 'انتشار', description: 'چت‌بات را منتشر کنید.', icon: '\u{1F680}', duration: '۵ دقیقه' },
      ]} />

      <CodeBlock title="مثال فلوچارت چت‌بات پشتیبانی" language="text" code={`START
  |
  v
[Welcome Node]
"سلام! من دستیار هوشمند [نام شرکت] هستم.
چطور می‌تونم کمکتون کنم؟"
  |
  +-- [دکمه: پیگیری سفارش]
  |     |
  |     v
  |   [دریافت شماره سفارش]
  |     |
  |     v
  |   [بررسی در دیتابیس]
  |     |
  |     +-- [سفارش پیدا شد] -> نمایش وضعیت
  |     +-- [سفارش پیدا نشد] -> درخواست اطلاعات بیشتر
  |
  +-- [دکمه: سوال درباره محصول]
  |     |
  |     v
  |   [دریافت نام محصول]
  |     |
  |     v
  |   [نمایش اطلاعات محصول]
  |
  +-- [دکمه: شرایط بازگشت]
  |     |
  |     v
  |   [نمایش شرایط بازگشت]
  |
  +-- [دکمه: تماس با پشتیبانی]
        |
        v
      [انتقال به اپراتور انسانی]`} />
    </div>
  );
}

function Lesson10() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">فروش خدمات چت‌بات</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        چت‌بات یکی از پرتقاضاترین خدمات AI در بازار ایران است. کسب‌وکارها به دنبال راه‌حل‌های خودکار برای پشتیبانی و فروش هستند.
      </p>

      <ComparisonTable title="قیمت‌گذاری خدمات چت‌بات" headers={['نوع چت‌بات', 'قیمت حداقل', 'قیمت متوسط', 'قیمت حرفه‌ای']} rows={[
        ['چت‌بات ساده (Rule-Based)', '۳ میلیون', '۸ میلیون', '۱۵ میلیون'],
        ['چت‌بات AI متوسط', '۸ میلیون', '۲۰ میلیون', '۴۰ میلیون'],
        ['چت‌بات پیشرفته (GPT)', '۱۵ میلیون', '۴۰ میلیون', '۱۰۰ میلیون'],
        ['چت‌بات تلگرام', '۲ میلیون', '۵ میلیون', '۱۵ میلیون'],
        ['چت‌بات اینستاگرام', '۳ میلیون', '۸ میلیون', '۲۰ میلیون'],
        ['نگهداری ماهانه', '۵۰۰ هزار', '۲ میلیون', '۵ میلیون'],
      ]} />

      <ScenarioSimulator title="سناریوهای فروش" scenarios={[
        { situation: 'یک کلینیک دندانپزشکی می‌خواهد چت‌بات برای رزرو نوبت بسازد. چگونه پیشنهاد می‌دهید؟', options: [
          { text: 'یک چت‌بات تلگرام ساده با دکمه‌های رزرو', result: 'مناسب برای شروع. هزینه: ۵ میلیون. زمان: ۱ هفته.', quality: 'better' },
          { text: 'چت‌بات هوشمند وب + تلگرام + اینستاگرام با اتصال به نرم‌افزار نوبت‌دهی + یادآوری خودکار + پرداخت آنلاین', result: 'راه‌حل کامل. هزینه: ۳۵ میلیون. صرفه‌جویی ماهانه: ۸ میلیون (حذف اپراتور). بازگشت سرمایه: ۴ ماه.', quality: 'best' },
          { text: 'فقط یک فرم گوگل', result: 'غیرحرفه‌ای. مشتری راضی نخواهد بود.', quality: 'good' },
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
          <li>مفاهیم پایه و تعاریف تخصصی</li>
          <li>معرفی ابزارها و مقایسه آن‌ها</li>
          <li>آموزش گام‌به‌گام با مثال‌های عملی</li>
          <li>سناریوهای واقعی کسب‌وکارهای ایرانی</li>
          <li>تمرین‌های عملی و پروژه‌محور</li>
        </ul>
      </InfoCard>
    </div>
  );
}

export default function Chatbots() {
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
        <SectionHeading title="ساخت چت‌بات و دستیار هوشمند" subtitle="طراحی و پیاده‌سازی چت‌بات‌های حرفه‌ای برای کسب‌وکار" badge="۱۰ درس | ۲۰ ساعت آموزش" />

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
