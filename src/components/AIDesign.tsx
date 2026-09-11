import LessonViewer, { CourseData } from './LessonViewer';

const designCourse: CourseData = {
  id: 'design',
  title: 'طراحی گرافیک با AI',
  subtitle: 'خلق طرح‌های حرفه‌ای بدون نیاز به مهارت گرافیکی',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'rose',
  lessons: [
    { id: 1, title: 'مقدمه‌ای بر طراحی با AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'طراحی با AI', subtitle: 'انقلاب در طراحی', blocks: [
      { type: 'paragraph', content: 'هوش مصنوعی انقلابی در دنیای طراحی ایجاد کرده است. اکنون هر کسی می‌تواند با کمک AI طرح‌های حرفه‌ای ایجاد کند.' },
      { type: 'table', content: { title: 'ابزارهای طراحی', headers: ['ابزار', 'بهترین برای', 'قیمت'], rows: [
        ['Midjourney', 'تصاویر هنری', 'از $10/ماه'],
        ['DALL-E 3', 'تصاویر دقیق', 'شامل ChatGPT+'],
        ['Leonardo AI', 'Game Art', 'رایگان / $12'],
        ['Canva AI', 'طراحی سریع', 'رایگان / $13'],
      ]}},
    ]}},
    { id: 2, title: 'اصول طراحی UI/UX', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'اصول طراحی', subtitle: 'UI/UX حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'اصول طراحی UI/UX برای ساخت رابط‌های کاربری حرفه‌ای.' },
    ]}},
    { id: 3, title: 'طراحی لوگو با AI', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'طراحی لوگو', subtitle: 'لوگوهای حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'طراحی لوگو با AI در زمان بسیار کوتاه.' },
      { type: 'code', content: { title: 'پرامپت Midjourney', language: 'text', code: `/imagine minimalist logo design for [نام برند],
clean geometric shapes, modern and elegant,
[رنگ] color scheme, white background
--v 6 --style raw --ar 1:1 --q 2` } },
    ]}},
    { id: 4, title: 'طراحی بنر و پوستر', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'بنر و پوستر', subtitle: 'طرح‌های تبلیغاتی', blocks: [
      { type: 'paragraph', content: 'طراحی بنر و پوستر تبلیغاتی با AI.' },
    ]}},
    { id: 5, title: 'طراحی UI وب‌سایت', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'UI وب‌سایت', subtitle: 'رابط کاربری وب', blocks: [
      { type: 'paragraph', content: 'طراحی رابط کاربری وب‌سایت با AI.' },
    ]}},
    { id: 6, title: 'طراحی اپلیکیشن موبایل', duration: '۹۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'UI موبایل', subtitle: 'رابط کاربری اپلیکیشن', blocks: [
      { type: 'paragraph', content: 'طراحی رابط کاربری اپلیکیشن موبایل با AI.' },
    ]}},
    { id: 7, title: 'طراحی بسته‌بندی', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'بسته‌بندی', subtitle: 'طراحی بسته‌بندی محصول', blocks: [
      { type: 'paragraph', content: 'طراحی بسته‌بندی محصول با AI.' },
    ]}},
    { id: 8, title: 'هویت بصری برند', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'هویت بصری', subtitle: 'برندینگ کامل', blocks: [
      { type: 'paragraph', content: 'طراحی هویت بصری کامل برند با AI.' },
    ]}},
    { id: 9, title: 'ویرایش تصاویر با AI', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'ویرایش تصویر', subtitle: 'ویرایش حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'ویرایش و بهینه‌سازی تصاویر با AI.' },
    ]}},
    { id: 10, title: 'حذف پس‌زمینه', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'حذف پس‌زمینه', subtitle: 'Remove Background', blocks: [
      { type: 'paragraph', content: 'حذف خودکار پس‌زمینه تصاویر.' },
    ]}},
    { id: 11, title: 'تغییر سبک تصاویر', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'تغییر سبک', subtitle: 'Style Transfer', blocks: [
      { type: 'paragraph', content: 'تغییر سبک تصاویر با AI.' },
    ]}},
    { id: 12, title: 'ساخت موکاپ', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'موکاپ', subtitle: 'نمایش طرح‌ها', blocks: [
      { type: 'paragraph', content: 'ساخت موکاپ حرفه‌ای با AI.' },
    ]}},
    { id: 13, title: 'طراحی آیکون', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'آیکون', subtitle: 'طراحی آیکون', blocks: [
      { type: 'paragraph', content: 'طراحی آیکون‌های حرفه‌ای با AI.' },
    ]}},
    { id: 14, title: 'فروش خدمات طراحی', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'فروش خدمات', subtitle: 'کسب درآمد از طراحی', blocks: [
      { type: 'paragraph', content: 'طراحی با AI یکی از پردرآمدترین خدمات است.' },
      { type: 'table', content: { title: 'قیمت‌گذاری', headers: ['خدمت', 'قیمت'], rows: [
        ['طراحی لوگو', '۵۰۰ هزار - ۵ میلیون'],
        ['هویت بصری', '۳-۳۰ میلیون'],
        ['UI وب‌سایت', '۳-۳۰ میلیون'],
        ['UI اپلیکیشن', '۵-۴۰ میلیون'],
      ]}},
    ]}},
    { id: 15, title: 'آینده طراحی با AI', duration: '۴۵ دقیقه', difficulty: 'همه سطوح', data: { title: 'آینده', subtitle: 'مسیر پیش رو', blocks: [
      { type: 'paragraph', content: 'طراحی با AI در حال تحول سریع است.' },
    ]}},
  ],
};

export default function AIDesign() {
  return <LessonViewer course={designCourse} />;
}
