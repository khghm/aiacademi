import { useState } from 'react';
import { Accordion, Tabs, CodeBlock, InfoCard, Timeline, ComparisonTable, FlowDiagram, ProgressBar, SectionHeading, DonutChart } from './ui';

const lessons = [
  { id: 1, title: 'مقدمه‌ای بر تولید محتوا با AI', duration: '۴۵ دقیقه', difficulty: 'مبتدی' },
  { id: 2, title: 'تولید محتوای متنی حرفه‌ای', duration: '۹۰ دقیقه', difficulty: 'متوسط' },
  { id: 3, title: 'تولید تصویر با AI', duration: '۷۵ دقیقه', difficulty: 'متوسط' },
  { id: 4, title: 'تولید ویدیو و صوت با AI', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 5, title: 'استراتژی محتوایی با AI', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 6, title: 'اتوماسیون تولید محتوا', duration: '۴۵ دقیقه', difficulty: 'پیشرفته' },
  { id: 7, title: 'کسب درآمد از تولید محتوا', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
];

function Lesson1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">مقدمه‌ای بر تولید محتوا با هوش مصنوعی</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        تولید محتوا با AI یکی از پرتقاضاترین مهارت‌ها در بازار کار امروز است. با استفاده از ابزارهای هوش مصنوعی، شما می‌توانید محتوایی با کیفیت بالا و در زمان بسیار کوتاه تولید کنید. در این درس، نقشه راه کامل تولید محتوا با AI را یاد می‌گیرید.
      </p>

      <DonutChart
        title="توزیع انواع محتوای تولیدی با AI"
        segments={[
          { label: 'محتوای متنی', value: 35, color: '#a855f7' },
          { label: 'محتوای تصویری', value: 25, color: '#ec4899' },
          { label: 'محتوای ویدیویی', value: 20, color: '#06b6d4' },
          { label: 'محتوای صوتی', value: 10, color: '#f59e0b' },
          { label: 'محتوای ترکیبی', value: 10, color: '#10b981' },
        ]}
      />

      <FlowDiagram
        title="فرآیند تولید محتوا با AI"
        nodes={[
          { label: 'تحقیق', sublabel: 'موضوع و مخاطب' },
          { label: 'استراتژی', sublabel: 'نقشه محتوا' },
          { label: 'تولید', sublabel: 'با ابزار AI' },
          { label: 'ویرایش', sublabel: 'بازبینی انسانی' },
          { label: 'انتشار', sublabel: 'پلتفرم مناسب' },
          { label: 'تحلیل', sublabel: 'بازخورد و بهبود' },
        ]}
      />

      <ComparisonTable
        title="مزایای تولید محتوا با AI"
        headers={['مزیت', 'توضیح', 'میزان تأثیر']}
        rows={[
          ['سرعت ۱۰ برابر', 'کاری که ساعت‌ها طول می‌کشد، در دقیقه‌ها انجام می‌شود', 'بسیار بالا'],
          ['هزینه کمتر', 'نیاز به تیم بزرگ ندارید', 'بالا'],
          ['کیفیت ثابت', 'AI خسته نمی‌شود و کیفیت ثابت دارد', 'بالا'],
          ['مقیاس‌پذیری', 'می‌توانید حجم بالایی محتوا تولید کنید', 'بسیار بالا'],
          ['خلاقیت بیشتر', 'AI ایده‌های جدید پیشنهاد می‌دهد', 'متوسط'],
          ['چندزبانه', 'تولید محتوا به چندین زبان', 'بالا'],
        ]}
      />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">ابزارهای اصلی تولید محتوا</h3>
      <Tabs tabs={[
        { label: 'متن', content: (
          <div>
            <p className="text-gray-300 text-sm mb-3">ابزارهای تولید محتوای متنی برای نوشتن مقاله، کپشن، کپی تبلیغاتی، ایمیل و...</p>
            <ComparisonTable headers={['ابزار', 'ویژگی', 'قیمت']} rows={[
              ['ChatGPT', 'عمومی‌ترین و قدرتمندترین', 'رایگان / $20'],
              ['Claude', 'عالی برای متن طولانی', 'رایگان / $20'],
              ['Copy.ai', 'تخصصی کپی‌رایتینگ', 'رایگان / $49'],
              ['Jasper', 'تخصصی بازاریابی', 'از $49'],
              ['Writesonic', 'محتوای سئو شده', 'رایگان / $19'],
            ]} />
          </div>
        )},
        { label: 'تصویر', content: (
          <div>
            <p className="text-gray-300 text-sm mb-3">ابزارهای تولید تصویر برای لوگو، بنر، پست شبکه اجتماعی و...</p>
            <ComparisonTable headers={['ابزار', 'ویژگی', 'قیمت']} rows={[
              ['Midjourney', 'بهترین کیفیت هنری', 'از $10/ماه'],
              ['DALL-E 3', 'فهم عالی پرامپت', 'شامل ChatGPT+'],
              ['Leonardo AI', 'کنترل دقیق', 'رایگان / $12'],
              ['Stable Diffusion', 'رایگان و محلی', 'رایگان'],
              ['Canva AI', 'ساده و سریع', 'رایگان / $13'],
            ]} />
          </div>
        )},
        { label: 'ویدیو', content: (
          <div>
            <p className="text-gray-300 text-sm mb-3">ابزارهای تولید و ویرایش ویدیو</p>
            <ComparisonTable headers={['ابزار', 'ویژگی', 'قیمت']} rows={[
              ['Runway ML', 'پیشرفته‌ترین تولید ویدیو', 'رایگان / $15'],
              ['Kling AI', 'کیفیت سینمایی', 'رایگان / اشتراک'],
              ['Synthesia', 'آواتار انسانی', 'از $30'],
              ['HeyGen', 'ترجمه ویدیو', 'رایگان / $29'],
              ['CapCut', 'ویرایش رایگان', 'رایگان / $8'],
            ]} />
          </div>
        )},
        { label: 'صوت', content: (
          <div>
            <p className="text-gray-300 text-sm mb-3">ابزارهای تولید صوت و موسیقی</p>
            <ComparisonTable headers={['ابزار', 'ویژگی', 'قیمت']} rows={[
              ['ElevenLabs', 'بهترین TTS', 'رایگان / $5'],
              ['Suno AI', 'ساخت آهنگ', 'رایگان / $10'],
              ['Murf AI', 'صداهای حرفه‌ای', 'رایگان / $23'],
              ['Descript', 'ویرایش پادکست', 'رایگان / $24'],
              ['AIVA', 'موسیقی پس‌زمینه', 'رایگان / $15'],
            ]} />
          </div>
        )},
      ]} />

      <InfoCard type="tip" title="نکته طلایی">
        بهترین نتیجه از ترکیب چند ابزار به دست می‌آید. مثلاً: ChatGPT برای اسکریپت + ElevenLabs برای نریشن + Midjourney برای تصاویر + CapCut برای تدوین.
      </InfoCard>
    </div>
  );
}

function Lesson2() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">تولید محتوای متنی حرفه‌ای</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        محتوای متنی هنوز هم پادشاه محتوا است. در این درس، تکنیک‌های حرفه‌ای نوشتن پرامپت برای انواع محتوای متنی را یاد می‌گیرید.
      </p>

      <InfoCard type="info" title="فرمول PASTA برای محتوای متنی">
        <div className="space-y-2">
          <p><strong className="text-purple-300">P - Purpose:</strong> هدف محتوا چیست؟ (فروش، آموزش، سرگرمی، ...)</p>
          <p><strong className="text-pink-300">A - Audience:</strong> مخاطب کیست؟ (سن، جنسیت، علاقه‌مندی)</p>
          <p><strong className="text-cyan-300">S - Style:</strong> سبک نوشتاری (رسمی، دوستانه، تخصصی)</p>
          <p><strong className="text-amber-300">T - Tone:</strong> لحن (احساسی، منطقی، انگیزشی)</p>
          <p><strong className="text-emerald-300">A - Action:</strong> مخاطب بعد از خواندن چه کند؟</p>
        </div>
      </InfoCard>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">پرامپت‌های آماده برای انواع محتوا</h3>

      <Accordion title="مقاله وبلاگ (Blog Post)">
        <CodeBlock title="پرامپت مقاله وبلاگ" language="text" code={`یک مقاله ۲۰۰۰ کلمه‌ای درباره "تأثیر هوش مصنوعی بر مشاغل ایران" بنویس.

مخاطب: صاحبان کسب‌وکارهای کوچک و متوسط ایرانی
لحن: حرفه‌ای اما قابل فهم، با مثال‌های بومی
ساختار:
- مقدمه جذاب با آمار (حداقل ۳ آمار معتبر)
- ۵ بخش اصلی با زیرعنوان H2
- هر بخش شامل مثال واقعی از بازار ایران
- نتیجه‌گیری با Call to Action مشخص
سئو: 
- کلمه کلیدی اصلی: "هوش مصنوعی در کسب و کار"
- ۵ کلمه کلیدی فرعی
- متا دیسکریپشن ۱۵۵ کاراکتری
- عنوان H1 جذاب و شامل کلمه کلیدی`} />
      </Accordion>

      <Accordion title="محتوای اینستاگرام">
        <CodeBlock title="پرامپت کپشن اینستاگرام" language="text" code={`یک کپشن اینستاگرام برای پیج آموزش زبان انگلیسی بنویس.

موضوع: ۵ اشتباه رایج در یادگیری زبان
لحن: دوستانه و انگیزشی
مخاطب: جوانان ۱۸-۳۵ سال

ساختار:
- هوک جذاب در خط اول (با ایموجی مناسب)
- ۵ نکته با شماره و ایموجی
- هر نکته: عنوان + توضیح کوتاه (۱-۲ خط)
- سوال برای تعامل در انتها
- CTA: "ذخیره کن + بفرست برای دوستت"
- ۱۵ هشتگ مرتبط (ترکیب فارسی و انگلیسی)

محدودیت: حداکثر ۲۲۰۰ کاراکتر`} />
      </Accordion>

      <Accordion title="کپی تبلیغاتی (Ad Copy)">
        <CodeBlock title="پرامپت کپی تبلیغاتی" language="text" code={`۵ نسخه متن تبلیغاتی برای دوره آموزش فتوشاپ بنویس.

پلتفرم: تبلیغات کلیکی (یکتانت)
مخاطب: جوانان ۱۸-۳۵ سال علاقه‌مند به طراحی
USP: یادگیری در ۳۰ روز + پشتیبانی مادام‌العمر
قیمت: ۲.۵ میلیون تومان (تخفیف ۵۰٪)

۵ نسخه مختلف:
1. مبتنی بر ترس (FOMO): "اگر الان شروع نکنی..."
2. مبتنی بر سود: "با فتوشاپ ماهی ۱۰ میلیون درآمد داشته باش"
3. مبتنی بر داستان: "من هم مثل تو بودم..."
4. مبتنی بر آمار: "+۵۰۰۰ نفر قبلاً ثبت‌نام کردن"
5. مبتنی بر سوال: "هنوز داری با Paint کار می‌کنی؟"

هر نسخه شامل:
- عنوان (حداکثر ۴۰ کاراکتر)
- توضیح (حداکثر ۹۰ کاراکتر)
- CTA`} />
      </Accordion>

      <Accordion title="ایمیل مارکتینگ">
        <CodeBlock title="پرامپت ایمیل فروش" language="text" code={`یک ایمیل فروش با فرمول AIDA بنویس.

محصول: نرم‌افزار حسابداری ابری
مخاطب: صاحبان فروشگاه‌های آنلاین
مشکل: پیچیدگی نرم‌افزارهای حسابداری سنتی
راه‌حل: رابط ساده + اتوماتیک + ابری
قیمت: ۵۰۰ هزار تومان/ماه

ساختار ایمیل:
- Subject Line: ۳ نسخه (برای A/B test)
- Preheader: جذاب و مکمل subject
- Opening: مشکل را مطرح کن (همدلی)
- Body: راه‌حل + ۳ مزیت اصلی + یک مثال
- Social Proof: نقل قول یک مشتری
- CTA: دکمه "شروع رایگان ۱۴ روزه"
- P.S.: پیشنهاد ویژه محدود (تخفیف ۲۰٪ تا ۴۸ ساعت)

طول: ۲۰۰-۳۰۰ کلمه
لحن: حرفه‌ای اما صمیمی`} />
      </Accordion>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">تکنیک‌های پیشرفته</h3>
      <Timeline steps={[
        { title: 'Content Repurposing', description: 'یک محتوا را به چند فرمت تبدیل کنید. مقاله به رشته توییت، پست لینکدین، اسکریپت ویدیو، و اسلاید ارائه.', detail: 'هر ۱ محتوا = حداقل ۵ خروجی مختلف' },
        { title: 'Voice Matching', description: 'نمونه‌ای از سبک نوشتاری برند خود بدهید و بخواهید مشابه آن بنویسد.', detail: 'برای حفظ یکپارچگی برند حیاتی است' },
        { title: 'A/B Testing Content', description: 'برای هر محتوا ۳ نسخه مختلف بنویسید و بهترین را انتخاب کنید.', detail: 'نسخه A: تمرکز بر ویژگی | نسخه B: تمرکز بر مزیت | نسخه C: تمرکز بر داستان' },
        { title: 'SEO Optimization', description: 'محتوا را با کلمات کلیدی، ساختار Heading، و لینک‌سازی بهینه کنید.', detail: 'استفاده از Surfer SEO + ChatGPT' },
      ]} />
    </div>
  );
}

function Lesson3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">تولید تصویر با هوش مصنوعی</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        تولید تصویر با AI یکی از هیجان‌انگیزترین حوزه‌هاست. در این درس، ساختار پرامپت‌نویسی حرفه‌ای برای تصویر و تکنیک‌های پیشرفته را یاد می‌گیرید.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">ساختار پرامپت تصویر</h3>
      <FlowDiagram
        title="فرمول پرامپت تصویر"
        nodes={[
          { label: 'موضوع', sublabel: 'چه چیزی؟', color: 'from-purple-500 to-indigo-500' },
          { label: 'سبک', sublabel: 'چه سبکی؟', color: 'from-pink-500 to-rose-500' },
          { label: 'جزئیات', sublabel: 'چه المان‌هایی؟', color: 'from-cyan-500 to-blue-500' },
          { label: 'نور', sublabel: 'چه نوری؟', color: 'from-amber-500 to-orange-500' },
          { label: 'رنگ', sublabel: 'چه پالتی؟', color: 'from-emerald-500 to-teal-500' },
          { label: 'کامپوزیشن', sublabel: 'چه زاویه‌ای؟', color: 'from-violet-500 to-purple-500' },
        ]}
      />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">مثال‌های عملی پرامپت</h3>

      <Tabs tabs={[
        { label: 'لوگو', content: (
          <div>
            <CodeBlock title="پرامپت Midjourney - لوگو" language="text" code={`/imagine minimalist logo design for a coffee shop named "Cafe Noir", 
clean lines, geometric shapes, black and gold color scheme, 
white background, vector style, professional, modern
--v 6 --style raw --ar 1:1 --q 2`} />
            <InfoCard type="tip" title="نکات مهم لوگو">
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li>همیشه پس‌زمینه سفید درخواست کنید</li>
                <li>از style raw برای نتیجه واقعی‌تر استفاده کنید</li>
                <li>نسبت 1:1 برای لوگو مناسب است</li>
                <li>بعد از تولید، در Illustrator وکتورایز کنید</li>
              </ul>
            </InfoCard>
          </div>
        )},
        { label: 'بنر تبلیغاتی', content: (
          <div>
            <CodeBlock title="پرامپت DALL-E 3 - بنر" language="text" code={`یک تصویر برای بنر تبلیغاتی یک رستوران ایرانی بساز.
فضای رستوران سنتی با عناصر مدرن، نور گرم، 
غذاهای ایرانی روی میز چیده شده، حس لوکس و در عین حال صمیمی.
نسبت تصویر ۱۶:۹، کیفیت بالا، مناسب بنر وب‌سایت.`} />
          </div>
        )},
        { label: 'پست اینستاگرام', content: (
          <div>
            <CodeBlock title="پرامپت Midjourney - پست" language="text" code={`/imagine flat lay photography of healthy breakfast bowl, 
top view, natural lighting, pastel colors, food photography, 
instagram style, vibrant and fresh, minimalist composition
--v 6 --ar 1:1 --q 2`} />
          </div>
        )},
        { label: 'عکس محصول', content: (
          <div>
            <CodeBlock title="پرامپت - عکس محصول" language="text" code={`/imagine product photography of luxury perfume bottle, 
dramatic studio lighting, dark gradient background, 
reflections on glossy surface, premium feel, 
commercial photography, 8k quality, sharp focus
--v 6 --ar 4:5 --style raw`} />
          </div>
        )},
      ]} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">پارامترهای مهم Midjourney</h3>
      <ComparisonTable
        title="پارامترهای کلیدی"
        headers={['پارامتر', 'کاربرد', 'مثال']}
        rows={[
          ['--v 6', 'نسخه مدل', 'بهترین کیفیت'],
          ['--ar 16:9', 'نسبت تصویر', 'بنر و هدر'],
          ['--ar 1:1', 'مربع', 'لوگو و پست'],
          ['--ar 9:16', 'عمودی', 'استوری و ریلز'],
          ['--style raw', 'سبک واقعی', 'عکس محصول'],
          ['--q 2', 'کیفیت بالا', 'خروجی نهایی'],
          ['--s 750', 'Stylization', 'هنری‌تر'],
          ['--no [x]', 'حذف عنصر', '--no text'],
          ['--chaos 30', 'تنوع نتایج', 'ایده‌های مختلف'],
        ]}
      />

      <InfoCard type="warning" title="نکته مهم درباره کپی‌رایت">
        تصاویر تولیدشده با AI در ایران هنوز از نظر قانونی منطقه خاکستری هستند. برای استفاده تجاری، بهتر است تصاویر را به عنوان مرجع استفاده کنید و در ابزارهای گرافیکی ویرایش نهایی را انجام دهید.
      </InfoCard>
    </div>
  );
}

function Lesson4() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">تولید ویدیو و محتوای صوتی با AI</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        ویدیو و صوت قدرتمندترین فرمت‌های محتوا هستند. در این درس، ابزارها و تکنیک‌های تولید ویدیو و صوت با AI را یاد می‌گیرید.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">ابزارهای تولید ویدیو</h3>
      <ComparisonTable
        title="مقایسه ابزارهای ویدیویی"
        headers={['ابزار', 'بهترین برای', 'کیفیت', 'قیمت', 'سرعت']}
        rows={[
          ['Runway Gen-3', 'ویدیو سینمایی', 'عالی', '$15/ماه', '۲-۵ دقیقه'],
          ['Kling AI', 'ویدیو بلند', 'عالی', 'اشتراک', '۳-۱۰ دقیقه'],
          ['Synthesia', 'آواتار انسانی', 'خوب', '$30/ماه', 'فوری'],
          ['HeyGen', 'ترجمه ویدیو', 'خوب', '$29/ماه', '۵-۱۵ دقیقه'],
          ['Pika', 'ویدیو کوتاه', 'خوب', 'رایگان/$10', '۱-۲ دقیقه'],
          ['CapCut', 'ویرایش', 'عالی', 'رایگان/$8', 'فوری'],
        ]}
      />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">ساخت ویدیوی کامل یوتیوب</h3>
      <Timeline steps={[
        { title: 'اسکریپت', description: 'با ChatGPT/Claude اسکریپت ویدیو را بنویسید.', detail: 'شامل: مقدمه، بدنه، CTA. زمان: ۳۰ دقیقه' },
        { title: 'نریشن', description: 'با ElevenLabs نریشن صوتی تولید کنید.', detail: 'صدا: فارسی، لحن حرفه‌ای. زمان: ۱۰ دقیقه' },
        { title: 'تصاویر', description: 'با Midjourney/DALL-E تصاویر مورد نیاز را بسازید.', detail: '۱۰-۲۰ تصویر برای ویدیو. زمان: ۳۰ دقیقه' },
        { title: 'کلیپ ویدیویی', description: 'با Runway/Pika کلیپ‌های کوتاه بسازید.', detail: '۵-۱۰ کلیپ ۳-۵ ثانیه‌ای. زمان: ۲۰ دقیقه' },
        { title: 'موسیقی', description: 'با Suno موسیقی پس‌زمینه بسازید.', detail: 'سبک: مناسب موضوع ویدیو. زمان: ۱۰ دقیقه' },
        { title: 'تدوین', description: 'با CapCut همه را ترکیب و ویرایش کنید.', detail: 'زیرنویس، ترنزیشن، افکت. زمان: ۶۰ دقیقه' },
        { title: 'تامبنیل', description: 'با Midjourney + Canva تامبنیل جذاب بسازید.', detail: 'رنگ‌های متضاد، چهره، متن بزرگ. زمان: ۱۵ دقیقه' },
      ]} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">تولید پادکست با AI</h3>
      <CodeBlock title="پرامپت اسکریپت پادکست" language="text" code={`یک اسکریپت پادکست ۲۰ دقیقه‌ای درباره "آینده هوش مصنوعی در ایران" بنویس.

فرمت: دو مجری (علی و سارا)
لحن: صمیمی و تخصصی
ساختار:
- مقدمه (۲ دقیقه): معرفی موضوع + هوک جذاب
- بخش ۱ (۵ دقیقه): وضعیت فعلی AI در ایران
  * مثال‌های واقعی از شرکت‌های ایرانی
  * آمار و ارقام
- بخش ۲ (۵ دقیقه): چالش‌ها و فرصت‌ها
  * چالش: تحریم، زیرساخت، آموزش
  * فرصت: بازار بزرگ، استعداد بالا
- بخش ۳ (۵ دقیقه): پیش‌بینی آینده
  * ۳ پیش‌بینی کوتاه‌مدت (۱ ساله)
  * ۳ پیش‌بینی بلندمدت (۵ ساله)
- جمع‌بندی (۳ دقیقه): نکات کلیدی + CTA

شامل: دیالوگ طبیعی بین دو مجری، 
سوال و جواب، مثال‌های عملی، و توصیه‌های کاربردی`} />

      <InfoCard type="success" title="ترکیب طلایی تولید ویدیو">
        ChatGPT (اسکریپت) + ElevenLabs (نریشن) + Midjourney (تصاویر) + Runway (کلیپ) + Suno (موسیقی) + CapCut (تدوین) = ویدیوی حرفه‌ای در کمتر از ۳ ساعت
      </InfoCard>
    </div>
  );
}

function Lesson5() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">استراتژی محتوایی با AI</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        تولید محتوا بدون استراتژی مثل تیراندازی در تاریکی است. در این درس یاد می‌گیرید چگونه یک استراتژی محتوایی کامل با کمک AI طراحی کنید.
      </p>

      <CodeBlock title="پرامپت استراتژی محتوایی" language="text" code={`یک استراتژی محتوایی ۳ ماهه برای یک فروشگاه آنلاین لوازم آرایشی بنویس.

اطلاعات کسب‌وکار:
- نام: بیوتی‌شاپ
- محصولات: لوازم آرایشی و بهداشتی
- مخاطب هدف: خانم‌ها ۲۰-۴۰ سال
- پلتفرم‌ها: اینستاگرام، وب‌سایت، ایمیل
- بودجه محتوا: ۱۰ میلیون تومان/ماه
- هدف: افزایش فروش ۵۰٪ در ۳ ماه

خروجی مورد نظر:
1. تقویم محتوایی ۹۰ روزه (هفته به هفته)
2. ستون‌های محتوایی (Content Pillars)
3. نسبت انواع محتوا (آموزشی/سرگرمی/فروش)
4. فرکانس انتشار هر پلتفرم
5. KPI‌ها و نحوه اندازه‌گیری
6. بودجه‌بندی (تخصیص ۱۰ میلیون)
7. ایده‌های کمپین ویژه (مناسبت‌ها)`} />

      <Accordion title="ستون‌های محتوایی (Content Pillars)">
        <p className="text-gray-300 text-sm mb-3">ستون‌های محتوایی موضوعات اصلی هستند که همیشه درباره آن‌ها محتوا تولید می‌کنید:</p>
        <ComparisonTable headers={['ستون', 'درصد', 'نوع محتوا', 'هدف']} rows={[
          ['آموزش مراقبت پوست', '۳۰٪', 'آموزشی', 'اعتمادسازی'],
          ['معرفی محصول', '۲۵٪', 'فروش', 'تبدیل'],
          ['نظرات مشتریان', '۲۰٪', 'اجتماعی', 'اعتماد'],
          ['پشت صحنه', '۱۵٪', 'سرگرمی', 'ارتباط'],
          ['ترندها و اخبار', '۱۰٪', ' timely', 'دیده‌شدن'],
        ]} />
      </Accordion>
    </div>
  );
}

function Lesson6() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">اتوماسیون تولید محتوا</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        با اتوماسیون، فرآیند تولید محتوا را خودکار کنید و زمان خود را ۸۰٪ کاهش دهید.
      </p>

      <FlowDiagram
        title="Workflow اتوماسیون محتوا"
        nodes={[
          { label: 'تریگر', sublabel: 'زمان/رویداد', color: 'from-purple-500 to-indigo-500' },
          { label: 'تولید', sublabel: 'AI محتوا می‌سازد', color: 'from-pink-500 to-rose-500' },
          { label: 'بازبینی', sublabel: 'تأیید انسانی', color: 'from-amber-500 to-orange-500' },
          { label: 'انتشار', sublabel: 'خودکار منتشر شود', color: 'from-emerald-500 to-teal-500' },
        ]}
      />

      <CodeBlock title="اتوماسیون با Zapier/Make" language="text" code={`Workflow: تولید خودکار پست اینستاگرام

تریگر: هر شنبه ساعت ۹ صبح
  |
  v
مرحله ۱: ChatGPT API
  - پرامپت: "یک پست آموزشی درباره مراقبت پوست بنویس"
  - خروجی: کپشن + هشتگ‌ها
  |
  v
مرحله ۲: Midjourney/DALL-E API
  - پرامپت: "تصویر مرتبط با موضوع پست"
  - خروجی: URL تصویر
  |
  v
مرحله ۳: Canva API
  - تمپلیت آماده + متن + تصویر
  - خروجی: فایل نهایی
  |
  v
مرحله ۴: Google Sheets
  - ذخیره محتوا برای بازبینی
  - ارسال نوتیفیکیشن به تلگرام
  |
  v
مرحله ۵: تأیید انسانی
  - بازبینی و تأیید در Google Sheets
  |
  v
مرحله ۶: انتشار خودکار
  - Buffer/Later API
  - انتشار در زمان بهینه`} />
    </div>
  );
}

function Lesson7() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">کسب درآمد از تولید محتوا</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        تولید محتوا با AI یکی از سریع‌ترین مسیرهای کسب درآمد است. در این درس مدل‌های درآمدزایی و قیمت‌گذاری را یاد می‌گیرید.
      </p>

      <ComparisonTable
        title="مدل‌های درآمدزایی"
        headers={['مدل', 'درآمد ماهانه', 'زمان رسیدن', 'مهارت لازم']}
        rows={[
          ['ادمین شبکه اجتماعی', '۵-۲۰ میلیون', '۱ ماه', 'تولید محتوا + طراحی'],
          ['نویسنده محتوا', '۵-۱۵ میلیون', '۱ ماه', 'پرامپت‌نویسی + سئو'],
          ['طراح گرافیک AI', '۵-۲۰ میلیون', '۲ ماه', 'Midjourney + Canva'],
          ['تولیدکننده ویدیو', '۸-۳۰ میلیون', '۲-۳ ماه', 'Runway + CapCut'],
          ['استراتژیست محتوا', '۱۵-۵۰ میلیون', '۳-۶ ماه', 'استراتژی + تحلیل'],
          ['فروش تمپلیت', '۲-۱۵ میلیون', '۱ ماه', 'طراحی + بازاریابی'],
        ]}
      />

      <ComparisonTable
        title="جدول قیمت‌گذاری"
        headers={['خدمت', 'قیمت حداقل', 'قیمت متوسط', 'قیمت حرفه‌ای']}
        rows={[
          ['مدیریت اینستاگرام (ماهانه)', '۵ میلیون', '۱۲ میلیون', '۲۵ میلیون'],
          ['مقاله ۲۰۰۰ کلمه', '۳۰۰ هزار', '۸۰۰ هزار', '۲ میلیون'],
          ['پست اینستاگرام (هر عدد)', '۱۰۰ هزار', '۳۰۰ هزار', '۷۰۰ هزار'],
          ['لوگو با AI', '۵۰۰ هزار', '۱.۵ میلیون', '۳ میلیون'],
          ['ویدیو ریلز ۳۰ ثانیه', '۵۰۰ هزار', '۱.۵ میلیون', '۴ میلیون'],
          ['استراتژی محتوایی (ماهانه)', '۳ میلیون', '۸ میلیون', '۲۰ میلیون'],
        ]}
      />

      <InfoCard type="success" title="مسیر پیشنهادی">
        <p className="mb-2">ماه ۱: یادگیری ابزارها + ساخت ۱۰ نمونه کار</p>
        <p className="mb-2">ماه ۲: ثبت‌نام در فریلنسری + گرفتن ۲-۳ مشتری</p>
        <p className="mb-2">ماه ۳: افزایش قیمت + تخصص‌گرایی</p>
        <p>ماه ۴+: رسیدن به درآمد ۱۰+ میلیون/ماه</p>
      </InfoCard>
    </div>
  );
}

const lessonComponents: Record<number, React.FC> = {
  1: Lesson1, 2: Lesson2, 3: Lesson3, 4: Lesson4, 5: Lesson5, 6: Lesson6, 7: Lesson7,
};

export default function ContentCreation() {
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
        <SectionHeading
          title="تولید محتوا با AI"
          subtitle="تسلط کامل بر تولید محتوای متنی، تصویری، ویدیویی و صوتی"
          badge="۷ درس | ۱۸ ساعت آموزش"
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-pink-300">سرفصل‌های دوره</h3>
                <span className="text-xs text-gray-500">{activeLesson + 1}/{lessons.length}</span>
              </div>
              <div className="mb-4">
                <ProgressBar value={activeLesson + 1} max={lessons.length} label="پیشرفت دوره" color="pink" />
              </div>
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pl-1">
                {lessons.map((lesson, index) => (
                  <button key={lesson.id} onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-3 py-3 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 ${
                      activeLesson === index ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                      : index < activeLesson ? 'text-gray-300 hover:bg-white/5 border border-transparent'
                      : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeLesson === index ? 'bg-pink-500 text-white' : index < activeLesson ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-gray-500'
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
            <div className="glass-card p-6 sm:p-8">
              <ActiveComponent />
            </div>
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
