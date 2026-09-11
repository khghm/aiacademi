import LessonViewer, { CourseData } from './LessonViewer';

const marketingCourse: CourseData = {
  id: 'marketing',
  title: 'بازاریابی هوشمند با AI',
  subtitle: 'استراتژی‌های بازاریابی مدرن با قدرت هوش مصنوعی',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'cyan',
  lessons: [
    { id: 1, title: 'مفاهیم پایه بازاریابی AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'بازاریابی با AI', subtitle: 'انقلاب در بازاریابی', blocks: [
      { type: 'paragraph', content: 'بازاریابی با AI یعنی استفاده از ابزارهای هوش مصنوعی برای بهبود تمام جنبه‌های بازاریابی کسب‌وکار.' },
      { type: 'stats', content: [
        { label: 'افزایش ROI', value: '۴۰٪', color: 'from-purple-500/20 to-indigo-500/20' },
        { label: 'کاهش هزینه', value: '۳۰٪', color: 'from-pink-500/20 to-rose-500/20' },
        { label: 'سرعت اجرا', value: '۵x', color: 'from-cyan-500/20 to-blue-500/20' },
        { label: 'دقت هدف‌گذاری', value: '۸۰٪', color: 'from-amber-500/20 to-orange-500/20' },
      ]},
      { type: 'flow', content: { title: 'چرخه بازاریابی هوشمند', steps: [
        { label: 'تحقیق', sublabel: 'بازار و رقبا' },
        { label: 'استراتژی', sublabel: 'برنامه‌ریزی' },
        { label: 'تولید', sublabel: 'محتوا و تبلیغ' },
        { label: 'انتشار', sublabel: 'پلتفرم‌ها' },
        { label: 'تحلیل', sublabel: 'داده و نتایج' },
        { label: 'بهینه‌سازی', sublabel: 'بهبود مداوم' },
      ]}},
    ]}},
    { id: 2, title: 'سئو با هوش مصنوعی', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'سئو با AI', subtitle: 'بهینه‌سازی موتور جستجو', blocks: [
      { type: 'paragraph', content: 'سئو یکی از مؤثرترین کانال‌های بازاریابی است. با AI می‌توانید فرآیند سئو را ۱۰ برابر سریع‌تر انجام دهید.' },
      { type: 'flow', content: { title: 'فرآیند سئو با AI', steps: [
        { label: 'تحقیق کلمات', sublabel: 'Keyword Research' },
        { label: 'تحلیل رقبا', sublabel: 'Competitor Analysis' },
        { label: 'تولید محتوا', sublabel: 'Content Creation' },
        { label: 'بهینه‌سازی', sublabel: 'On-Page SEO' },
        { label: 'لینک‌سازی', sublabel: 'Link Building' },
      ]}},
      { type: 'code', content: { title: 'پرامپت تحقیق کلمات کلیدی', language: 'text', code: `من یک فروشگاه آنلاین لوازم آرایشی دارم.
۵۰ کلمه کلیدی مرتبط با "خرید آنلاین لوازم آرایشی" پیشنهاد بده.

دسته‌بندی کن به:
1. کلمات کلیدی اصلی (Volume بالا)
2. کلمات کلیدی طولانی (Long-tail)
3. سوالات متداول کاربران
4. کلمات کلیدی محلی (ایران)` } },
    ]}},
    { id: 3, title: 'تبلیغات کلیکی با AI', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'تبلیغات کلیکی', subtitle: 'Google Ads و یکتانت', blocks: [
      { type: 'paragraph', content: 'تبلیغات کلیکی سریع‌ترین راه جذب مشتری است.' },
    ]}},
    { id: 4, title: 'ایمیل مارکتینگ هوشمند', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'ایمیل مارکتینگ', subtitle: 'ایمیل‌های شخصی‌سازی‌شده', blocks: [
      { type: 'paragraph', content: 'ایمیل مارکتینگ بالاترین ROI را دارد.' },
    ]}},
    { id: 5, title: 'بازاریابی شبکه‌های اجتماعی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'شبکه‌های اجتماعی', subtitle: 'اینستاگرام، لینکدین، تلگرام', blocks: [
      { type: 'paragraph', content: 'شبکه‌های اجتماعی مهم‌ترین کانال بازاریابی در ایران هستند.' },
    ]}},
    { id: 6, title: 'تحلیل داده با AI', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'تحلیل داده', subtitle: 'بینش از داده‌ها', blocks: [
      { type: 'paragraph', content: 'تحلیل داده به شما کمک می‌کند تصمیمات بهتری بگیرید.' },
    ]}},
    { id: 7, title: 'اتوماسیون بازاریابی', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'اتوماسیون', subtitle: 'خودکارسازی فرآیندها', blocks: [
      { type: 'paragraph', content: 'اتوماسیون بازاریابی زمان و هزینه را کاهش می‌دهد.' },
    ]}},
    { id: 8, title: 'چت‌بات برای فروش', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'چت‌بات فروش', subtitle: 'فروش خودکار ۲۴/۷', blocks: [
      { type: 'paragraph', content: 'چت‌بات می‌تواند ۲۴ ساعته بفروشد.' },
    ]}},
    { id: 9, title: 'شخصی‌سازی با AI', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'شخصی‌سازی', subtitle: 'تجربه شخصی برای هر مشتری', blocks: [
      { type: 'paragraph', content: 'شخصی‌سازی نرخ تبدیل را افزایش می‌دهد.' },
    ]}},
    { id: 10, title: 'A/B Testing با AI', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'A/B Testing', subtitle: 'تست و بهینه‌سازی', blocks: [
      { type: 'paragraph', content: 'A/B Testing به شما کمک می‌کند بهترین نسخه را پیدا کنید.' },
    ]}},
    { id: 11, title: 'بازاریابی محتوایی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'بازاریابی محتوایی', subtitle: 'محتوا به عنوان ابزار بازاریابی', blocks: [
      { type: 'paragraph', content: 'محتوای باکیفیت اعتماد و فروش را افزایش می‌دهد.' },
    ]}},
    { id: 12, title: 'بازاریابی ویدیویی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'بازاریابی ویدیویی', subtitle: 'ویدیو قدرتمندترین فرمت', blocks: [
      { type: 'paragraph', content: 'ویدیو بالاترین engagement را دارد.' },
    ]}},
    { id: 13, title: 'اینفلوئنسر مارکتینگ با AI', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'اینفلوئنسر مارکتینگ', subtitle: 'همکاری با اینفلوئنسرها', blocks: [
      { type: 'paragraph', content: 'AI می‌تواند اینفلوئنسرهای مناسب را پیدا کند.' },
    ]}},
    { id: 14, title: 'اندازه‌گیری ROI', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'اندازه‌گیری ROI', subtitle: 'محاسبه بازگشت سرمایه', blocks: [
      { type: 'paragraph', content: 'اندازه‌گیری ROI برای بهینه‌سازی بودجه ضروری است.' },
    ]}},
    { id: 15, title: 'آینده بازاریابی با AI', duration: '۴۵ دقیقه', difficulty: 'همه سطوح', data: { title: 'آینده', subtitle: 'مسیر پیش رو', blocks: [
      { type: 'paragraph', content: 'بازاریابی با AI در حال تحول سریع است.' },
    ]}},
  ],
};

export default function Marketing() {
  return <LessonViewer course={marketingCourse} />;
}
