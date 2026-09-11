import LessonViewer, { CourseData } from './LessonViewer';

const promptCourse: CourseData = {
  id: 'prompt',
  title: 'پرامپت‌نویسی پیشرفته',
  subtitle: 'تسلط کامل بر هنر ارتباط با هوش مصنوعی - مهم‌ترین مهارت عصر AI',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'violet',
  lessons: [
    {
      id: 1, title: 'مبانی پرامپت‌نویسی', duration: '۶۰ دقیقه', difficulty: 'مبتدی',
      data: {
        title: 'مبانی پرامپت‌نویسی',
        subtitle: 'اصول پایه ارتباط با AI',
        blocks: [
          { type: 'paragraph', content: 'پرامپت‌نویسی هنر ارتباط مؤثر با هوش مصنوعی است. یک پرامپت خوب می‌تواند تفاوت بین یک خروجی متوسط و یک شاهکار باشد. در این درس، اصول پایه و ساختار پرامپت‌های مؤثر را یاد می‌گیرید.' },
          { type: 'info', content: { type: 'info', title: 'پرامپت چیست؟', content: 'پرامپت، ورودی متنی شما به مدل هوش مصنوعی است. این ورودی می‌تواند یک سوال، دستور، توضیح یا ترکیبی از این‌ها باشد. کیفیت پرامپت شما مستقیماً بر کیفیت خروجی تأثیر می‌گذارد.' } },
          { type: 'flow', content: { title: 'فرآیند نوشتن پرامپت مؤثر', steps: [
            { label: 'تعریف هدف', sublabel: 'چه می‌خواهید؟' },
            { label: 'شناخت مخاطب', sublabel: 'برای چه کسی؟' },
            { label: 'جمع‌آوری اطلاعات', sublabel: 'چه داده‌هایی دارید؟' },
            { label: 'ساختاردهی', sublabel: 'سازماندهی اطلاعات' },
            { label: 'نوشتن پرامپت', sublabel: 'نگارش دقیق' },
            { label: 'بازبینی و تست', sublabel: 'بررسی و اصلاح' },
          ]}},
          { type: 'heading', content: { text: 'ساختار پایه یک پرامپت', size: 'xl', mt: '8' } },
          { type: 'code', content: { title: 'ساختار استاندارد پرامپت', language: 'text', code: `[نقش] تو یک [نوع متخصص] هستی با [تعداد] سال تجربه در [حوزه].

[زمینه] من [توضیح مختصر پروژه/نیاز].

[دستور] لطفاً [کاری که باید انجام شود] را انجام بده.

[جزئیات] 
- [جزئیات ۱]
- [جزئیات ۲]
- [جزئیات ۳]

[فرمت خروجی] خروجی را به صورت [فرمت مورد نظر] ارائه بده.

[محدودیت‌ها] 
- [محدودیت ۱]
- [محدودیت ۲]` } },
          { type: 'comparison', content: { title: 'مقایسه پرامپت ضعیف و قوی', left: { title: 'پرامپت ضعیف', items: ['یه مقاله بنویس', 'کد بزن', 'ترجمه کن', 'ایده بده'], color: 'border-rose-500/30' }, right: { title: 'پرامپت قوی', items: ['مقاله ۲۰۰۰ کلمه‌ای درباره AI برای معلم‌ها با مثال ایرانی', 'تابع Python برای مرتب‌سازی با QuickSort و type hint', 'ترجمه روان به فارسی با اصطلاحات تخصصی به انگلیسی', '۱۰ ایده کسب‌وکار آنلاین با سرمایه زیر ۵۰ میلیون'], color: 'border-emerald-500/30' } }},
          { type: 'info', content: { type: 'tip', title: 'نکته طلایی', content: 'بهترین پرامپت‌نویس‌ها کسانی نیستند که بهترین پرامپت‌ها را می‌نویسند، بلکه کسانی هستند که بهترین فیدبک‌ها را می‌دهند. توانایی شما در تشخیص مشکل و بیان دقیق آن، تفاوت بین یک نتیجه متوسط و عالی است.' } },
        ],
      },
    },
    {
      id: 2, title: 'فرمول‌های حرفه‌ای پرامپت', duration: '۹۰ دقیقه', difficulty: 'متوسط',
      data: {
        title: 'فرمول‌های حرفه‌ای',
        subtitle: 'فرمول‌های اثبات‌شده برای پرامپت‌های حرفه‌ای',
        blocks: [
          { type: 'paragraph', content: 'در این درس، فرمول‌های اثبات‌شده برای نوشتن پرامپت‌های حرفه‌ای را یاد می‌گیرید. هر فرمول برای نوع خاصی از کار بهینه شده است.' },
          { type: 'stats', content: [
            { label: 'فرمول اصلی', value: '۵', color: 'from-purple-500/20 to-indigo-500/20' },
            { label: 'کاربرد', value: '۱۰۰+', color: 'from-pink-500/20 to-rose-500/20' },
            { label: 'بهبود خروجی', value: '۸۰٪', color: 'from-cyan-500/20 to-blue-500/20' },
            { label: 'زمان یادگیری', value: '۲ روز', color: 'from-amber-500/20 to-orange-500/20' },
          ]},
          { type: 'diagram', content: { title: 'فرمول‌های اصلی پرامپت‌نویسی', nodes: [
            { label: 'CRAFT', description: 'فرمول جامع برای اکثر کاربردها. شامل: Context (زمینه)، Role (نقش)، Action (عمل)، Format (فرمت)، Tone (لحن). مناسب برای کارهای عمومی و حرفه‌ای.' },
            { label: 'RACE', description: 'فرمول سریع برای کارهای روزمره. شامل: Role (نقش)، Action (عمل)، Context (زمینه)، Expectation (انتظار). مناسب وقتی عجله دارید.' },
            { label: 'TRACE', description: 'فرمول تخصصی برای کارهای تحلیلی. شامل: Task (وظیفه)، Request (درخواست)، Action (اقدامات)، Context (اطلاعات زمینه)، Extra (اطلاعات اضافی).' },
            { label: 'CARE', description: 'فرمول خلاقانه برای کارهای هنری. شامل: Context (زمینه خلاقانه)، Audience (مخاطب)، Role (نقش خلاق)، Emotion (احساس مورد نظر).' },
            { label: 'SMART', description: 'فرمول دقیق برای اهداف مشخص. شامل: Specific (مشخص)، Measurable (قابل اندازه‌گیری)، Achievable (قابل دستیابی)، Relevant (مرتبط)، Time-bound (محدود به زمان).' },
          ]}},
          { type: 'code', content: { title: 'مثال فرمول CRAFT', language: 'text', code: `[Context] من یک صاحب کسب‌وکار کوچک در ایران هستم که می‌خواهم فروش آنلاینم را افزایش دهم.

[Role] تو یک متخصص دیجیتال مارکتینگ با ۱۰ سال تجربه در بازار ایران هستی.

[Action] یک استراتژی بازاریابی ۳ ماهه برای افزایش ۵۰٪ فروش آنلاین بنویس.

[Format] خروجی را به صورت جدول با ستون‌های: ماه، اقدامات، بودجه، KPI ارائه بده.

[Tone] حرفه‌ای، عملی، با مثال‌های واقعی از بازار ایران.` } },
        ],
      },
    },
    { id: 3, title: 'تکنیک Chain of Thought', duration: '۷۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'Chain of Thought', subtitle: 'فکر کردن مرحله به مرحله', blocks: [
      { type: 'paragraph', content: 'تکنیک Chain of Thought (CoT) یکی از قدرتمندترین تکنیک‌های پرامپت‌نویسی است. با این تکنیک، از AI می‌خواهید که مرحله به مرحله فکر کند و پاسخ دهد.' },
      { type: 'info', content: { type: 'info', title: 'چرا CoT مؤثر است؟', content: 'وقتی از AI می‌خواهید مرحله به مرحله فکر کند، دقت پاسخ‌ها تا ۸۰٪ افزایش می‌یابد. این تکنیک مخصوصاً برای مسائل ریاضی، منطقی و تحلیلی مؤثر است.' } },
      { type: 'code', content: { title: 'مثال Chain of Thought', language: 'text', code: `سوال: یک فروشگاه روز اول ۱۰۰ مشتری داشت. روز دوم ۲۰٪ بیشتر. روز سوم ۱۵٪ کمتر از روز دوم. مجموع مشتریان سه روز چقدر است؟

پرامپت با CoT:
"این مسئله را مرحله به مرحله حل کن. قبل از پاسخ نهایی، هر مرحله را با محاسبات نشان بده."

پاسخ AI:
مرحله ۱: روز اول = ۱۰۰ مشتری
مرحله ۲: روز دوم = ۱۰۰ + (۱۰۰ × ۰.۲۰) = ۱۲۰ مشتری
مرحله ۳: روز سوم = ۱۲۰ - (۱۲۰ × ۰.۱۵) = ۱۰۲ مشتری
مرحله ۴: مجموع = ۱۰۰ + ۱۲۰ + ۱۰۲ = ۳۲۲ مشتری

پاسخ نهایی: ۳۲۲ مشتری` } },
    ]}},
    { id: 4, title: 'تکنیک Few-Shot Learning', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'Few-Shot Learning', subtitle: 'یادگیری با چند مثال', blocks: [
      { type: 'paragraph', content: 'Few-Shot Learning یعنی ارائه چند مثال به AI قبل از درخواست اصلی. این کار به مدل کمک می‌کند الگو، سبک و فرمت مورد نظر شما را بفهمد.' },
      { type: 'code', content: { title: 'مثال Few-Shot', language: 'text', code: `سبک کامپوننت‌های من اینطوریه:

\`\`\`jsx
export function Button({ children, variant = 'primary' }) {
  const styles = {
    primary: 'bg-purple-600 hover:bg-purple-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
  };
  return (
    <button className={\`px-4 py-2 rounded-lg \${styles[variant]}\`}>
      {children}
    </button>
  );
}
\`\`\`

حالا یک کامپوننت Card با همین سبک بساز.` } },
    ]}},
    { id: 5, title: 'تکنیک Meta Prompting', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'Meta Prompting', subtitle: 'از AI بخواهید پرامپت بهتر بنویسد', blocks: [
      { type: 'paragraph', content: 'Meta Prompting یعنی از AI بخواهید که پرامپت بهتری برای شما بنویسد. این تکنیک وقتی نمی‌دانید دقیقاً چه بخواهید، بسیار مفید است.' },
      { type: 'code', content: { title: 'مثال Meta Prompting', language: 'text', code: `پرامپت Meta:
"من می‌خواهم [هدف شما] را انجام دهم.
به عنوان یک متخصص پرامپت‌نویسی، بهترین پرامپتی که می‌توانم 
برای رسیدن به این هدف به تو بدهم را بنویس.
سپس آن پرامپت را اجرا کن."

مثال:
"من می‌خواهم یک استراتژی بازاریابی برای فروشگاه آنلاین لوازم آرایشی بنویسم.
به عنوان یک متخصص پرامپت‌نویسی، بهترین پرامپتی که می‌توانم 
برای این کار به تو بدهم را بنویس.
سپس آن پرامپت را اجرا کن."` } },
    ]}},
    { id: 6, title: 'پرامپت برای تولید کد', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'پرامپت کدنویسی', subtitle: 'تولید کد با کیفیت بالا', blocks: [
      { type: 'paragraph', content: 'تولید کد با AI نیازمند پرامپت‌های دقیق و ساختاریافته است.' },
      { type: 'code', content: { title: 'پرامپت تولید REST API', language: 'text', code: `یک REST API با Node.js و Express بساز برای سیستم رزرو نوبت مطب پزشک.

مدل‌های دیتابیس:
- Doctor: نام، تخصص، شماره نظام، بیوگرافی
- Patient: نام، موبایل، کد ملی
- Appointment: doctor_id, patient_id, date, time, status

اندپوینت‌ها:
- GET /doctors - لیست پزشکان با فیلتر تخصص
- GET /doctors/:id/slots - ساعات خالی
- POST /appointments - رزرو نوبت

الزامات:
- احراز هویت JWT
- ولیدیشن با Joi
- ساختار لایه‌ای
- Swagger documentation` } },
    ]}},
    { id: 7, title: 'پرامپت برای تولید محتوا', duration: '۷۵ دقیقه', difficulty: 'متوسط', data: { title: 'پرامپت محتوا', subtitle: 'تولید محتوای متنی حرفه‌ای', blocks: [
      { type: 'paragraph', content: 'تولید محتوای متنی با AI نیازمند پرامپت‌های خلاقانه و ساختاریافته است.' },
    ]}},
    { id: 8, title: 'پرامپت برای تحلیل داده', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'پرامپت تحلیل', subtitle: 'تحلیل داده با AI', blocks: [
      { type: 'paragraph', content: 'تحلیل داده با AI می‌تواند بینش‌های ارزشمندی ارائه دهد.' },
    ]}},
    { id: 9, title: 'پرامپت برای کسب‌وکار', duration: '۶۰ دقیقه', difficulty: 'پیشرفته', data: { title: 'پرامپت بیزنس', subtitle: 'کاربردهای تجاری', blocks: [
      { type: 'paragraph', content: 'AI می‌تواند در تصمیم‌گیری‌های کسب‌وکار کمک کند.' },
    ]}},
    { id: 10, title: 'اشتباهات رایج پرامپت‌نویسی', duration: '۴۵ دقیقه', difficulty: 'مبتدی', data: { title: 'اشتباهات رایج', subtitle: 'از این اشتباهات اجتناب کنید', blocks: [
      { type: 'paragraph', content: 'شناخت اشتباهات رایج به شما کمک می‌کند از آن‌ها اجتناب کنید.' },
      { type: 'list', content: { title: 'اشتباهات رایج', items: [
        'پرامپت خیلی کلی و مبهم',
        'عدم ذکر زمینه و مخاطب',
        'فراموش کردن محدودیت‌ها',
        'عدم تست و بازبینی',
        'انتظار نتیجه کامل در اولین تلاش',
      ], style: 'disc' }},
    ]}},
    { id: 11, title: 'مقایسه مدل‌های زبانی', duration: '۶۰ دقیقه', difficulty: 'متوسط', data: { title: 'مقایسه مدل‌ها', subtitle: 'ChatGPT vs Claude vs Gemini', blocks: [
      { type: 'paragraph', content: 'هر مدل زبانی نقاط قوت و ضعف خود را دارد.' },
      { type: 'table', content: { title: 'مقایسه مدل‌ها', headers: ['مدل', 'نقاط قوت', 'بهترین برای'], rows: [
        ['ChatGPT-4', 'عمومی، خلاقیت', 'کارهای عمومی'],
        ['Claude', 'تحلیل، کدنویسی', 'کارهای تحلیلی'],
        ['Gemini', 'جستجو، یکپارچگی', 'تحقیق و جستجو'],
      ]}},
    ]}},
    { id: 12, title: 'پرامپت‌های آماده - محتوا', duration: '۹۰ دقیقه', difficulty: 'همه سطوح', data: { title: 'کتابخانه پرامپت', subtitle: 'پرامپت‌های آماده و تست‌شده', blocks: [
      { type: 'paragraph', content: 'مجموعه‌ای از پرامپت‌های آماده برای کاربردهای مختلف.' },
    ]}},
    { id: 13, title: 'پرامپت‌های آماده - کدنویسی', duration: '۹۰ دقیقه', difficulty: 'همه سطوح', data: { title: 'پرامپت کد', subtitle: 'پرامپت‌های کدنویسی', blocks: [
      { type: 'paragraph', content: 'پرامپت‌های آماده برای انواع پروژه‌های کدنویسی.' },
    ]}},
    { id: 14, title: 'پرامپت‌های آماده - کسب‌وکار', duration: '۹۰ دقیقه', difficulty: 'همه سطوح', data: { title: 'پرامپت بیزنس', subtitle: 'پرامپت‌های تجاری', blocks: [
      { type: 'paragraph', content: 'پرامپت‌های آماده برای کاربردهای تجاری.' },
    ]}},
    { id: 15, title: 'آینده پرامپت‌نویسی', duration: '۴۵ دقیقه', difficulty: 'پیشرفته', data: { title: 'آینده', subtitle: 'مسیر پیش رو', blocks: [
      { type: 'paragraph', content: 'پرامپت‌نویسی در حال تغییر است. باید آماده باشید.' },
      { type: 'quote', content: { text: 'آینده متعلق به کسانی است که می‌توانند بهترین سوالات را بپرسند.', author: 'ناشناس' } },
    ]}},
  ],
};

export default function PromptEngineering() {
  return <LessonViewer course={promptCourse} />;
}
