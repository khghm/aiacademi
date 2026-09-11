import { useState } from 'react';

const lessons = [
  {
    id: 1,
    title: 'وایب کدینگ چیست؟ 🤔',
    content: `
## وایب کدینگ: انقلاب جدید در برنامه‌نویسی 🚀

وایب کدینگ (Vibe Coding) یک مفهوم جدید است که توسط آندری کارپاتی (Andrej Karpathy) در فوریه ۲۰۲۵ مطرح شد. این مفهوم به روشی از برنامه‌نویسی اشاره دارد که در آن شما به جای نوشتن کد، با هوش مصنوعی به صورت طبیعی صحبت می‌کنید و او کد را برای شما می‌نویسد.

### تفاوت وایب کدینگ با برنامه‌نویسی سنتی:

| ویژگی | برنامه‌نویسی سنتی | وایب کدینگ |
|--------|-------------------|-------------|
| نیاز به دانش کدنویسی | بالا | تقریباً صفر |
| سرعت توسعه | هفته‌ها | ساعت‌ها |
| هزینه | بالا | بسیار پایین |
| نیاز به دیباگ | زیاد | حداقل |
| خلاقیت | محدود به دانش | نامحدود |

### اصول کلیدی وایب کدینگ:

**۱. توضیح واضح (Clear Description) 📝**
مهم‌ترین مهارت در وایب کدینگ، توانایی توضیح دادن چیزی است که می‌خواهید. هرچه دقیق‌تر توضیح دهید، نتیجه بهتری می‌گیرید.

**مثال بد:**
"یه سایت فروشگاهی بساز"

**مثال خوب:**
"یک وب‌سایت فروشگاهی برای فروش محصولات آرایشی بهداشتی بساز که شامل: صفحه اصلی با اسلایدر محصولات ویژه، صفحه دسته‌بندی محصولات، صفحه جزئیات محصول با امکان انتخاب رنگ و سایز، سبد خرید، و صفحه پرداخت باشد. طراحی مینیمال با رنگ‌های صورتی و سفید باشد."

**۲. تکرار و بهبود (Iteration) 🔄**
هیچ پروژه‌ای در اولین تلاش کامل نمی‌شود. باید با AI گفتگو کنید و مرحله به مرحله پروژه را بهبود دهید.

**۳. تست مداوم (Continuous Testing) ✅**
بعد از هر تغییر، نتیجه را بررسی کنید و اگر مشکلی بود، به AI بگویید.
    `,
  },
  {
    id: 2,
    title: 'ابزارهای وایب کدینگ 🛠️',
    content: `
## ابزارهای اصلی وایب کدینگ 🛠️

### ۱. Cursor IDE 💻
**بهترین IDE برای وایب کدینگ**

Cursor یک ویرایشگر کد مبتنی بر VS Code است که به صورت عمیق با AI یکپارچه شده.

**ویژگی‌ها:**
- Tab برای تکمیل هوشمند کد
- Ctrl+K برای ویرایش کد با دستور طبیعی
- Chat برای گفتگو درباره پروژه
- قابلیت Codebase Awareness (درک کل پروژه)
- پشتیبانی از تمام زبان‌های برنامه‌نویسی

**نحوه شروع:**
1. از cursor.com دانلود کنید
2. پروژه خود را باز کنید
3. با Ctrl+L چت AI را باز کنید
4. پروژه خود را توضیح دهید

**مثال استفاده:**
\`\`\`
شما: یک API برای مدیریت تسک‌ها بساز با Express و MongoDB
که شامل:
- CRUD کامل برای تسک‌ها
- احراز هویت با JWT
- ولیدیشن ورودی‌ها
- ساختار پوشه‌بندی استاندارد
\`\`\`

### ۲. Bolt.new ⚡
**ساخت سریع وب‌اپلیکیشن در مرورگر**

Bolt.new به شما اجازه می‌دهد بدون نصب هیچ چیزی، مستقیماً در مرورگر وب‌اپلیکیشن بسازید.

**مزایا:**
- بدون نیاز به نصب
- پیش‌نمایش زنده
- دیپلوی با یک کلیک
- رایگان برای شروع

### ۳. v0 by Vercel 🎨
**ساخت UI با AI**

v0 متخصص ساخت رابط کاربری است. کافیست توضیح دهید چه UI می‌خواهید، v0 آن را با React و Tailwind CSS می‌سازد.

**مثال پرامپت:**
"یک داشبورد مدیریت با سایدبار، کارت‌های آماری، جدول کاربران و نمودار فروش بساز. تم تیره باشد."

### ۴. Replit Agent 🤖
**ساخت پروژه‌های کامل با AI**

Replit Agent می‌تواند یک پروژه کامل را از صفر بسازد، شامل بک‌اند، فرانت‌اند، دیتابیس و دیپلوی.

### ۵. Lovable (GPT Engineer) ❤️
**تبدیل ایده به محصول**

Lovable می‌تواند ایده شما را به یک محصول کامل تبدیل کند. مناسب برای MVP و پروتوتایپ سریع.

### مقایسه ابزارها:

| ابزار | بهترین برای | قیمت | سطح |
|-------|------------|------|------|
| Cursor | پروژه‌های حرفه‌ای | $20/ماه | متوسط-پیشرفته |
| Bolt.new | وب‌اپ سریع | رایگان/$20 | مبتدی-متوسط |
| v0 | UI/UX | رایگان/$20 | مبتدی-متوسط |
| Replit | پروژه کامل | رایگان/$25 | همه سطوح |
| Lovable | MVP | رایگان/$20 | مبتدی-متوسط |
    `,
  },
  {
    id: 3,
    title: 'پرامپت‌نویسی حرفه‌ای ✍️',
    content: `
## هنر پرامپت‌نویسی برای وایب کدینگ ✍️

پرامپت‌نویسی مهم‌ترین مهارت شما در وایب کدینگ است. یک پرامپت خوب می‌تواند تفاوت بین یک پروژه موفق و شکست‌خورده باشد.

### فرمول پرامپت حرفه‌ای:

**فرمول CRAFT:**
- **C**ontext (زمینه): پروژه درباره چیست؟
- **R**ole (نقش): AI در چه نقشی عمل کند؟
- **A**ction (عمل): دقیقاً چه کاری انجام دهد؟
- **F**ormat (فرمت): خروجی چگونه باشد؟
- **T**one (لحن): سبک کار چگونه باشد؟

### مثال‌های عملی:

**مثال ۱ - ساخت لندینگ پیج:**
\`\`\`
[Context] من یک استارتاپ آموزش آنلاین دارم
[Role] تو یک توسعه‌دهنده فرانت‌اند ارشد هستی
[Action] یک لندینگ پیج حرفه‌ای بساز با:
  - Hero section با عنوان جذاب و CTA
  - بخش ویژگی‌ها (۶ مورد) با آیکون
  - بخش نظرات دانشجویان (اسلایدر)
  - بخش قیمت‌گذاری (۳ پلن)
  - فوتر کامل
[Format] React + Tailwind CSS، ریسپانسیو، RTL
[Tone] مدرن، حرفه‌ای، با انیمیشن‌های ظریف
\`\`\`

**مثال ۲ - ساخت API:**
\`\`\`
یک REST API با Node.js و Express بساز برای سیستم رزرو نوبت مطب پزشک.

مدل‌ها:
- Doctor: نام، تخصص، شماره نظام، بیوگرافی
- Patient: نام، موبایل، کد ملی
- Appointment: doctor_id, patient_id, date, time, status

اندپوینت‌ها:
- GET /doctors - لیست پزشکان با فیلتر تخصص
- GET /doctors/:id/slots - ساعات خالی یک پزشک
- POST /appointments - رزرو نوبت
- GET /appointments/:id - جزئیات نوبت

الزامات:
- احراز هویت JWT
- ولیدیشن با Joi
- ساختار لایه‌ای (controller/service/repository)
- Swagger documentation
- Error handling استاندارد
\`\`\`

### تکنیک‌های پیشرفته:

**۱. Chain of Thought (زنجیره فکری):**
از AI بخواهید مرحله به مرحله فکر کند:
"قبل از نوشتن کد، ابتدا معماری سیستم را توضیح بده، سپس ماژول‌ها را مشخص کن، و در نهایت کد هر ماژول را بنویس."

**۲. Few-Shot Prompting:**
یک مثال بدهید تا AI الگو را بفهمد:
\`\`\`
سبک کامپوننت‌های من اینطوریه:
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

حالا یک کامپوننت Card با همین سبک بساز.
\`\`\`

**۳. Iterative Refinement:**
\`\`\`
مرحله ۱: "یک فرم ثبت‌نام بساز"
مرحله ۲: "فیلد تأیید رمز عبور اضافه کن"
مرحله ۳: "ولیدیشن سمت کلاینت اضافه کن"
مرحله ۴: "انیمیشن خطا اضافه کن"
مرحله ۵: "دکمه submit را با loading state بهینه کن"
\`\`\`
    `,
  },
  {
    id: 4,
    title: 'پروژه عملی: ساخت وب‌سایت کامل 🏗️',
    content: `
## پروژه عملی: ساخت یک وب‌سایت فروشگاهی کامل 🏗️

در این درس، مرحله به مرحله یک فروشگاه آنلاین کامل می‌سازیم.

### مرحله ۱: تعریف پروژه 📋

**مشخصات پروژه:**
- نام: شاپ‌لند
- نوع: فروشگاه آنلاین محصولات دیجیتال
- تکنولوژی: Next.js + Tailwind CSS + Prisma + PostgreSQL
- قابلیت‌ها: احراز هویت، سبد خرید، پرداخت، پنل ادمین

### مرحله ۲: پرامپت اولیه به AI 🤖

\`\`\`
می‌خواهم یک فروشگاه آنلاین محصولات دیجیتال بسازم.

تکنولوژی‌ها: Next.js 14 (App Router), Tailwind CSS, Prisma, PostgreSQL

ساختار صفحات:
1. / - صفحه اصلی (هیرو، محصولات پرفروش، دسته‌بندی‌ها)
2. /products - لیست محصولات با فیلتر و جستجو
3. /products/[id] - جزئیات محصول
4. /cart - سبد خرید
5. /checkout - پرداخت
6. /auth/login - ورود
7. /auth/register - ثبت‌نام
8. /dashboard - پنل کاربری
9. /admin - پنل مدیریت

دیتابیس:
- User: id, name, email, password, role
- Product: id, title, description, price, image, category, stock
- Order: id, userId, total, status, items
- Category: id, name, slug

طراحی: تم تیره، مدرن، با انیمیشن‌های framer-motion
\`\`\`

### مرحله ۳: پیاده‌سازی مرحله به مرحله 🔨

**قدم اول - Setup:**
\`\`\`
پروژه Next.js را با Tailwind CSS setup کن.
پریزما را با مدل‌های User, Product, Order, Category کانفیگ کن.
ساختار پوشه‌بندی استاندارد Next.js 14 را ایجاد کن.
\`\`\`

**قدم دوم - Auth:**
\`\`\`
سیستم احراز هویت با NextAuth.js پیاده‌سازی کن:
- ثبت‌نام با email/password
- ورود
- رمزنگاری رمز عبور با bcrypt
- middleware برای محافظت از route‌ها
\`\`\`

**قدم سوم - Products:**
\`\`\`
صفحه لیست محصولات را بساز:
- گرید ریسپانسیو محصولات
- فیلتر بر اساس دسته‌بندی
- مرتب‌سازی (قیمت، جدیدترین، پرفروش‌ترین)
- جستجو
- Pagination
- Skeleton loading
\`\`\`

**قدم چهارم - Cart & Checkout:**
\`\`\`
سبد خرید را با Zustand پیاده‌سازی کن:
- اضافه/حذف محصول
- تغییر تعداد
- محاسبه قیمت کل
- ذخیره در localStorage
- صفحه checkout با فرم آدرس
\`\`\`

### مرحله ۴: نکات مهم 💡

**۱. مدیریت State:**
- از Zustand برای state ساده استفاده کنید
- از React Query برای داده‌های سرور
- از Context برای theme و auth

**۲. بهینه‌سازی:**
- Image optimization با next/image
- Code splitting خودکار Next.js
- ISR برای صفحات محصولات
- Caching با Redis

**۳. امنیت:**
- CSRF protection
- Rate limiting
- Input sanitization
- HTTPS enforcement

### مرحله ۵: دیپلوی 🚀

**گزینه‌های دیپلوی:**
1. **Vercel** - بهترین برای Next.js (رایگان)
2. **Railway** - برای بک‌اند و دیتابیس
3. **Supabase** - جایگزین PostgreSQL مدیریت‌شده

**مراحل دیپلوی روی Vercel:**
1. کد را در GitHub پوش کنید
2. در Vercel پروژه جدید بسازید
3. Repository را متصل کنید
4. Environment variables را تنظیم کنید
5. Deploy!
    `,
  },
  {
    id: 5,
    title: 'کسب درآمد از وایب کدینگ 💰',
    content: `
## کسب درآمد از وایب کدینگ در ایران 💰

### مدل‌های درآمدزایی:

**۱. فریلنسری 🖥️**

**سایت‌های فریلنسری ایرانی:**
- پونیشا (ponisha.ir)
- کارلنسر (karlancer.com)
- انجام میدم (anjammidam.com)
- تایپیران (typiran.com)

**سایت‌های بین‌المللی:**
- Fiverr
- Upwork
- Freelancer.com
- Toptal

**قیمت‌گذاری خدمات:**
| خدمت | قیمت پیشنهادی (تومان) |
|------|----------------------|
| لندینگ پیج ساده | ۳-۵ میلیون |
| وب‌سایت شرکتی | ۸-۱۵ میلیون |
| فروشگاه آنلاین | ۱۵-۳۰ میلیون |
| وب‌اپلیکیشن سفارشی | ۲۰-۵۰ میلیون |
| API بک‌اند | ۵-۱۵ میلیون |
| بات تلگرام | ۳-۱۰ میلیون |

**نکات مهم فریلنسری:**
- همیشه قرارداد کتبی ببندید
- ۵۰٪ پیش‌پرداخت بگیرید
- پورتفولیوی قوی بسازید
- در شبکه‌های اجتماعی فعال باشید
- نظرات مثبت مشتری جمع کنید

**۲. ساخت محصول (SaaS) 🏢**

ایده‌های SaaS برای بازار ایران:
- سیستم نوبت‌دهی آنلاین (مطب، آرایشگاه، ...)
- سیستم مدیریت رستوران
- فاکتور و حسابداری ساده
- سیستم مدیریت املاک
- پلتفرم آموزش آنلاین
- CRM فارسی

**هزینه ساخت با وایب کدینگ:**
- زمان: ۱-۴ هفته (به جای ۳-۶ ماه)
- هزینه: فقط هزینه سرور (ماهانه ۲۰۰-۵۰۰ هزار تومان)
- درآمد ماهانه: ۵-۵۰ میلیون تومان (بسته به محصول)

**۳. آموزش و مشاوره 📚**

- فروش دوره آموزشی
- مشاوره ساعتی (ساعتی ۵۰۰ هزار تا ۲ میلیون تومان)
- تولید محتوای آموزشی در یوتیوب/آپارات
- برگزاری ورکشاپ

**۴. ساخت تمپلیت و قالب 🎨**

- فروش قالب وب‌سایت در مارکت‌پلیس‌ها
- فروش کامپوننت‌های UI
- فروش Starter Kit

### مسیر پیشنهادی برای شروع:

**ماه اول:** یادگیری وایب کدینگ + ساخت ۳ پروژه نمونه
**ماه دوم:** ثبت‌نام در سایت‌های فریلنسری + گرفتن اولین پروژه
**ماه سوم:** افزایش قیمت + ساخت پورتفولیو + شبکه‌سازی
**ماه چهارم به بعد:** انتخاب بین فریلنسری و ساخت محصول
    `,
  },
];

export default function VibeCoding() {
  const [activeLesson, setActiveLesson] = useState(0);

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="gradient-text">وایب کدینگ</span> 💻
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            بدون نوشتن حتی یک خط کد، اپلیکیشن‌ها و وب‌سایت‌های حرفه‌ای بسازید
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Lessons List */}
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <h3 className="text-lg font-bold mb-4 text-purple-300">📚 سرفصل‌ها</h3>
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                      activeLesson === index
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="ml-2">{lesson.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="glass-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {lessons[activeLesson].title}
              </h2>
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-gray-300 leading-relaxed text-sm sm:text-base">
                  {lessons[activeLesson].content}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                disabled={activeLesson === 0}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all"
              >
                → درس قبلی
              </button>
              <button
                onClick={() => setActiveLesson(Math.min(lessons.length - 1, activeLesson + 1))}
                disabled={activeLesson === lessons.length - 1}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all"
              >
                درس بعدی ←
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
