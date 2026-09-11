import LessonViewer, { CourseData } from './LessonViewer';

const designLessons = [
  { title: 'مقدمه‌ای بر طراحی با AI', subtitle: 'انقلاب در طراحی', blocks: [
    { type: 'paragraph', content: 'هوش مصنوعی انقلابی در دنیای طراحی ایجاد کرده است.' },
    { type: 'table', content: { title: 'ابزارها', headers: ['ابزار', 'بهترین برای', 'قیمت'], rows: [['Midjourney', 'تصاویر هنری', 'از $10'], ['DALL-E 3', 'تصاویر دقیق', 'شامل GPT+'], ['Leonardo AI', 'Game Art', 'رایگان / $12'], ['Canva AI', 'طراحی سریع', 'رایگان / $13']] }},
  ]},
  { title: 'اصول UI/UX', subtitle: 'طراحی حرفه‌ای' },
  { title: 'طراحی لوگو', subtitle: 'لوگوهای حرفه‌ای', blocks: [
    { type: 'code', content: { title: 'پرامپت Midjourney', language: 'text', code: '/imagine minimalist logo design\nclean geometric shapes\n--v 6 --style raw --ar 1:1' } },
  ]},
  { title: 'بنر و پوستر', subtitle: 'طرح‌های تبلیغاتی' },
  { title: 'UI وب‌سایت', subtitle: 'رابط کاربری وب' },
  { title: 'UI اپلیکیشن', subtitle: 'رابط کاربری موبایل' },
  { title: 'بسته‌بندی', subtitle: 'طراحی بسته‌بندی' },
  { title: 'هویت بصری', subtitle: 'برندینگ کامل' },
  { title: 'ویرایش تصویر', subtitle: 'ویرایش حرفه‌ای' },
  { title: 'حذف پس‌زمینه', subtitle: 'Remove Background' },
  { title: 'تغییر سبک', subtitle: 'Style Transfer' },
  { title: 'موکاپ', subtitle: 'نمایش طرح‌ها' },
  { title: 'آیکون', subtitle: 'طراحی آیکون' },
  { title: 'فروش خدمات', subtitle: 'کسب درآمد', blocks: [
    { type: 'table', content: { title: 'قیمت‌گذاری', headers: ['خدمت', 'قیمت'], rows: [['لوگو', '۵۰۰ هزار - ۵ میلیون'], ['هویت بصری', '۳-۳۰ میلیون'], ['UI وب', '۳-۳۰ میلیون']] }},
  ]},
  { title: 'آینده طراحی', subtitle: 'مسیر پیش رو' },
];

const createCourse = (id: string, title: string, subtitle: string, color: string, lessonsData: any[]): CourseData => ({
  id, title, subtitle, badge: `۱۵ درس | ۳۰ ساعت آموزش`, color,
  lessons: lessonsData.map((l, i) => ({
    id: i + 1, title: l.title, duration: l.duration || '۶۰ دقیقه', difficulty: l.difficulty || 'متوسط',
    data: { title: l.title, subtitle: l.subtitle || '', blocks: l.blocks || [{ type: 'paragraph', content: `این درس درباره ${l.title} است.` }] },
  })),
});

export default function AIDesign() {
  return <LessonViewer course={createCourse('design', 'طراحی گرافیک با AI', 'خلق طرح‌های حرفه‌ای', 'rose', designLessons)} />;
}
