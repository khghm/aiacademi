import LessonViewer, { CourseData } from './LessonViewer';

const promptCourse: CourseData = {
  id: 'prompt',
  title: 'پرامپت‌نویسی پیشرفته',
  subtitle: 'تسلط کامل بر هنر ارتباط با هوش مصنوعی',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'violet',
  lessons: [
    { id: 1, title: 'مبانی پرامپت‌نویسی', duration: '۶۰ دقیقه', difficulty: 'مبتدی', data: { title: 'مبانی پرامپت‌نویسی', subtitle: 'اصول پایه', blocks: [
      { type: 'paragraph', content: 'پرامپت‌نویسی هنر ارتباط مؤثر با هوش مصنوعی است.' },
      { type: 'info', content: { type: 'info', title: 'پرامپت چیست؟', content: 'پرامپت، ورودی متنی شما به مدل هوش مصنوعی است.' } },
      { type: 'flow', content: { title: 'فرآیند نوشتن پرامپت', steps: [{ label: 'تعریف هدف' }, { label: 'شناخت مخاطب' }, { label: 'جمع‌آوری اطلاعات' }, { label: 'ساختاردهی' }, { label: 'نوشتن' }, { label: 'بازبینی' }] }},
      { type: 'code', content: { title: 'ساختار استاندارد', language: 'text', code: '[نقش] تو یک [متخصص] هستی\n[زمینه] من [توضیح]\n[دستور] لطفاً [کار]\n[فرمت] خروجی به صورت [...]' } },
      { type: 'comparison', content: { title: 'مقایسه پرامپت', left: { title: 'ضعیف', items: ['یه مقاله بنویس', 'کد بزن'], color: 'border-rose-500/30' }, right: { title: 'قوی', items: ['مقاله ۲۰۰۰ کلمه‌ای درباره AI', 'تابع Python برای مرتب‌سازی'], color: 'border-emerald-500/30' } }},
    ]}},
    { id: 2, title: 'فرمول‌های حرفه‌ای', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'فرمول‌های حرفه‌ای', subtitle: 'فرمول‌های اثبات‌شده', blocks: [
      { type: 'paragraph', content: 'در این درس، فرمول‌های اثبات‌شده را یاد می‌گیرید.' },
      { type: 'stats', content: [{ label: 'فرمول', value: '۵', color: 'from-purple-500/20 to-indigo-500/20' }, { label: 'بهبود', value: '۸۰٪', color: 'from-pink-500/20 to-rose-500/20' }]},
      { type: 'diagram', content: { title: 'فرمول‌های اصلی', nodes: [
        { label: 'CRAFT', description: 'Context, Role, Action, Format, Tone' },
        { label: 'RACE', description: 'Role, Action, Context, Expectation' },
        { label: 'TRACE', description: 'Task, Request, Action, Context, Extra' },
      ]}},
    ]}},
    { id: 3, title: 'Chain of Thought', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'Chain of Thought', subtitle: 'فکر کردن مرحله به مرحله', blocks: [
      { type: 'paragraph', content: 'تکنیک Chain of Thought یکی از قدرتمندترین تکنیک‌هاست.' },
      { type: 'info', content: { type: 'info', title: 'چرا مؤثر است؟', content: 'دقت پاسخ‌ها تا ۸۰٪ افزایش می‌یابد.' } },
      { type: 'code', content: { title: 'مثال', language: 'text', code: 'سوال: مسئله ریاضی\nپرامپت: "مرحله به مرحله حل کن"\nپاسخ: مرحله ۱، مرحله ۲، ...' } },
    ]}},
    { id: 4, title: 'Few-Shot Learning', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'Few-Shot Learning', subtitle: 'یادگیری با چند مثال', blocks: [
      { type: 'paragraph', content: 'ارائه چند مثال به AI قبل از درخواست اصلی.' },
      { type: 'code', content: { title: 'مثال', language: 'text', code: 'سبک من:\nexport function Button() {...}\nحالا یک Card با همین سبک بساز' } },
    ]}},
    { id: 5, title: 'Meta Prompting', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'Meta Prompting', subtitle: 'از AI بخواهید پرامپت بنویسد', blocks: [
      { type: 'paragraph', content: 'از AI بخواهید که پرامپت بهتری برای شما بنویسد.' },
      { type: 'code', content: { title: 'مثال', language: 'text', code: 'من می‌خواهم [هدف]. بهترین پرامپت را بنویس و اجرا کن.' } },
    ]}},
    { id: 6, title: 'پرامپت برای کد', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'پرامپت کدنویسی', subtitle: 'تولید کد با کیفیت', blocks: [
      { type: 'code', content: { title: 'پرامپت REST API', language: 'text', code: 'یک REST API با Node.js بساز\nمدل‌ها: Doctor, Patient, Appointment\nاندپوینت‌ها: GET /doctors, POST /appointments' } },
    ]}},
    { id: 7, title: 'پرامپت برای محتوا', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'پرامپت محتوا', subtitle: 'تولید محتوای متنی', blocks: [
      { type: 'paragraph', content: 'تولید محتوای متنی با AI.' },
    ]}},
    { id: 8, title: 'پرامپت برای تحلیل', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'پرامپت تحلیل', subtitle: 'تحلیل داده', blocks: [
      { type: 'paragraph', content: 'تحلیل داده با AI.' },
    ]}},
    { id: 9, title: 'پرامپت برای کسب‌وکار', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'پرامپت بیزنس', subtitle: 'کاربردهای تجاری', blocks: [
      { type: 'paragraph', content: 'کمک در تصمیم‌گیری کسب‌وکار.' },
    ]}},
    { id: 10, title: 'اشتباهات رایج', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'اشتباهات رایج', subtitle: 'اجتناب کنید', blocks: [
      { type: 'list', content: { title: 'اشتباهات', items: ['پرامپت کلی', 'عدم ذکر زمینه', 'فراموش کردن محدودیت‌ها'], style: 'disc' }},
    ]}},
    { id: 11, title: 'مقایسه مدل‌ها', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'مقایسه مدل‌ها', subtitle: 'ChatGPT vs Claude', blocks: [
      { type: 'table', content: { title: 'مقایسه', headers: ['مدل', 'نقاط قوت'], rows: [['ChatGPT-4', 'عمومی'], ['Claude', 'تحلیل']] }},
    ]}},
    { id: 12, title: 'پرامپت‌های آماده - محتوا', duration: '۹۰ دقیقه', difficulty: 'همه سطوح', data: { title: 'کتابخانه پرامپت', subtitle: 'پرامپت‌های آماده', blocks: [
      { type: 'paragraph', content: 'مجموعه‌ای از پرامپت‌های آماده.' },
    ]}},
    { id: 13, title: 'پرامپت‌های آماده - کد', duration: '۹۰ دقیقه', difficulty: 'همه سطوح', data: { title: 'پرامپت کد', subtitle: 'پرامپت‌های کدنویسی', blocks: [
      { type: 'paragraph', content: 'پرامپت‌های آماده برای کدنویسی.' },
    ]}},
    { id: 14, title: 'پرامپت‌های آماده - بیزنس', duration: '۹۰ دقیقه', difficulty: 'همه سطوح', data: { title: 'پرامپت بیزنس', subtitle: 'پرامپت‌های تجاری', blocks: [
      { type: 'paragraph', content: 'پرامپت‌های آماده برای کسب‌وکار.' },
    ]}},
    { id: 15, title: 'آینده پرامپت‌نویسی', duration: '۴۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'آینده', subtitle: 'مسیر پیش رو', blocks: [
      { type: 'quote', content: { text: 'آینده متعلق به کسانی است که بهترین سوالات را می‌پرسند.', author: 'ناشناس' } },
    ]}},
  ],
};

export default function PromptEngineering() {
  return <LessonViewer course={promptCourse} />;
}
