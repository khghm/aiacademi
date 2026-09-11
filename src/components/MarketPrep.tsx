import LessonViewer, { CourseData } from './LessonViewer';

const marketCourse: CourseData = {
  id: 'market',
  title: 'آماده‌سازی بازار کار',
  subtitle: 'همه چیز برای ورود موفق به بازار کار هوش مصنوعی در ایران',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'emerald',
  lessons: [
    { id: 1, title: 'نقشه راه ورود به بازار کار AI', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'نقشه راه', subtitle: 'مسیر موفقیت', blocks: [
      { type: 'paragraph', content: 'بازار کار هوش مصنوعی در ایران در حال رشد سریع است. طبق آمار ۱۴۰۳، بیش از ۵۰۰۰ شرکت ایرانی از AI استفاده می‌کنند.' },
      { type: 'stats', content: [
        { label: 'شرکت‌های ایرانی', value: '۵۰۰۰+', color: 'from-purple-500/20 to-indigo-500/20' },
        { label: 'رشد تقاضا', value: '۳x', color: 'from-pink-500/20 to-rose-500/20' },
        { label: 'میانگین درآمد', value: '۲۵M', color: 'from-cyan-500/20 to-blue-500/20' },
        { label: 'فریلنسرها', value: '۱۰K+', color: 'from-amber-500/20 to-orange-500/20' },
      ]},
      { type: 'table', content: { title: 'مسیرهای شغلی', headers: ['مسیر', 'درآمد ماهانه', 'زمان رسیدن'], rows: [
        ['فریلنسر AI', '۵-۵۰ میلیون', '۲-۳ ماه'],
        ['متخصص تولید محتوا', '۸-۳۰ میلیون', '۱-۲ ماه'],
        ['توسعه‌دهنده با AI', '۱۵-۶۰ میلیون', '۳-۶ ماه'],
        ['مشاور AI', '۲۰-۱۰۰ میلیون', '۶-۱۲ ماه'],
      ]}},
    ]}},
    { id: 2, title: 'ساخت پورتفولیوی حرفه‌ای', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'پورتفولیو', subtitle: 'نمونه‌کارهای حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'پورتفولیو مهم‌ترین ابزار شما برای گرفتن مشتری است.' },
    ]}},
    { id: 3, title: 'قیمت‌گذاری خدمات', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'قیمت‌گذاری', subtitle: 'تعرفه خدمات', blocks: [
      { type: 'paragraph', content: 'قیمت‌گذاری درست، تفاوت بین موفقیت و شکست است.' },
      { type: 'table', content: { title: 'جدول قیمت‌گذاری', headers: ['خدمت', 'قیمت متوسط'], rows: [
        ['لندینگ پیج', '۸ میلیون'],
        ['وب‌سایت شرکتی', '۱۵ میلیون'],
        ['فروشگاه آنلاین', '۲۵ میلیون'],
        ['وب‌اپلیکیشن', '۴۰ میلیون'],
        ['مدیریت شبکه اجتماعی', '۱۲ میلیون/ماه'],
      ]}},
    ]}},
    { id: 4, title: 'مذاکره با مشتری', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'مذاکره', subtitle: 'هنر متقاعدسازی', blocks: [
      { type: 'paragraph', content: 'مذاکره مؤثر برای گرفتن پروژه‌های بهتر ضروری است.' },
    ]}},
    { id: 5, title: 'بازاریابی شخصی', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'بازاریابی شخصی', subtitle: 'برندسازی فردی', blocks: [
      { type: 'paragraph', content: 'بازاریابی شخصی برای جذب مشتری ضروری است.' },
    ]}},
    { id: 6, title: 'لینکدین حرفه‌ای', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'لینکدین', subtitle: 'حرفه‌ای‌ترین شبکه', blocks: [
      { type: 'paragraph', content: 'لینکدین مهم‌ترین پلتفرم برای جذب مشتری B2B است.' },
    ]}},
    { id: 7, title: 'سایت‌های فریلنسری', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'فریلنسری', subtitle: 'پونیشا، کارلنسر', blocks: [
      { type: 'paragraph', content: 'سایت‌های فریلنسری برای شروع کار مناسب هستند.' },
    ]}},
    { id: 8, title: 'مدیریت پروژه', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'مدیریت پروژه', subtitle: 'تحویل به موقع', blocks: [
      { type: 'paragraph', content: 'مدیریت صحیح پروژه برای رضایت مشتری ضروری است.' },
    ]}},
    { id: 9, title: 'قرارداد و حقوقی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'قرارداد', subtitle: 'محافظت از حقوق', blocks: [
      { type: 'paragraph', content: 'قرارداد محکم از حقوق شما محافظت می‌کند.' },
    ]}},
    { id: 10, title: 'تخصص‌گرایی', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'تخصص‌گرایی', subtitle: 'نیچ مارکت', blocks: [
      { type: 'paragraph', content: 'تخصص‌گرایی کلید درآمد بالاتر است.' },
    ]}},
    { id: 11, title: 'سیستم‌سازی کسب‌وکار', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'سیستم‌سازی', subtitle: 'مقیاس‌پذیری', blocks: [
      { type: 'paragraph', content: 'سیستم‌سازی برای رشد کسب‌وکار ضروری است.' },
    ]}},
    { id: 12, title: 'تیم‌سازی', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'تیم‌سازی', subtitle: 'ساخت تیم', blocks: [
      { type: 'paragraph', content: 'تیم‌سازی برای رشد کسب‌وکار ضروری است.' },
    ]}},
    { id: 13, title: 'مدیریت مالی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'مدیریت مالی', subtitle: 'حسابداری فریلنسری', blocks: [
      { type: 'paragraph', content: 'مدیریت مالی صحیح برای موفقیت ضروری است.' },
    ]}},
    { id: 14, title: 'یادگیری مداوم', duration: '۶۰ دقیقه', difficulty: 'همه سطوح', data: { title: 'یادگیری مداوم', subtitle: 'همیشه در حال رشد', blocks: [
      { type: 'paragraph', content: 'دنیای AI سریع تغییر می‌کند. باید همیشه در حال یادگیری باشید.' },
    ]}},
    { id: 15, title: 'موفقیت بلندمدت', duration: '۶۰ دقیقه', difficulty: 'همه سطوح', data: { title: 'موفقیت بلندمدت', subtitle: 'مسیر رشد', blocks: [
      { type: 'paragraph', content: 'موفقیت در حوزه AI یک مسیر بلندمدت است.' },
      { type: 'quote', content: { text: 'موفقیت یک شبه اتفاق نمی‌افتد. اما اگر هر روز یک قدم بردارید، یک سال دیگر جایی خواهید بود که امروز حتی تصور هم نمی‌کنید.', author: 'ناشناس' } },
    ]}},
  ],
};

export default function MarketPrep() {
  return <LessonViewer course={marketCourse} />;
}
