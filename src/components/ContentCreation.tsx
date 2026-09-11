import LessonViewer, { CourseData } from './LessonViewer';

const contentCourse: CourseData = {
  id: 'content',
  title: 'تولید محتوا با AI',
  subtitle: 'تسلط کامل بر تولید محتوای متنی، تصویری، ویدیویی و صوتی',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'pink',
  lessons: [
    { id: 1, title: 'مقدمه‌ای بر تولید محتوا با AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'تولید محتوا با AI', subtitle: 'انقلاب در تولید محتوا', blocks: [
      { type: 'paragraph', content: 'تولید محتوا با AI یکی از پرتقاضاترین مهارت‌ها در بازار کار امروز است. با استفاده از ابزارهای هوش مصنوعی، شما می‌توانید محتوایی با کیفیت بالا و در زمان بسیار کوتاه تولید کنید.' },
      { type: 'stats', content: [
        { label: 'سرعت تولید', value: '۱۰x', color: 'from-purple-500/20 to-indigo-500/20' },
        { label: 'کاهش هزینه', value: '۷۰٪', color: 'from-pink-500/20 to-rose-500/20' },
        { label: 'افزایش کیفیت', value: '۸۰٪', color: 'from-cyan-500/20 to-blue-500/20' },
        { label: 'مقیاس‌پذیری', value: 'نامحدود', color: 'from-amber-500/20 to-orange-500/20' },
      ]},
      { type: 'flow', content: { title: 'فرآیند تولید محتوا با AI', steps: [
        { label: 'تحقیق', sublabel: 'موضوع و مخاطب' },
        { label: 'استراتژی', sublabel: 'نقشه محتوا' },
        { label: 'تولید', sublabel: 'با ابزار AI' },
        { label: 'ویرایش', sublabel: 'بازبینی انسانی' },
        { label: 'انتشار', sublabel: 'پلتفرم مناسب' },
        { label: 'تحلیل', sublabel: 'بازخورد و بهبود' },
      ]}},
      { type: 'table', content: { title: 'انواع محتوای تولیدی با AI', headers: ['نوع', 'ابزار', 'زمان تولید', 'کیفیت'], rows: [
        ['متنی', 'ChatGPT, Claude', '۵-۱۵ دقیقه', 'عالی'],
        ['تصویری', 'Midjourney, DALL-E', '۱-۵ دقیقه', 'عالی'],
        ['ویدیویی', 'Runway, Kling', '۵-۳۰ دقیقه', 'خوب'],
        ['صوتی', 'ElevenLabs, Suno', '۲-۱۰ دقیقه', 'عالی'],
      ]}},
    ]}},
    { id: 2, title: 'تولید محتوای متنی حرفه‌ای', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'محتوای متنی', subtitle: 'نوشتن حرفه‌ای با AI', blocks: [
      { type: 'paragraph', content: 'محتوای متنی هنوز هم پادشاه محتوا است. در این درس، تکنیک‌های حرفه‌ای نوشتن پرامپت برای انواع محتوای متنی را یاد می‌گیرید.' },
      { type: 'info', content: { type: 'tip', title: 'فرمول PASTA', content: ['P - Purpose: هدف محتوا', 'A - Audience: مخاطب هدف', 'S - Style: سبک نوشتاری', 'T - Tone: لحن', 'A - Action: اقدام مورد انتظار'] } },
      { type: 'code', content: { title: 'پرامپت مقاله وبلاگ', language: 'text', code: `یک مقاله ۲۰۰۰ کلمه‌ای درباره "تأثیر هوش مصنوعی بر مشاغل ایران" بنویس.

مخاطب: صاحبان کسب‌وکارهای کوچک و متوسط ایرانی
لحن: حرفه‌ای اما قابل فهم، با مثال‌های بومی
ساختار:
- مقدمه جذاب با آمار
- ۵ بخش اصلی با زیرعنوان
- مثال‌های واقعی از بازار ایران
- نتیجه‌گیری با Call to Action
سئو: کلمه کلیدی "هوش مصنوعی در کسب و کار"` } },
    ]}},
    { id: 3, title: 'تولید محتوای اینستاگرام', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'محتوای اینستاگرام', subtitle: 'کپشن و پست حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'اینستاگرام مهم‌ترین پلتفرم بازاریابی در ایران است. تولید محتوای حرفه‌ای برای این پلتفرم بسیار مهم است.' },
      { type: 'code', content: { title: 'پرامپت کپشن اینستاگرام', language: 'text', code: `یک کپشن اینستاگرام برای پیج آموزش زبان انگلیسی بنویس.

موضوع: ۵ اشتباه رایج در یادگیری زبان
لحن: دوستانه و انگیزشی
ساختار:
- هوک جذاب در خط اول
- ۵ نکته با شماره
- سوال برای تعامل
- ۱۵ هشتگ مرتبط
حداکثر ۲۲۰۰ کاراکتر` } },
    ]}},
    { id: 4, title: 'کپی‌رایتینگ تبلیغاتی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'کپی تبلیغاتی', subtitle: 'نوشتن متن‌های فروش', blocks: [
      { type: 'paragraph', content: 'کپی‌رایتینگ هنر نوشتن متن‌های متقاعدکننده برای فروش است.' },
    ]}},
    { id: 5, title: 'ایمیل مارکتینگ با AI', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'ایمیل مارکتینگ', subtitle: 'نوشتن ایمیل‌های فروش', blocks: [
      { type: 'paragraph', content: 'ایمیل مارکتینگ همچنان بالاترین ROI را دارد.' },
    ]}},
    { id: 6, title: 'تولید تصویر با Midjourney', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'تصویر با Midjourney', subtitle: 'ساخت تصاویر حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'Midjourney قدرتمندترین ابزار تولید تصویر است.' },
      { type: 'code', content: { title: 'پرامپت Midjourney', language: 'text', code: `/imagine minimalist logo design for a coffee shop,
clean lines, geometric shapes, black and gold,
white background, vector style
--v 6 --style raw --ar 1:1 --q 2` } },
    ]}},
    { id: 7, title: 'تولید تصویر با DALL-E', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'تصویر با DALL-E', subtitle: 'ساخت تصاویر دقیق', blocks: [
      { type: 'paragraph', content: 'DALL-E فهم بهتری از پرامپت‌های طبیعی دارد.' },
    ]}},
    { id: 8, title: 'تولید ویدیو با Runway', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'ویدیو با Runway', subtitle: 'ساخت ویدیوهای سینمایی', blocks: [
      { type: 'paragraph', content: 'Runway پیشرفته‌ترین ابزار تولید ویدیو است.' },
    ]}},
    { id: 9, title: 'تولید صوت با ElevenLabs', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'صوت با ElevenLabs', subtitle: 'نریشن حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'ElevenLabs بهترین کیفیت TTS را دارد.' },
    ]}},
    { id: 10, title: 'ساخت موسیقی با Suno', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'موسیقی با Suno', subtitle: 'ساخت آهنگ کامل', blocks: [
      { type: 'paragraph', content: 'Suno می‌تواند آهنگ کامل با وکال بسازد.' },
    ]}},
    { id: 11, title: 'استراتژی محتوایی', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'استراتژی محتوا', subtitle: 'برنامه‌ریزی محتوایی', blocks: [
      { type: 'paragraph', content: 'تولید محتوا بدون استراتژی مثل تیراندازی در تاریکی است.' },
    ]}},
    { id: 12, title: 'اتوماسیون تولید محتوا', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'اتوماسیون محتوا', subtitle: 'تولید خودکار', blocks: [
      { type: 'paragraph', content: 'با اتوماسیون، فرآیند تولید محتوا را خودکار کنید.' },
    ]}},
    { id: 13, title: 'سئو و محتوای بهینه', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'سئو محتوا', subtitle: 'محتوای سئو شده', blocks: [
      { type: 'paragraph', content: 'محتوای سئو شده ترافیک ارگانیک را افزایش می‌دهد.' },
    ]}},
    { id: 14, title: 'کسب درآمد از تولید محتوا', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'کسب درآمد', subtitle: 'تبدیل محتوا به درآمد', blocks: [
      { type: 'paragraph', content: 'تولید محتوا با AI یکی از سریع‌ترین مسیرهای کسب درآمد است.' },
      { type: 'table', content: { title: 'مدل‌های درآمدزایی', headers: ['مدل', 'درآمد ماهانه'], rows: [
        ['ادمین شبکه اجتماعی', '۵-۲۰ میلیون'],
        ['نویسنده محتوا', '۵-۱۵ میلیون'],
        ['طراح گرافیک AI', '۵-۲۰ میلیون'],
        ['تولیدکننده ویدیو', '۸-۳۰ میلیون'],
      ]}},
    ]}},
    { id: 15, title: 'آینده تولید محتوا با AI', duration: '۴۵ دقیقه', difficulty: 'همه سطوح', data: { title: 'آینده', subtitle: 'مسیر پیش رو', blocks: [
      { type: 'paragraph', content: 'تولید محتوا با AI در حال تحول سریع است.' },
    ]}},
  ],
};

export default function ContentCreation() {
  return <LessonViewer course={contentCourse} />;
}
