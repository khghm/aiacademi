import { useState } from 'react';
import { Accordion, Tabs, CodeBlock, InfoCard, Timeline, ComparisonTable, FlowDiagram, ProgressBar, SectionHeading } from './ui';

const lessons = [
  {
    id: 1,
    title: 'وایب کدینگ چیست؟',
    duration: '۴۵ دقیقه',
    difficulty: 'مبتدی',
    content: 'intro',
  },
  {
    id: 2,
    title: 'ابزارهای وایب کدینگ',
    duration: '۶۰ دقیقه',
    difficulty: 'مبتدی',
    content: 'tools',
  },
  {
    id: 3,
    title: 'پرامپت‌نویسی حرفه‌ای',
    duration: '۹۰ دقیقه',
    difficulty: 'متوسط',
    content: 'prompting',
  },
  {
    id: 4,
    title: 'معماری پروژه با AI',
    duration: '۷۵ دقیقه',
    difficulty: 'متوسط',
    content: 'architecture',
  },
  {
    id: 5,
    title: 'پروژه عملی: ساخت فروشگاه آنلاین',
    duration: '۱۲۰ دقیقه',
    difficulty: 'پیشرفته',
    content: 'project',
  },
  {
    id: 6,
    title: 'دیباگ و بهینه‌سازی',
    duration: '۶۰ دقیقه',
    difficulty: 'متوسط',
    content: 'debug',
  },
  {
    id: 7,
    title: 'دیپلوی و انتشار پروژه',
    duration: '۴۵ دقیقه',
    difficulty: 'متوسط',
    content: 'deploy',
  },
  {
    id: 8,
    title: 'کسب درآمد از وایب کدینگ',
    duration: '۶۰ دقیقه',
    difficulty: 'پیشرفته',
    content: 'income',
  },
];

function LessonIntro() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">وایب کدینگ: انقلاب جدید در برنامه‌نویسی</h2>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        وایب کدینگ (Vibe Coding) مفهومی است که توسط آندری کارپاتی (Andrej Karpathy)، یکی از بنیان‌گذاران OpenAI، در فوریه ۲۰۲۵ مطرح شد. این مفهوم به روشی از برنامه‌نویسی اشاره دارد که در آن شما به جای نوشتن کد، با هوش مصنوعی به صورت طبیعی صحبت می‌کنید و او کد را برای شما می‌نویسد.
      </p>

      <InfoCard type="info" title="تعریف رسمی وایب کدینگ">
        وایب کدینگ یعنی شما ایده و نیاز خود را به زبان طبیعی برای AI توضیح می‌دهید و AI کد مربوطه را تولید می‌کند. شما فقط نتیجه را بررسی می‌کنید، فیدبک می‌دهید و AI اصلاح می‌کند. در این روش، شما بیشتر نقش «مدیر محصول» و «تست‌کننده» را دارید تا «برنامه‌نویس».
      </InfoCard>

      <ComparisonTable
        title="مقایسه وایب کدینگ با برنامه‌نویسی سنتی"
        headers={['ویژگی', 'برنامه‌نویسی سنتی', 'وایب کدینگ']}
        rows={[
          ['نیاز به دانش کدنویسی', 'بالا (حداقل ۶ ماه یادگیری)', 'تقریباً صفر'],
          ['سرعت توسعه', 'هفته‌ها تا ماه‌ها', 'ساعت‌ها تا چند روز'],
          ['هزینه', 'بالا (استخدام برنامه‌نویس)', 'بسیار پایین (اشتراک AI)'],
          ['نیاز به دیباگ', 'زیاد', 'حداقل'],
          ['خلاقیت', 'محدود به دانش فنی', 'نامحدود (فقط ایده مهم است)'],
          ['مقیاس‌پذیری', 'نیاز به تیم بزرگ', 'یک نفر کافی است'],
          ['زمان یادگیری', '۶-۱۲ ماه', '۱-۲ هفته'],
          ['هزینه نگهداری', 'بالا', 'پایین'],
        ]}
      />

      <FlowDiagram
        title="فرآیند وایب کدینگ"
        nodes={[
          { label: 'ایده', sublabel: 'چه می‌خواهید بسازید؟' },
          { label: 'توضیح به AI', sublabel: 'پرامپت بنویسید' },
          { label: 'تولید کد', sublabel: 'AI کد می‌نویسد' },
          { label: 'بررسی', sublabel: 'نتیجه را تست کنید' },
          { label: 'فیدبک', sublabel: 'اصلاحات را بگویید' },
          { label: 'تحویل', sublabel: 'پروژه آماده است' },
        ]}
      />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">اصول کلیدی وایب کدینگ</h3>

      <Accordion title="اصل اول: توضیح واضح (Clear Description)">
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          مهم‌ترین مهارت در وایب کدینگ، توانایی توضیح دادن چیزی است که می‌خواهید. هرچه دقیق‌تر توضیح دهید، نتیجه بهتری می‌گیرید. AI نمی‌تواند ذهن شما را بخواند، پس باید همه چیز را شفاف بیان کنید.
        </p>
        <CodeBlock title="مثال بد" language="text" code={`یه سایت فروشگاهی بساز`} />
        <CodeBlock title="مثال خوب" language="text" code={`یک وب‌سایت فروشگاهی برای فروش محصولات آرایشی بهداشتی بساز که شامل:
- صفحه اصلی با اسلایدر محصولات ویژه
- صفحه دسته‌بندی محصولات (پوست، مو، آرایش، عطر)
- صفحه جزئیات محصول با امکان انتخاب رنگ و سایز
- سبد خرید با محاسبه خودکار هزینه ارسال
- صفحه پرداخت با درگاه زرین‌پال
- پنل کاربری (تاریخچه سفارشات، آدرس‌ها)
- پنل مدیریت (محصولات، سفارشات، کاربران)

طراحی: مینیمال با رنگ‌های صورتی و سفید
تکنولوژی: Next.js + Tailwind CSS
ریسپانسیو برای موبایل و تبلت`} />
      </Accordion>

      <Accordion title="اصل دوم: تکرار و بهبود (Iteration)">
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          هیچ پروژه‌ای در اولین تلاش کامل نمی‌شود. باید با AI گفتگو کنید و مرحله به مرحله پروژه را بهبود دهید. هر بار یک بخش کوچک را اصلاح کنید تا به نتیجه دلخواه برسید.
        </p>
        <CodeBlock title="فرآیند تکرار" language="text" code={`مرحله ۱: "ساختار کلی صفحه اصلی را بساز"
مرحله ۲: "هدر را با منوی ناوبری اضافه کن"
مرحله ۳: "بخش Hero با تصویر و عنوان جذاب اضافه کن"
مرحله ۴: "رنگ‌بندی را به صورتی و سفید تغییر بده"
مرحله ۵: "انیمیشن fade-in برای المان‌ها اضافه کن"
مرحله ۶: "ریسپانسیو کن برای موبایل"
مرحله ۷: "سرعت لود را بهینه کن"`} />
      </Accordion>

      <Accordion title="اصل سوم: تست مداوم (Continuous Testing)">
        <p className="text-gray-300 text-sm leading-relaxed">
          بعد از هر تغییر، نتیجه را بررسی کنید و اگر مشکلی بود، به AI بگویید. هرگز چندین تغییر را همزمان اعمال نکنید. یک تغییر بدهید، تست کنید، و سپس تغییر بعدی را اعمال کنید.
        </p>
      </Accordion>

      <InfoCard type="tip" title="نکته طلایی">
        بهترین وایب کدرها کسانی نیستند که بهترین پرامپت‌ها را می‌نویسند، بلکه کسانی هستند که بهترین فیدبک‌ها را می‌دهند. توانایی شما در تشخیص مشکل و بیان دقیق آن، تفاوت بین یک نتیجه متوسط و عالی است.
      </InfoCard>
    </div>
  );
}

function LessonTools() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">ابزارهای اصلی وایب کدینگ</h2>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        ابزارهای وایب کدینگ به چند دسته اصلی تقسیم می‌شوند. هر کدام برای نوع خاصی از پروژه مناسب هستند. شناخت این ابزارها و دانستن اینکه هر کدام برای چه کاری بهینه شده‌اند، اولین قدم برای موفقیت در وایب کدینگ است.
      </p>

      <Tabs tabs={[
        {
          label: 'Cursor IDE',
          content: (
            <div>
              <h4 className="font-bold text-white mb-2">Cursor - بهترین IDE برای وایب کدینگ حرفه‌ای</h4>
              <p className="text-gray-300 text-sm mb-4">Cursor یک ویرایشگر کد مبتنی بر VS Code است که به صورت عمیق با AI یکپارچه شده. این ابزار در حال حاضر محبوب‌ترین IDE بین وایب کدرها است.</p>
              <ComparisonTable
                headers={['ویژگی', 'توضیح', 'اهمیت']}
                rows={[
                  ['Tab Completion', 'تکمیل هوشمند کد با یک کلید', 'بالا'],
                  ['Ctrl+K (Edit)', 'ویرایش کد با دستور طبیعی', 'بالا'],
                  ['Chat (Ctrl+L)', 'گفتگو درباره پروژه', 'بالا'],
                  ['Codebase Awareness', 'درک کل پروژه و فایل‌ها', 'حیاتی'],
                  ['Multi-file Edit', 'ویرایش همزمان چند فایل', 'بالا'],
                  ['@-mentions', 'ارجاع به فایل‌ها و نمادها', 'متوسط'],
                  ['Terminal Integration', 'اجرای دستورات در ترمینال', 'متوسط'],
                ]}
              />
              <CodeBlock title="نحوه شروع کار با Cursor" language="text" code={`۱. از cursor.com دانلود و نصب کنید
۲. پروژه خود را باز کنید (File > Open Folder)
۳. با Ctrl+L چت AI را باز کنید
۴. پروژه خود را توضیح دهید:
   "من می‌خواهم یک API برای مدیریت تسک‌ها بسازم با Express و MongoDB"
۵. AI فایل‌ها را ایجاد می‌کند
۶. با Ctrl+K بخش‌های خاصی را ویرایش کنید
۷. در ترمینال داخلی اجرا و تست کنید`} />
            </div>
          ),
        },
        {
          label: 'Bolt.new',
          content: (
            <div>
              <h4 className="font-bold text-white mb-2">Bolt.new - ساخت سریع وب‌اپلیکیشن در مرورگر</h4>
              <p className="text-gray-300 text-sm mb-4">Bolt.new به شما اجازه می‌دهد بدون نصب هیچ چیزی، مستقیماً در مرورگر وب‌اپلیکیشن بسازید. مناسب برای MVP و پروتوتایپ سریع.</p>
              <ComparisonTable
                headers={['ویژگی', 'توضیح']}
                rows={[
                  ['بدون نیاز به نصب', 'مستقیم در مرورگر کار می‌کند'],
                  ['پیش‌نمایش زنده', 'تغییرات را لحظه‌ای می‌بینید'],
                  ['دیپلوی با یک کلیک', 'انتشار روی Netlify/Vercel'],
                  ['Full Stack', 'فرانت‌اند + بک‌اند + دیتابیس'],
                  ['رایگان برای شروع', '۲۰۰۰ توکن رایگان روزانه'],
                ]}
              />
              <InfoCard type="tip" title="بهترین زمان استفاده از Bolt">
                وقتی می‌خواهید سریعاً یک ایده را تست کنید، بدون درگیر شدن با نصب و راه‌اندازی. مناسب برای دمو، پروتوتایپ، و پروژه‌های کوچک تا متوسط.
              </InfoCard>
            </div>
          ),
        },
        {
          label: 'v0 by Vercel',
          content: (
            <div>
              <h4 className="font-bold text-white mb-2">v0 - متخصص ساخت رابط کاربری</h4>
              <p className="text-gray-300 text-sm mb-4">v0 توسط Vercel ساخته شده و تخصص آن ساخت UI با React و Tailwind CSS است. کافیست توضیح دهید چه UI می‌خواهید.</p>
              <CodeBlock title="مثال پرامپت v0" language="text" code={`یک داشبورد مدیریت بساز با:
- سایدبار با آیکون‌ها و منوی collapsible
- هدر با جستجو و نوتیفیکیشن
- ۴ کارت آماری (کاربران، فروش، بازدید، درآمد)
- جدول کاربران با sort و pagination
- نمودار خطی فروش ماهانه
- تم تیره با رنگ‌های بنفش و آبی
- کاملاً ریسپانسیو`} />
            </div>
          ),
        },
        {
          label: 'Replit Agent',
          content: (
            <div>
              <h4 className="font-bold text-white mb-2">Replit Agent - ساخت پروژه‌های کامل</h4>
              <p className="text-gray-300 text-sm mb-4">Replit Agent می‌تواند یک پروژه کامل را از صفر بسازد، شامل بک‌اند، فرانت‌اند، دیتابیس و دیپلوی. مناسب برای پروژه‌های Full Stack.</p>
              <ComparisonTable
                headers={['ویژگی', 'توضیح', 'قیمت']}
                rows={[
                  ['AI Agent', 'خودکار پروژه می‌سازد', 'شامل Core'],
                  ['Collaborative', 'تیم‌ورک آنلاین', 'رایگان'],
                  ['Database', 'PostgreSQL داخلی', 'شامل Core'],
                  ['Deploy', 'انتشار خودکار', 'شامل Core'],
                  ['Secrets', 'مدیریت متغیرهای محیطی', 'رایگان'],
                ]}
              />
            </div>
          ),
        },
        {
          label: 'Lovable',
          content: (
            <div>
              <h4 className="font-bold text-white mb-2">Lovable (GPT Engineer) - تبدیل ایده به محصول</h4>
              <p className="text-gray-300 text-sm mb-4">Lovable می‌تواند ایده شما را به یک محصول کامل تبدیل کند. مناسب برای MVP و پروتوتایپ سریع. با Supabase یکپارچه است.</p>
              <InfoCard type="info" title="تفاوت Lovable با Bolt">
                Lovable بیشتر روی طراحی بصری و UX تمرکز دارد و خروجی‌های زیباتری تولید می‌کند. Bolt بیشتر روی عملکرد و سرعت تمرکز دارد. هر دو عالی هستند، انتخاب بستگی به اولویت شما دارد.
              </InfoCard>
            </div>
          ),
        },
      ]} />

      <ComparisonTable
        title="مقایسه کلی ابزارها"
        headers={['ابزار', 'بهترین برای', 'قیمت', 'سطح', 'امتیاز']}
        rows={[
          ['Cursor', 'پروژه‌های حرفه‌ای', '$20/ماه', 'متوسط-پیشرفته', '۹.۵/۱۰'],
          ['Bolt.new', 'وب‌اپ سریع', 'رایگان/$20', 'مبتدی-متوسط', '۸.۵/۱۰'],
          ['v0', 'UI/UX', 'رایگان/$20', 'مبتدی-متوسط', '۸/۱۰'],
          ['Replit', 'پروژه کامل', 'رایگان/$25', 'همه سطوح', '۸/۱۰'],
          ['Lovable', 'MVP', 'رایگان/$20', 'مبتدی-متوسط', '۸.۵/۱۰'],
        ]}
      />
    </div>
  );
}

function LessonPrompting() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">هنر پرامپت‌نویسی برای وایب کدینگ</h2>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        پرامپت‌نویسی مهم‌ترین مهارت شما در وایب کدینگ است. یک پرامپت خوب می‌تواند تفاوت بین یک پروژه موفق و شکست‌خورده باشد. در این درس، فرمول‌ها و تکنیک‌های حرفه‌ای پرامپت‌نویسی را یاد می‌گیرید.
      </p>

      <InfoCard type="tip" title="فرمول CRAFT برای پرامپت حرفه‌ای">
        <div className="space-y-2">
          <p><strong className="text-purple-300">C - Context (زمینه):</strong> پروژه درباره چیست؟ پس‌زمینه را توضیح دهید.</p>
          <p><strong className="text-pink-300">R - Role (نقش):</strong> AI در چه نقشی عمل کند؟ (توسعه‌دهنده ارشد، طراح UI، ...)</p>
          <p><strong className="text-cyan-300">A - Action (عمل):</strong> دقیقاً چه کاری انجام دهد؟</p>
          <p><strong className="text-amber-300">F - Format (فرمت):</strong> خروجی چگونه باشد؟ (ساختار، تکنولوژی، ...)</p>
          <p><strong className="text-emerald-300">T - Tone (لحن):</strong> سبک کار چگونه باشد؟ (مدرن، مینیمال، ...)</p>
        </div>
      </InfoCard>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">مثال‌های عملی پرامپت</h3>

      <Accordion title="پرامپت ساخت لندینگ پیج">
        <CodeBlock title="پرامپت کامل" language="text" code={`[Context] من یک استارتاپ آموزش آنلاین دارم که دوره‌های برنامه‌نویسی ارائه می‌دهد.

[Role] تو یک توسعه‌دهنده فرانت‌اند ارشد با ۱۰ سال تجربه هستی.

[Action] یک لندینگ پیج حرفه‌ای بساز با بخش‌های زیر:
  1. Hero section:
     - عنوان اصلی: "یادگیری برنامه‌نویسی از صفر تا استخدام"
     - زیرعنوان توضیحی
     - دکمه CTA: "شروع رایگان"
     - تصویر/انیمیشن مرتبط
  2. بخش آمار (۴ عدد):
     - +۵۰۰۰ دانشجو
     - +۲۰۰ دوره
     - ۹۵٪ رضایت
     - +۵۰ مدرس
  3. بخش ویژگی‌ها (۶ مورد) با آیکون:
     - آموزش پروژه‌محور
     - پشتیبانی ۲۴/۷
     - مدرک معتبر
     - دسترسی مادام‌العمر
     - جامعه فعال
     - تضمین استخدام
  4. بخش نظرات دانشجویان (اسلایدر ۳ نظر)
  5. بخش قیمت‌گذاری (۳ پلن: رایگان، حرفه‌ای، سازمانی)
  6. بخش سوالات متداول (آکاردئون)
  7. فوتر کامل با لینک‌ها و شبکه‌های اجتماعی

[Format] React + Tailwind CSS، ریسپانسیو، RTL (فارسی)
[Tone] مدرن، حرفه‌ای، با انیمیشن‌های ظریف و رنگ‌بندی بنفش-آبی`} />
      </Accordion>

      <Accordion title="پرامپت ساخت REST API">
        <CodeBlock title="پرامپت کامل" language="text" code={`یک REST API با Node.js و Express بساز برای سیستم رزرو نوبت مطب پزشک.

مدل‌های دیتابیس:
- Doctor: نام، تخصص، شماره نظام، بیوگرافی، تصویر، شماره تماس
- Patient: نام، موبایل، کد ملی، تاریخ تولد، آدرس
- Appointment: doctor_id, patient_id, date, time, status (pending/confirmed/cancelled)
- TimeSlot: doctor_id, date, start_time, end_time, is_available

اندپوینت‌ها:
- GET /api/doctors - لیست پزشکان با فیلتر تخصص و جستجوی نام
- GET /api/doctors/:id - جزئیات پزشک
- GET /api/doctors/:id/slots?date=YYYY-MM-DD - ساعات خالی
- POST /api/appointments - رزرو نوبت (با بررسی تداخل)
- GET /api/appointments/:id - جزئیات نوبت
- PUT /api/appointments/:id/cancel - لغو نوبت
- POST /api/auth/register - ثبت‌نام
- POST /api/auth/login - ورود

الزامات فنی:
- احراز هویت JWT (access + refresh token)
- ولیدیشن ورودی با Joi
- ساختار لایه‌ای (controller/service/repository)
- Error handling استاندارد با custom error classes
- Rate limiting
- Swagger documentation
- Pagination و sorting
- Response استاندارد: { success, data, message, pagination }`} />
      </Accordion>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">تکنیک‌های پیشرفته پرامپت‌نویسی</h3>

      <Timeline steps={[
        { title: 'Chain of Thought (زنجیره فکری)', description: 'از AI بخواهید مرحله به مرحله فکر کند. مثلاً: "قبل از نوشتن کد، ابتدا معماری سیستم را توضیح بده، سپس ماژول‌ها را مشخص کن، و در نهایت کد هر ماژول را بنویس."', detail: 'این تکنیک برای پروژه‌های پیچیده بسیار مؤثر است.' },
        { title: 'Few-Shot Prompting', description: 'یک یا چند مثال بدهید تا AI الگو را بفهمد. مثلاً سبک کامپوننت‌های قبلی خود را نشان دهید و بخواهید مشابه آن بسازد.', detail: 'بسیار مفید برای حفظ یکپارچگی سبک کد.' },
        { title: 'Iterative Refinement', description: 'پروژه را مرحله به مرحله بسازید. هر بار یک بخش کوچک اضافه یا اصلاح کنید.', detail: 'بهترین روش برای پروژه‌های بزرگ.' },
        { title: 'Role Playing', description: 'به AI نقش بدهید: "تو یک توسعه‌دهنده ارشد با ۱۰ سال تجربه React هستی". این کار کیفیت خروجی را بالا می‌برد.', detail: 'مخصوصاً برای کدهای حرفه‌ای مؤثر است.' },
        { title: 'Constraint Setting', description: 'محدودیت‌ها را مشخص کنید: "حداکثر ۳ فایل"، "بدون dependency اضافی"، "فقط از Tailwind استفاده کن".', detail: 'جلوگیری از پیچیدگی اضافی.' },
      ]} />

      <InfoCard type="warning" title="اشتباهات رایج در پرامپت‌نویسی">
        <ul className="space-y-2 list-disc list-inside">
          <li>پرامپت خیلی کلی: "یه سایت بساز" - AI نمی‌داند چه نوع سایتی</li>
          <li>پرامپت خیلی بلند بدون ساختار: همه چیز را در یک پاراگراف بنویسید</li>
          <li>عدم ذکر تکنولوژی: AI ممکن است از کتابخانه‌ای استفاده کند که شما نمی‌خواهید</li>
          <li>فراموش کردن RTL: برای پروژه‌های فارسی حتماً ذکر کنید</li>
          <li>عدم تعیین سطح جزئیات: مشخص کنید چه بخش‌هایی دقیق و چه بخش‌هایی کلی باشند</li>
        </ul>
      </InfoCard>
    </div>
  );
}

function LessonArchitecture() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">معماری پروژه با AI</h2>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        قبل از شروع کدنویسی، باید معماری پروژه را مشخص کنید. یک معماری خوب باعث می‌شود پروژه قابل نگهداری، مقیاس‌پذیر و حرفه‌ای باشد. در این درس یاد می‌گیرید چگونه معماری پروژه را با کمک AI طراحی کنید.
      </p>

      <FlowDiagram
        title="مراحل طراحی معماری"
        nodes={[
          { label: 'تحلیل نیازها', sublabel: 'چه چیزی لازم است؟' },
          { label: 'انتخاب تکنولوژی', sublabel: 'با چه ابزاری؟' },
          { label: 'طراحی دیتابیس', sublabel: 'ساختار داده‌ها' },
          { label: 'طراحی API', sublabel: 'اندپوینت‌ها' },
          { label: 'طراحی UI', sublabel: 'صفحات و کامپوننت‌ها' },
          { label: 'شروع پیاده‌سازی', sublabel: 'کدنویسی' },
        ]}
      />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">الگوهای معماری رایج</h3>

      <Tabs tabs={[
        {
          label: 'MVC',
          content: (
            <div>
              <p className="text-gray-300 text-sm mb-3">Model-View-Controller: الگوی کلاسیک که داده، رابط کاربری و منطق را جدا می‌کند.</p>
              <CodeBlock title="ساختار پوشه MVC" language="text" code={`src/
├── models/          # تعریف مدل‌های داده
│   ├── user.model.js
│   └── product.model.js
├── views/           # کامپوننت‌های UI (فرانت‌اند)
│   ├── pages/
│   └── components/
├── controllers/     # منطق کنترل درخواست‌ها
│   ├── user.controller.js
│   └── product.controller.js
├── services/        # منطق تجاری
│   ├── user.service.js
│   └── product.service.js
├── routes/          # تعریف مسیرها
│   ├── user.routes.js
│   └── product.routes.js
├── middleware/       # middleware‌ها
│   ├── auth.middleware.js
│   └── validation.middleware.js
└── utils/           # توابع کمکی`} />
            </div>
          ),
        },
        {
          label: 'Clean Architecture',
          content: (
            <div>
              <p className="text-gray-300 text-sm mb-3">معماری تمیز: لایه‌بندی دقیق با جداسازی کامل وابستگی‌ها.</p>
              <CodeBlock title="ساختار Clean Architecture" language="text" code={`src/
├── domain/          # هسته business logic
│   ├── entities/    # موجودات اصلی
│   ├── usecases/    # موارد استفاده
│   └── interfaces/  # interface‌ها
├── application/     # لایه اپلیکیشن
│   ├── services/
│   └── dtos/
├── infrastructure/  # لایه زیرساخت
│   ├── database/
│   ├── external/
│   └── config/
├── presentation/    # لایه ارائه
│   ├── controllers/
│   ├── routes/
│   └── middleware/
└── shared/          # موارد مشترک
    ├── utils/
    └── types/`} />
            </div>
          ),
        },
        {
          label: 'Feature-Based',
          content: (
            <div>
              <p className="text-gray-300 text-sm mb-3">معماری مبتنی بر فیچر: هر فیچر تمام لایه‌های خود را دارد.</p>
              <CodeBlock title="ساختار Feature-Based" language="text" code={`src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   └── cart/
│       ├── components/
│       ├── hooks/
│       ├── store/
│       ├── types/
│       └── index.ts
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── app/
    ├── routes.tsx
    └── layout.tsx`} />
            </div>
          ),
        },
      ]} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">پرامپت طراحی معماری</h3>
      <CodeBlock title="پرامپت طراحی معماری پروژه" language="text" code={`من می‌خواهم یک پلتفرم آموزش آنلاین بسازم.

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
6. مراحل پیاده‌سازی را مرحله به مرحله بنویس`} />

      <InfoCard type="success" title="نکته مهم">
        همیشه قبل از شروع کدنویسی، از AI بخواهید معماری پروژه را طراحی کند. این کار ۱۰ برابر زمان توسعه را کاهش می‌دهد و از دوباره‌کاری جلوگیری می‌کند.
      </InfoCard>
    </div>
  );
}

function LessonProject() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">پروژه عملی: ساخت فروشگاه آنلاین کامل</h2>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        در این درس، مرحله به مرحله یک فروشگاه آنلاین کامل می‌سازیم. این پروژه تمام مفاهیم وایب کدینگ را پوشش می‌دهد و می‌توانید آن را به عنوان نمونه‌کار در پورتفولیوی خود قرار دهید.
      </p>

      <InfoCard type="info" title="مشخصات پروژه">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><strong className="text-purple-300">نام:</strong> شاپ‌لند</div>
          <div><strong className="text-purple-300">نوع:</strong> فروشگاه آنلاین</div>
          <div><strong className="text-purple-300">تکنولوژی:</strong> Next.js 14 + Tailwind</div>
          <div><strong className="text-purple-300">دیتابیس:</strong> PostgreSQL + Prisma</div>
          <div><strong className="text-purple-300">زمان تقریبی:</strong> ۳-۵ روز</div>
          <div><strong className="text-purple-300">سطح:</strong> پیشرفته</div>
        </div>
      </InfoCard>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">مراحل پیاده‌سازی</h3>

      <Timeline steps={[
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
      ]} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">پرامپت مرحله اول: Setup</h3>
      <CodeBlock title="Setup پروژه" language="text" code={`یک پروژه Next.js 14 با App Router بساز.

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
│   ├── ui/          # کامپوننت‌های پایه (Button, Input, ...)
│   ├── layout/      # Header, Footer, Sidebar
│   └── features/    # کامپوننت‌های فیچرها
├── lib/             # تنظیمات و utilities
├── prisma/          # schema و migrations
├── store/           # Zustand stores
├── types/           # TypeScript types
└── styles/          # استایل‌های global

Environment variables:
- DATABASE_URL
- NEXTAUTH_SECRET
- NEXTAUTH_URL
- ZARINPAL_MERCHANT_ID`} />

      <InfoCard type="tip" title="نکته مهم در پروژه‌های بزرگ">
        هرگز سعی نکنید کل پروژه را در یک پرامپت بسازید. پروژه‌های بزرگ را به مراحل کوچک تقسیم کنید و هر مرحله را جداگانه با AI پیاده‌سازی کنید. بعد از هر مرحله، پروژه را تست کنید.
      </InfoCard>
    </div>
  );
}

function LessonDebug() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">دیباگ و بهینه‌سازی با AI</h2>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        حتی با وایب کدینگ هم ممکن است با خطا مواجه شوید. مهم این است که بدانید چگونه خطاها را به AI گزارش دهید و از آن کمک بگیرید.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">الگوی گزارش خطا به AI</h3>
      <CodeBlock title="فرمت استاندارد گزارش باگ" language="text" code={`مشکل: [توضیح کوتاه مشکل]

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
- سیستم عامل: [نسخه]
- هر اطلاعات دیگری که ممکن است مرتبط باشد`} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">تکنیک‌های بهینه‌سازی</h3>
      <Accordion title="بهینه‌سازی سرعت لود">
        <CodeBlock title="پرامپت بهینه‌سازی" language="text" code={`این وب‌سایت من کند لود می‌شود. لطفاً:
1. با Lighthouse تحلیل کن
2. مشکلات Performance را شناسایی کن
3. راه‌حل‌های عملی پیشنهاد بده:
   - Image optimization
   - Code splitting
   - Lazy loading
   - Caching strategy
   - Bundle size reduction
4. کد بهینه‌شده را بنویس

هدف: Lighthouse score بالای ۹۰`} />
      </Accordion>

      <Accordion title="بهینه‌سازی SEO">
        <CodeBlock title="پرامپت SEO" language="text" code={`سئوی این صفحه را بررسی و بهینه کن:
1. Meta tags (title, description, OG)
2. Heading structure (H1-H6)
3. Image alt texts
4. Internal linking
5. Schema markup (JSON-LD)
6. Core Web Vitals
7. Mobile responsiveness
8. URL structure

برای هر مورد، کد بهینه را بنویس.`} />
      </Accordion>

      <InfoCard type="warning" title="قانون طلایی دیباگ">
        همیشه یک تغییر در یک زمان اعمال کنید. اگر چندین تغییر همزمان اعمال کنید و مشکلی پیش بیاید، نمی‌دانید کدام تغییر باعث مشکل شده است.
      </InfoCard>
    </div>
  );
}

function LessonDeploy() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">دیپلوی و انتشار پروژه</h2>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        بعد از تکمیل پروژه، باید آن را آنلاین کنید تا دیگران بتوانند از آن استفاده کنند. در این درس، بهترین روش‌های دیپلوی را یاد می‌گیرید.
      </p>

      <ComparisonTable
        title="پلتفرم‌های دیپلوی"
        headers={['پلتفرم', 'بهترین برای', 'قیمت', 'سرعت', 'سادگی']}
        rows={[
          ['Vercel', 'Next.js / Frontend', 'رایگان / $20', 'عالی', 'بسیار آسان'],
          ['Netlify', 'Frontend / Jamstack', 'رایگان / $19', 'عالی', 'بسیار آسان'],
          ['Railway', 'Full Stack / Backend', '$5 شروع', 'خوب', 'آسان'],
          ['Supabase', 'Database / Auth', 'رایگان / $25', 'خوب', 'متوسط'],
          ['AWS', 'Enterprise', 'Pay as you go', 'عالی', 'پیچیده'],
          ['لیارا (ایرانی)', 'پروژه‌های ایرانی', 'از ۵۰ هزار/ماه', 'خوب', 'آسان'],
        ]}
      />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">مراحل دیپلوی روی Vercel</h3>
      <Timeline steps={[
        { title: 'Push به GitHub', description: 'کد را در یک repository در GitHub قرار دهید.', detail: 'git init && git add . && git commit -m "initial" && git push' },
        { title: 'اتصال به Vercel', description: 'در vercel.com با GitHub لاگین کنید و پروژه جدید بسازید.', detail: 'Import Git Repository را بزنید و repo خود را انتخاب کنید.' },
        { title: 'تنظیم Environment Variables', description: 'متغیرهای محیطی را در Settings > Environment Variables وارد کنید.', detail: 'DATABASE_URL, NEXTAUTH_SECRET, و سایر متغیرها' },
        { title: 'تنظیمات Build', description: 'Framework Preset را Next.js انتخاب کنید.', detail: 'معمولاً Vercel خودکار تشخیص می‌دهد.' },
        { title: 'Deploy', description: 'دکمه Deploy را بزنید و منتظر بمانید.', detail: 'معمولاً ۱-۳ دقیقه طول می‌کشد.' },
        { title: 'دامنه سفارشی', description: 'دامنه خود را در Settings > Domains اضافه کنید.', detail: 'DNS records را طبق راهنما تنظیم کنید.' },
      ]} />

      <CodeBlock title="تنظیمات vercel.json" language="json" code={`{
  "buildCommand": "prisma generate && next build",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["fra1"],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-store" }
      ]
    }
  ]
}`} />
    </div>
  );
}

function LessonIncome() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">کسب درآمد از وایب کدینگ</h2>
      
      <p className="text-gray-300 leading-relaxed mb-6">
        وایب کدینگ یکی از سریع‌ترین مسیرها برای کسب درآمد در حوزه AI است. در این درس، مدل‌های درآمدزایی و قیمت‌گذاری را یاد می‌گیرید.
      </p>

      <ComparisonTable
        title="مدل‌های درآمدزایی"
        headers={['مدل', 'درآمد ماهانه', 'زمان رسیدن', 'سختی']}
        rows={[
          ['فریلنسری وب‌سایت', '۵-۳۰ میلیون', '۱-۲ ماه', 'متوسط'],
          ['فریلنسری وب‌اپ', '۱۰-۵۰ میلیون', '۲-۳ ماه', 'بالا'],
          ['ساخت محصول SaaS', '۵-۱۰۰ میلیون', '۳-۶ ماه', 'بالا'],
          ['فروش تمپلیت', '۲-۲۰ میلیون', '۱-۲ ماه', 'پایین'],
          ['آموزش وایب کدینگ', '۵-۵۰ میلیون', '۲-۴ ماه', 'متوسط'],
          ['مشاوره AI', '۱۰-۱۰۰ میلیون', '۶+ ماه', 'بالا'],
        ]}
      />

      <ComparisonTable
        title="جدول قیمت‌گذاری خدمات"
        headers={['خدمت', 'قیمت حداقل', 'قیمت متوسط', 'قیمت حرفه‌ای']}
        rows={[
          ['لندینگ پیج', '۳ میلیون', '۸ میلیون', '۲۰ میلیون'],
          ['وب‌سایت شرکتی', '۵ میلیون', '۱۵ میلیون', '۴۰ میلیون'],
          ['فروشگاه آنلاین', '۱۰ میلیون', '۲۵ میلیون', '۶۰ میلیون'],
          ['وب‌اپلیکیشن', '۱۵ میلیون', '۴۰ میلیون', '۱۰۰ میلیون'],
          ['API بک‌اند', '۵ میلیون', '۱۵ میلیون', '۴۰ میلیون'],
          ['بات تلگرام', '۳ میلیون', '۸ میلیون', '۲۰ میلیون'],
          ['داشبورد مدیریت', '۸ میلیون', '۲۰ میلیون', '۵۰ میلیون'],
        ]}
      />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">مسیر پیشنهادی ۹۰ روزه</h3>
      <Timeline steps={[
        { title: 'ماه اول: یادگیری و تمرین', description: 'وایب کدینگ را یاد بگیرید و ۳-۵ پروژه نمونه بسازید.', detail: 'روزانه ۲-۳ ساعت تمرین کنید.' },
        { title: 'ماه دوم: ساخت پورتفولیو', description: 'نمونه‌کارها را در یک سایت شخصی قرار دهید. در لینکدین فعال شوید.', detail: 'هر روز یک پست لینکدین بگذارید.' },
        { title: 'ماه سوم: گرفتن اولین مشتری', description: 'در سایت‌های فریلنسری ثبت‌نام کنید و پیشنهاد ارسال کنید.', detail: 'روزی ۵ پیشنهاد ارسال کنید. اولین پروژه را با قیمت مناسب بگیرید.' },
      ]} />

      <InfoCard type="success" title="نکته کلیدی">
        مهم‌ترین چیز در کسب درآمد از وایب کدینگ، شروع کردن است. منتظر کامل شدن نباشید. با هر سطحی که دارید شروع کنید و در مسیر بهتر شوید. اولین پروژه شما قرار نیست عالی باشد، اما باید شروعی باشد برای بهتر شدن.
      </InfoCard>
    </div>
  );
}

const lessonComponents: Record<string, React.FC> = {
  intro: LessonIntro,
  tools: LessonTools,
  prompting: LessonPrompting,
  architecture: LessonArchitecture,
  project: LessonProject,
  debug: LessonDebug,
  deploy: LessonDeploy,
  income: LessonIncome,
};

export default function VibeCoding() {
  const [activeLesson, setActiveLesson] = useState(0);
  const ActiveComponent = lessonComponents[lessons[activeLesson].content];

  const difficultyColors: Record<string, string> = {
    'مبتدی': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'متوسط': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'پیشرفته': 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="وایب کدینگ با AI"
          subtitle="بدون نوشتن حتی یک خط کد، اپلیکیشن‌ها و وب‌سایت‌های حرفه‌ای بسازید"
          badge="۸ درس | ۲۰ ساعت آموزش"
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-purple-300">سرفصل‌های دوره</h3>
                <span className="text-xs text-gray-500">{activeLesson + 1}/{lessons.length}</span>
              </div>
              
              {/* Overall Progress */}
              <div className="mb-4">
                <ProgressBar value={activeLesson + 1} max={lessons.length} label="پیشرفت دوره" color="purple" />
              </div>

              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pl-1">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-3 py-3 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 ${
                      activeLesson === index
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : index < activeLesson
                        ? 'text-gray-300 hover:bg-white/5 border border-transparent'
                        : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {/* Status indicator */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeLesson === index
                        ? 'bg-purple-500 text-white'
                        : index < activeLesson
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-white/5 text-gray-500'
                    }`}>
                      {index < activeLesson ? (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{lesson.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{lesson.duration}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded border ${difficultyColors[lesson.difficulty]}`}>{lesson.difficulty}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="glass-card p-6 sm:p-8">
              <ActiveComponent />
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                disabled={activeLesson === 0}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                درس قبلی
              </button>
              <button
                onClick={() => setActiveLesson(Math.min(lessons.length - 1, activeLesson + 1))}
                disabled={activeLesson === lessons.length - 1}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                درس بعدی
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
