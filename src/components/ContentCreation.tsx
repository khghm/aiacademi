import LessonViewer, { CourseData } from './LessonViewer';

const contentCourse: CourseData = {
  id: 'content',
  title: 'تولید محتوا با AI',
  subtitle: 'تسلط کامل بر تولید محتوای متنی، تصویری، ویدیویی و صوتی',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'pink',
  lessons: [
    { id: 1, title: 'مقدمه تولید محتوا با AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'تولید محتوا با AI', subtitle: 'انقلاب در تولید محتوا', blocks: [
      { type: 'paragraph', content: 'تولید محتوا با AI یکی از پرتقاضاترین مهارت‌ها در بازار کار امروز است.' },
      { type: 'stats', content: [{ label: 'سرعت', value: '۱۰x', color: 'from-purple-500/20 to-indigo-500/20' }, { label: 'کاهش هزینه', value: '۷۰٪', color: 'from-pink-500/20 to-rose-500/20' }]},
      { type: 'flow', content: { title: 'فرآیند تولید محتوا', steps: [{ label: 'تحقیق' }, { label: 'استراتژی' }, { label: 'تولید' }, { label: 'ویرایش' }, { label: 'انتشار' }, { label: 'تحلیل' }] }},
      { type: 'table', content: { title: 'انواع محتوا', headers: ['نوع', 'ابزار', 'زمان'], rows: [['متنی', 'ChatGPT', '۵-۱۵ دقیقه'], ['تصویری', 'Midjourney', '۱-۵ دقیقه'], ['ویدیویی', 'Runway', '۵-۳۰ دقیقه'], ['صوتی', 'ElevenLabs', '۲-۱۰ دقیقه']] }},
    ]}},
    { id: 2, title: 'محتوای متنی حرفه‌ای', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'محتوای متنی', subtitle: 'نوشتن حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'محتوای متنی هنوز هم پادشاه محتوا است.' },
      { type: 'info', content: { type: 'tip', title: 'فرمول PASTA', content: ['P - Purpose', 'A - Audience', 'S - Style', 'T - Tone', 'A - Action'] } },
      { type: 'code', content: { title: 'پرامپت مقاله', language: 'text', code: 'یک مقاله ۲۰۰۰ کلمه‌ای درباره AI بنویس\nمخاطب: صاحبان کسب‌وکار\nلحن: حرفه‌ای' } },
    ]}},
    { id: 3, title: 'محتوای اینستاگرام', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'اینستاگرام', subtitle: 'کپشن و پست', blocks: [
      { type: 'paragraph', content: 'اینستاگرام مهم‌ترین پلتفرم بازاریابی در ایران است.' },
      { type: 'code', content: { title: 'پرامپت کپشن', language: 'text', code: 'یک کپشن اینستاگرام بنویس\nموضوع: ۵ اشتباه یادگیری زبان\nلحن: دوستانه\nهشتگ: ۱۵ عدد' } },
    ]}},
    { id: 4, title: 'کپی‌رایتینگ تبلیغاتی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'کپی تبلیغاتی', subtitle: 'متن‌های فروش', blocks: [
      { type: 'paragraph', content: 'کپی‌رایتینگ هنر نوشتن متن‌های متقاعدکننده است.' },
    ]}},
    { id: 5, title: 'ایمیل مارکتینگ', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'ایمیل مارکتینگ', subtitle: 'ایمیل‌های فروش', blocks: [
      { type: 'paragraph', content: 'ایمیل مارکتینگ بالاترین ROI را دارد.' },
    ]}},
    { id: 6, title: 'تصویر با Midjourney', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'Midjourney', subtitle: 'تصاویر حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'Midjourney قدرتمندترین ابزار تولید تصویر است.' },
      { type: 'code', content: { title: 'پرامپت', language: 'text', code: '/imagine minimalist logo design\nclean lines, geometric shapes\n--v 6 --style raw --ar 1:1' } },
    ]}},
    { id: 7, title: 'تصویر با DALL-E', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'DALL-E', subtitle: 'تصاویر دقیق', blocks: [
      { type: 'paragraph', content: 'DALL-E فهم بهتری از پرامپت‌های طبیعی دارد.' },
    ]}},
    { id: 8, title: 'ویدیو با Runway', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'Runway', subtitle: 'ویدیوهای سینمایی', blocks: [
      { type: 'paragraph', content: 'Runway پیشرفته‌ترین ابزار تولید ویدیو است.' },
    ]}},
    { id: 9, title: 'صوت با ElevenLabs', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'ElevenLabs', subtitle: 'نریشن حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'ElevenLabs بهترین کیفیت TTS را دارد.' },
    ]}},
    { id: 10, title: 'موسیقی با Suno', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'Suno', subtitle: 'آهنگ کامل', blocks: [
      { type: 'paragraph', content: 'Suno می‌تواند آهنگ کامل با وکال بسازد.' },
    ]}},
    { id: 11, title: 'استراتژی محتوایی', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'استراتژی', subtitle: 'برنامه‌ریزی', blocks: [
      { type: 'paragraph', content: 'تولید محتوا بدون استراتژی مثل تیراندازی در تاریکی است.' },
    ]}},
    { id: 12, title: 'اتوماسیون محتوا', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'اتوماسیون', subtitle: 'تولید خودکار', blocks: [
      { type: 'paragraph', content: 'با اتوماسیون، فرآیند تولید را خودکار کنید.' },
    ]}},
    { id: 13, title: 'سئو محتوا', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'سئو', subtitle: 'محتوای بهینه', blocks: [
      { type: 'paragraph', content: 'محتوای سئو شده ترافیک ارگانیک را افزایش می‌دهد.' },
    ]}},
    { id: 14, title: 'کسب درآمد', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'کسب درآمد', subtitle: 'تبدیل به درآمد', blocks: [
      { type: 'table', content: { title: 'مدل‌ها', headers: ['مدل', 'درآمد'], rows: [['ادمین', '۵-۲۰ میلیون'], ['نویسنده', '۵-۱۵ میلیون'], ['طراح', '۵-۲۰ میلیون']] }},
    ]}},
    { id: 15, title: 'آینده تولید محتوا', duration: '۴۵ دقیقه', difficulty: 'همه سطوح', data: { title: 'آینده', subtitle: 'مسیر پیش رو', blocks: [
      { type: 'paragraph', content: 'تولید محتوا با AI در حال تحول سریع است.' },
    ]}},
  ],
};

export default function ContentCreation() {
  return <LessonViewer course={contentCourse} />;
}
