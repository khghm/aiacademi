import RichLessonViewer from './RichLessonViewer';
import { CourseData } from './LessonViewer';

const chatbotLessons = [
  { title: 'مقدمه‌ای بر چت‌بات‌ها', subtitle: 'دستیاران هوشمند', blocks: [
    { type: 'paragraph', content: 'چت‌بات یک نرم‌افزار است که می‌تواند با کاربران به صورت خودکار گفتگو کند.' },
    { type: 'table', content: { title: 'انواع چت‌بات', headers: ['نوع', 'توضیح', 'کاربرد'], rows: [['Rule-Based', 'بر اساس قوانین', 'سوالات متداول'], ['AI-Based', 'با مدل‌های زبانی', 'مکالمات پیچیده'], ['Hybrid', 'ترکیب قوانین و AI', 'پشتیبانی حرفه‌']] }},
  ]},
  { title: 'طراحی مکالمه', subtitle: 'Conversation Design' },
  { title: 'Botpress', subtitle: 'پلتفرم حرفه‌ای' },
  { title: 'Voiceflow', subtitle: 'طراحی بصری' },
  { title: 'چت‌بات تلگرام', subtitle: 'ساخت بات تلگرام' },
  { title: 'چت‌بات اینستاگرام', subtitle: 'اتوماسیون دایرکت' },
  { title: 'چت‌بات GPT', subtitle: 'با ChatGPT API' },
  { title: 'اتصال به CRM', subtitle: 'یکپارچه‌سازی' },
  { title: 'بهینه‌سازی', subtitle: 'بهبود عملکرد' },
  { title: 'چت‌بات فروش', subtitle: 'فروش خودکار' },
  { title: 'چت‌بات پشتیبانی', subtitle: 'پشتیبانی ۲۴/۷' },
  { title: 'رزرو نوبت', subtitle: 'اتوماسیون رزرو' },
  { title: 'سفارش‌گیری', subtitle: 'دریافت سفارش' },
  { title: 'فروش خدمات', subtitle: 'کسب درآمد', blocks: [
    { type: 'table', content: { title: 'قیمت‌گذاری', headers: ['نوع', 'قیمت'], rows: [['ساده', '۳-۸ میلیون'], ['AI', '۸-۲۰ میلیون'], ['پیشرفته', '۱۵-۴۰ میلیون']] }},
  ]},
  { title: 'آینده چت‌بات‌ها', subtitle: 'مسیر پیش رو' },
];

const createCourse = (id: string, title: string, subtitle: string, color: string, lessonsData: any[]): CourseData => ({
  id, title, subtitle, badge: `۱۵ درس | ۳۰ ساعت آموزش`, color,
  lessons: lessonsData.map((l, i) => ({
    id: i + 1, title: l.title, duration: l.duration || '۶۰ دقیقه', difficulty: l.difficulty || 'متوسط',
    data: { title: l.title, subtitle: l.subtitle || '', blocks: l.blocks || [{ type: 'paragraph', content: `این درس درباره ${l.title} است.` }] },
  })),
});

export default function Chatbots() {
  return <RichLessonViewer course={createCourse('chatbots', 'ساخت چت‌بات و دستیار هوشمند', 'طراحی چت‌بات‌های حرفه‌ای', 'teal', chatbotLessons)} />;
}
