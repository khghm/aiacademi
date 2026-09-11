import LessonViewer, { CourseData } from './LessonViewer';

const automationCourse: CourseData = {
  id: 'automation',
  title: 'اتوماسیون کسب‌وکار با AI',
  subtitle: 'خودکارسازی فرآیندها و صرفه‌جویی ۸۰٪ در زمان',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'amber',
  lessons: [
    { id: 1, title: 'مفاهیم اتوماسیون با AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'اتوماسیون با AI', subtitle: 'خودکارسازی هوشمند', blocks: [
      { type: 'paragraph', content: 'اتوماسیون یعنی خودکارسازی فرآیندهای تکراری با استفاده از ابزارهای نرم‌افزاری. با ترکیب AI و اتوماسیون، می‌توانید کارهایی که ساعت‌ها زمان می‌برد را در چند ثانیه انجام دهید.' },
      { type: 'stats', content: [
        { label: 'صرفه‌جویی زمان', value: '۸۰٪', color: 'from-purple-500/20 to-indigo-500/20' },
        { label: 'کاهش خطا', value: '۹۰٪', color: 'from-pink-500/20 to-rose-500/20' },
        { label: 'افزایش بهره‌وری', value: '۵x', color: 'from-cyan-500/20 to-blue-500/20' },
        { label: 'بازگشت سرمایه', value: '۳ ماه', color: 'from-amber-500/20 to-orange-500/20' },
      ]},
      { type: 'flow', content: { title: 'فرآیند طراحی اتوماسیون', steps: [
        { label: 'شناسایی فرآیندها', sublabel: 'چه کاری تکراری است؟' },
        { label: 'طراحی فلوچارت', sublabel: 'مراحل را ترسیم کنید' },
        { label: 'انتخاب ابزار', sublabel: 'Zapier/Make/n8n' },
        { label: 'ساخت اتوماسیون', sublabel: 'پیاده‌سازی' },
        { label: 'تست', sublabel: 'بررسی عملکرد' },
        { label: 'بهینه‌سازی', sublabel: 'بهبود مداوم' },
      ]}},
    ]}},
    { id: 2, title: 'ابزارهای اتوماسیون', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'ابزارها', subtitle: 'معرفی ابزارهای اتوماسیون', blocks: [
      { type: 'paragraph', content: 'ابزارهای اتوماسیون به شما کمک می‌کنند فرآیندها را خودکار کنید.' },
      { type: 'table', content: { title: 'ابزارهای اتوماسیون', headers: ['ابزار', 'بهترین برای', 'قیمت'], rows: [
        ['Zapier', 'اتصال اپلیکیشن‌ها', 'رایگان / $20'],
        ['Make.com', 'اتوماسیون پیچیده', 'رایگان / $10'],
        ['n8n', 'اپن سورس', 'رایگان'],
        ['IFTTT', 'اتوماسیون ساده', 'رایگان / $4'],
      ]}},
    ]}},
    { id: 3, title: 'ساخت Workflow با Zapier', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'Zapier', subtitle: 'ساخت اتوماسیون بدون کد', blocks: [
      { type: 'paragraph', content: 'Zapier قدرتمندترین ابزار اتوماسیون بدون کد است.' },
    ]}},
    { id: 4, title: 'اتوماسیون با Make.com', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'Make.com', subtitle: 'اتوماسیون پیشرفته', blocks: [
      { type: 'paragraph', content: 'Make.com برای اتوماسیون‌های پیچیده مناسب است.' },
    ]}},
    { id: 5, title: 'اتوماسیون ایمیل مارکتینگ', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'ایمیل اتوماتیک', subtitle: 'ارسال خودکار ایمیل', blocks: [
      { type: 'paragraph', content: 'اتوماسیون ایمیل مارکتینگ زمان زیادی صرفه‌جویی می‌کند.' },
    ]}},
    { id: 6, title: 'اتوماسیون شبکه‌های اجتماعی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'شبکه‌های اجتماعی', subtitle: 'انتشار خودکار محتوا', blocks: [
      { type: 'paragraph', content: 'اتوماسیون انتشار محتوا در شبکه‌های اجتماعی.' },
    ]}},
    { id: 7, title: 'اتوماسیون فروش و CRM', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'CRM اتوماتیک', subtitle: 'مدیریت خودکار مشتریان', blocks: [
      { type: 'paragraph', content: 'اتوماسیون فرآیندهای فروش و مدیریت مشتریان.' },
    ]}},
    { id: 8, title: 'اتوماسیون تولید محتوا', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'تولید محتوای اتوماتیک', subtitle: 'تولید و انتشار خودکار', blocks: [
      { type: 'paragraph', content: 'اتوماسیون فرآیند تولید و انتشار محتوا.' },
    ]}},
    { id: 9, title: 'اتوماسیون پشتیبانی مشتری', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'پشتیبانی اتوماتیک', subtitle: 'پاسخ خودکار به مشتریان', blocks: [
      { type: 'paragraph', content: 'اتوماسیون پاسخگویی به سوالات مشتریان.' },
    ]}},
    { id: 10, title: 'اتوماسیون پیشرفته با n8n', duration: '۹۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'n8n', subtitle: 'اتوماسیون اپن سورس', blocks: [
      { type: 'paragraph', content: 'n8n یک ابزار اتوماسیون اپن سورس قدرتمند است.' },
    ]}},
    { id: 11, title: 'اتوماسیون مالی و حسابداری', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'اتوماسیون مالی', subtitle: 'حسابداری خودکار', blocks: [
      { type: 'paragraph', content: 'اتوماسیون فرآیندهای مالی و حسابداری.' },
    ]}},
    { id: 12, title: 'اتوماسیون HR', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'اتوماسیون HR', subtitle: 'مدیریت منابع انسانی', blocks: [
      { type: 'paragraph', content: 'اتوماسیون فرآیندهای منابع انسانی.' },
    ]}},
    { id: 13, title: 'اتوماسیون لجستیک', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'اتوماسیون لجستیک', subtitle: 'مدیریت زنجیره تأمین', blocks: [
      { type: 'paragraph', content: 'اتوماسیون فرآیندهای لجستیک و زنجیره تأمین.' },
    ]}},
    { id: 14, title: 'فروش خدمات اتوماسیون', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'فروش خدمات', subtitle: 'کسب درآمد از اتوماسیون', blocks: [
      { type: 'paragraph', content: 'اتوماسیون یکی از پرتقاضاترین خدمات است.' },
      { type: 'table', content: { title: 'قیمت‌گذاری', headers: ['خدمت', 'قیمت'], rows: [
        ['اتوماسیون ساده', '۲-۵ میلیون'],
        ['اتوماسیون متوسط', '۵-۱۵ میلیون'],
        ['اتوماسیون پیشرفته', '۱۵-۴۰ میلیون'],
      ]}},
    ]}},
    { id: 15, title: 'آینده اتوماسیون', duration: '۴۵ دقیقه', difficulty: 'همه سطوح', data: { title: 'آینده', subtitle: 'مسیر پیش رو', blocks: [
      { type: 'paragraph', content: 'اتوماسیون با AI در حال تحول سریع است.' },
    ]}},
  ],
};

export default function Automation() {
  return <LessonViewer course={automationCourse} />;
}
