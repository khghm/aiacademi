import { useState } from 'react';
import { CodeBlock, InfoCard, ComparisonTable, SectionHeading, ProgressBar, Accordion } from './ui';
import { InteractiveFlow, AnimatedProcess, ScenarioSimulator, ROICalculator } from './ui/interactive';

const lessons = [
  { id: 1, title: 'مفاهیم اتوماسیون با AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی' },
  { id: 2, title: 'ابزارهای اتوماسیون', duration: '۶۰ دقیقه', difficulty: 'مبتدی' },
  { id: 3, title: 'ساخت Workflow با Zapier', duration: '۹۰ دقیقه', difficulty: 'متوسط' },
  { id: 4, title: 'اتوماسیون با Make.com', duration: '۹۰ دقیقه', difficulty: 'متوسط' },
  { id: 5, title: 'اتوماسیون ایمیل مارکتینگ', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 6, title: 'اتوماسیون شبکه‌های اجتماعی', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 7, title: 'اتوماسیون فروش و CRM', duration: '۷۵ دقیقه', difficulty: 'پیشرفته' },
  { id: 8, title: 'اتوماسیون تولید محتوا', duration: '۷۵ دقیقه', difficulty: 'پیشرفته' },
  { id: 9, title: 'اتوماسیون پشتیبانی مشتری', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 10, title: 'اتوماسیون پیشرفته با n8n', duration: '۹۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 11, title: 'اتوماسیون مالی و حسابداری', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 12, title: 'فروش خدمات اتوماسیون', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
];

function Lesson1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">مفاهیم اتوماسیون با AI</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        اتوماسیون یعنی خودکارسازی فرآیندهای تکراری با استفاده از ابزارهای نرم‌افزاری. با ترکیب AI و اتوماسیون، می‌توانید کارهایی که ساعت‌ها زمان می‌برد را در چند ثانیه انجام دهید.
      </p>

      <ROICalculator title="محاسبه‌گر صرفه‌جویی با اتوماسیون" />

      <InteractiveFlow title="فرآیند طراحی اتوماسیون" steps={[
        { id: 'identify', title: 'شناسایی فرآیندها', description: 'فرآیندهای تکراری و زمان‌بر کسب‌وکار خود را شناسایی کنید.', icon: '\u{1F50D}', color: 'bg-gradient-to-br from-purple-500 to-indigo-500',
          details: ['لیست کردن تمام کارهای تکراری روزانه', 'اندازه‌گیری زمان صرف‌شده برای هر کار', 'اولویت‌بندی بر اساس زمان و تکرار', 'شناسایی گلوگاه‌ها'] },
        { id: 'map', title: 'طراحی فلوچارت', description: 'فرآیند را به صورت بصری ترسیم کنید.', icon: '\u{1F5FA}', color: 'bg-gradient-to-br from-pink-500 to-rose-500',
          details: ['رسم مراحل فرآیند', 'مشخص کردن تریگرها', 'تعریف شرط‌ها و انشعاب‌ها', 'تعیین نقاط تصمیم‌گیری'] },
        { id: 'tools', title: 'انتخاب ابزار', description: 'ابزار مناسب برای هر مرحله را انتخاب کنید.', icon: '\u{1F6E0}', color: 'bg-gradient-to-br from-cyan-500 to-blue-500',
          details: ['Zapier/Make برای اتصال اپلیکیشن‌ها', 'ChatGPT API برای تولید محتوا', 'Google Sheets برای ذخیره داده', 'Email service برای ارسال'] },
        { id: 'build', title: 'ساخت اتوماسیون', description: 'اتوماسیون را در ابزار انتخابی پیاده‌سازی کنید.', icon: '\u{1F3D7}', color: 'bg-gradient-to-br from-amber-500 to-orange-500',
          details: ['ایجاد Workflow', 'تنظیم تریگرها', 'اتصال اپلیکیشن‌ها', 'تنظیم پارامترها'] },
        { id: 'test', title: 'تست و بهینه‌سازی', description: 'اتوماسیون را تست و عیب‌یابی کنید.', icon: '\u{2705}', color: 'bg-gradient-to-br from-emerald-500 to-teal-500',
          details: ['اجرای تستی', 'بررسی خروجی‌ها', 'رفع خطاها', 'بهینه‌سازی عملکرد'] },
      ]} />

      <ComparisonTable title="انواع اتوماسیون" headers={['نوع', 'مثال', 'ابزار', 'صرفه‌جویی زمانی']} rows={[
        ['اتوماسیون بازاریابی', 'ارسال ایمیل خودکار', 'Mailchimp + Zapier', '۸۰٪'],
        ['اتوماسیون فروش', 'پیگیری مشتریان', 'CRM + Zapier', '۷۰٪'],
        ['اتوماسیون محتوا', 'انتشار خودکار پست', 'Buffer + ChatGPT', '۹۰٪'],
        ['اتوماسیون پشتیبانی', 'پاسخ خودکار تیکت', 'ChatBot + Zendesk', '۶۰٪'],
        ['اتوماسیون مالی', 'صدور فاکتور خودکار', 'حسابداری + Zapier', '۸۵٪'],
        ['اتوماسیون HR', 'فرآیند استخدام', 'ATS + Email', '۷۵٪'],
      ]} />
    </div>
  );
}

function Lesson3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">ساخت Workflow با Zapier</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Zapier قدرتمندترین ابزار اتوماسیون بدون کد است. با اتصال بیش از ۶۰۰۰ اپلیکیشن، می‌توانید هر فرآیندی را خودکار کنید.
      </p>

      <AnimatedProcess title="مراحل ساخت یک Zap" steps={[
        { label: 'ثبت‌نام', description: 'در zapier.com ثبت‌نام کنید و پلن مناسب را انتخاب کنید.', icon: '\u{1F4DD}', duration: '۵ دقیقه' },
        { label: 'ایجاد Zap', description: 'روی Create Zap کلیک کنید و نام مناسب انتخاب کنید.', icon: '\u{2795}', duration: '۲ دقیقه' },
        { label: 'انتخاب Trigger', description: 'تریگر (شروع‌کننده) را انتخاب کنید. مثلاً: دریافت ایمیل جدید.', icon: '\u{26A1}', duration: '۵ دقیقه' },
        { label: 'اتصال حساب', description: 'حساب اپلیکیشن تریگر را به Zapier متصل کنید.', icon: '\u{1F517}', duration: '۳ دقیقه' },
        { label: 'تنظیم تریگر', description: 'شرایط و فیلترهای تریگر را تنظیم کنید.', icon: '\u{2699}', duration: '۵ دقیقه' },
        { label: 'افزودن Action', description: 'اقدام بعدی را اضافه کنید. مثلاً: ذخیره در Google Sheets.', icon: '\u{25B6}', duration: '۵ دقیقه' },
        { label: 'تست و انتشار', description: 'Zap را تست و در صورت موفقیت، فعال کنید.', icon: '\u{2705}', duration: '۵ دقیقه' },
      ]} />

      <Accordion title="مثال ۱: اتوماسیون لید جنریشن">
        <CodeBlock title="Workflow لید جنریشن" language="text" code={`تریگر: فرم تماس وب‌سایت پر شد
  |
  v
Action 1: ذخیره اطلاعات در Google Sheets
  - نام، ایمیل، تلفن، پیام
  - تاریخ و ساعت
  |
  v
Action 2: ارسال ایمیل خوش‌آمد به مشتری
  - قالب از پیش آماده
  - شخصی‌سازی با نام مشتری
  |
  v
Action 3: ارسال نوتیفیکیشن به تلگرام تیم فروش
  - اطلاعات لید جدید
  - لینک به Google Sheets
  |
  v
Action 4: ایجاد Task در Trello
  - کارت جدید در ستون "لیدهای جدید"
  - برچسب "نیاز به پیگیری"
  |
  v
Action 5 (بعد از ۲ روز): ارسال ایمیل پیگیری
  - اگر پاسخ نداده بود
  - پیشنهاد مشاوره رایگان`} />
      </Accordion>

      <InfoCard type="tip" title="نکات مهم Zapier">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>پلن رایگان: ۱۰۰ task در ماه - مناسب شروع</li>
          <li>پلن Starter: $۱۹/ماه - ۷۵۰ task</li>
          <li>برای کاهش مصرف task، از Filter و Path استفاده کنید</li>
          <li>از Formatter برای تغییر فرمت داده‌ها استفاده کنید</li>
          <li>Webhook برای اتصال به API‌های سفارشی</li>
        </ul>
      </InfoCard>
    </div>
  );
}

function Lesson12() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">فروش خدمات اتوماسیون</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        اتوماسیون یکی از پرتقاضاترین خدمات در بازار است. کسب‌وکارها حاضرند مبالغ قابل توجهی برای صرفه‌جویی در زمان پرداخت کنند.
      </p>

      <ComparisonTable title="قیمت‌گذاری خدمات اتوماسیون" headers={['خدمت', 'قیمت حداقل', 'قیمت متوسط', 'قیمت حرفه‌ای']} rows={[
        ['اتوماسیون ساده (۱ Workflow)', '۲ میلیون', '۵ میلیون', '۱۰ میلیون'],
        ['اتوماسیون متوسط (۳-۵ Workflow)', '۵ میلیون', '۱۵ میلیون', '۳۰ میلیون'],
        ['اتوماسیون پیشرفته (۱۰+ Workflow)', '۱۵ میلیون', '۴۰ میلیون', '۱۰۰ میلیون'],
        ['مشاوره اتوماسیون (ساعتی)', '۵۰۰ هزار', '۱ میلیون', '۲ میلیون'],
        ['مدیریت و نگهداری (ماهانه)', '۱ میلیون', '۳ میلیون', '۸ میلیون'],
        ['آموزش اتوماسیون (ساعتی)', '۳۰۰ هزار', '۸۰۰ هزار', '۱.۵ میلیون'],
      ]} />

      <ScenarioSimulator title="سناریوهای فروش" scenarios={[
        { situation: 'یک رستوران می‌خواهد سفارشات تلفنی را اتوماتیک کند. چگونه پیشنهاد می‌دهید؟', options: [
          { text: 'یک سیستم ساده با Zapier و Google Sheets', result: 'مناسب برای رستوران کوچک. هزینه: ۳ میلیون. زمان پیاده‌سازی: ۲ روز.', quality: 'better' },
          { text: 'سیستم کامل با چت‌بات تلگرام + CRM + ارسال خودکار به آشپزخانه', result: 'راه‌حل کامل. هزینه: ۱۵ میلیون. صرفه‌جویی ماهانه: ۵ میلیون. بازگشت سرمایه: ۳ ماه.', quality: 'best' },
          { text: 'فقط یک فرم Google', result: 'خیلی ساده و ناکارآمد. مشتری راضی نخواهد بود.', quality: 'good' },
        ]},
      ]} />
    </div>
  );
}

const lessonComponents: Record<number, React.FC> = { 1: Lesson1, 3: Lesson3, 12: Lesson12 };

function GenericLesson({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        این درس شامل محتوای جامع و کاربردی درباره {title} است. در این بخش، تمام نکات کلیدی، تکنیک‌ها، مثال‌های عملی و تمرین‌های کاربردی را یاد می‌گیرید.
      </p>
      <InfoCard type="info" title="سرفصل‌های این درس">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>مفاهیم پایه و تعاریف تخصصی</li>
          <li>معرفی ابزارها و مقایسه آن‌ها</li>
          <li>آموزش گام‌به‌گام با مثال‌های عملی</li>
          <li>سناریوهای واقعی کسب‌وکارهای ایرانی</li>
          <li>تمرین‌های عملی و پروژه‌محور</li>
          <li>نکات طلایی و اشتباهات رایج</li>
        </ul>
      </InfoCard>
    </div>
  );
}

export default function Automation() {
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
        <SectionHeading title="اتوماسیون کسب‌وکار با AI" subtitle="خودکارسازی فرآیندها و صرفه‌جویی ۸۰٪ در زمان" badge="۱۲ درس | ۲۵ ساعت آموزش" />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-amber-300">سرفصل‌های دوره</h3>
                <span className="text-xs text-gray-500">{activeLesson + 1}/{lessons.length}</span>
              </div>
              <div className="mb-4"><ProgressBar value={activeLesson + 1} max={lessons.length} label="پیشرفت دوره" color="amber" /></div>
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pl-1">
                {lessons.map((lesson, index) => (
                  <button key={lesson.id} onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-3 py-3 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 ${
                      activeLesson === index ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : index < activeLesson ? 'text-gray-300 hover:bg-white/5 border border-transparent'
                      : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeLesson === index ? 'bg-amber-500 text-white' : index < activeLesson ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-gray-500'
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
