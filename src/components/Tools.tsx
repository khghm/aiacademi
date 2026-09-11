import LessonViewer, { CourseData } from './LessonViewer';

const toolsLessons = [
  { title: 'ابزارهای متنی', subtitle: 'ChatGPT, Claude, Gemini', blocks: [
    { type: 'paragraph', content: 'ابزارهای متنی برای نوشتن، ترجمه، تحلیل و برنامه‌نویسی.' },
    { type: 'table', content: { title: 'ابزارها', headers: ['ابزار', 'ویژگی', 'قیمت'], rows: [['ChatGPT', 'عمومی، قدرتمند', 'رایگان / $20'], ['Claude', 'تحلیل، کدنویسی', 'رایگان / $20'], ['Gemini', 'جستجو، یکپارچگی', 'رایگان / $20'], ['Perplexity', 'تحقیق با منابع', 'رایگان / $20']] }},
  ]},
  { title: 'ChatGPT پیشرفته', subtitle: 'استفاده حرفه‌ای' },
  { title: 'Claude پیشرفته', subtitle: 'تحلیل و کدنویسی' },
  { title: 'ابزارهای تصویری', subtitle: 'Midjourney, DALL-E', blocks: [
    { type: 'table', content: { title: 'ابزارها', headers: ['ابزار', 'ویژگی', 'قیمت'], rows: [['Midjourney', 'کیفیت هنری', 'از $10'], ['DALL-E 3', 'فهم پرامپت', 'شامل GPT+'], ['Leonardo AI', 'کنترل دقیق', 'رایگان / $12']] }},
  ]},
  { title: 'Midjourney حرفه‌ای', subtitle: 'تصاویر سینمایی' },
  { title: 'ابزارهای ویدیویی', subtitle: 'Runway, Kling' },
  { title: 'Runway ML', subtitle: 'ویدیو سینمایی' },
  { title: 'ابزارهای صوتی', subtitle: 'ElevenLabs, Suno' },
  { title: 'ElevenLabs', subtitle: 'نریشن حرفه‌ای' },
  { title: 'ابزارهای کدنویسی', subtitle: 'Cursor, Bolt, v0' },
  { title: 'Cursor IDE', subtitle: 'IDE هوشمند' },
  { title: 'اتوماسیون', subtitle: 'Zapier, Make' },
  { title: 'بهره‌وری', subtitle: 'Notion, Gamma' },
  { title: 'انتخاب ابزار', subtitle: 'بهترین ابزار' },
  { title: 'آینده ابزارها', subtitle: 'نسل بعد' },
];

const createCourse = (id: string, title: string, subtitle: string, color: string, lessonsData: any[]): CourseData => ({
  id, title, subtitle, badge: `۱۵ درس | ۳۰ ساعت آموزش`, color,
  lessons: lessonsData.map((l, i) => ({
    id: i + 1, title: l.title, duration: l.duration || '۶۰ دقیقه', difficulty: l.difficulty || 'متوسط',
    data: { title: l.title, subtitle: l.subtitle || '', blocks: l.blocks || [{ type: 'paragraph', content: `این درس درباره ${l.title} است.` }] },
  })),
});

export default function Tools() {
  return <LessonViewer course={createCourse('tools', 'ابزارهای حرفه‌ای AI', 'معرفی بیش از ۳۰ ابزار', 'amber', toolsLessons)} />;
}
