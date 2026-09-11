import { useState } from 'react';
import { Accordion, CodeBlock, InfoCard, Timeline, ComparisonTable, FlowDiagram, ProgressBar, SectionHeading } from './ui';

const lessons = [
  { id: 1, title: 'نقشه راه ورود به بازار کار AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی' },
  { id: 2, title: 'ساخت پورتفولیوی حرفه‌ای', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 3, title: 'قیمت‌گذاری و مذاکره', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 4, title: 'بازاریابی شخصی و مشتری‌یابی', duration: '۷۵ دقیقه', difficulty: 'پیشرفته' },
  { id: 5, title: 'مدیریت پروژه و مشتری', duration: '۴۵ دقیقه', difficulty: 'متوسط' },
  { id: 6, title: 'تخصص‌گرایی و نیچ مارکت', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 7, title: 'موفقیت بلندمدت و رشد', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
];

function Lesson1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">نقشه راه ورود به بازار کار هوش مصنوعی</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        بازار کار هوش مصنوعی در ایران در حال رشد سریع است. طبق آمار ۱۴۰۳، بیش از ۵۰۰۰ شرکت ایرانی از AI استفاده می‌کنند و تقاضا برای متخصصان AI سه برابر شده است.
      </p>

      <ComparisonTable title="مسیرهای شغلی در حوزه AI" headers={['مسیر', 'درآمد ماهانه', 'زمان رسیدن', 'مهارت‌ها', 'ریسک']} rows={[
        ['فریلنسر AI', '۵-۵۰ میلیون', '۲-۳ ماه', 'وایب کدینگ + تولید محتوا', 'متوسط'],
        ['متخصص تولید محتوا', '۸-۳۰ میلیون', '۱-۲ ماه', 'پرامپت‌نویسی + ابزارها', 'پایین'],
        ['توسعه‌دهنده با AI', '۱۵-۶۰ میلیون', '۳-۶ ماه', 'وایب کدینگ + مبانی برنامه‌نویسی', 'پایین'],
        ['مشاور AI کسب‌وکار', '۲۰-۱۰۰ میلیون', '۶-۱۲ ماه', 'ابزارها + استراتژی + ارتباطات', 'بالا'],
        ['آموزش‌دهنده AI', '۱۰-۵۰ میلیون', '۳-۶ ماه', 'تسلط + مهارت تدریس', 'متوسط'],
      ]} />

      <FlowDiagram title="مسیر ۹۰ روزه ورود به بازار" nodes={[
        { label: 'ماه اول', sublabel: 'یادگیری ابزارها', color: 'from-purple-500 to-indigo-500' },
        { label: 'ماه دوم', sublabel: 'ساخت نمونه‌کار', color: 'from-pink-500 to-rose-500' },
        { label: 'ماه سوم', sublabel: 'ورود به بازار', color: 'from-emerald-500 to-teal-500' },
      ]} />

      <Timeline steps={[
        { title: 'هفته ۱-۲: آشنایی با ChatGPT و Claude', description: 'پرامپت‌نویسی، تولید محتوای متنی، ترجمه، تحلیل داده', detail: 'روزانه ۲ ساعت تمرین' },
        { title: 'هفته ۳-۴: ابزارهای تولید تصویر', description: 'Midjourney، DALL-E، Leonardo AI - ساخت لوگو، بنر، پست', detail: 'ساخت ۲۰ نمونه تصویر' },
        { title: 'هفته ۵-۶: ابزارهای ویدیو و صوت', description: 'Runway، ElevenLabs، Suno - ساخت ویدیو و نریشن', detail: 'ساخت ۵ ویدیو نمونه' },
        { title: 'هفته ۷-۸: وایب کدینگ', description: 'Cursor، Bolt.new، v0 - ساخت وب‌سایت و وب‌اپ', detail: 'ساخت ۳ پروژه کامل' },
        { title: 'هفته ۹-۱۰: ساخت پورتفولیو', description: 'سایت شخصی، پروفایل لینکدین، نمونه‌کارها', detail: 'حداقل ۱۰ نمونه‌کار' },
        { title: 'هفته ۱۱-۱۲: ورود به بازار', description: 'فریلنسری، Cold outreach، شبکه‌سازی', detail: 'ارسال ۵۰+ پیشنهاد' },
      ]} />

      <InfoCard type="tip" title="نکته کلیدی">
        منتظر کامل شدن نباشید. با هر سطحی که دارید شروع کنید. اولین پروژه شما قرار نیست عالی باشد، اما باید شروعی باشد برای بهتر شدن.
      </InfoCard>
    </div>
  );
}

function Lesson2() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">ساخت پورتفولیوی حرفه‌ای</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        پورتفولیو مهم‌ترین ابزار شما برای گرفتن مشتری است. مشتریان قبل از استخدام، نمونه کار شما را می‌بینند.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">ساختار پورتفولیوی حرفه‌ای</h3>
      <FlowDiagram title="بخش‌های پورتفولیو" nodes={[
        { label: 'Hero', sublabel: 'معرفی + CTA', color: 'from-purple-500 to-indigo-500' },
        { label: 'خدمات', sublabel: 'چه کاری انجام می‌دهید', color: 'from-pink-500 to-rose-500' },
        { label: 'نمونه‌کار', sublabel: '۵-۱۰ پروژه برتر', color: 'from-cyan-500 to-blue-500' },
        { label: 'نظرات', sublabel: 'بازخورد مشتریان', color: 'from-amber-500 to-orange-500' },
        { label: 'تماس', sublabel: 'راه‌های ارتباطی', color: 'from-emerald-500 to-teal-500' },
      ]} />

      <Accordion title="نمونه‌کار ۱: محتوای متنی">
        <CodeBlock title="ساختار نمونه‌کار" language="text" code={`پروژه: بلاگ فروشگاه آنلاین [نام]
توضیح: نوشتن ۲۰ مقاله سئو شده
نتایج:
- افزایش ترافیک ارگانیک: ۱۵۰٪
- رتبه ۱ گوگل برای ۵ کلمه کلیدی
- ۳۰٪ افزایش فروش
ابزارها: ChatGPT + Surfer SEO
زمان: ۳ هفته`} />
      </Accordion>

      <Accordion title="نمونه‌کار ۲: طراحی تصویر">
        <CodeBlock title="ساختار نمونه‌کار" language="text" code={`پروژه: هویت بصری برند [نام]
توضیح: طراحی لوگو، پالت رنگی، تمپلیت‌های شبکه اجتماعی
ابزارها: Midjourney + Canva + Photoshop
نتایج:
- افزایش ۲۰۰٪ engagement در اینستاگرام
- رضایت ۱۰۰٪ مشتری
زمان: ۱ هفته`} />
      </Accordion>

      <ComparisonTable title="پلتفرم‌های ساخت پورتفولیو" headers={['پلتفرم', 'نوع', 'قیمت', 'بهترین برای']} rows={[
        ['GitHub Pages', 'وب‌سایت', 'رایگان', 'توسعه‌دهندگان'],
        ['Notion', 'ساده', 'رایگان', 'شروع سریع'],
        ['Carrd.co', 'تک‌صفحه‌ای', 'رایگان/$19', 'لندینگ ساده'],
        ['Framer', 'حرفه‌ای', 'رایگان/$15', 'طراحان'],
        ['Behance', 'گالری', 'رایگان', 'طراحان گرافیک'],
        ['وب‌سایت شخصی', 'سفارشی', '۵۰۰ هزار/سال', 'حرفه‌ای‌ها'],
      ]} />

      <InfoCard type="warning" title="اشتباهات رایج در پورتفولیو">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>نمونه‌کار بدون نتیجه عددی - همیشه با آمار صحبت کنید</li>
          <li>تعداد زیاد نمونه‌کار بی‌کیفیت - ۵ عالی بهتر از ۲۰ متوسط</li>
          <li>عدم به‌روزرسانی - هر ماه نمونه‌کار جدید اضافه کنید</li>
          <li>عدم بهینه‌سازی موبایل - اکثر مشتریان با موبایل می‌بینند</li>
          <li>فراموش کردن CTA - همیشه راه تماس واضح بگذارید</li>
        </ul>
      </InfoCard>
    </div>
  );
}

function Lesson3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">قیمت‌گذاری و مذاکره</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        قیمت‌گذاری درست، تفاوت بین موفقیت و شکست در فریلنسری است. نه خیلی ارزان بفروشید و نه آنقدر گران که مشتری فرار کند.
      </p>

      <ComparisonTable title="جدول قیمت‌گذاری خدمات AI" headers={['خدمت', 'قیمت حداقل', 'قیمت متوسط', 'قیمت حرفه‌ای']} rows={[
        ['مقاله ۲۰۰۰ کلمه', '۳۰۰ هزار', '۸۰۰ هزار', '۲ میلیون'],
        ['پست اینستاگرام', '۱۰۰ هزار', '۳۰۰ هزار', '۷۰۰ هزار'],
        ['لوگو با AI', '۵۰۰ هزار', '۱.۵ میلیون', '۳ میلیون'],
        ['لندینگ پیج', '۳ میلیون', '۸ میلیون', '۲۰ میلیون'],
        ['وب‌سایت شرکتی', '۵ میلیون', '۱۵ میلیون', '۴۰ میلیون'],
        ['فروشگاه آنلاین', '۱۰ میلیون', '۲۵ میلیون', '۶۰ میلیون'],
        ['وب‌اپلیکیشن', '۱۵ میلیون', '۴۰ میلیون', '۱۰۰ میلیون'],
        ['ویدیو تبلیغاتی', '۱ میلیون', '۳ میلیون', '۱۰ میلیون'],
        ['مدیریت شبکه اجتماعی (ماهانه)', '۵ میلیون', '۱۲ میلیون', '۲۵ میلیون'],
        ['مشاوره AI (ساعتی)', '۳۰۰ هزار', '۸۰۰ هزار', '۲ میلیون'],
      ]} />

      <InfoCard type="tip" title="قیمت‌گذاری بر اساس ارزش">
        <p className="mb-2">به جای قیمت‌گذاری ساعتی، بر اساس ارزشی که ایجاد می‌کنید قیمت بدهید:</p>
        <p>اگر وب‌سایت شما ماهانه ۱۰ میلیون تومان فروش ایجاد می‌کند، قیمت ۱۵ میلیون تومان (فقط ۱۲.۵٪ ارزش ایجاد شده) بسیار منطقی است.</p>
      </InfoCard>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">سناریوهای مذاکره</h3>
      <Accordion title="مشتری می‌گوید گران است">
        <CodeBlock title="پاسخ صحیح" language="text" code={`"کاملاً درک می‌کنم. اجازه بدید ارزش کار رو بررسی کنیم:
- این وب‌سایت ماهانه حداقل ۱۰ میلیون تومان فروش ایجاد می‌کند
- در سال اول: ۱۲۰ میلیون تومان ارزش ایجاد شده
- هزینه پروژه: ۱۵ میلیون تومان (فقط ۱۲.۵٪ ارزش)
- ضمانت: اگر تا ۳ ماه نتیجه نگرفتید، رایگان بهینه‌سازی می‌کنم

آیا این منطقی‌تر به نظر می‌رسد؟"`} />
      </Accordion>

      <Accordion title="درخواست تخفیف">
        <CodeBlock title="پاسخ صحیح" language="text" code={`"بله، چند گزینه دارم:
۱. پرداخت نقدی: ۱۰٪ تخفیف
۲. قرارداد ۶ ماهه: ۱۵٪ تخفیف
۳. لوگوی ما در سایت: ۲۰٪ تخفیف
۴. حذف برخی خدمات برای رسیدن به بودجه شما"`} />
      </Accordion>

      <Accordion title="درخواست کار رایگان">
        <CodeBlock title="پاسخ صحیح" language="text" code={`"من برای هر پروژه وقت و انرژی صرف می‌کنم.
پیشنهاد: یک نمونه کار کوچک (مثلاً ۱ پست) با قیمت ویژه ۱۰۰ هزار تومان.
اگر راضی بودید، قرارداد اصلی را ببندیم.
این‌طوری هم شما ریسک نمی‌کنید، هم من."`} />
      </Accordion>
    </div>
  );
}

function Lesson4() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">بازاریابی شخصی و مشتری‌یابی</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        بدون مشتری، حتی بهترین مهارت‌ها هم درآمدی ایجاد نمی‌کنند. در این درس، روش‌های عملی جذب مشتری را یاد می‌گیرید.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">کانال‌های جذب مشتری</h3>
      <ComparisonTable title="مقایسه کانال‌ها" headers={['کانال', 'هزینه', 'سرعت نتیجه', 'پایداری', 'سختی']} rows={[
        ['لینکدین', 'رایگان', '۱-۳ ماه', 'بالا', 'متوسط'],
        ['اینستاگرام', 'رایگان', '۲-۴ ماه', 'متوسط', 'متوسط'],
        ['سایت‌های فریلنسری', 'رایگان/کمیسیون', '۱-۲ هفته', 'پایین', 'پایین'],
        ['Cold Outreach', 'رایگان', '۱-۲ هفته', 'متوسط', 'بالا'],
        ['ارجاع مشتری', 'رایگان', 'فوری', 'بالا', 'پایین'],
        ['تبلیغات', 'بالا', 'فوری', 'متوسط', 'پایین'],
      ]} />

      <CodeBlock title="الگوی Cold Outreach" language="text" code={`سلام [نام] عزیز،

من پروفایل [شرکت/پیج] شما را دیدم و واقعاً از [نکته مثبت] خوشم آمد.

یک ایده برای [بهبود/فرصت] دارم که می‌تواند [نتیجه مشخص] ایجاد کند.
[یک مثال کوتاه از نتیجه مشابه برای مشتری قبلی]

آیا ۱۰ دقیقه وقت دارید این هفته صحبت کنیم؟ (رایگان و بدون تعهد)

ارادتمند،
[نام شما]
[لینک پورتفولیو]`} />

      <Timeline steps={[
        { title: 'صبح: لینکدین', description: 'پست + کامنت + اتصال با تصمیم‌گیرندگان', detail: '۶۰ دقیقه' },
        { title: 'ظهر: اینستاگرام', description: 'استوری + ریلز + تعامل', detail: '۳۰ دقیقه' },
        { title: 'عصر: فریلنسری', description: 'ارسال پیشنهاد در پونیشا و کارلنسر', detail: '۴۵ دقیقه' },
        { title: 'شب: Cold Outreach', description: 'ارسال ۵ پیام سفارشی', detail: '۳۰ دقیقه' },
        { title: 'شب: تولید محتوا فردا', description: 'آماده‌سازی محتوای فردا', detail: '۶۰ دقیقه' },
      ]} />
    </div>
  );
}

function Lesson5() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">مدیریت پروژه و مشتری</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        گرفتن مشتری فقط نیمی از راه است. مدیریت صحیح پروژه و مشتری، تفاوت بین یک پروژه موفق و یک فاجعه است.
      </p>

      <FlowDiagram title="چرخه مدیریت پروژه" nodes={[
        { label: 'قرارداد', sublabel: 'توافق کتبی', color: 'from-purple-500 to-indigo-500' },
        { label: 'پیش‌پرداخت', sublabel: '۵۰٪ اول', color: 'from-pink-500 to-rose-500' },
        { label: 'اجرا', sublabel: 'تحویل مرحله‌ای', color: 'from-cyan-500 to-blue-500' },
        { label: 'بازبینی', sublabel: '۲-۳ بار revision', color: 'from-amber-500 to-orange-500' },
        { label: 'تحویل', sublabel: 'پرداخت نهایی', color: 'from-emerald-500 to-teal-500' },
        { label: 'پیگیری', sublabel: 'نظر + ارجاع', color: 'from-violet-500 to-purple-500' },
      ]} />

      <InfoCard type="warning" title="الزامات قرارداد">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>مشخصات طرفین (نام، تماس، کد ملی/شناسه)</li>
          <li>شرح دقیق خدمات (Scope of Work)</li>
          <li>زمان‌بندی و ددلاین‌ها</li>
          <li>مبلغ و شرایط پرداخت (۵۰٪ پیش + ۵۰٪ تحویل)</li>
          <li>تعداد revisions (معمولاً ۲-۳ بار)</li>
          <li>مالکیت معنوی</li>
          <li>شرایط فسخ</li>
          <li>محرمانگی (NDA)</li>
        </ul>
      </InfoCard>
    </div>
  );
}

function Lesson6() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">تخصص‌گرایی و نیچ مارکت</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        تخصص‌گرایی کلید درآمد بالاتر است. به جای اینکه همه‌کاره باشید، در یک حوزه متخصص شوید.
      </p>

      <ComparisonTable title="حوزه‌های تخصصی پرتقاضا" headers={['حوزه', 'درآمد پروژه', 'رقابت', 'رشد بازار']} rows={[
        ['AI + پزشکی', '۱۰-۵۰ میلیون', 'کم', 'بالا'],
        ['AI + آموزش', '۵-۳۰ میلیون', 'متوسط', 'بالا'],
        ['AI + املاک', '۱۰-۴۰ میلیون', 'کم', 'متوسط'],
        ['AI + فروشگاه آنلاین', '۵-۲۵ میلیون', 'بالا', 'بالا'],
        ['AI + رستوران', '۳-۱۵ میلیون', 'کم', 'متوسط'],
        ['AI + حقوقی', '۱۵-۶۰ میلیون', 'کم', 'بالا'],
        ['AI + مالی', '۲۰-۱۰۰ میلیون', 'متوسط', 'بالا'],
      ]} />

      <InfoCard type="tip" title="فرمول انتخاب نیچ">
        <p className="mb-2">نیچ ایده‌آل = علاقه شما + تقاضای بازار + قدرت پرداخت مشتری</p>
        <p>مثال: اگر به پزشکی علاقه دارید و مطب‌ها بودجه خوبی دارند، "AI برای مطب‌های دندانپزشکی" یک نیچ عالی است.</p>
      </InfoCard>
    </div>
  );
}

function Lesson7() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">موفقیت بلندمدت و رشد</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        موفقیت در حوزه AI یک مسیر بلندمدت است. در این درس، نقشه راه رشد از مبتدی تا متخصص را یاد می‌گیرید.
      </p>

      <ComparisonTable title="مسیر رشد حرفه‌ای" headers={['سطح', 'زمان', 'درآمد', 'تمرکز']} rows={[
        ['مبتدی', 'ماه ۱-۳', '۳-۸ میلیون', 'یادگیری + اولین پروژه‌ها'],
        ['متوسط', 'ماه ۳-۶', '۸-۲۰ میلیون', 'تخصص‌گرایی + مشتریان ثابت'],
        ['حرفه‌ای', 'ماه ۶-۱۲', '۲۰-۵۰ میلیون', 'برندسازی + سیستم‌سازی'],
        ['متخصص', 'سال ۱+', '۵۰+ میلیون', 'آژانس یا محصول خود'],
      ]} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">سیستم‌سازی کسب‌وکار</h3>
      <Timeline steps={[
        { title: 'مستندسازی فرایندها', description: 'برای هر خدمت، یک SOP بنویسید: مراحل، ابزارها، پرامپت‌ها، چک‌لیست', detail: 'مرحله ۱: وقتی هنوز تنها هستید' },
        { title: 'اتوماسیون', description: 'قالب‌های آماده، Workflow‌های Zapier، تمپلیت‌های قرارداد', detail: 'مرحله ۲: وقتی ۵+ مشتری دارید' },
        { title: 'برون‌سپاری', description: 'کارهای ساده را به فریلنسر بسپارید', detail: 'مرحله ۳: وقتی درآمد ۱۵+ میلیون دارید' },
        { title: 'تیم‌سازی', description: 'استخدام پاره‌وقت و سپس تمام‌وقت', detail: 'مرحله ۴: وقتی درآمد ۳۰+ میلیون دارید' },
      ]} />

      <InfoCard type="success" title="اقدامات فوری">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>همین امروز یک ابزار AI را عمیق یاد بگیرید</li>
          <li>اولین نمونه‌کار خود را بسازید</li>
          <li>پروفایل لینکدین را به‌روز کنید</li>
          <li>به ۵ نفر پیام بدهید و خدماتتان را معرفی کنید</li>
          <li>اولین پروژه را با هر قیمتی بگیرید (برای تجربه)</li>
        </ul>
      </InfoCard>
    </div>
  );
}

const lessonComponents: Record<number, React.FC> = { 1: Lesson1, 2: Lesson2, 3: Lesson3, 4: Lesson4, 5: Lesson5, 6: Lesson6, 7: Lesson7 };

export default function MarketPrep() {
  const [activeLesson, setActiveLesson] = useState(0);
  const ActiveComponent = lessonComponents[activeLesson + 1];

  const difficultyColors: Record<string, string> = {
    'مبتدی': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'متوسط': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'پیشرفته': 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="آماده‌سازی بازار کار" subtitle="همه چیز برای ورود موفق به بازار کار هوش مصنوعی در ایران" badge="۷ درس | ۱۰ ساعت آموزش" />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-emerald-300">سرفصل‌های دوره</h3>
                <span className="text-xs text-gray-500">{activeLesson + 1}/{lessons.length}</span>
              </div>
              <div className="mb-4"><ProgressBar value={activeLesson + 1} max={lessons.length} label="پیشرفت دوره" color="emerald" /></div>
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pl-1">
                {lessons.map((lesson, index) => (
                  <button key={lesson.id} onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-3 py-3 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 ${
                      activeLesson === index ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : index < activeLesson ? 'text-gray-300 hover:bg-white/5 border border-transparent'
                      : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeLesson === index ? 'bg-emerald-500 text-white' : index < activeLesson ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-gray-500'
                    }`}>
                      {index < activeLesson ? <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> : index + 1}
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

          <div className="flex-1 min-w-0">
            <div className="glass-card p-6 sm:p-8"><ActiveComponent /></div>
            <div className="flex justify-between mt-6">
              <button onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))} disabled={activeLesson === 0}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                درس قبلی
              </button>
              <button onClick={() => setActiveLesson(Math.min(lessons.length - 1, activeLesson + 1))} disabled={activeLesson === lessons.length - 1}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all flex items-center gap-2">
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
