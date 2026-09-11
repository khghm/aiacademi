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
      data: {
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
            ]},
            { label: 'Lovable', content: [
              { type: 'heading', content: { text: 'Lovable (GPT Engineer) - تبدیل ایده به محصول', size: 'lg' } },
              { type: 'paragraph', content: 'Lovable می‌تواند ایده شما را به یک محصول کامل تبدیل کند. مناسب برای MVP و پروتوتایپ سریع. با Supabase یکپارچه است.' },
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
    { id: 3, title: 'پرامپت‌نویسی حرفه‌ای برای وایب کدینگ', duration: '۹۰ دقیقه', difficulty: 'متوسط',  { title: 'هنر پرامپت‌نویسی', subtitle: 'تکنیک‌های پیشرفته نوشتن پرامپت', blocks: [
      { type: 'paragraph', content: 'پرامپت‌نویسی مهم‌ترین مهارت شما در وایب کدینگ است. یک پرامپت خوب می‌تواند تفاوت بین یک پروژه موفق و شکست‌خورده باشد.' },
      { type: 'info', content: { type: 'tip', title: 'فرمول CRAFT برای پرامپت حرفه‌ای', content: ['C - Context (زمینه): پروژه درباره چیست؟', 'R - Role (نقش): AI در چه نقشی عمل کند؟', 'A - Action (عمل): دقیقاً چه کاری انجام دهد؟', 'F - Format (فرمت): خروجی چگونه باشد؟', 'T - Tone (لحن): سبک کار چگونه باشد؟'] } },
      { type: 'code', content: { title: 'مثال پرامپت با فرمول CRAFT', language: 'text', code: `[Context] من یک استارتاپ آموزش آنلاین دارم.

[Role] تو یک توسعه‌دهنده فرانت‌اند ارشد با ۱۰ سال تجربه هستی.

[Action] یک لندینگ پیج حرفه‌ای بساز با:
  - Hero section با عنوان جذاب و CTA
  - بخش ویژگی‌ها (۶ مورد)
  - بخش نظرات دانشجویان
  - بخش قیمت‌گذاری (۳ پلن)
  - فوتر کامل

[Format] React + Tailwind CSS، ریسپانسیو، RTL
[Tone] مدرن، حرفه‌ای، با انیمیشن‌های ظریف` } },
      { type: 'heading', content: { text: 'تکنیک‌های پیشرفته', size: 'xl', mt: '8' } },
      { type: 'list', content: { title: '۱. Chain of Thought', items: ['از AI بخواهید مرحله به مرحله فکر کند', 'برای پروژه‌های پیچیده بسیار مؤثر است', 'دقت پاسخ‌ها را تا ۸۰٪ افزایش می‌دهد'], style: 'disc' }},
      { type: 'list', content: { title: '۲. Few-Shot Prompting', items: ['یک یا چند مثال بدهید', 'AI الگو را می‌فهمد', 'برای حفظ یکپارچگی سبک کد مفید است'], style: 'disc' }},
      { type: 'list', content: { title: '۳. Iterative Refinement', items: ['پروژه را مرحله به مرحله بسازید', 'هر بار یک بخش کوچک اضافه کنید', 'بهترین روش برای پروژه‌های بزرگ'], style: 'disc' }},
      { type: 'info', content: { type: 'warning', title: 'اشتباهات رایج', content: ['پرامپت خیلی کلی', 'عدم ذکر تکنولوژی', 'فراموش کردن RTL', 'عدم تعیین سطح جزئیات'] } },
    ]}},
    { id: 4, title: 'معماری پروژه با AI', duration: '۷۵ دقیقه', difficulty: 'متوسط',  { title: 'طراحی معماری', subtitle: 'قبل از کدنویسی، معماری را طراحی کنید', blocks: [
      { type: 'paragraph', content: 'قبل از شروع کدنویسی، باید معماری پروژه را مشخص کنید. یک معماری خوب باعث می‌شود پروژه قابل نگهداری و مقیاس‌پذیر باشد.' },
      { type: 'flow', content: { title: 'مراحل طراحی معماری', steps: [
        { label: 'تحلیل نیازها' }, { label: 'انتخاب تکنولوژی' }, { label: 'طراحی دیتابیس' },
        { label: 'طراحی API' }, { label: 'طراحی UI' }, { label: 'پیاده‌سازی' },
      ]}},
      { type: 'tabs', content: { tabs: [
        { label: 'MVC', content: [{ type: 'paragraph', content: 'Model-View-Controller: الگوی کلاسیک که داده، رابط کاربری و منطق را جدا می‌کند.' }] },
        { label: 'Clean Architecture', content: [{ type: 'paragraph', content: 'معماری تمیز: لایه‌بندی دقیق با جداسازی کامل وابستگی‌ها.' }] },
        { label: 'Feature-Based', content: [{ type: 'paragraph', content: 'معماری مبتنی بر فیچر: هر فیچر تمام لایه‌های خود را دارد.' }] },
      ]}},
      { type: 'info', content: { type: 'success', title: 'نکته مهم', content: 'همیشه قبل از شروع کدنویسی، از AI بخواهید معماری پروژه را طراحی کند. این کار ۱۰ برابر زمان توسعه را کاهش می‌دهد.' } },
    ]}},
    { id: 5, title: 'پروژه عملی: ساخت فروشگاه آنلاین', duration: '۱۲۰ دقیقه', difficulty: 'پیشرفته',  { title: 'پروژه عملی', subtitle: 'ساخت یک فروشگاه آنلاین کامل', blocks: [
      { type: 'paragraph', content: 'در این درس، مرحله به مرحله یک فروشگاه آنلاین کامل می‌سازیم.' },
      { type: 'info', content: { type: 'info', title: 'مشخصات پروژه', content: ['نام: شاپ‌لند', 'نوع: فروشگاه آنلاین', 'تکنولوژی: Next.js 14 + Tailwind', 'دیتابیس: PostgreSQL + Prisma', 'زمان: ۳-۵ روز'] } },
      { type: 'timeline', content: { title: 'مراحل پیاده‌سازی', steps: [
        { title: 'Setup و نصب', description: 'ایجاد پروژه Next.js و نصب پکیج‌ها' },
        { title: 'طراحی دیتابیس', description: 'تعریف مدل‌ها با Prisma' },
        { title: 'احراز هویت', description: 'پیاده‌سازی NextAuth.js' },
        { title: 'صفحات محصولات', description: 'لیست، فیلتر، جستجو' },
        { title: 'سبد خرید', description: 'Zustand store' },
        { title: 'پرداخت', description: 'اتصال به درگاه زرین‌پال' },
        { title: 'پنل مدیریت', description: 'مدیریت محصولات و سفارشات' },
        { title: 'دیپلوی', description: 'انتشار روی Vercel' },
      ]}},
      { type: 'info', content: { type: 'tip', title: 'نکته مهم', content: 'هرگز سعی نکنید کل پروژه را در یک پرامپت بسازید. پروژه‌های بزرگ را به مراحل کوچک تقسیم کنید.' } },
    ]}},
    { id: 6, title: 'دیباگ و عیب‌یابی با AI', duration: '۶۰ دقیقه', difficulty: 'متوسط',  { title: 'دیباگ با AI', subtitle: 'رفع خطاها و مشکلات', blocks: [
      { type: 'paragraph', content: 'حتی با وایب کدینگ هم ممکن است با خطا مواجه شوید. مهم این است که بدانید چگونه خطاها را به AI گزارش دهید.' },
      { type: 'code', content: { title: 'فرمت استاندارد گزارش باگ', language: 'text', code: `مشکل: [توضیح کوتاه]
مراحل بازتولید:
1. [مرحله اول]
2. [مرحله دوم]
نتیجه مورد انتظار: [...]
نتیجه واقعی: [...]
خطای کنسول: [...]
فایل مربوطه: [...]` } },
      { type: 'info', content: { type: 'warning', title: 'قانون طلایی', content: 'همیشه یک تغییر در یک زمان اعمال کنید.' } },
    ]}},
    { id: 7, title: 'بهینه‌سازی عملکرد', duration: '۶۰ دقیقه', difficulty: 'پیشرفته',  { title: 'بهینه‌سازی', subtitle: 'سرعت و عملکرد بهتر', blocks: [
      { type: 'stats', content: [
        { label: 'زمان لود ایده‌آل', value: '< ۳ ثانیه', color: 'from-purple-500/20 to-indigo-500/20' },
        { label: 'Lighthouse Score', value: '۹۰+', color: 'from-pink-500/20 to-rose-500/20' },
        { label: 'کاهش حجم', value: '۷۰٪', color: 'from-cyan-500/20 to-blue-500/20' },
        { label: 'Core Web Vitals', value: 'A', color: 'from-amber-500/20 to-orange-500/20' },
      ]},
      { type: 'checklist', content: { title: 'چک‌لیست بهینه‌سازی', items: [
        { text: 'Image optimization', checked: true },
        { text: 'Code splitting', checked: true },
        { text: 'Lazy loading', checked: false },
        { text: 'Caching', checked: false },
        { text: 'Minification', checked: true },
      ]}},
    ]}},
    { id: 8, title: 'دیپلوی و انتشار پروژه', duration: '۴۵ دقیقه', difficulty: 'متوسط',  { title: 'دیپلوی', subtitle: 'انتشار آنلاین پروژه', blocks: [
      { type: 'table', content: { title: 'پلتفرم‌های دیپلوی', headers: ['پلتفرم', 'بهترین برای', 'قیمت'], rows: [
        ['Vercel', 'Next.js', 'رایگان / $20'],
        ['Netlify', 'Frontend', 'رایگان / $19'],
        ['Railway', 'Full Stack', '$5 شروع'],
        ['لیارا', 'پروژه ایرانی', 'از ۵۰ هزار/ماه'],
      ]}},
      { type: 'timeline', content: { title: 'مراحل دیپلوی روی Vercel', steps: [
        { title: 'Push به GitHub', description: 'کد را در GitHub قرار دهید' },
        { title: 'اتصال به Vercel', description: 'پروژه جدید بسازید' },
        { title: 'Environment Variables', description: 'متغیرها را وارد کنید' },
        { title: 'Deploy', description: 'دکمه Deploy را بزنید' },
        { title: 'دامنه سفارشی', description: 'دامنه خود را اضافه کنید' },
      ]}},
    ]}},
    { id: 9, title: 'تست و کیفیت کد', duration: '۶۰ دقیقه', difficulty: 'متوسط',  { title: 'تست کیفیت', subtitle: 'تضمین کیفیت کد', blocks: [
      { type: 'list', content: { title: 'انواع تست', items: ['Unit Test', 'Integration Test', 'E2E Test', 'Performance Test'], style: 'disc' }},
      { type: 'table', content: { title: 'ابزارهای تست', headers: ['ابزار', 'نوع', 'یادگیری'], rows: [
        ['Jest', 'Unit', 'آسان'],
        ['React Testing Library', 'Component', 'متوسط'],
        ['Cypress', 'E2E', 'متوسط'],
      ]}},
    ]}},
    { id: 10, title: 'امنیت در وایب کدینگ', duration: '۶۰ دقیقه', difficulty: 'پیشرفته',  { title: 'امنیت', subtitle: 'محافظت از پروژه', blocks: [
      { type: 'list', content: { title: 'نکات امنیتی', items: ['احراز هویت قوی', 'ولیدیشن ورودی', 'محافظت XSS/CSRF', 'رمزنگاری داده', 'HTTPS', 'Rate Limiting'], style: 'disc' }},
      { type: 'info', content: { type: 'warning', title: 'اشتباهات رایج', content: ['ذخیره رمز به صورت plain text', 'عدم ولیدیشن ورودی', 'API keys در فرانت‌اند'] } },
    ]}},
    { id: 11, title: 'نسخه‌بندی با Git', duration: '۴۵ دقیقه', difficulty: 'مبتدی',  { title: 'Git و GitHub', subtitle: 'مدیریت نسخه‌ها', blocks: [
      { type: 'code', content: { title: 'دستورات پایه Git', language: 'bash', code: `git init
git add .
git commit -m "message"
git push
git pull
git branch feature-name
git checkout feature-name
git merge feature-name` } },
    ]}},
    { id: 12, title: 'کار با API‌ها', duration: '۷۵ دقیقه', difficulty: 'متوسط',  { title: 'API‌ها', subtitle: 'اتصال به سرویس‌های خارجی', blocks: [
      { type: 'code', content: { title: 'فراخوانی API', language: 'typescript', code: `async function getUsers() {
  const response = await fetch('https://api.example.com/users');
  const data = await response.json();
  return data;
}` } },
    ]}},
    { id: 13, title: 'پایگاه داده و ORM', duration: '۷۵ دقیقه', difficulty: 'متوسط',  { title: 'دیتابیس', subtitle: 'مدیریت داده‌ها', blocks: [
      { type: 'code', content: { title: 'Prisma Schema', language: 'prisma', code: `model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String?
}` } },
    ]}},
    { id: 14, title: 'کسب درآمد از وایب کدینگ', duration: '۶۰ دقیقه', difficulty: 'پیشرفته',  { title: 'کسب درآمد', subtitle: 'تبدیل مهارت به درآمد', blocks: [
      { type: 'table', content: { title: 'مدل‌های درآمدزایی', headers: ['مدل', 'درآمد ماهانه', 'زمان'], rows: [
        ['فریلنسری وب', '۵-۳۰ میلیون', '۱-۲ ماه'],
        ['فریلنسری وب‌اپ', '۱۰-۵۰ میلیون', '۲-۳ ماه'],
        ['محصول SaaS', '۵-۱۰۰ میلیون', '۳-۶ ماه'],
        ['فروش تمپلیت', '۲-۲۰ میلیون', '۱-۲ ماه'],
      ]}},
      { type: 'table', content: { title: 'جدول قیمت‌گذاری', headers: ['خدمت', 'قیمت متوسط'], rows: [
        ['لندینگ پیج', '۸ میلیون'],
        ['وب‌سایت شرکتی', '۱۵ میلیون'],
        ['فروشگاه آنلاین', '۲۵ میلیون'],
        ['وب‌اپلیکیشن', '۴۰ میلیون'],
      ]}},
      { type: 'timeline', content: { title: 'مسیر ۹۰ روزه', steps: [
        { title: 'ماه اول', description: 'یادگیری و ساخت ۳-۵ پروژه نمونه' },
        { title: 'ماه دوم', description: 'ساخت پورتفولیو و فعالیت در لینکدین' },
        { title: 'ماه سوم', description: 'گرفتن اولین مشتری' },
      ]}},
    ]}},
    { id: 15, title: 'مسیر رشد و یادگیری مداوم', duration: '۴۵ دقیقه', difficulty: 'همه سطوح',  { title: 'رشد مداوم', subtitle: 'همیشه در حال یادگیری', blocks: [
      { type: 'list', content: { title: 'منابع یادگیری', items: ['خبرنامه‌های AI', 'توییتر/X', 'Reddit', 'یوتیوب', 'پادکست', 'دوره‌های آنلاین'], style: 'disc' }},
      { type: 'quote', content: { text: 'تنها راه ahead ماندن در دنیای AI، یادگیری مداوم است.', author: 'آندری کارپاتی' } },
      { type: 'info', content: { type: 'success', title: 'اقدامات فوری', content: ['همین امروز شروع کنید', 'اولین نمونه‌کار را بسازید', 'لینکدین را به‌روز کنید', 'به ۵ نفر پیام بدهید'] } },
    ]}},
  ],
};

export default function VibeCoding() {
  return <LessonViewer course={vibeCodingCourse} />;
}
