import LessonViewer, { CourseData } from './LessonViewer';

const toolsCourse: CourseData = {
  id: 'tools',
  title: 'ابزارهای حرفه‌ای AI',
  subtitle: 'معرفی و آموزش بیش از ۳۰ ابزار AI در دسته‌بندی‌های مختلف',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'amber',
  lessons: [
    { id: 1, title: 'معرفی ابزارهای متنی', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'ابزارهای متنی', subtitle: 'ChatGPT, Claude, Gemini', blocks: [
      { type: 'paragraph', content: 'ابزارهای متنی برای نوشتن، ترجمه، تحلیل و برنامه‌نویسی.' },
      { type: 'table', content: { title: 'ابزارهای متنی', headers: ['ابزار', 'ویژگی', 'قیمت'], rows: [
        ['ChatGPT', 'عمومی، قدرتمند', 'رایگان / $20'],
        ['Claude', 'تحلیل، کدنویسی', 'رایگان / $20'],
        ['Gemini', 'جستجو، یکپارچگی', 'رایگان / $20'],
        ['Perplexity', 'تحقیق با منابع', 'رایگان / $20'],
      ]}},
    ]}},
    { id: 2, title: 'ChatGPT پیشرفته', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'ChatGPT', subtitle: 'استفاده حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'ChatGPT قدرتمندترین ابزار متنی است.' },
    ]}},
    { id: 3, title: 'Claude پیشرفته', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'Claude', subtitle: 'تحلیل و کدنویسی', blocks: [
      { type: 'paragraph', content: 'Claude برای تحلیل و کدنویسی عالی است.' },
    ]}},
    { id: 4, title: 'ابزارهای تصویری', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'ابزارهای تصویری', subtitle: 'Midjourney, DALL-E, Leonardo', blocks: [
      { type: 'paragraph', content: 'ابزارهای تولید تصویر با AI.' },
      { type: 'table', content: { title: 'ابزارهای تصویری', headers: ['ابزار', 'ویژگی', 'قیمت'], rows: [
        ['Midjourney', 'کیفیت هنری', 'از $10'],
        ['DALL-E 3', 'فهم پرامپت', 'شامل GPT+'],
        ['Leonardo AI', 'کنترل دقیق', 'رایگان / $12'],
        ['Canva AI', 'ساده و سریع', 'رایگان / $13'],
      ]}},
    ]}},
    { id: 5, title: 'Midjourney حرفه‌ای', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'Midjourney', subtitle: 'تصاویر سینمایی', blocks: [
      { type: 'paragraph', content: 'Midjourney بهترین کیفیت تصویر را دارد.' },
    ]}},
    { id: 6, title: 'ابزارهای ویدیویی', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'ابزارهای ویدیویی', subtitle: 'Runway, Kling, Synthesia', blocks: [
      { type: 'paragraph', content: 'ابزارهای تولید و ویرایش ویدیو.' },
    ]}},
    { id: 7, title: 'Runway ML', duration: '۹۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'Runway', subtitle: 'ویدیو سینمایی', blocks: [
      { type: 'paragraph', content: 'Runway پیشرفته‌ترین ابزار ویدیو است.' },
    ]}},
    { id: 8, title: 'ابزارهای صوتی', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'ابزارهای صوتی', subtitle: 'ElevenLabs, Suno, Murf', blocks: [
      { type: 'paragraph', content: 'ابزارهای تولید صوت و موسیقی.' },
    ]}},
    { id: 9, title: 'ElevenLabs', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'ElevenLabs', subtitle: 'نریشن حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'ElevenLabs بهترین کیفیت TTS را دارد.' },
    ]}},
    { id: 10, title: 'ابزارهای کدنویسی', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'ابزارهای کدنویسی', subtitle: 'Cursor, Bolt, v0', blocks: [
      { type: 'paragraph', content: 'ابزارهای وایب کدینگ.' },
    ]}},
    { id: 11, title: 'Cursor IDE', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'Cursor', subtitle: 'IDE هوشمند', blocks: [
      { type: 'paragraph', content: 'Cursor بهترین IDE برای وایب کدینگ است.' },
    ]}},
    { id: 12, title: 'ابزارهای اتوماسیون', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'اتوماسیون', subtitle: 'Zapier, Make, n8n', blocks: [
      { type: 'paragraph', content: 'ابزارهای اتوماسیون فرآیندها.' },
    ]}},
    { id: 13, title: 'ابزارهای بهره‌وری', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'بهره‌وری', subtitle: 'Notion, Gamma, Otter', blocks: [
      { type: 'paragraph', content: 'ابزارهای افزایش بهره‌وری.' },
    ]}},
    { id: 14, title: 'مقایسه و انتخاب ابزار', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'انتخاب ابزار', subtitle: 'بهترین ابزار برای هر کار', blocks: [
      { type: 'paragraph', content: 'راهنمای انتخاب ابزار مناسب.' },
    ]}},
    { id: 15, title: 'آینده ابزارهای AI', duration: '۴۵ دقیقه', difficulty: 'همه سطوح', data: { title: 'آینده', subtitle: 'ابزارهای نسل بعد', blocks: [
      { type: 'paragraph', content: 'ابزارهای AI در حال تحول سریع هستند.' },
    ]}},
  ],
};

export default function Tools() {
  return <LessonViewer course={toolsCourse} />;
}
