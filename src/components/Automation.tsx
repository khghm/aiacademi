import RichLessonViewer from './RichLessonViewer';
import { CourseData } from './LessonViewer';

const automationLessons = [
  { title: 'مفاهیم اتوماسیون با AI', subtitle: 'خودکارسازی هوشمند', blocks: [
    { type: 'paragraph', content: 'اتوماسیون یعنی خودکارسازی فرآیندهای تکراری با ابزارهای نرم‌افزاری.' },
    { type: 'stats', content: [{ label: 'صرفه‌جویی', value: '۸۰٪', color: 'from-purple-500/20 to-indigo-500/20' }, { label: 'کاهش خطا', value: '۹۰٪', color: 'from-pink-500/20 to-rose-500/20' }]},
    { type: 'flow', content: { title: 'فرآیند طراحی', steps: [{ label: 'شناسایی' }, { label: 'طراحی' }, { label: 'انتخاب ابزار' }, { label: 'ساخت' }, { label: 'تست' }, { label: 'بهینه‌سازی' }] }},
  ]},
  { title: 'ابزارهای اتوماسیون', subtitle: 'Zapier, Make, n8n', blocks: [
    { type: 'table', content: { title: 'ابزارها', headers: ['ابزار', 'بهترین برای', 'قیمت'], rows: [['Zapier', 'اتصال اپلیکیشن‌ها', 'رایگان / $20'], ['Make.com', 'اتوماسیون پیچیده', 'رایگان / $10'], ['n8n', 'اپن سورس', 'رایگان']] }},
  ]},
  { title: 'Zapier', subtitle: 'اتوماسیون بدون کد' },
  { title: 'Make.com', subtitle: 'اتوماسیون پیشرفته' },
  { title: 'ایمیل اتوماتیک', subtitle: 'ارسال خودکار' },
  { title: 'شبکه‌های اجتماعی', subtitle: 'انتشار خودکار' },
  { title: 'CRM اتوماتیک', subtitle: 'مدیریت مشتریان' },
  { title: 'تولید محتوای اتوماتیک', subtitle: 'تولید و انتشار' },
  { title: 'پشتیبانی اتوماتیک', subtitle: 'پاسخ خودکار' },
  { title: 'n8n', subtitle: 'اتوماسیون اپن سورس' },
  { title: 'اتوماسیون مالی', subtitle: 'حسابداری خودکار' },
  { title: 'اتوماسیون HR', subtitle: 'منابع انسانی' },
  { title: 'اتوماسیون لجستیک', subtitle: 'زنجیره تأمین' },
  { title: 'فروش خدمات', subtitle: 'کسب درآمد', blocks: [
    { type: 'table', content: { title: 'قیمت‌گذاری', headers: ['خدمت', 'قیمت'], rows: [['ساده', '۲-۵ میلیون'], ['متوسط', '۵-۱۵ میلیون'], ['پیشرفته', '۱۵-۴۰ میلیون']] }},
  ]},
  { title: 'آینده اتوماسیون', subtitle: 'مسیر پیش رو' },
];

const createCourse = (id: string, title: string, subtitle: string, color: string, lessonsData: any[]): CourseData => ({
  id, title, subtitle, badge: `۱۵ درس | ۳۰ ساعت آموزش`, color,
  lessons: lessonsData.map((l, i) => ({
    id: i + 1, title: l.title, duration: l.duration || '۶۰ دقیقه', difficulty: l.difficulty || 'متوسط',
    data: { title: l.title, subtitle: l.subtitle || '', blocks: l.blocks || [{ type: 'paragraph', content: `این درس درباره ${l.title} است.` }] },
  })),
});

export default function Automation() {
  return <RichLessonViewer course={createCourse('automation', 'اتوماسیون کسب‌وکار با AI', 'خودکارسازی فرآیندها و صرفه‌جویی ۸۰٪', 'amber', automationLessons)} />;
}
