import LessonViewer, { CourseData } from './LessonViewer';

const chatbotsCourse: CourseData = {
  id: 'chatbots',
  title: 'ساخت چت‌بات و دستیار هوشمند',
  subtitle: 'طراحی و پیاده‌سازی چت‌بات‌های حرفه‌ای برای کسب‌وکار',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'teal',
  lessons: [
    { id: 1, title: 'مقدمه‌ای بر چت‌بات‌ها', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'چت‌بات‌ها', subtitle: 'دستیاران هوشمند', blocks: [
      { type: 'paragraph', content: 'چت‌بات یک نرم‌افزار است که می‌تواند با کاربران به صورت خودکار گفتگو کند. چت‌بات‌های مدرن با استفاده از AI می‌توانند مکالمات پیچیده و طبیعی داشته باشند.' },
      { type: 'table', content: { title: 'انواع چت‌بات', headers: ['نوع', 'توضیح', 'کاربرد'], rows: [
        ['Rule-Based', 'بر اساس قوانین', 'پاسخ به سوالات متداول'],
        ['AI-Based', 'با مدل‌های زبانی', 'مکالمات پیچیده'],
        ['Hybrid', 'ترکیب قوانین و AI', 'پشتیبانی حرفه‌ای'],
        ['Voice Bot', 'چت‌بات صوتی', 'پشتیبانی تلفنی'],
      ]}},
    ]}},
    { id: 2, title: 'طراحی مکالمه', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'طراحی مکالمه', subtitle: 'Conversation Design', blocks: [
      { type: 'paragraph', content: 'طراحی مکالمه هنر ساخت گفتگوهای طبیعی و مؤثر است.' },
    ]}},
    { id: 3, title: 'ساخت چت‌بات با Botpress', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'Botpress', subtitle: 'پلتفرم چت‌بات حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'Botpress یک پلتفرم اپن‌سورس قدرتمند برای ساخت چت‌بات است.' },
    ]}},
    { id: 4, title: 'ساخت چت‌بات با Voiceflow', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'Voiceflow', subtitle: 'طراحی بصری چت‌بات', blocks: [
      { type: 'paragraph', content: 'Voiceflow ابزار بصری برای طراحی چت‌بات است.' },
    ]}},
    { id: 5, title: 'چت‌بات تلگرام', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'چت‌بات تلگرام', subtitle: 'ساخت بات تلگرام', blocks: [
      { type: 'paragraph', content: 'تلگرام یکی از محبوب‌ترین پلتفرم‌ها برای چت‌بات است.' },
    ]}},
    { id: 6, title: 'چت‌بات اینستاگرام', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'چت‌بات اینستاگرام', subtitle: 'اتوماسیون دایرکت', blocks: [
      { type: 'paragraph', content: 'چت‌بات اینستاگرام برای پاسخ خودکار به دایرکت‌ها.' },
    ]}},
    { id: 7, title: 'چت‌بات هوشمند با GPT', duration: '۹۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'چت‌بات GPT', subtitle: 'چت‌بات با ChatGPT API', blocks: [
      { type: 'paragraph', content: 'ساخت چت‌بات هوشمند با استفاده از API ChatGPT.' },
    ]}},
    { id: 8, title: 'یکپارچه‌سازی با CRM', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'اتصال به CRM', subtitle: 'یکپارچه‌سازی با سیستم‌ها', blocks: [
      { type: 'paragraph', content: 'اتصال چت‌بات به CRM و دیتابیس.' },
    ]}},
    { id: 9, title: 'تحلیل و بهینه‌سازی', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'بهینه‌سازی', subtitle: 'بهبود عملکرد چت‌بات', blocks: [
      { type: 'paragraph', content: 'تحلیل عملکرد و بهینه‌سازی چت‌بات.' },
    ]}},
    { id: 10, title: 'چت‌بات برای فروش', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'چت‌بات فروش', subtitle: 'فروش خودکار', blocks: [
      { type: 'paragraph', content: 'استفاده از چت‌بات برای فروش خودکار.' },
    ]}},
    { id: 11, title: 'چت‌بات پشتیبانی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'چت‌بات پشتیبانی', subtitle: 'پشتیبانی ۲۴/۷', blocks: [
      { type: 'paragraph', content: 'چت‌بات برای پشتیبانی مشتریان.' },
    ]}},
    { id: 12, title: 'چت‌بات رزرو نوبت', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'رزرو نوبت', subtitle: 'اتوماسیون رزرو', blocks: [
      { type: 'paragraph', content: 'چت‌بات برای رزرو نوبت مطب و آرایشگاه.' },
    ]}},
    { id: 13, title: 'چت‌بات سفارش‌گیری', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'سفارش‌گیری', subtitle: 'دریافت سفارش خودکار', blocks: [
      { type: 'paragraph', content: 'چت‌بات برای دریافت سفارش رستوران.' },
    ]}},
    { id: 14, title: 'فروش خدمات چت‌بات', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'فروش خدمات', subtitle: 'کسب درآمد از چت‌بات', blocks: [
      { type: 'paragraph', content: 'چت‌بات یکی از پرتقاضاترین خدمات AI است.' },
      { type: 'table', content: { title: 'قیمت‌گذاری', headers: ['نوع', 'قیمت'], rows: [
        ['چت‌بات ساده', '۳-۸ میلیون'],
        ['چت‌بات AI', '۸-۲۰ میلیون'],
        ['چت‌بات پیشرفته', '۱۵-۴۰ میلیون'],
      ]}},
    ]}},
    { id: 15, title: 'آینده چت‌بات‌ها', duration: '۴۵ دقیقه', difficulty: 'همه سطوح', data: { title: 'آینده', subtitle: 'مسیر پیش رو', blocks: [
      { type: 'paragraph', content: 'چت‌بات‌ها در حال تحول سریع هستند.' },
    ]}},
  ],
};

export default function Chatbots() {
  return <LessonViewer course={chatbotsCourse} />;
}
