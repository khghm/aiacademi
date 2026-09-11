import LessonViewer, { CourseData } from './LessonViewer';

const vibeCodingCourse: CourseData = {
  id: 'vibe-coding',
  title: 'وایب کدینگ با AI',
  subtitle: 'بدون نوشتن حتی یک خط کد، اپلیکیشن‌ها و وب‌سایت‌های حرفه‌ای بسازید',
  badge: '۱۵ درس | ۳۰ ساعت آموزش',
  color: 'purple',
  lessons: [
    {
      id: 1, title: 'وایب کدینگ چیست و چرا انقلابی است؟', duration: '۶۰ دقیقه', difficulty: 'مبتدی',
       {
        title: 'وایب کدینگ: انقلاب جدید در برنامه‌نویسی',
        subtitle: 'آشنایی با مفهومی که دنیای برنامه‌نویسی را متحول کرده است',
        blocks: [
          { type: 'paragraph', content: 'وایب کدینگ (Vibe Coding) مفهومی است که توسط آندری کارپاتی (Andrej Karpathy)، یکی از بنیان‌گذاران OpenAI، در فوریه ۲۰۲۵ مطرح شد. این مفهوم به روشی از برنامه‌نویسی اشاره دارد که در آن شما به جای نوشتن کد، با هوش مصنوعی به صورت طبیعی صحبت می‌کنید و او کد را برای شما می‌نویسد.' },
          { type: 'info', content: { type: 'info', title: 'تعریف رسمی وایب کدینگ', content: 'وایب کدینگ یعنی شما ایده و نیاز خود را به زبان طبیعی برای AI توضیح می‌دهید و AI کد مربوطه را تولید می‌کند. شما فقط نتیجه را بررسی می‌کنید، فیدبک می‌دهید و AI اصلاح می‌کند. در این روش، شما بیشتر نقش «مدیر محصول» و «تست‌کننده» را دارید تا «برنامه‌نویس».' } },
          { type: 'stats', content: [
            { label: 'سرعت توسعه', value: '۱۰x', color: 'from-purple-500/20 to-indigo-500/20' },
            { label: 'کاهش هزینه', value: '۹۰٪', color: 'from-pink-500/20 to-rose-500/20' },
            { label: 'زمان یادگیری', value: '۱ هفته', color: 'from-cyan-500/20 to-blue-500/20' },
            { label: 'نیاز به کدنویسی', value: 'صفر', color: 'from-amber-500/20 to-orange-500/20' },
          ]},
          { type: 'table', content: { title: 'مقایسه وایب کدینگ با برنامه‌نویسی سنتی', headers: ['ویژگی', 'برنامه‌نویسی سنتی', 'وایب کدینگ'], rows: [
            ['نیاز به دانش کدنویسی', 'بالا (حداقل ۶ ماه یادگیری)', 'تقریباً صفر'],
            ['سرعت توسعه', 'هفته‌ها تا ماه‌ها', 'ساعت‌ها تا چند روز'],
            ['هزینه', 'بالا (استخدام برنامه‌نویس)', 'بسیار پایین (اشتراک AI)'],
            ['نیاز به دیباگ', 'زیاد', 'حداقل'],
            ['خلاقیت', 'محدود به دانش فنی', 'نامحدود (فقط ایده مهم است)'],
            ['مقیاس‌پذیری', 'نیاز به تیم بزرگ', 'یک نفر کافی است'],
            ['زمان یادگیری', '۶-۱۲ ماه', '۱-۲ هفته'],
            ['هزینه نگهداری', 'بالا', 'پایین'],
          ]}},
          { type: 'flow', content: { title: 'فرآیند وایب کدینگ', steps: [
            { label: 'ایده', sublabel: 'چه می‌خواهید بسازید؟' },
            { label: 'توضیح به AI', sublabel: 'پرامپت بنویسید' },
            { label: 'تولید کد', sublabel: 'AI کد می‌نویسد' },
            { label: 'بررسی', sublabel: 'نتیجه را تست کنید' },
            { label: 'فیدبک', sublabel: 'اصلاحات را بگویید' },
            { label: 'تحویل', sublabel: 'پروژه آماده است' },
          ]}},
          { type: 'heading', content: { text: 'اصول کلیدی وایب کدینگ', size: 'xl', mt: '8' } },
          { type: 'paragraph', content: 'برای موفقیت در وایب کدینگ، باید سه اصل اساسی را رعایت کنید:' },
          { type: 'list', content: { title: 'اصل اول: توضیح واضح (Clear Description)', items: [
            'مهم‌ترین مهارت در وایب کدینگ، توانایی توضیح دادن چیزی است که می‌خواهید',
            'هرچه دقیق‌تر توضیح دهید، نتیجه بهتری می‌گیرید',
            'AI نمی‌تواند ذهن شما را بخواند، پس باید همه چیز را شفاف بیان کنید',
            'مثال بد: "یه سایت فروشگاهی بساز"',
            'مثال خوب: "یک وب‌سایت فروشگاهی برای محصولات آرایشی با طراحی مینیمال، شامل صفحه اصلی، دسته‌بندی، سبد خرید و پرداخت"',
          ], style: 'disc' }},
          { type: 'code', content: { title: 'مثال پرامپت ضعیف', language: 'text', code: 'یه سایت فروشگاهی بساز' } },
          { type: 'code', content: { title: 'مثال پرامپت قوی', language: 'text', code: `یک وب‌سایت فروشگاهی برای فروش محصولات آرایشی بهداشتی بساز که شامل:
- صفحه اصلی با اسلایدر محصولات ویژه
- صفحه دسته‌بندی محصولات (پوست، مو، آرایش، عطر)
- صفحه جزئیات محصول با امکان انتخاب رنگ و سایز
- سبد خرید با محاسبه خودکار هزینه ارسال
- صفحه پرداخت با درگاه زرین‌پال
- پنل کاربری (تاریخچه سفارشات، آدرس‌ها)
- پنل مدیریت (محصولات، سفارشات، کاربران)

طراحی: مینیمال با رنگ‌های صورتی و سفید
تکنولوژی: Next.js + Tailwind CSS
ریسپانسیو برای موبایل و تبلت` } },
          { type: 'list', content: { title: 'اصل دوم: تکرار و بهبود (Iteration)', items: [
            'هیچ پروژه‌ای در اولین تلاش کامل نمی‌شود',
            'باید با AI گفتگو کنید و مرحله به مرحله پروژه را بهبود دهید',
            'هر بار یک بخش کوچک را اصلاح کنید تا به نتیجه دلخواه برسید',
            'مثال: ابتدا ساختار کلی، سپس هدر، سپس Hero، سپس رنگ‌بندی و...',
          ], style: 'disc' }},
          { type: 'list', content: { title: 'اصل سوم: تست مداوم (Continuous Testing)', items: [
            'بعد از هر تغییر، نتیجه را بررسی کنید',
            'اگر مشکلی بود، به AI بگویید',
            'هرگز چندین تغییر را همزمان اعمال نکنید',
            'یک تغییر بدهید، تست کنید، و سپس تغییر بعدی را اعمال کنید',
          ], style: 'disc' }},
          { type: 'info', content: { type: 'tip', title: 'نکته طلایی', content: 'بهترین وایب کدرها کسانی نیستند که بهترین پرامپت‌ها را می‌نویسند، بلکه کسانی هستند که بهترین فیدبک‌ها را می‌دهند. توانایی شما در تشخیص مشکل و بیان دقیق آن، تفاوت بین یک نتیجه متوسط و عالی است.' } },
          { type: 'quote', content: { text: 'وایب کدینگ یعنی شما مدیر محصول هستید و AI برنامه‌نویس شما. هنر شما در مدیریت این رابطه است.', author: 'آندری کارپاتی' } },
        ],
      },
    },
    {
      id: 2, title: 'معرفی کامل ابزارهای وایب کدینگ', duration: '۹۰ دقیقه', difficulty: 'مبتدی',
       {
        title: 'ابزارهای اصلی وایب کدینگ',
        subtitle: 'شناخت ابزارها و انتخاب بهترین ابزار برای هر پروژه',
        blocks: [
          { type: 'paragraph', content: 'ابزارهای وایب کدینگ به چند دسته اصلی تقسیم می‌شوند. هر کدام برای نوع خاصی از پروژه مناسب هستند. شناخت این ابزارها و دانستن اینکه هر کدام برای چه کاری بهینه شده‌اند، اولین قدم برای موفقیت در وایب کدینگ است.' },
          { type: 'stats', content: [
            { label: 'ابزار اصلی', value: '۱۵+', color: 'from-purple-500/20 to-indigo-500/20' },
            { label: 'دسته‌بندی', value: '۵', color: 'from-pink-500/20 to-rose-500/20' },
            { label: 'رایگان', value: '۶۰٪', color: 'from-cyan-500/20 to-blue-500/20' },
            { label: 'حرفه‌ای', value: '۴۰٪', color: 'from-amber-500/20 to-orange-500/20' },
          ]},
          { type: 'tabs', content: { tabs: [
            { label: 'Cursor IDE', content: [
              { type: 'heading', content: { text: 'Cursor - بهترین IDE برای وایب کدینگ حرفه‌ای', size: 'lg' } },
              { type: 'paragraph', content: 'Cursor یک ویرایشگر کد مبتنی بر VS Code است که به صورت عمیق با AI یکپارچه شده. این ابزار در حال حاضر محبوب‌ترین IDE بین وایب کدرها است.' },
              { type: 'table', content: { headers: ['ویژگی', 'توضیح', 'اهمیت'], rows: [
                ['Tab Completion', 'تکمیل هوشمند کد با یک کلید', 'بالا'],
                ['Ctrl+K (Edit)', 'ویرایش کد با دستور طبیعی', 'بالا'],
                ['Chat (Ctrl+L)', 'گفتگو درباره پروژه', 'بالا'],
                ['Codebase Awareness', 'درک کل پروژه و فایل‌ها', 'حیاتی'],
                ['Multi-file Edit', 'ویرایش همزمان چند فایل', 'بالا'],
                ['@-mentions', 'ارجاع به فایل‌ها و نمادها', 'متوسط'],
                ['Terminal Integration', 'اجرای دستورات در ترمینال', 'متوسط'],
              ]}},
              { type: 'code', content: { title: 'نحوه شروع کار با Cursor', language: 'text', code: `۱. از cursor.com دانلود و نصب کنید
۲. پروژه خود را باز کنید (File > Open Folder)
۳. با Ctrl+L چت AI را باز کنید
۴. پروژه خود را توضیح دهید:
   "من می‌خواهم یک API برای مدیریت تسک‌ها بسازم با Express و MongoDB"
۵. AI فایل‌ها را ایجاد می‌کند
۶. با Ctrl+K بخش‌های خاصی را ویرایش کنید
۷. در ترمینال داخلی اجرا و تست کنید` } },
            ]},
            { label: 'Bolt.new', content: [
              { type: 'heading', content: { text: 'Bolt.new - ساخت سریع وب‌اپلیکیشن در مرورگر', size: 'lg' } },
              { type: 'paragraph', content: 'Bolt.new به شما اجازه می‌دهد بدون نصب هیچ چیزی، مستقیماً در مرورگر وب‌اپلیکیشن بسازید. مناسب برای MVP و پروتوتایپ سریع.' },
              { type: 'table', content: { headers: ['ویژگی', 'توضیح'], rows: [
                ['بدون نیاز به نصب', 'مستقیم در مرورگر کار می‌کند'],
                ['پیش‌نمایش زنده', 'تغییرات را لحظه‌ای می‌بینید'],
                ['دیپلوی با یک کلیک', 'انتشار روی Netlify/Vercel'],
                ['Full Stack', 'فرانت‌اند + بک‌اند + دیتابیس'],
                ['رایگان برای شروع', '۲۰۰۰ توکن رایگان روزانه'],
              ]}},
              { type: 'info', content: { type: 'tip', title: 'بهترین زمان استفاده از Bolt', content: 'وقتی می‌خواهید سریعاً یک ایده را تست کنید، بدون درگیر شدن با نصب و راه‌اندازی. مناسب برای دمو، پروتوتایپ، و پروژه‌های کوچک تا متوسط.' } },
            ]},
            { label: 'v0 by Vercel', content: [
              { type: 'heading', content: { text: 'v0 - متخصص ساخت رابط کاربری', size: 'lg' } },
              { type: 'paragraph', content: 'v0 توسط Vercel ساخته شده و تخصص آن ساخت UI با React و Tailwind CSS است. کافیست توضیح دهید چه UI می‌خواهید.' },
              { type: 'code', content: { title: 'مثال پرامپت v0', language: 'text', code: `یک داشبورد مدیریت بساز با:
- سایدبار با آیکون‌ها و منوی collapsible
- هدر با جستجو و نوتیفیکیشن
- ۴ کارت آماری (کاربران، فروش، بازدید، درآمد)
- جدول کاربران با sort و pagination
- نمودار خطی فروش ماهانه
- تم تیره با رنگ‌های بنفش و آبی
- کاملاً ریسپانسیو` } },
            ]},
            { label: 'Replit Agent', content: [
              { type: 'heading', content: { text: 'Replit Agent - ساخت پروژه‌های کامل', size: 'lg' } },
              { type: 'paragraph', content: 'Replit Agent می‌تواند یک پروژه کامل را از صفر بسازد، شامل بک‌اند، فرانت‌اند، دیتابیس و دیپلوی. مناسب برای پروژه‌های Full Stack.' },
              { type: 'table', content: { headers: ['ویژگی', 'توضیح', 'قیمت'], rows: [
                ['AI Agent', 'خودکار پروژه می‌سازد', 'شامل Core'],
                ['Collaborative', 'تیم‌ورک آنلاین', 'رایگان'],
                ['Database', 'PostgreSQL داخلی', 'شامل Core'],
                ['Deploy', 'انتشار خودکار', 'شامل Core'],
                ['Secrets', 'مدیریت متغیرهای محیطی', 'رایگان'],
              ]}},
            ]},
            { label: 'Lovable', content: [
              { type: 'heading', content: { text: 'Lovable (GPT Engineer) - تبدیل ایده به محصول', size: 'lg' } },
              { type: 'paragraph', content: 'Lovable می‌تواند ایده شما را به یک محصول کامل تبدیل کند. مناسب برای MVP و پروتوتایپ سریع. با Supabase یکپارچه است.' },
              { type: 'info', content: { type: 'info', title: 'تفاوت Lovable با Bolt', content: 'Lovable بیشتر روی طراحی بصری و UX تمرکز دارد و خروجی‌های زیباتری تولید می‌کند. Bolt بیشتر روی عملکرد و سرعت تمرکز دارد. هر دو عالی هستند، انتخاب بستگی به اولویت شما دارد.' } },
            ]},
          ]}},
          { type: 'table', content: { title: 'مقایسه کلی ابزارها', headers: ['ابزار', 'بهترین برای', 'قیمت', 'سطح', 'امتیاز'], rows: [
            ['Cursor', 'پروژه‌های حرفه‌ای', '$20/ماه', 'متوسط-پیشرفته', '۹.۵/۱۰'],
            ['Bolt.new', 'وب‌اپ سریع', 'رایگان/$20', 'مبتدی-متوسط', '۸.۵/۱۰'],
            ['v0', 'UI/UX', 'رایگان/$20', 'مبتدی-متوسط', '۸/۱۰'],
            ['Replit', 'پروژه کامل', 'رایگان/$25', 'همه سطوح', '۸/۱۰'],
            ['Lovable', 'MVP', 'رایگان/$20', 'مبتدی-متوسط', '۸.۵/۱۰'],
          ]}},
          { type: 'info', content: { type: 'tip', title: 'نکات مهم انتخاب ابزار', content: ['بر اساس نیاز انتخاب کنید', 'از نسخه رایگان شروع کنید', 'ترکیب ابزارها بهترین نتیجه را می‌دهد', 'دسترسی در ایران را بررسی کنید', 'پرداخت بین‌المللی را در نظر بگیرید'] } },
        ],
      },
    },
    { id: 3, title: 'پرامپت‌نویسی حرفه‌ای برای وایب کدینگ', duration: '۹۰ دقیقه', difficulty: 'متوسط', data: { title: 'هنر پرامپت‌نویسی', subtitle: 'تکنیک‌های پیشرفته نوشتن پرامپت', blocks: [
      { type: 'paragraph', content: 'پرامپت‌نویسی مهم‌ترین مهارت شما در وایب کدینگ است. یک پرامپت خوب می‌تواند تفاوت بین یک پروژه موفق و شکست‌خورده باشد. در این درس، فرمول‌ها و تکنیک‌های حرفه‌ای پرامپت‌نویسی را یاد می‌گیرید.' },
      { type: 'info', content: { type: 'tip', title: 'فرمول CRAFT برای پرامپت حرفه‌ای', content: ['C - Context (زمینه): پروژه درباره چیست؟', 'R - Role (نقش): AI در چه نقشی عمل کند؟', 'A - Action (عمل): دقیقاً چه کاری انجام دهد؟', 'F - Format (فرمت): خروجی چگونه باشد؟', 'T - Tone (لحن): سبک کار چگونه باشد؟'] } },
      { type: 'code', content: { title: 'مثال پرامپت با فرمول CRAFT', language: 'text', code: `[Context] من یک استارتاپ آموزش آنلاین دارم که دوره‌های برنامه‌نویسی ارائه می‌دهد.

[Role] تو یک توسعه‌دهنده فرانت‌اند ارشد با ۱۰ سال تجربه هستی.

[Action] یک لندینگ پیج حرفه‌ای بساز با:
  - Hero section با عنوان جذاب و CTA
  - بخش ویژگی‌ها (۶ مورد) با آیکون
  - بخش نظرات دانشجویان (اسلایدر)
  - بخش قیمت‌گذاری (۳ پلن)
  - فوتر کامل

[Format] React + Tailwind CSS، ریسپانسیو، RTL (فارسی)
[Tone] مدرن، حرفه‌ای، با انیمیشن‌های ظریف` } },
      { type: 'heading', content: { text: 'تکنیک‌های پیشرفته پرامپت‌نویسی', size: 'xl', mt: '8' } },
      { type: 'list', content: { title: '۱. Chain of Thought (زنجیره فکری)', items: ['از AI بخواهید مرحله به مرحله فکر کند', 'مثال: "قبل از نوشتن کد، ابتدا معماری سیستم را توضیح بده، سپس ماژول‌ها را مشخص کن، و در نهایت کد هر ماژول را بنویس."', 'این تکنیک برای پروژه‌های پیچیده بسیار مؤثر است'], style: 'disc' }},
      { type: 'list', content: { title: '۲. Few-Shot Prompting', items: ['یک یا چند مثال بدهید تا AI الگو را بفهمد', 'مثال: سبک کامپوننت‌های قبلی خود را نشان دهید و بخواهید مشابه آن بسازد', 'بسیار مفید برای حفظ یکپارچگی سبک کد'], style: 'disc' }},
      { type: 'list', content: { title: '۳. Iterative Refinement', items: ['پروژه را مرحله به مرحله بسازید', 'هر بار یک بخش کوچک اضافه یا اصلاح کنید', 'بهترین روش برای پروژه‌های بزرگ'], style: 'disc' }},
      { type: 'list', content: { title: '۴. Role Playing', items: ['به AI نقش بدهید: "تو یک توسعه‌دهنده ارشد با ۱۰ سال تجربه React هستی"', 'این کار کیفیت خروجی را بالا می‌برد', 'مخصوصاً برای کدهای حرفه‌ای مؤثر است'], style: 'disc' }},
      { type: 'list', content: { title: '۵. Constraint Setting', items: ['محدودیت‌ها را مشخص کنید: "حداکثر ۳ فایل"، "بدون dependency اضافی"، "فقط از Tailwind استفاده کن"', 'جلوگیری از پیچیدگی اضافی'], style: 'disc' }},
      { type: 'info', content: { type: 'warning', title: 'اشتباهات رایج در پرامپت‌نویسی', content: ['پرامپت خیلی کلی: "یه سایت بساز" - AI نمی‌داند چه نوع سایتی', 'پرامپت خیلی بلند بدون ساختار: همه چیز را در یک پاراگراف بنویسید', 'عدم ذکر تکنولوژی: AI ممکن است از کتابخانه‌ای استفاده کند که شما نمی‌خواهید', 'فراموش کردن RTL: برای پروژه‌های فارسی حتماً ذکر کنید', 'عدم تعیین سطح جزئیات: مشخص کنید چه بخش‌هایی دقیق و چه بخش‌هایی کلی باشند'] } },
    ]}},
    { id: 4, title: 'معماری پروژه با AI', duration: '۷۵ دقیقه', difficulty: 'متوسط',  { title: 'طراحی معماری پروژه', subtitle: 'قبل از کدنویسی، معماری را طراحی کنید', blocks: [
      { type: 'paragraph', content: 'قبل از شروع کدنویسی، باید معماری پروژه را مشخص کنید. یک معماری خوب باعث می‌شود پروژه قابل نگهداری، مقیاس‌پذیر و حرفه‌ای باشد. در این درس یاد می‌گیرید چگونه معماری پروژه را با کمک AI طراحی کنید.' },
      { type: 'flow', content: { title: 'مراحل طراحی معماری', steps: [
        { label: 'تحلیل نیازها', sublabel: 'چه چیزی لازم است؟' },
        { label: 'انتخاب تکنولوژی', sublabel: 'با چه ابزاری؟' },
        { label: 'طراحی دیتابیس', sublabel: 'ساختار داده‌ها' },
        { label: 'طراحی API', sublabel: 'اندپوینت‌ها' },
        { label: 'طراحی UI', sublabel: 'صفحات و کامپوننت‌ها' },
        { label: 'شروع پیاده‌سازی', sublabel: 'کدنویسی' },
      ]}},
      { type: 'heading', content: { text: 'الگوهای معماری رایج', size: 'xl', mt: '8' } },
      { type: 'tabs', content: { tabs: [
        { label: 'MVC', content: [
          { type: 'paragraph', content: 'Model-View-Controller: الگوی کلاسیک که داده، رابط کاربری و منطق را جدا می‌کند.' },
          { type: 'code', content: { title: 'ساختار پوشه MVC', language: 'text', code: `src/
├── models/          # تعریف مدل‌های داده
├── views/           # کامپوننت‌های UI
├── controllers/     # منطق کنترل درخواست‌ها
├── services/        # منطق تجاری
├── routes/          # تعریف مسیرها
├── middleware/       # middleware‌ها
└── utils/           # توابع کمکی` } },
        ]},
        { label: 'Clean Architecture', content: [
          { type: 'paragraph', content: 'معماری تمیز: لایه‌بندی دقیق با جداسازی کامل وابستگی‌ها.' },
          { type: 'code', content: { title: 'ساختار Clean Architecture', language: 'text', code: `src/
├── domain/          # هسته business logic
├── application/     # لایه اپلیکیشن
├── infrastructure/  # لایه زیرساخت
├── presentation/    # لایه ارائه
└── shared/          # موارد مشترک` } },
        ]},
        { label: 'Feature-Based', content: [
          { type: 'paragraph', content: 'معماری مبتنی بر فیچر: هر فیچر تمام لایه‌های خود را دارد.' },
          { type: 'code', content: { title: 'ساختار Feature-Based', language: 'text', code: `src/
├── features/
│   ├── auth/
│   ├── products/
│   └── cart/
├── shared/
└── app/` } },
        ]},
      ]}},
      { type: 'code', content: { title: 'پرامپت طراحی معماری پروژه', language: 'text', code: `من می‌خواهم یک پلتفرم آموزش آنلاین بسازم.

ویژگی‌های اصلی:
- ثبت‌نام و ورود (email + Google OAuth)
- لیست دوره‌ها با فیلتر و جستجو
- پخش ویدیو با پیشرفت یادگیری
- آزمون و تمرین
- پنل مدرس (آپلود ویدیو، مدیریت دوره)
- پنل دانشجو (دوره‌های من، گواهینامه‌ها)
- سیستم پرداخت
- نظرات و امتیازدهی

لطفاً:
1. بهترین معماری را پیشنهاد بده و دلیل انتخابت را توضیح بده
2. ساختار پوشه‌بندی کامل را نشان بده
3. مدل‌های دیتابیس را طراحی کن
4. لیست API endpoints را مشخص کن
5. تکنولوژی‌های پیشنهادی را معرفی کن
6. مراحل پیاده‌سازی را مرحله به مرحله بنویس` } },
      { type: 'info', content: { type: 'success', title: 'نکته مهم', content: 'همیشه قبل از شروع کدنویسی، از AI بخواهید معماری پروژه را طراحی کند. این کار ۱۰ برابر زمان توسعه را کاهش می‌دهد و از دوباره‌کاری جلوگیری می‌کند.' } },
    ]}},
    { id: 5, title: 'پروژه عملی: ساخت فروشگاه آنلاین', duration: '۱۲۰ دقیقه', difficulty: 'پیشرفته',  { title: 'پروژه عملی', subtitle: 'ساخت یک فروشگاه آنلاین کامل', blocks: [
      { type: 'paragraph', content: 'در این درس، مرحله به مرحله یک فروشگاه آنلاین کامل می‌سازیم. این پروژه تمام مفاهیم وایب کدینگ را پوشش می‌دهد و می‌توانید آن را به عنوان نمونه‌کار در پورتفولیوی خود قرار دهید.' },
      { type: 'info', content: { type: 'info', title: 'مشخصات پروژه', content: ['نام: شاپ‌لند', 'نوع: فروشگاه آنلاین محصولات دیجیتال', 'تکنولوژی: Next.js 14 + Tailwind CSS + Prisma + PostgreSQL', 'قابلیت‌ها: احراز هویت، سبد خرید، پرداخت، پنل ادمین', 'زمان تقریبی: ۳-۵ روز', 'سطح: پیشرفته'] } },
      { type: 'timeline', content: { title: 'مراحل پیاده‌سازی', steps: [
        { title: 'Setup و نصب', description: 'ایجاد پروژه Next.js، نصب Tailwind CSS، Prisma، و پیکربندی اولیه.', detail: 'زمان تقریبی: ۳۰ دقیقه' },
        { title: 'طراحی دیتابیس', description: 'تعریف مدل‌های User, Product, Category, Order, Cart با Prisma.', detail: 'زمان تقریبی: ۱ ساعت' },
        { title: 'سیستم احراز هویت', description: 'ثبت‌نام، ورود، NextAuth.js، middleware محافظت از route‌ها.', detail: 'زمان تقریبی: ۲ ساعت' },
        { title: 'صفحات محصولات', description: 'لیست محصولات با فیلتر، جستجو، مرتب‌سازی، Pagination.', detail: 'زمان تقریبی: ۳ ساعت' },
        { title: 'صفحه جزئیات محصول', description: 'تصاویر، توضیحات، انتخاب متغیرها، افزودن به سبد.', detail: 'زمان تقریبی: ۲ ساعت' },
        { title: 'سبد خرید', description: 'Zustand store، اضافه/حذف، تغییر تعداد، محاسبه قیمت.', detail: 'زمان تقریبی: ۲ ساعت' },
        { title: 'پرداخت', description: 'اتصال به درگاه زرین‌پال، ایجاد سفارش، ارسال ایمیل تأیید.', detail: 'زمان تقریبی: ۳ ساعت' },
        { title: 'پنل کاربری', description: 'تاریخچه سفارشات، آدرس‌ها، ویرایش پروفایل.', detail: 'زمان تقریبی: ۲ ساعت' },
        { title: 'پنل مدیریت', description: 'مدیریت محصولات، سفارشات، کاربران، گزارشات.', detail: 'زمان تقریبی: ۴ ساعت' },
        { title: 'بهینه‌سازی و دیپلوی', description: 'SEO، Performance، دیپلوی روی Vercel.', detail: 'زمان تقریبی: ۲ ساعت' },
      ]}},
      { type: 'code', content: { title: 'پرامپت مرحله اول: Setup', language: 'text', code: `یک پروژه Next.js 14 با App Router بساز.

نصب و پیکربندی:
- Tailwind CSS با تم تیره
- Prisma با PostgreSQL
- NextAuth.js برای احراز هویت
- Zustand برای state management
- React Query برای داده‌های سرور
- Zod برای ولیدیشن
- Framer Motion برای انیمیشن

ساختار پوشه‌بندی:
src/
├── app/              # صفحات Next.js
├── components/       # کامپوننت‌های مشترک
│   ├── ui/          # کامپوننت‌های پایه
│   ├── layout/      # Header, Footer, Sidebar
│   └── features/    # کامپوننت‌های فیچرها
├── lib/             # تنظیمات و utilities
├── prisma/          # schema و migrations
├── store/           # Zustand stores
├── types/           # TypeScript types
└── styles/          # استایل‌های global` } },
      { type: 'info', content: { type: 'tip', title: 'نکته مهم در پروژه‌های بزرگ', content: 'هرگز سعی نکنید کل پروژه را در یک پرامپت بسازید. پروژه‌های بزرگ را به مراحل کوچک تقسیم کنید و هر مرحله را جداگانه با AI پیاده‌سازی کنید. بعد از هر مرحله، پروژه را تست کنید.' } },
    ]}},
    { id: 6, title: 'دیباگ و عیب‌یابی با AI', duration: '۶۰ دقیقه', difficulty: 'متوسط',  { title: 'دیباگ با AI', subtitle: 'رفع خطاها و مشکلات', blocks: [
      { type: 'paragraph', content: 'حتی با وایب کدینگ هم ممکن است با خطا مواجه شوید. مهم این است که بدانید چگونه خطاها را به AI گزارش دهید و از آن کمک بگیرید.' },
      { type: 'code', content: { title: 'فرمت استاندارد گزارش باگ', language: 'text', code: `مشکل: [توضیح کوتاه مشکل]

مراحل بازتولید:
1. [مرحله اول]
2. [مرحله دوم]
3. [مرحله سوم]

نتیجه مورد انتظار: [چه باید اتفاق بیفتد]
نتیجه واقعی: [چه اتفاقی می‌افتد]

خطای کنسول:
\`\`\`
[متن کامل خطا]
\`\`\`

فایل مربوطه: [مسیر فایل]
خط مربوطه: [شماره خط]

اطلاعات اضافی:
- مرورگر: [نسخه]
- سیستم عامل: [نسخه]` } },
      { type: 'heading', content: { text: 'تکنیک‌های بهینه‌سازی', size: 'xl', mt: '8' } },
      { type: 'code', content: { title: 'پرامپت بهینه‌سازی سرعت', language: 'text', code: `این وب‌سایت من کند لود می‌شود. لطفاً:
1. با Lighthouse تحلیل کن
2. مشکلات Performance را شناسایی کن
3. راه‌حل‌های عملی پیشنهاد بده:
   - Image optimization
   - Code splitting
   - Lazy loading
   - Caching strategy
   - Bundle size reduction
4. کد بهینه‌شده را بنویس

هدف: Lighthouse score بالای ۹۰` } },
      { type: 'info', content: { type: 'warning', title: 'قانون طلایی دیباگ', content: 'همیشه یک تغییر در یک زمان اعمال کنید. اگر چندین تغییر همزمان اعمال کنید و مشکلی پیش بیاید، نمی‌دانید کدام تغییر باعث مشکل شده است.' } },
    ]}},
    { id: 7, title: 'بهینه‌سازی عملکرد', duration: '۶۰ دقیقه', difficulty: 'پیشرفته',  { title: 'بهینه‌سازی', subtitle: 'سرعت و عملکرد بهتر', blocks: [
      { type: 'paragraph', content: 'بهینه‌سازی سرعت لود و عملکرد پروژه بسیار مهم است. کاربران انتظار دارند وب‌سایت در کمتر از ۳ ثانیه لود شود.' },
      { type: 'stats', content: [
        { label: 'زمان لود ایده‌آل', value: '< ۳ ثانیه', color: 'from-purple-500/20 to-indigo-500/20' },
        { label: 'Core Web Vitals', value: 'A', color: 'from-pink-500/20 to-rose-500/20' },
        { label: 'Lighthouse Score', value: '۹۰+', color: 'from-cyan-500/20 to-blue-500/20' },
        { label: 'کاهش حجم', value: '۷۰٪', color: 'from-amber-500/20 to-orange-500/20' },
      ]},
      { type: 'checklist', content: { title: 'چک‌لیست بهینه‌سازی', items: [
        { text: 'Image optimization با next/image', checked: true },
        { text: 'Code splitting خودکار', checked: true },
        { text: 'Lazy loading برای کامپوننت‌های سنگین', checked: false },
        { text: 'Caching با Redis', checked: false },
        { text: 'Minification و Compression', checked: true },
        { text: 'CDN برای استاتیک فایل‌ها', checked: false },
        { text: 'حذف کدهای استفاده نشده', checked: true },
      ]}},
    ]}},
    { id: 8, title: 'دیپلوی و انتشار پروژه', duration: '۴۵ دقیقه', difficulty: 'متوسط',  { title: 'دیپلوی پروژه', subtitle: 'انتشار آنلاین پروژه', blocks: [
      { type: 'paragraph', content: 'بعد از تکمیل پروژه، باید آن را آنلاین کنید تا دیگران بتوانند از آن استفاده کنند. در این درس، بهترین روش‌های دیپلوی را یاد می‌گیرید.' },
      { type: 'table', content: { title: 'پلتفرم‌های دیپلوی', headers: ['پلتفرم', 'بهترین برای', 'قیمت', 'سرعت', 'سادگی'], rows: [
        ['Vercel', 'Next.js / Frontend', 'رایگان / $20', 'عالی', 'بسیار آسان'],
        ['Netlify', 'Frontend / Jamstack', 'رایگان / $19', 'عالی', 'بسیار آسان'],
        ['Railway', 'Full Stack / Backend', '$5 شروع', 'خوب', 'آسان'],
        ['Supabase', 'Database / Auth', 'رایگان / $25', 'خوب', 'متوسط'],
        ['AWS', 'Enterprise', 'Pay as you go', 'عالی', 'پیچیده'],
        ['لیارا (ایرانی)', 'پروژه‌های ایرانی', 'از ۵۰ هزار/ماه', 'خوب', 'آسان'],
      ]}},
      { type: 'timeline', content: { title: 'مراحل دیپلوی روی Vercel', steps: [
        { title: 'Push به GitHub', description: 'کد را در یک repository در GitHub قرار دهید.', detail: 'git init && git add . && git commit -m "initial" && git push' },
        { title: 'اتصال به Vercel', description: 'در vercel.com با GitHub لاگین کنید و پروژه جدید بسازید.', detail: 'Import Git Repository را بزنید و repo خود را انتخاب کنید.' },
        { title: 'تنظیم Environment Variables', description: 'متغیرهای محیطی را در Settings > Environment Variables وارد کنید.', detail: 'DATABASE_URL, NEXTAUTH_SECRET, و سایر متغیرها' },
        { title: 'تنظیمات Build', description: 'Framework Preset را Next.js انتخاب کنید.', detail: 'معمولاً Vercel خودکار تشخیص می‌دهد.' },
        { title: 'Deploy', description: 'دکمه Deploy را بزنید و منتظر بمانید.', detail: 'معمولاً ۱-۳ دقیقه طول می‌کشد.' },
        { title: 'دامنه سفارشی', description: 'دامنه خود را در Settings > Domains اضافه کنید.', detail: 'DNS records را طبق راهنما تنظیم کنید.' },
      ]}},
    ]}},
    { id: 9, title: 'تست و کیفیت کد', duration: '۶۰ دقیقه', difficulty: 'متوسط',  { title: 'تست کیفیت', subtitle: 'تضمین کیفیت کد', blocks: [
      { type: 'paragraph', content: 'تست کردن کد برای اطمینان از عملکرد صحیح ضروری است. در این درس، انواع تست و ابزارهای تست را یاد می‌گیرید.' },
      { type: 'list', content: { title: 'انواع تست', items: [
        'Unit Test: تست توابع و کامپوننت‌های کوچک',
        'Integration Test: تست تعامل بین بخش‌ها',
        'E2E Test: تست کامل از دید کاربر',
        'Performance Test: تست سرعت و عملکرد',
      ], style: 'disc' }},
      { type: 'table', content: { title: 'ابزارهای تست', headers: ['ابزار', 'نوع تست', 'یادگیری'], rows: [
        ['Jest', 'Unit Test', 'آسان'],
        ['React Testing Library', 'Component Test', 'متوسط'],
        ['Cypress', 'E2E Test', 'متوسط'],
        ['Playwright', 'E2E Test', 'متوسط'],
      ]}},
    ]}},
    { id: 10, title: 'امنیت در وایب کدینگ', duration: '۶۰ دقیقه', difficulty: 'پیشرفته',  { title: 'امنیت', subtitle: 'محافظت از پروژه', blocks: [
      { type: 'paragraph', content: 'امنیت پروژه بسیار مهم است. یک حفره امنیتی می‌تواند باعث از دست رفتن داده‌ها و اعتبار شما شود.' },
      { type: 'list', content: { title: 'نکات امنیتی', items: [
        'احراز هویت قوی (JWT, OAuth)',
        'ولیدیشن ورودی‌ها',
        'محافظت در برابر XSS و CSRF',
        'رمزنگاری داده‌های حساس',
        'HTTPS اجباری',
        'Rate Limiting',
        'بروزرسانی منظم dependencies',
      ], style: 'disc' }},
      { type: 'info', content: { type: 'warning', title: 'اشتباهات امنیتی رایج', content: ['ذخیره رمز عبور به صورت plain text', 'عدم ولیدیشن ورودی‌ها', 'استفاده از API keys در کد فرانت‌اند', 'عدم استفاده از HTTPS', 'عدم بروز رسانی dependencies'] } },
    ]}},
    { id: 11, title: 'نسخه‌بندی با Git', duration: '۴۵ دقیقه', difficulty: 'مبتدی',  { title: 'Git و GitHub', subtitle: 'مدیریت نسخه‌ها', blocks: [
      { type: 'paragraph', content: 'استفاده از Git برای مدیریت نسخه‌های پروژه ضروری است. Git به شما اجازه می‌دهد تغییرات را ردیابی کنید، به نسخه‌های قبلی برگردید و با تیم همکاری کنید.' },
      { type: 'code', content: { title: 'دستورات پایه Git', language: 'bash', code: `git init                    # شروع یک repository جدید
git add .                   # اضافه کردن تمام فایل‌ها
git commit -m "message"     # ثبت تغییرات
git push                    # ارسال به remote
git pull                    # دریافت تغییرات از remote
git branch feature-name     # ساخت branch جدید
git checkout feature-name   # تغییر به branch دیگر
git merge feature-name      # ادغام branch` } },
    ]}},
    { id: 12, title: 'کار با API‌ها', duration: '۷۵ دقیقه', difficulty: 'متوسط',  { title: 'API‌ها', subtitle: 'اتصال به سرویس‌های خارجی', blocks: [
      { type: 'paragraph', content: 'بسیاری از پروژه‌ها نیاز به اتصال به API‌های خارجی دارند. در این درس، نحوه کار با REST API و GraphQL را یاد می‌گیرید.' },
      { type: 'code', content: { title: 'مثال فراخوانی API', language: 'typescript', code: `// فراخوانی API با fetch
async function getUsers() {
  const response = await fetch('https://api.example.com/users');
  const data = await response.json();
  return data;
}

// فراخوانی API با axios
import axios from 'axios';

async function getUsers() {
  const response = await axios.get('https://api.example.com/users');
  return response.data;
}` } },
    ]}},
    { id: 13, title: 'پایگاه داده و ORM', duration: '۷۵ دقیقه', difficulty: 'متوسط',  { title: 'دیتابیس', subtitle: 'مدیریت داده‌ها', blocks: [
      { type: 'paragraph', content: 'انتخاب و طراحی دیتابیس مناسب بسیار مهم است. در این درس، Prisma ORM را یاد می‌گیرید.' },
      { type: 'code', content: { title: 'مثال Prisma Schema', language: 'prisma', code: `model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}` } },
    ]}},
    { id: 14, title: 'کسب درآمد از وایب کدینگ', duration: '۶۰ دقیقه', difficulty: 'پیشرفته',  { title: 'کسب درآمد', subtitle: 'تبدیل مهارت به درآمد', blocks: [
      { type: 'paragraph', content: 'وایب کدینگ یکی از سریع‌ترین مسیرها برای کسب درآمد است. در این درس، مدل‌های درآمدزایی و قیمت‌گذاری را یاد می‌گیرید.' },
      { type: 'table', content: { title: 'مدل‌های درآمدزایی', headers: ['مدل', 'درآمد ماهانه', 'زمان رسیدن', 'سختی'], rows: [
        ['فریلنسری وب‌سایت', '۵-۳۰ میلیون', '۱-۲ ماه', 'متوسط'],
        ['فریلنسری وب‌اپ', '۱۰-۵۰ میلیون', '۲-۳ ماه', 'بالا'],
        ['ساخت محصول SaaS', '۵-۱۰۰ میلیون', '۳-۶ ماه', 'بالا'],
        ['فروش تمپلیت', '۲-۲۰ میلیون', '۱-۲ ماه', 'پایین'],
        ['آموزش وایب کدینگ', '۵-۵۰ میلیون', '۲-۴ ماه', 'متوسط'],
        ['مشاوره AI', '۱۰-۱۰۰ میلیون', '۶+ ماه', 'بالا'],
      ]}},
      { type: 'table', content: { title: 'جدول قیمت‌گذاری خدمات', headers: ['خدمت', 'قیمت حداقل', 'قیمت متوسط', 'قیمت حرفه‌ای'], rows: [
        ['لندینگ پیج', '۳ میلیون', '۸ میلیون', '۲۰ میلیون'],
        ['وب‌سایت شرکتی', '۵ میلیون', '۱۵ میلیون', '۴۰ میلیون'],
        ['فروشگاه آنلاین', '۱۰ میلیون', '۲۵ میلیون', '۶۰ میلیون'],
        ['وب‌اپلیکیشن', '۱۵ میلیون', '۴۰ میلیون', '۱۰۰ میلیون'],
        ['API بک‌اند', '۵ میلیون', '۱۵ میلیون', '۴۰ میلیون'],
        ['بات تلگرام', '۳ میلیون', '۸ میلیون', '۲۰ میلیون'],
        ['داشبورد مدیریت', '۸ میلیون', '۲۰ میلیون', '۵۰ میلیون'],
      ]}},
      { type: 'timeline', content: { title: 'مسیر پیشنهادی ۹۰ روزه', steps: [
        { title: 'ماه اول: یادگیری و تمرین', description: 'وایب کدینگ را یاد بگیرید و ۳-۵ پروژه نمونه بسازید.', detail: 'روزانه ۲-۳ ساعت تمرین کنید.' },
        { title: 'ماه دوم: ساخت پورتفولیو', description: 'نمونه‌کارها را در یک سایت شخصی قرار دهید. در لینکدین فعال شوید.', detail: 'هر روز یک پست لینکدین بگذارید.' },
        { title: 'ماه سوم: گرفتن اولین مشتری', description: 'در سایت‌های فریلنسری ثبت‌نام کنید و پیشنهاد ارسال کنید.', detail: 'روزی ۵ پیشنهاد ارسال کنید. اولین پروژه را با قیمت مناسب بگیرید.' },
      ]}},
    ]}},
    { id: 15, title: 'مسیر رشد و یادگیری مداوم', duration: '۴۵ دقیقه', difficulty: 'همه سطوح',  { title: 'رشد مداوم', subtitle: 'همیشه در حال یادگیری', blocks: [
      { type: 'paragraph', content: 'دنیای AI سریع تغییر می‌کند. باید همیشه در حال یادگیری باشید. در این درس، منابع و روش‌های یادگیری مداوم را یاد می‌گیرید.' },
      { type: 'list', content: { title: 'منابع یادگیری', items: [
        'خبرنامه‌های AI (The Batch, TLDR AI)',
        'توییتر/X: دنبال کردن متخصصان AI',
        'Reddit: r/artificial, r/ChatGPT',
        'یوتیوب: آموزش ابزارهای جدید',
        'پادکست: AI News',
        'دوره‌های آنلاین',
      ], style: 'disc' }},
      { type: 'quote', content: { text: 'تنها راه ahead ماندن در دنیای AI، یادگیری مداوم است.', author: 'آندری کارپاتی' } },
      { type: 'info', content: { type: 'success', title: 'اقدامات فوری', content: ['همین امروز یک ابزار AI را عمیق یاد بگیرید', 'اولین نمونه‌کار خود را بسازید', 'پروفایل لینکدین را به‌روز کنید', 'به ۵ نفر پیام بدهید و خدماتتان را معرفی کنید', 'اولین پروژه را با هر قیمتی بگیرید (برای تجربه)'] } },
    ]}},
  ],
};

export default function VibeCoding() {
  return <LessonViewer course={vibeCodingCourse} />;
}
