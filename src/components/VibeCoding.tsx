import RichLessonViewer from './RichLessonViewer';
import { CourseData } from './LessonViewer';

const vibeCodingCourse: CourseData = {
  id: 'vibe-coding',
  title: 'وایب کدینگ با AI',
  subtitle: 'بدون نوشتن حتی یک خط کد، اپلیکیشن‌ها و وب‌سایت‌های حرفه‌ای بسازید',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'purple',
  lessons: [
    {
      id: 1,
      title: 'وایب کدینگ چیست و چرا انقلابی است؟',
      duration: '۶۰ دقیقه',
      difficulty: 'مبتدی',
      data: {
        title: 'وایب کدینگ: انقلاب جدید در برنامه‌نویسی',
        subtitle: 'آشنایی با مفهومی که دنیای برنامه‌نویسی را متحول کرده است',
        blocks: [
          { type: 'paragraph', content: 'وایب کدینگ (Vibe Coding) مفهومی است که توسط آندری کارپاتی در فوریه ۲۰۲۵ مطرح شد. در این روش شما به جای نوشتن کد، با هوش مصنوعی به صورت طبیعی صحبت می‌کنید و او کد را برای شما می‌نویسد.' },
          { type: 'info', content: { type: 'info', title: 'تعریف رسمی وایب کدینگ', content: 'وایب کدینگ یعنی شما ایده و نیاز خود را به زبان طبیعی برای AI توضیح می‌دهید و AI کد مربوطه را تولید می‌کند.' } },
          { type: 'stats', content: [
            { label: 'سرعت توسعه', value: '۱۰x', color: 'from-purple-500/20 to-indigo-500/20' },
            { label: 'کاهش هزینه', value: '۹۰٪', color: 'from-pink-500/20 to-rose-500/20' },
            { label: 'زمان یادگیری', value: '۱ هفته', color: 'from-cyan-500/20 to-blue-500/20' },
            { label: 'نیاز به کدنویسی', value: 'صفر', color: 'from-amber-500/20 to-orange-500/20' },
          ]},
          { type: 'table', content: { title: 'مقایسه وایب کدینگ با برنامه‌نویسی سنتی', headers: ['ویژگی', 'برنامه‌نویسی سنتی', 'وایب کدینگ'], rows: [
            ['نیاز به دانش کدنویسی', 'بالا', 'تقریباً صفر'],
            ['سرعت توسعه', 'هفته‌ها', 'ساعت‌ها'],
            ['هزینه', 'بالا', 'بسیار پایین'],
            ['خلاقیت', 'محدود', 'نامحدود'],
          ]}},
          { type: 'flow', content: { title: 'فرآیند وایب کدینگ', steps: [
            { label: 'ایده' }, { label: 'توضیح به AI' }, { label: 'تولید کد' },
            { label: 'بررسی' }, { label: 'فیدبک' }, { label: 'تحویل' },
          ]}},
          { type: 'heading', content: { text: 'اصول کلیدی وایب کدینگ', size: 'xl', mt: '8' } },
          { type: 'list', content: { title: 'اصل اول: توضیح واضح', items: [
            'مهم‌ترین مهارت، توانایی توضیح دادن چیزی است که می‌خواهید',
            'هرچه دقیق‌تر توضیح دهید، نتیجه بهتری می‌گیرید',
          ], style: 'disc' }},
          { type: 'code', content: { title: 'مثال پرامپت ضعیف', language: 'text', code: 'یه سایت فروشگاهی بساز' } },
          { type: 'code', content: { title: 'مثال پرامپت قوی', language: 'text', code: 'یک وب‌سایت فروشگاهی برای محصولات آرایشی بساز با طراحی مینیمال، شامل صفحه اصلی، دسته‌بندی، سبد خرید و پرداخت' } },
          { type: 'info', content: { type: 'tip', title: 'نکته طلایی', content: 'بهترین وایب کدرها کسانی هستند که بهترین فیدبک‌ها را می‌دهند.' } },
          { type: 'quote', content: { text: 'وایب کدینگ یعنی شما مدیر محصول هستید و AI برنامه‌نویس شما', author: 'آندری کارپاتی' } },
        ],
      },
    },
    {
      id: 2,
      title: 'معرفی کامل ابزارهای وایب کدینگ',
      duration: '۹۰ دقیقه',
      difficulty: 'مبتدی',
      data: {
        title: 'ابزارهای اصلی وایب کدینگ',
        subtitle: 'شناخت ابزارها و انتخاب بهترین ابزار برای هر پروژه',
        blocks: [
          { type: 'paragraph', content: 'ابزارهای وایب کدینگ به چند دسته اصلی تقسیم می‌شوند. شناخت این ابزارها اولین قدم برای موفقیت است.' },
          { type: 'stats', content: [
            { label: 'ابزار اصلی', value: '۱۵+', color: 'from-purple-500/20 to-indigo-500/20' },
            { label: 'دسته‌بندی', value: '۵', color: 'from-pink-500/20 to-rose-500/20' },
            { label: 'رایگان', value: '۶۰٪', color: 'from-cyan-500/20 to-blue-500/20' },
            { label: 'حرفه‌ای', value: '۴۰٪', color: 'from-amber-500/20 to-orange-500/20' },
          ]},
          { type: 'table', content: { title: 'مقایسه کلی ابزارها', headers: ['ابزار', 'بهترین برای', 'قیمت'], rows: [
            ['Cursor', 'پروژه‌های حرفه‌ای', '$20/ماه'],
            ['Bolt.new', 'وب‌اپ سریع', 'رایگان/$20'],
            ['v0', 'UI/UX', 'رایگان/$20'],
            ['Replit', 'پروژه کامل', 'رایگان/$25'],
            ['Lovable', 'MVP', 'رایگان/$20'],
          ]}},
          { type: 'info', content: { type: 'tip', title: 'نکات مهم انتخاب ابزار', content: ['بر اساس نیاز انتخاب کنید', 'از نسخه رایگان شروع کنید', 'ترکیب ابزارها بهترین نتیجه را می‌دهد'] } },
        ],
      },
    },
    {
      id: 3,
      title: 'پرامپت‌نویسی حرفه‌ای',
      duration: '۹۰ دقیقه',
      difficulty: 'متوسط',
      data: {
        title: 'هنر پرامپت‌نویسی',
        subtitle: 'تکنیک‌های پیشرفته نوشتن پرامپت',
        blocks: [
          { type: 'paragraph', content: 'پرامپت‌نویسی مهم‌ترین مهارت شما در وایب کدینگ است.' },
          { type: 'info', content: { type: 'tip', title: 'فرمول CRAFT', content: ['C - Context: زمینه', 'R - Role: نقش', 'A - Action: عمل', 'F - Format: فرمت', 'T - Tone: لحن'] } },
          { type: 'code', content: { title: 'مثال پرامپت', language: 'text', code: 'یک لندینگ پیج حرفه‌ای بساز با Hero section، بخش ویژگی‌ها، نظرات، قیمت‌گذاری و فوتر' } },
          { type: 'list', content: { title: 'تکنیک‌های پیشرفته', items: ['Chain of Thought', 'Few-Shot Prompting', 'Iterative Refinement'], style: 'disc' }},
          { type: 'info', content: { type: 'warning', title: 'اشتباهات رایج', content: ['پرامپت خیلی کلی', 'عدم ذکر تکنولوژی', 'فراموش کردن RTL'] } },
        ],
      },
    },
    {
      id: 4,
      title: 'معماری پروژه با AI',
      duration: '۷۵ دقیقه',
      difficulty: 'متوسط',
      data: {
        title: 'طراحی معماری',
        subtitle: 'قبل از کدنویسی، معماری را طراحی کنید',
        blocks: [
          { type: 'paragraph', content: 'قبل از شروع کدنویسی، باید معماری پروژه را مشخص کنید.' },
          { type: 'flow', content: { title: 'مراحل طراحی معماری', steps: [
            { label: 'تحلیل نیازها' }, { label: 'انتخاب تکنولوژی' }, { label: 'طراحی دیتابیس' },
            { label: 'طراحی API' }, { label: 'طراحی UI' }, { label: 'پیاده‌سازی' },
          ]}},
          { type: 'info', content: { type: 'success', title: 'نکته مهم', content: 'همیشه قبل از شروع کدنویسی، از AI بخواهید معماری پروژه را طراحی کند.' } },
        ],
      },
    },
    {
      id: 5,
      title: 'پروژه عملی: ساخت فروشگاه آنلاین',
      duration: '۱۲۰ دقیقه',
      difficulty: 'پیشرفته',
      data: {
        title: 'پروژه عملی',
        subtitle: 'ساخت یک فروشگاه آنلاین کامل',
        blocks: [
          { type: 'paragraph', content: 'در این درس، مرحله به مرحله یک فروشگاه آنلاین کامل می‌سازیم.' },
          { type: 'info', content: { type: 'info', title: 'مشخصات پروژه', content: ['نام: شاپ‌لند', 'تکنولوژی: Next.js 14 + Tailwind', 'دیتابیس: PostgreSQL', 'زمان: ۳-۵ روز'] } },
          { type: 'timeline', content: { title: 'مراحل پیاده‌سازی', steps: [
            { title: 'Setup', description: 'ایجاد پروژه Next.js' },
            { title: 'دیتابیس', description: 'تعریف مدل‌ها با Prisma' },
            { title: 'احراز هویت', description: 'NextAuth.js' },
            { title: 'محصولات', description: 'لیست، فیلتر، جستجو' },
            { title: 'سبد خرید', description: 'Zustand store' },
            { title: 'پرداخت', description: 'درگاه زرین‌پال' },
            { title: 'پنل مدیریت', description: 'مدیریت محصولات' },
            { title: 'دیپلوی', description: 'Vercel' },
          ]}},
        ],
      },
    },
    {
      id: 6,
      title: 'دیباگ و عیب‌یابی',
      duration: '۶۰ دقیقه',
      difficulty: 'متوسط',
      data: {
        title: 'دیباگ با AI',
        subtitle: 'رفع خطاها و مشکلات',
        blocks: [
          { type: 'paragraph', content: 'حتی با وایب کدینگ هم ممکن است با خطا مواجه شوید.' },
          { type: 'code', content: { title: 'فرمت گزارش باگ', language: 'text', code: 'مشکل: [...]\nمراحل بازتولید: [...]\nنتیجه مورد انتظار: [...]\nخطای کنسول: [...]' } },
          { type: 'info', content: { type: 'warning', title: 'قانون طلایی', content: 'همیشه یک تغییر در یک زمان اعمال کنید.' } },
        ],
      },
    },
    {
      id: 7,
      title: 'بهینه‌سازی عملکرد',
      duration: '۶۰ دقیقه',
      difficulty: 'پیشرفته',
      data: {
        title: 'بهینه‌سازی',
        subtitle: 'سرعت و عملکرد بهتر',
        blocks: [
          { type: 'stats', content: [
            { label: 'زمان لود', value: '< ۳s', color: 'from-purple-500/20 to-indigo-500/20' },
            { label: 'Lighthouse', value: '۹۰+', color: 'from-pink-500/20 to-rose-500/20' },
          ]},
          { type: 'checklist', content: { title: 'چک‌لیست بهینه‌سازی', items: [
            { text: 'Image optimization', checked: true },
            { text: 'Code splitting', checked: true },
            { text: 'Lazy loading', checked: false },
          ]}},
        ],
      },
    },
    {
      id: 8,
      title: 'دیپلوی و انتشار',
      duration: '۴۵ دقیقه',
      difficulty: 'متوسط',
      data: {
        title: 'دیپلوی',
        subtitle: 'انتشار آنلاین پروژه',
        blocks: [
          { type: 'table', content: { title: 'پلتفرم‌های دیپلوی', headers: ['پلتفرم', 'قیمت'], rows: [
            ['Vercel', 'رایگان / $20'],
            ['Netlify', 'رایگان / $19'],
            ['Railway', '$5 شروع'],
          ]}},
          { type: 'timeline', content: { title: 'مراحل دیپلوی', steps: [
            { title: 'Push به GitHub', description: 'کد را در GitHub قرار دهید' },
            { title: 'اتصال به Vercel', description: 'پروژه جدید بسازید' },
            { title: 'Deploy', description: 'دکمه Deploy را بزنید' },
          ]}},
        ],
      },
    },
    {
      id: 9,
      title: 'تست و کیفیت کد',
      duration: '۶۰ دقیقه',
      difficulty: 'متوسط',
      data: {
        title: 'تست کیفیت',
        subtitle: 'تضمین کیفیت کد',
        blocks: [
          { type: 'list', content: { title: 'انواع تست', items: ['Unit Test', 'Integration Test', 'E2E Test'], style: 'disc' }},
          { type: 'table', content: { title: 'ابزارهای تست', headers: ['ابزار', 'نوع'], rows: [
            ['Jest', 'Unit'],
            ['Cypress', 'E2E'],
          ]}},
        ],
      },
    },
    {
      id: 10,
      title: 'امنیت',
      duration: '۶۰ دقیقه',
      difficulty: 'پیشرفته',
      data: {
        title: 'امنیت',
        subtitle: 'محافظت از پروژه',
        blocks: [
          { type: 'list', content: { title: 'نکات امنیتی', items: ['احراز هویت قوی', 'ولیدیشن ورودی', 'HTTPS'], style: 'disc' }},
          { type: 'info', content: { type: 'warning', title: 'اشتباهات رایج', content: ['ذخیره رمز plain text', 'API keys در فرانت‌اند'] } },
        ],
      },
    },
    {
      id: 11,
      title: 'Git و GitHub',
      duration: '۴۵ دقیقه',
      difficulty: 'مبتدی',
      data: {
        title: 'Git و GitHub',
        subtitle: 'مدیریت نسخه‌ها',
        blocks: [
          { type: 'code', content: { title: 'دستورات پایه', language: 'bash', code: 'git init\ngit add .\ngit commit -m "message"\ngit push' } },
        ],
      },
    },
    {
      id: 12,
      title: 'کار با API‌ها',
      duration: '۷۵ دقیقه',
      difficulty: 'متوسط',
      data: {
        title: 'API‌ها',
        subtitle: 'اتصال به سرویس‌های خارجی',
        blocks: [
          { type: 'code', content: { title: 'فراخوانی API', language: 'typescript', code: 'const response = await fetch("https://api.example.com");\nconst data = await response.json();' } },
        ],
      },
    },
    {
      id: 13,
      title: 'پایگاه داده',
      duration: '۷۵ دقیقه',
      difficulty: 'متوسط',
      data: {
        title: 'دیتابیس',
        subtitle: 'مدیریت داده‌ها',
        blocks: [
          { type: 'code', content: { title: 'Prisma Schema', language: 'prisma', code: 'model User {\n  id    Int    @id\n  email String @unique\n}' } },
        ],
      },
    },
    {
      id: 14,
      title: 'کسب درآمد',
      duration: '۶۰ دقیقه',
      difficulty: 'پیشرفته',
      data: {
        title: 'کسب درآمد',
        subtitle: 'تبدیل مهارت به درآمد',
        blocks: [
          { type: 'table', content: { title: 'مدل‌های درآمدزایی', headers: ['مدل', 'درآمد'], rows: [
            ['فریلنسری', '۵-۵۰ میلیون'],
            ['محصول SaaS', '۵-۱۰۰ میلیون'],
          ]}},
          { type: 'timeline', content: { title: 'مسیر ۹۰ روزه', steps: [
            { title: 'ماه اول', description: 'یادگیری و نمونه‌کار' },
            { title: 'ماه دوم', description: 'پورتفولیو و لینکدین' },
            { title: 'ماه سوم', description: 'اولین مشتری' },
          ]}},
        ],
      },
    },
    {
      id: 15,
      title: 'رشد مداوم',
      duration: '۴۵ دقیقه',
      difficulty: 'همه سطوح',
      data: {
        title: 'رشد مداوم',
        subtitle: 'همیشه در حال یادگیری',
        blocks: [
          { type: 'list', content: { title: 'منابع یادگیری', items: ['خبرنامه‌های AI', 'توییتر', 'یوتیوب'], style: 'disc' }},
          { type: 'quote', content: { text: 'تنها راه ahead ماندن، یادگیری مداوم است', author: 'آندری کارپاتی' } },
        ],
      },
    },
  ],
};

export default function VibeCoding() {
  return <RichLessonViewer course={vibeCodingCourse} />;
}
