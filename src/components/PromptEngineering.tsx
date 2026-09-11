import { useState } from 'react';
import { CodeBlock, InfoCard, ComparisonTable, SectionHeading, ProgressBar } from './ui';
import { FlashCards, ScenarioSimulator, PromptBuilder, AnimatedProcess, KnowledgeMap, InteractiveFlow } from './ui/interactive';

const lessons = [
  { id: 1, title: 'مبانی پرامپت‌نویسی', duration: '۶۰ دقیقه', difficulty: 'مبتدی' },
  { id: 2, title: 'فرمول‌های حرفه‌ای پرامپت', duration: '۹۰ دقیقه', difficulty: 'متوسط' },
  { id: 3, title: 'تکنیک‌های پیشرفته', duration: '۹۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 4, title: 'پرامپت برای تولید کد', duration: '۷۵ دقیقه', difficulty: 'متوسط' },
  { id: 5, title: 'پرامپت برای محتوا', duration: '۷۵ دقیقه', difficulty: 'متوسط' },
  { id: 6, title: 'پرامپت برای تحلیل داده', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 7, title: 'پرامپت برای کسب‌وکار', duration: '۶۰ دقیقه', difficulty: 'پیشرفته' },
  { id: 8, title: 'اشتباهات رایج و راه‌حل‌ها', duration: '۴۵ دقیقه', difficulty: 'مبتدی' },
  { id: 9, title: 'مقایسه مدل‌های زبانی', duration: '۶۰ دقیقه', difficulty: 'متوسط' },
  { id: 10, title: 'کتابخانه پرامپت‌های آماده', duration: '۹۰ دقیقه', difficulty: 'همه سطوح' },
];

function Lesson1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">مبانی پرامپت‌نویسی</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        پرامپت‌نویسی هنر ارتباط مؤثر با هوش مصنوعی است. یک پرامپت خوب می‌تواند تفاوت بین یک خروجی متوسط و یک شاهکار باشد. در این درس، اصول پایه و ساختار پرامپت‌های مؤثر را یاد می‌گیرید.
      </p>

      <InfoCard type="info" title="پرامپت چیست؟">
        <p>پرامپت، ورودی متنی شما به مدل هوش مصنوعی است. این ورودی می‌تواند یک سوال، دستور، توضیح یا ترکیبی از این‌ها باشد. کیفیت پرامپت شما مستقیماً بر کیفیت خروجی تأثیر می‌گذارد.</p>
      </InfoCard>

      <AnimatedProcess title="فرآیند نوشتن یک پرامپت مؤثر" steps={[
        { label: 'تعریف هدف', description: 'قبل از هر چیز، مشخص کنید دقیقاً چه می‌خواهید. آیا دنبال اطلاعات هستید؟ تولید محتوا؟ حل مسئله؟', icon: '\u{1F3AF}', duration: '۵ دقیقه' },
        { label: 'شناخت مخاطب', description: 'مشخص کنید خروجی برای چه کسی است. لحن، سطح تخصص، و فرمت باید متناسب با مخاطب باشد.', icon: '\u{1F465}', duration: '۳ دقیقه' },
        { label: 'جمع‌آوری اطلاعات', description: 'تمام اطلاعات مرتبط را جمع کنید: زمینه، محدودیت‌ها، ترجیحات، نمونه‌ها.', icon: '\u{1F4DA}', duration: '۱۰ دقیقه' },
        { label: 'ساختاردهی', description: 'اطلاعات را در یک ساختار منطقی قرار دهید: زمینه، نقش، دستور، فرمت، محدودیت‌ها.', icon: '\u{1F3D7}', duration: '۵ دقیقه' },
        { label: 'نوشتن پرامپت', description: 'پرامپت را با دقت بنویسید. از زبان واضح و بدون ابهام استفاده کنید.', icon: '\u{270D}', duration: '۱۰ دقیقه' },
        { label: 'بازبینی و تست', description: 'پرامپت را بازخوانی کنید و در صورت نیاز اصلاح کنید. با یک تست کوچک شروع کنید.', icon: '\u{2705}', duration: '۵ دقیقه' },
      ]} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">ساختار پایه یک پرامپت</h3>
      <CodeBlock title="ساختار استاندارد پرامپت" language="text" code={`[نقش] تو یک [نوع متخصص] هستی با [تعداد] سال تجربه در [حوزه].

[زمینه] من [توضیح مختصر پروژه/نیاز].

[دستور] لطفاً [کاری که باید انجام شود] را انجام بده.

[جزئیات] 
- [جزئیات ۱]
- [جزئیات ۲]
- [جزئیات ۳]

[فرمت خروجی] خروجی را به صورت [فرمت مورد نظر] ارائه بده.

[محدودیت‌ها] 
- [محدودیت ۱]
- [محدودیت ۲]

[نمونه] (اختیاری) یک مثال از خروجی مورد نظر:
[نمونه خروجی]`} />

      <ComparisonTable title="مقایسه پرامپت ضعیف و قوی" headers={['پرامپت ضعیف', 'پرامپت قوی', 'چرا؟']} rows={[
        ['یه مقاله بنویس', 'یک مقاله ۲۰۰۰ کلمه‌ای درباره تأثیر AI بر آموزش، برای مخاطب معلم‌ها، با لحن حرفه‌ای و مثال‌های ایرانی بنویس', 'مشخص کردن طول، موضوع، مخاطب، لحن و مثال'],
        ['کد بزن', 'یک تابع Python بنویس که لیست اعداد را مرتب کند. از الگوریتم QuickSort استفاده کن. با type hint و docstring', 'مشخص کردن زبان، الگوریتم، و استانداردها'],
        ['ترجمه کن', 'این متن را به فارسی روان ترجمه کن. اصطلاحات تخصصی را در پرانتز به انگلیسی بیاور. لحن رسمی باشد', 'مشخص کردن زبان مقصد، سبک، و نحوه برخورد با اصطلاحات'],
        ['ایده بده', '۱۰ ایده برای کسب‌وکار آنلاین در ایران با سرمایه اولیه زیر ۵۰ میلیون تومان. برای هر ایده: نام، توضیح، بازار هدف، درآمد تخمینی', 'مشخص کردن تعداد، محدودیت، و ساختار خروجی'],
      ]} />

      <FlashCards title="تمرین: مفاهیم پایه پرامپت‌نویسی" cards={[
        { front: 'Context (زمینه) در پرامپت یعنی چه؟', back: 'زمینه، اطلاعات پس‌زمینه‌ای است که به AI کمک می‌کند موقعیت و نیاز شما را درک کند. مثلاً: "من یک صاحب کسب‌وکار کوچک هستم" یا "این متن برای سایت شرکتی است".', category: 'مفاهیم پایه' },
        { front: 'چرا Role (نقش) مهم است؟', back: 'وقتی به AI نقش می‌دهید (مثلاً "تو یک متخصص سئو هستی")، مدل از دانش و لحن مرتبط با آن نقش استفاده می‌کند و خروجی تخصصی‌تری تولید می‌کند.', category: 'مفاهیم پایه' },
        { front: 'Few-Shot Prompting چیست؟', back: 'ارائه چند مثال به AI قبل از درخواست اصلی. این کار به مدل کمک می‌کند الگو، سبک و فرمت مورد نظر شما را بفهمد و خروجی مشابه تولید کند.', category: 'تکنیک‌ها' },
        { front: 'Chain of Thought یعنی چه؟', back: 'درخواست از AI برای فکر کردن مرحله به مرحله. مثلاً: "قبل از پاسخ، مرحله به مرحله فکر کن". این تکنیک دقت را در مسائل پیچیده به طور چشمگیری افزایش می‌دهد.', category: 'تکنیک‌ها' },
        { front: 'Temperature در پرامپت یعنی چه؟', back: 'Temperature میزان خلاقیت و تصادفی بودن خروجی را کنترل می‌کند. مقدار پایین (۰.۲) = خروجی دقیق و قابل پیش‌بینی. مقدار بالا (۰.۸) = خروجی خلاقانه و متنوع.', category: 'تنظیمات' },
      ]} />
    </div>
  );
}

function Lesson2() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">فرمول‌های حرفه‌ای پرامپت</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        در این درس، فرمول‌های اثبات‌شده برای نوشتن پرامپت‌های حرفه‌ای را یاد می‌گیرید. هر فرمول برای نوع خاصی از کار بهینه شده است.
      </p>

      <InteractiveFlow title="فرمول‌های اصلی پرامپت‌نویسی" steps={[
        { id: 'craft', title: 'فرمول CRAFT', description: 'فرمول جامع برای اکثر کاربردها. مناسب برای کارهای عمومی و حرفه‌ای.', icon: '\u{1F3AF}', color: 'bg-gradient-to-br from-purple-500 to-indigo-500',
          details: ['C - Context: زمینه و پس‌زمینه پروژه', 'R - Role: نقشی که AI باید بگیرد', 'A - Action: عمل مشخصی که باید انجام شود', 'F - Format: فرمت خروجی مورد نظر', 'T - Tone: لحن و سبک کاری'] },
        { id: 'race', title: 'فرمول RACE', description: 'فرمول سریع برای کارهای روزمره. مناسب وقتی عجله دارید.', icon: '\u{26A1}', color: 'bg-gradient-to-br from-pink-500 to-rose-500',
          details: ['R - Role: نقش', 'A - Action: عمل', 'C - Context: زمینه', 'E - Expectation: انتظار از خروجی'] },
        { id: 'trace', title: 'فرمول TRACE', description: 'فرمول تخصصی برای کارهای تحلیلی و پژوهشی.', icon: '\u{1F50D}', color: 'bg-gradient-to-br from-cyan-500 to-blue-500',
          details: ['T - Task: وظیفه اصلی', 'R - Request: درخواست خاص', 'A - Action: اقدامات لازم', 'C - Context: اطلاعات زمینه', 'E - Extra: اطلاعات اضافی و محدودیت‌ها'] },
        { id: 'care', title: 'فرمول CARE', description: 'فرمول خلاقانه برای کارهای هنری و تولید محتوا.', icon: '\u{1F3A8}', color: 'bg-gradient-to-br from-amber-500 to-orange-500',
          details: ['C - Context: زمینه خلاقانه', 'A - Audience: مخاطب هدف', 'R - Role: نقش خلاق', 'E - Emotion: احساس مورد نظر'] },
        { id: 'smart', title: 'فرمول SMART', description: 'فرمول دقیق برای اهداف مشخص و قابل اندازه‌گیری.', icon: '\u{1F4CA}', color: 'bg-gradient-to-br from-emerald-500 to-teal-500',
          details: ['S - Specific: مشخص و دقیق', 'M - Measurable: قابل اندازه‌گیری', 'A - Achievable: قابل دستیابی', 'R - Relevant: مرتبط با هدف', 'T - Time-bound: محدود به زمان'] },
      ]} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">سازنده پرامپت تعاملی</h3>
      <PromptBuilder title="پرامپت خود را بسازید"
        fields={[
          { label: 'نقش AI', placeholder: 'مثلاً: متخصص سئو با ۱۰ سال تجربه', type: 'select', options: ['متخصص سئو', 'توسعه‌دهنده وب', 'نویسنده محتوا', 'طراح گرافیک', 'مشاور کسب‌وکار', 'معلم زبان'] },
          { label: 'زمینه کار', placeholder: 'توضیح مختصر درباره پروژه یا نیاز شما' },
          { label: 'دستور اصلی', placeholder: 'دقیقاً چه کاری باید انجام شود؟' },
          { label: 'مخاطب خروجی', placeholder: 'این خروجی برای چه کسی است؟', type: 'select', options: ['عموم مردم', 'متخصصان', 'دانشجویان', 'کودکان', 'مدیران', 'مشتریان'] },
          { label: 'فرمت خروجی', placeholder: 'خروجی چگونه باشد؟', type: 'select', options: ['مقاله', 'لیست', 'جدول', 'کد', 'ایمیل', 'اسکریپت'] },
          { label: 'لحن', placeholder: 'سبک نوشتاری', type: 'select', options: ['رسمی', 'دوستانه', 'تخصصی', 'ساده', 'انگیزشی', 'طنز'] },
        ]}
        output={(values) => `تو یک ${values[0]} هستی.

زمینه: ${values[1]}

وظیفه: ${values[2]}

مخاطب: ${values[3]}
فرمت خروجی: ${values[4]}
لحن: ${values[5]}

لطفاً با رعایت تمام موارد بالا، بهترین خروجی ممکن را ارائه بده. قبل از شروع، یک بار دیگر درخواست را مرور کن و اگر نیاز به توضیح بیشتری داری، سوال بپرس.`}
      />

      <ScenarioSimulator title="سناریوهای واقعی پرامپت‌نویسی" scenarios={[
        { situation: 'مشتری از شما خواسته یک مقاله درباره "فواید قهوه" بنویسید. چگونه پرامپت می‌نویسید؟', options: [
          { text: 'یک مقاله درباره قهوه بنویس', result: 'خروجی کلی و غیرتخصصی. ممکن است برای مخاطب شما مناسب نباشد و ساختار مشخصی نداشته باشد.', quality: 'good' },
          { text: 'یک مقاله ۱۵۰۰ کلمه‌ای درباره فواید علمی قهوه برای مخاطب عمومی بنویس. با رفرنس به تحقیقات معتبر و لحن ساده', result: 'خروجی هدفمند با طول مشخص، مخاطب مشخص، و منبع معتبر. مناسب برای انتشار در بلاگ.', quality: 'best' },
          { text: 'مقاله قهوه - ۱۰۰۰ کلمه', result: 'خیلی کوتاه و بدون جزئیات. AI نمی‌داند چه نوع مقاله‌ای، برای چه کسی، و با چه ساختاری بنویسد.', quality: 'good' },
        ]},
        { situation: 'می‌خواهید یک API برای فروشگاه آنلاین بسازید. پرامپت شما چیست؟', options: [
          { text: 'یه API بساز', result: 'خیلی کلی. AI نمی‌داند چه زبان، چه فریم‌ورک، چه اندپوینت‌ها، و چه ساختاری مد نظر شماست.', quality: 'good' },
          { text: 'یک REST API با Node.js و Express برای فروشگاه آنلاین بساز. شامل: محصولات، کاربران، سفارشات. با JWT auth و MongoDB', result: 'مشخص کردن تکنولوژی، ساختار، و نیازمندی‌های اصلی. AI می‌تواند یک پایه قوی بسازد.', quality: 'better' },
          { text: 'یک REST API با Node.js + Express + MongoDB برای فروشگاه آنلاین بساز. اندپوینت‌ها: CRUD محصولات، احراز هویت JWT، سبد خرید، سفارشات. با ساختار MVC، validation با Joi، و Swagger docs. کد TypeScript باشد', result: 'پرامپت کامل با تمام جزئیات: تکنولوژی، اندپوینت‌ها، معماری، validation، مستندات. خروجی حرفه‌ای و قابل استفاده.', quality: 'best' },
        ]},
      ]} />
    </div>
  );
}

function Lesson3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">تکنیک‌های پیشرفته پرامپت‌نویسی</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        پس از تسلط بر مبانی، وقت آن است که تکنیک‌های پیشرفته‌ای را یاد بگیرید که خروجی AI را به سطح جدیدی می‌رساند.
      </p>

      <KnowledgeMap title="نقشه تکنیک‌های پیشرفته" nodes={[
        { id: 'cot', label: 'Chain of Thought', level: 'intermediate', connections: ['Self-Consistency', 'Tree of Thoughts'], description: 'درخواست از AI برای فکر کردن مرحله به مرحله. مناسب مسائل ریاضی، منطقی و تحلیلی. دقت را تا ۸۰٪ افزایش می‌دهد.' },
        { id: 'fewshot', label: 'Few-Shot Learning', level: 'basic', connections: ['Zero-Shot', 'One-Shot'], description: 'ارائه چند مثال قبل از درخواست. به AI کمک می‌کند الگو و سبک مورد نظر را بفهمد.' },
        { id: 'tot', label: 'Tree of Thoughts', level: 'advanced', connections: ['Chain of Thought', 'Self-Reflection'], description: 'AI چند مسیر فکری را بررسی می‌کند و بهترین را انتخاب می‌کند. مناسب مسائل پیچیده.' },
        { id: 'self', label: 'Self-Reflection', level: 'advanced', connections: ['Chain of Thought', 'Tree of Thoughts'], description: 'AI خروجی خود را بررسی و اصلاح می‌کند. مناسب کارهای با کیفیت بالا.' },
        { id: 'meta', label: 'Meta Prompting', level: 'advanced', connections: ['Self-Reflection', 'Role Playing'], description: 'از AI بخواهید پرامپت بهتری برای شما بنویسد. مناسب وقتی نمی‌دانید چه بخواهید.' },
        { id: 'role', label: 'Role Playing', level: 'basic', connections: ['Meta Prompting', 'Persona'], description: 'دادن نقش خاص به AI. کیفیت خروجی را به طور چشمگیری بهبود می‌دهد.' },
        { id: 'persona', label: 'Persona Creation', level: 'intermediate', connections: ['Role Playing', 'Few-Shot Learning'], description: 'ساخت شخصیت دقیق برای AI با تاریخچه، تخصص، و سبک خاص.' },
        { id: 'sc', label: 'Self-Consistency', level: 'intermediate', connections: ['Chain of Thought', 'Tree of Thoughts'], description: 'چند بار سوال بپرسید و پاسخ‌های مشترک را انتخاب کنید. دقت را افزایش می‌دهد.' },
      ]} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">تکنیک Chain of Thought</h3>
      <CodeBlock title="مثال Chain of Thought" language="text" code={`سوال: یک فروشگاه روز اول ۱۰۰ مشتری داشت. روز دوم ۲۰٪ بیشتر. روز سوم ۱۵٪ کمتر از روز دوم. مجموع مشتریان سه روز چقدر است؟

پرامپت با CoT:
"این مسئله را مرحله به مرحله حل کن. قبل از پاسخ نهایی، هر مرحله را با محاسبات نشان بده."

پاسخ AI:
مرحله ۱: روز اول = ۱۰۰ مشتری
مرحله ۲: روز دوم = ۱۰۰ + (۱۰۰ × ۰.۲۰) = ۱۲۰ مشتری
مرحله ۳: روز سوم = ۱۲۰ - (۱۲۰ × ۰.۱۵) = ۱۰۲ مشتری
مرحله ۴: مجموع = ۱۰۰ + ۱۲۰ + ۱۰۲ = ۳۲۲ مشتری

پاسخ نهایی: ۳۲۲ مشتری`} />

      <h3 className="text-xl font-bold text-white mt-8 mb-4">تکنیک Meta Prompting</h3>
      <CodeBlock title="Meta Prompting - از AI بخواهید پرامپت بهتر بنویسد" language="text" code={`پرامپت Meta:
"من می‌خواهم [هدف شما] را انجام دهم.
به عنوان یک متخصص پرامپت‌نویسی، بهترین پرامپتی که می‌توانم 
برای رسیدن به این هدف به تو بدهم را بنویس.
سپس آن پرامپت را اجرا کن."

مثال:
"من می‌خواهم یک استراتژی بازاریابی برای فروشگاه آنلاین لوازم آرایشی بنویسم.
به عنوان یک متخصص پرامپت‌نویسی، بهترین پرامپتی که می‌توانم 
برای این کار به تو بدهم را بنویس.
سپس آن پرامپت را اجرا کن."`} />

      <InfoCard type="tip" title="نکته طلایی تکنیک‌های پیشرفته">
        این تکنیک‌ها را می‌توانید با هم ترکیب کنید. مثلاً: Role Playing + Chain of Thought + Few-Shot. هرچه تکنیک‌های بیشتری را درست استفاده کنید، خروجی بهتری می‌گیرید.
      </InfoCard>
    </div>
  );
}

function Lesson10() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">کتابخانه پرامپت‌های آماده</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        در این درس، مجموعه‌ای از پرامپت‌های آماده و تست‌شده برای کاربردهای مختلف را در اختیار شما قرار می‌دهیم. این پرامپت‌ها را می‌توانید مستقیماً استفاده کنید یا بر اساس نیاز خود تغییر دهید.
      </p>

      <ComparisonTable title="پرامپت‌های پرکاربرد" headers={['کاربرد', 'ساختار', 'مدل پیشنهادی']} rows={[
        ['نوشتن مقاله', 'CRAFT + CoT', 'ChatGPT-4 / Claude'],
        ['تولید کد', 'TRACE + Few-Shot', 'Claude / ChatGPT-4'],
        ['تحلیل داده', 'SMART + CoT', 'ChatGPT-4 / Claude'],
        ['ایده‌پردازی', 'CARE + Meta', 'ChatGPT-4 / Claude'],
        ['ترجمه', 'RACE + Few-Shot', 'Claude / ChatGPT-4'],
        ['خلاصه‌سازی', 'RACE + SMART', 'ChatGPT-4 / Claude'],
        ['تولید ایمیل', 'CRAFT + Persona', 'ChatGPT-4 / Claude'],
        ['طراحی UI', 'TRACE + Few-Shot', 'Claude / ChatGPT-4'],
      ]} />

      <FlashCards title="پرامپت‌های آماده - مرور سریع" cards={[
        { front: 'پرامپت نوشتن مقاله سئو شده', back: 'یک مقاله [تعداد] کلمه‌ای درباره "[موضوع]" بنویس. کلمه کلیدی: "[کلمه]". ساختار: H1 جذاب، ۵ بخش H2، FAQ، نتیجه‌گیری با CTA. لحن: [لحن]. مخاطب: [مخاطب].', category: 'محتوا' },
        { front: 'پرامپت ساخت کامپوننت React', back: 'یک کامپوننت React با TypeScript بنویس: [توضیح]. Props: [لیست]. استایل: Tailwind CSS. ریسپانسیو. با accessibility. کامپوننت‌های فرزند قابل تنظیم باشند.', category: 'کدنویسی' },
        { front: 'پرامپت تحلیل رقبا', back: 'به عنوان متخصص بازاریابی، [تعداد] رقیب اصلی [کسب‌وکار] را تحلیل کن. برای هر رقیب: نقاط قوت، نقاط ضعف، استراتژی قیمت، کانال‌های بازاریابی، و فرصت‌های ما برای تمایز.', category: 'کسب‌وکار' },
        { front: 'پرامپت تولید ایده', back: '۲۰ ایده [نوع ایده] برای [مخاطب/صنعت] پیشنهاد بده. هر ایده شامل: نام، توضیح کوتاه، بازار هدف، مدل درآمدی، و چالش اصلی. ایده‌ها خلاقانه و قابل اجرا باشند.', category: 'خلاقیت' },
      ]} />
    </div>
  );
}

const lessonComponents: Record<number, React.FC> = { 1: Lesson1, 2: Lesson2, 3: Lesson3, 10: Lesson10 };

// Generic lesson component for lessons without custom content
function GenericLesson({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        این درس شامل محتوای جامع و کاربردی درباره {title} است. در این بخش، تمام نکات کلیدی، تکنیک‌ها، مثال‌های عملی و تمرین‌های کاربردی را یاد می‌گیرید.
      </p>
      <InfoCard type="info" title="محتوای این درس">
        <ul className="space-y-2 list-disc list-inside text-sm">
          <li>مفاهیم پایه و تعاریف تخصصی</li>
          <li>تکنیک‌های حرفه‌ای با مثال‌های عملی</li>
          <li>پرامپت‌های آماده و قابل استفاده</li>
          <li>سناریوهای واقعی و راه‌حل‌ها</li>
          <li>تمرین‌های تعاملی برای یادگیری بهتر</li>
          <li>نکات طلایی و اشتباهات رایج</li>
        </ul>
      </InfoCard>
    </div>
  );
}

export default function PromptEngineering() {
  const [activeLesson, setActiveLesson] = useState(0);
  const CustomComponent = lessonComponents[activeLesson + 1];
  const ActiveComponent = CustomComponent || (() => <GenericLesson title={lessons[activeLesson].title} />);

  const difficultyColors: Record<string, string> = {
    'مبتدی': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'متوسط': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'پیشرفته': 'bg-red-500/20 text-red-300 border-red-500/30',
    'همه سطوح': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  };

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="پرامپت‌نویسی پیشرفته" subtitle="تسلط کامل بر هنر ارتباط با هوش مصنوعی - مهم‌ترین مهارت عصر AI" badge="۱۰ درس | ۲۰ ساعت آموزش" />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-purple-300">سرفصل‌های دوره</h3>
                <span className="text-xs text-gray-500">{activeLesson + 1}/{lessons.length}</span>
              </div>
              <div className="mb-4"><ProgressBar value={activeLesson + 1} max={lessons.length} label="پیشرفت دوره" color="purple" /></div>
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pl-1">
                {lessons.map((lesson, index) => (
                  <button key={lesson.id} onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-3 py-3 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 ${
                      activeLesson === index ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : index < activeLesson ? 'text-gray-300 hover:bg-white/5 border border-transparent'
                      : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeLesson === index ? 'bg-purple-500 text-white' : index < activeLesson ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-gray-500'
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
