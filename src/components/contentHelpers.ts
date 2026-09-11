import { LessonBlock } from './LessonViewer';

// Helper function to create rich lesson content
export function createRichLesson(
  title: string,
  subtitle: string,
  blocks: LessonBlock[]
): { title: string; subtitle: string; blocks: LessonBlock[] } {
  return { title, subtitle, blocks };
}

// Pre-built rich content blocks for common patterns
export const richContentPatterns = {
  intro: (topic: string): LessonBlock[] => [
    { type: 'paragraph', content: `${topic} یکی از مهم‌ترین مهارت‌ها در دنیای امروز است. در این درس، شما با مفاهیم پایه، تکنیک‌های حرفه‌ای و کاربردهای عملی آن آشنا خواهید شد.` },
    { type: 'info', content: { type: 'info', title: 'چرا این موضوع مهم است؟', content: `در دنیای امروز، تسلط بر ${topic} می‌تواند تفاوت بین موفقیت و شکست باشد. این مهارت به شما اجازه می‌دهد سریع‌تر، بهتر و هوشمندتر کار کنید.` } },
    { type: 'stats', content: [
      { label: 'افزایش بهره‌وری', value: '۸۰٪', color: 'from-purple-500/20 to-indigo-500/20' },
      { label: 'کاهش زمان', value: '۷۰٪', color: 'from-pink-500/20 to-rose-500/20' },
      { label: 'افزایش کیفیت', value: '۹۰٪', color: 'from-cyan-500/20 to-blue-500/20' },
      { label: 'بازگشت سرمایه', value: '۳ ماه', color: 'from-amber-500/20 to-orange-500/20' },
    ]},
  ],

  process: (title: string, steps: { label: string; sublabel: string }[]): LessonBlock => ({
    type: 'flow',
    content: { title, steps }
  }),

  comparison: (title: string, left: string[], right: string[]): LessonBlock => ({
    type: 'comparison',
    content: {
      title,
      left: { title: 'روش سنتی', items: left, color: 'border-rose-500/30' },
      right: { title: 'روش مدرن', items: right, color: 'border-emerald-500/30' }
    }
  }),

  checklist: (title: string, items: string[]): LessonBlock => ({
    type: 'checklist',
    content: {
      title,
      items: items.map(text => ({ text, checked: false }))
    }
  }),

  tips: (title: string, tips: string[]): LessonBlock => ({
    type: 'info',
    content: { type: 'tip', title, content: tips }
  }),

  warning: (title: string, warnings: string[]): LessonBlock => ({
    type: 'info',
    content: { type: 'warning', title, content: warnings }
  }),

  success: (title: string, successes: string[]): LessonBlock => ({
    type: 'info',
    content: { type: 'success', title, content: successes }
  }),

  table: (title: string, headers: string[], rows: string[][]): LessonBlock => ({
    type: 'table',
    content: { title, headers, rows }
  }),

  code: (title: string, language: string, code: string): LessonBlock => ({
    type: 'code',
    content: { title, language, code }
  }),

  timeline: (title: string, steps: { title: string; description: string }[]): LessonBlock => ({
    type: 'timeline',
    content: { title, steps }
  }),

  quote: (text: string, author?: string): LessonBlock => ({
    type: 'quote',
    content: { text, author }
  }),
};

// Generate rich content for a lesson
export function generateRichContent(
  topic: string,
  subtopics: string[],
  examples: { title: string; content: string }[] = []
): LessonBlock[] {
  const blocks: LessonBlock[] = [
    ...richContentPatterns.intro(topic),
    { type: 'heading', content: { text: 'مراحل کار', size: 'xl', mt: '8' } },
    richContentPatterns.process(`فرآیند ${topic}`, subtopics.slice(0, 6).map(s => ({ label: s, sublabel: '' }))),
    { type: 'heading', content: { text: 'مقایسه روش‌ها', size: 'xl', mt: '8' } },
    richContentPatterns.comparison(
      `${topic}: سنتی در برابر مدرن`,
      ['زمان‌بر و پرهزینه', 'نیاز به تخصص بالا', 'محدودیت خلاقیت', 'صعب‌الوصول'],
      ['سریع و ارزان', 'آسان برای همه', 'خلاقیت نامحدود', 'دسترسی ۲۴/۷']
    ),
  ];

  // Add examples
  if (examples.length > 0) {
    blocks.push({ type: 'heading', content: { text: 'مثال‌های عملی', size: 'xl', mt: '8' } });
    examples.forEach(ex => {
      blocks.push(richContentPatterns.code(ex.title, 'text', ex.content));
    });
  }

  // Add tips and warnings
  blocks.push({ type: 'heading', content: { text: 'نکات کلیدی', size: 'xl', mt: '8' } });
  blocks.push(richContentPatterns.tips('نکات طلایی', [
    'همیشه با یک برنامه واضح شروع کنید',
    'از ابزارهای مناسب استفاده کنید',
    'تست و بازبینی مداوم داشته باشید',
    'از اشتباهات یاد بگیرید',
    'به‌روز باشید و یادگیری مداوم داشته باشید',
  ]));

  blocks.push(richContentPatterns.warning('اشتباهات رایج', [
    'شروع بدون برنامه‌ریزی',
    'استفاده از ابزار نامناسب',
    'عدم تست و بازبینی',
    'انتظار نتیجه فوری',
    'عدم یادگیری مداوم',
  ]));

  // Add checklist
  blocks.push({ type: 'heading', content: { text: 'چک‌لیست موفقیت', size: 'xl', mt: '8' } });
  blocks.push(richContentPatterns.checklist('چک‌لیست نهایی', [
    'هدف خود را مشخص کرده‌ام',
    'ابزار مناسب را انتخاب کرده‌ام',
    'برنامه‌ریزی کرده‌ام',
    'منابع لازم را آماده کرده‌ام',
    'آماده شروع هستم',
  ]));

  // Add quote
  blocks.push(richContentPatterns.quote(
    `موفقیت در ${topic} نیازمند تمرین مداوم و یادگیری همیشگی است.`,
    'ناشناس'
  ));

  return blocks;
}
