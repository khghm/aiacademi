import RichLessonViewer from './RichLessonViewer';
import { CourseData } from './LessonViewer';

const marketLessons = [
  { title: 'نقشه راه ورود به بازار کار AI', subtitle: 'مسیر موفقیت', blocks: [
    { type: 'paragraph', content: 'بازار کار هوش مصنوعی در ایران در حال رشد سریع است.' },
    { type: 'stats', content: [{ label: 'شرکت‌های ایرانی', value: '۵۰۰۰+', color: 'from-purple-500/20 to-indigo-500/20' }, { label: 'رشد تقاضا', value: '۳x', color: 'from-pink-500/20 to-rose-500/20' }]},
    { type: 'table', content: { title: 'مسیرهای شغلی', headers: ['مسیر', 'درآمد ماهانه', 'زمان'], rows: [['فریلنسر', '۵-۵۰ میلیون', '۲-۳ ماه'], ['متخصص محتوا', '۸-۳۰ میلیون', '۱-۲ ماه'], ['توسعه‌دهنده', '۱۵-۶۰ میلیون', '۳-۶ ماه'], ['مشاور', '۲۰-۱۰۰ میلیون', '۶-۱۲ ماه']] }},
  ]},
  { title: 'ساخت پورتفولیو', subtitle: 'نمونه‌کارهای حرفه‌ای' },
  { title: 'قیمت‌گذاری خدمات', subtitle: 'تعرفه خدمات', blocks: [
    { type: 'table', content: { title: 'جدول قیمت‌گذاری', headers: ['خدمت', 'قیمت متوسط'], rows: [['لندینگ پیج', '۸ میلیون'], ['وب‌سایت شرکتی', '۱۵ میلیون'], ['فروشگاه', '۲۵ میلیون'], ['وب‌اپ', '۴۰ میلیون']] }},
  ]},
  { title: 'مذاکره', subtitle: 'هنر متقاعدسازی' },
  { title: 'بازاریابی شخصی', subtitle: 'برندسازی فردی' },
  { title: 'لینکدین', subtitle: 'حرفه‌ای‌ترین شبکه' },
  { title: 'فریلنسری', subtitle: 'پونیشا، کارلنسر' },
  { title: 'مدیریت پروژه', subtitle: 'تحویل به موقع' },
  { title: 'قرارداد', subtitle: 'محافظت از حقوق' },
  { title: 'تخصص‌گرایی', subtitle: 'نیچ مارکت' },
  { title: 'سیستم‌سازی', subtitle: 'مقیاس‌پذیری' },
  { title: 'تیم‌سازی', subtitle: 'ساخت تیم' },
  { title: 'مدیریت مالی', subtitle: 'حسابداری' },
  { title: 'یادگیری مداوم', subtitle: 'همیشه در حال رشد' },
  { title: 'موفقیت بلندمدت', subtitle: 'مسیر رشد', blocks: [
    { type: 'quote', content: { text: 'موفقیت یک شبه اتفاق نمی‌افتد. اما اگر هر روز یک قدم بردارید، یک سال دیگر جایی خواهید بود که امروز حتی تصور هم نمی‌کنید.', author: 'ناشناس' } },
  ]},
];

const createCourse = (id: string, title: string, subtitle: string, color: string, lessonsData: any[]): CourseData => ({
  id, title, subtitle, badge: `۱۵ درس | ۳۰ ساعت آموزش`, color,
  lessons: lessonsData.map((l, i) => ({
    id: i + 1, title: l.title, duration: l.duration || '۶۰ دقیقه', difficulty: l.difficulty || 'متوسط',
    data: { title: l.title, subtitle: l.subtitle || '', blocks: l.blocks || [{ type: 'paragraph', content: `این درس درباره ${l.title} است.` }] },
  })),
});

export default function MarketPrep() {
  return <RichLessonViewer course={createCourse('market', 'آماده‌سازی بازار کار', 'ورود موفق به بازار کار AI', 'emerald', marketLessons)} />;
}
