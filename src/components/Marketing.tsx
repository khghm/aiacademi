import RichLessonViewer from './RichLessonViewer';
import { CourseData } from './LessonViewer';

const createCourse = (id: string, title: string, subtitle: string, color: string, lessonsData: any[]): CourseData => ({
  id, title, subtitle, badge: `۱۵ درس | ۳۰ ساعت آموزش`, color,
  lessons: lessonsData.map((l, i) => ({
    id: i + 1,
    title: l.title,
    duration: l.duration || '۶۰ دقیقه',
    difficulty: l.difficulty || 'متوسط',
    data: {
      title: l.title,
      subtitle: l.subtitle || '',
      blocks: l.blocks || [{ type: 'paragraph', content: `این درس درباره ${l.title} است.` }],
    },
  })),
});

const marketingLessons = [
  { title: 'مفاهیم پایه بازاریابی AI', subtitle: 'انقلاب در بازاریابی', blocks: [
    { type: 'paragraph', content: 'بازاریابی با AI یعنی استفاده از ابزارهای هوش مصنوعی برای بهبود بازاریابی.' },
    { type: 'stats', content: [{ label: 'ROI', value: '۴۰٪', color: 'from-purple-500/20 to-indigo-500/20' }, { label: 'کاهش هزینه', value: '۳۰٪', color: 'from-pink-500/20 to-rose-500/20' }]},
    { type: 'flow', content: { title: 'چرخه بازاریابی', steps: [{ label: 'تحقیق' }, { label: 'استراتژی' }, { label: 'تولید' }, { label: 'انتشار' }, { label: 'تحلیل' }, { label: 'بهینه‌سازی' }] }},
  ]},
  { title: 'سئو با AI', subtitle: 'بهینه‌سازی موتور جستجو', blocks: [
    { type: 'paragraph', content: 'سئو یکی از مؤثرترین کانال‌های بازاریابی است.' },
    { type: 'flow', content: { title: 'فرآیند سئو', steps: [{ label: 'تحقیق کلمات' }, { label: 'تحلیل رقبا' }, { label: 'تولید محتوا' }, { label: 'بهینه‌سازی' }, { label: 'لینک‌سازی' }] }},
    { type: 'code', content: { title: 'پرامپت تحقیق کلمات', language: 'text', code: '۵۰ کلمه کلیدی مرتبط با "خرید آنلاین لوازم آرایشی" پیشنهاد بده' } },
  ]},
  { title: 'تبلیغات کلیکی', subtitle: 'Google Ads و یکتانت' },
  { title: 'ایمیل مارکتینگ', subtitle: 'ایمیل‌های شخصی‌سازی‌شده' },
  { title: 'شبکه‌های اجتماعی', subtitle: 'اینستاگرام، لینکدین' },
  { title: 'تحلیل داده', subtitle: 'بینش از داده‌ها' },
  { title: 'اتوماسیون بازاریابی', subtitle: 'خودکارسازی فرآیندها' },
  { title: 'چت‌بات فروش', subtitle: 'فروش خودکار ۲۴/۷' },
  { title: 'شخصی‌سازی', subtitle: 'تجربه شخصی' },
  { title: 'A/B Testing', subtitle: 'تست و بهینه‌سازی' },
  { title: 'بازاریابی محتوایی', subtitle: 'محتوا به عنوان ابزار' },
  { title: 'بازاریابی ویدیویی', subtitle: 'ویدیو قدرتمندترین فرمت' },
  { title: 'اینفلوئنسر مارکتینگ', subtitle: 'همکاری با اینفلوئنسرها' },
  { title: 'اندازه‌گیری ROI', subtitle: 'محاسبه بازگشت سرمایه' },
  { title: 'آینده بازاریابی', subtitle: 'مسیر پیش رو' },
];

export default function Marketing() {
  const course = createCourse('marketing', 'بازاریابی هوشمند با AI', 'استراتژی‌های بازاریابی مدرن با AI', 'cyan', marketingLessons);
  return <RichLessonViewer course={course} />;
}
