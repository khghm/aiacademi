import { useState } from 'react';

const categories = [
  {
    id: 'text',
    title: 'ابزارهای متنی',
    icon: '📝',
    color: 'from-purple-500 to-indigo-500',
    tools: [
      {
        name: 'ChatGPT',
        description: 'قدرتمندترین چت‌بات هوش مصنوعی دنیا، مناسب برای نوشتن، ترجمه، برنامه‌نویسی و تحلیل',
        url: 'chat.openai.com',
        price: 'رایگان / پلاس $20/ماه',
        features: ['GPT-4o', 'تولید تصویر', 'تحلیل فایل', 'Plugins'],
        rating: 5,
        bestFor: 'همه کاربردها',
      },
      {
        name: 'Claude',
        description: 'محصول Anthropic، عالی برای نوشتن محتوای طولانی، تحلیل اسناد و برنامه‌نویسی',
        url: 'claude.ai',
        price: 'رایگان / پرو $20/ماه',
        features: ['۲۰۰K Context', 'تحلیل فایل', 'Artifacts', 'Projects'],
        rating: 5,
        bestFor: 'نوشتن و تحلیل',
      },
      {
        name: 'Gemini',
        description: 'هوش مصنوعی گوگل، یکپارچه با سرویس‌های گوگل، مناسب تحقیق و تحلیل',
        url: 'gemini.google.com',
        price: 'رایگان / Advanced $20/ماه',
        features: ['جستجوی وب', 'تحلیل تصویر', 'یکپارچه با گوگل', 'Multimodal'],
        rating: 4,
        bestFor: 'تحقیق و جستجو',
      },
      {
        name: 'Perplexity',
        description: 'موتور جستجوی AI، عالی برای تحقیق با ذکر منابع',
        url: 'perplexity.ai',
        price: 'رایگان / پرو $20/ماه',
        features: ['جستجوی وب', 'ذکر منابع', 'تحلیل عمیق', 'Pro Search'],
        rating: 4,
        bestFor: 'تحقیق و ریسرچ',
      },
      {
        name: 'Copy.ai',
        description: 'تخصصی برای کپی‌رایتینگ و محتوای تبلیغاتی',
        url: 'copy.ai',
        price: 'رایگان / پرو $49/ماه',
        features: ['۹۰+ تمپلیت', 'Workflow', 'تیم', 'API'],
        rating: 4,
        bestFor: 'کپی‌رایتینگ',
      },
    ],
  },
  {
    id: 'image',
    title: 'ابزارهای تصویری',
    icon: '🖼️',
    color: 'from-pink-500 to-rose-500',
    tools: [
      {
        name: 'Midjourney',
        description: 'بهترین ابزار تولید تصویر هنری با کیفیت فوق‌العاده',
        url: 'midjourney.com',
        price: 'از $10/ماه',
        features: ['کیفیت سینمایی', 'Styles متنوع', 'Upscale', 'Variations'],
        rating: 5,
        bestFor: 'تصاویر هنری و خلاقانه',
      },
      {
        name: 'DALL-E 3',
        description: 'تولید تصویر توسط OpenAI، یکپارچه با ChatGPT',
        url: 'از طریق ChatGPT',
        price: 'شامل ChatGPT Plus',
        features: ['فهم عالی پرامپت', 'متن در تصویر', 'ویرایش', 'یکپارچه با GPT'],
        rating: 5,
        bestFor: 'تصاویر دقیق و سفارشی',
      },
      {
        name: 'Leonardo AI',
        description: 'ابزار قدرتمند با کنترل دقیق، مناسب game art و طراحی',
        url: 'leonardo.ai',
        price: 'رایگان (محدود) / از $12/ماه',
        features: ['مدل‌های متنوع', 'ControlNet', 'Real-time', 'Fine-tune'],
        rating: 4,
        bestFor: 'طراحی بازی و کاراکتر',
      },
      {
        name: 'Canva AI',
        description: 'طراحی گرافیک با AI، مناسب غیرحرفه‌ای‌ها',
        url: 'canva.com',
        price: 'رایگان / پرو $13/ماه',
        features: ['Magic Design', 'حذف پس‌زمینه', 'تمپلیت', 'تیم'],
        rating: 4,
        bestFor: 'طراحی سریع و آسان',
      },
      {
        name: 'Remove.bg',
        description: 'حذف خودکار پس‌زمینه تصاویر',
        url: 'remove.bg',
        price: 'رایگان (کیفیت پایین) / از $9/ماه',
        features: ['حذف فوری', 'API', 'Batch', 'HD'],
        rating: 4,
        bestFor: 'حذف پس‌زمینه',
      },
    ],
  },
  {
    id: 'video',
    title: 'ابزارهای ویدیویی',
    icon: '🎬',
    color: 'from-cyan-500 to-blue-500',
    tools: [
      {
        name: 'Runway ML',
        description: 'پیشرفته‌ترین ابزار تولید و ویرایش ویدیو با AI',
        url: 'runwayml.com',
        price: 'رایگان (محدود) / از $15/ماه',
        features: ['Gen-3 Alpha', 'Text to Video', 'Video Edit', 'Motion Brush'],
        rating: 5,
        bestFor: 'تولید و ویرایش ویدیو',
      },
      {
        name: 'Kling AI',
        description: 'ابزار چینی با کیفیت فوق‌العاده برای ویدیوهای سینمایی',
        url: 'klingai.com',
        price: 'رایگان (محدود) / اشتراک ماهانه',
        features: ['ویدیو ۲ دقیقه', 'کیفیت ۱۰۸۰p', 'حرکت دوربین', 'افکت‌ها'],
        rating: 5,
        bestFor: 'ویدیوهای سینمایی',
      },
      {
        name: 'Synthesia',
        description: 'ساخت ویدیو با آواتار انسانی، مناسب آموزش و معرفی',
        url: 'synthesia.io',
        price: 'از $30/ماه',
        features: ['۱۶۰+ آواتار', '۱۳۰ زبان', 'لیپ‌سینک', 'برندینگ'],
        rating: 4,
        bestFor: 'ویدیوهای آموزشی',
      },
      {
        name: 'HeyGen',
        description: 'ترجمه ویدیو و لیپ‌سینک خودکار',
        url: 'heygen.com',
        price: 'رایگان (محدود) / از $29/ماه',
        features: ['ترجمه ویدیو', 'آواتار', 'لیپ‌سینک', 'API'],
        rating: 4,
        bestFor: 'ترجمه ویدیو',
      },
      {
        name: 'CapCut',
        description: 'ویرایش ویدیو رایگان با قابلیت‌های AI',
        url: 'capcut.com',
        price: 'رایگان / پرو $8/ماه',
        features: ['زیرنویس خودکار', 'حذف BG', 'افکت', 'تمپلیت'],
        rating: 4,
        bestFor: 'ویرایش سریع ویدیو',
      },
    ],
  },
  {
    id: 'audio',
    title: 'ابزارهای صوتی',
    icon: '🎵',
    color: 'from-amber-500 to-orange-500',
    tools: [
      {
        name: 'ElevenLabs',
        description: 'بهترین ابزار تبدیل متن به گفتار با کیفیت طبیعی',
        url: 'elevenlabs.io',
        price: 'رایگان (محدود) / از $5/ماه',
        features: ['۳۰+ زبان', 'Voice Cloning', 'احساسات', 'API'],
        rating: 5,
        bestFor: 'نریشن و پادکست',
      },
      {
        name: 'Suno AI',
        description: 'ساخت آهنگ کامل با وکال از متن',
        url: 'suno.com',
        price: 'رایگان (محدود) / پرو $10/ماه',
        features: ['آهنگ کامل', 'وکال', 'سبک‌های متنوع', 'لیریک'],
        rating: 5,
        bestFor: 'ساخت موسیقی',
      },
      {
        name: 'Murf AI',
        description: 'تبدیل متن به صدا با صداهای حرفه‌ای',
        url: 'murf.ai',
        price: 'رایگان (محدود) / از $23/ماه',
        features: ['۱۲۰+ صدا', 'تنظیم سرعت', 'پس‌زمینه', 'دانلود'],
        rating: 4,
        bestFor: 'ویدیوهای حرفه‌ای',
      },
      {
        name: 'Descript',
        description: 'ویرایش پادکست و ویدیو با ویرایش متن',
        url: 'descript.com',
        price: 'رایگان (محدود) / از $24/ماه',
        features: ['ویرایش متنی', 'حذف filler', 'ترجمه', 'Screen Record'],
        rating: 4,
        bestFor: 'ویرایش پادکست',
      },
    ],
  },
  {
    id: 'coding',
    title: 'ابزارهای کدنویسی',
    icon: '💻',
    color: 'from-emerald-500 to-teal-500',
    tools: [
      {
        name: 'Cursor',
        description: 'بهترین IDE مبتنی بر AI برای وایب کدینگ',
        url: 'cursor.com',
        price: 'رایگان (محدود) / پرو $20/ماه',
        features: ['AI Chat', 'Tab Completion', 'Codebase', 'Multi-file Edit'],
        rating: 5,
        bestFor: 'وایب کدینگ حرفه‌ای',
      },
      {
        name: 'Bolt.new',
        description: 'ساخت وب‌اپلیکیشن در مرورگر با AI',
        url: 'bolt.new',
        price: 'رایگان (محدود) / پرو $20/ماه',
        features: ['بدون نصب', 'Live Preview', 'Deploy', 'Full Stack'],
        rating: 5,
        bestFor: 'ساخت سریع وب‌اپ',
      },
      {
        name: 'v0 by Vercel',
        description: 'ساخت UI با AI، تخصصی React و Tailwind',
        url: 'v0.dev',
        price: 'رایگان (محدود) / پرو $20/ماه',
        features: ['React/Tailwind', 'Iterate', 'Components', 'Deploy'],
        rating: 4,
        bestFor: 'ساخت UI',
      },
      {
        name: 'GitHub Copilot',
        description: 'دستیار کدنویسی AI در VS Code',
        url: 'github.com/features/copilot',
        price: '$10/ماه (انفرادی)',
        features: ['Autocomplete', 'Chat', 'CLI', 'Workspace'],
        rating: 4,
        bestFor: 'تکمیل خودکار کد',
      },
      {
        name: 'Replit',
        description: 'محیط توسعه آنلاین با AI Agent',
        url: 'replit.com',
        price: 'رایگان / Core $25/ماه',
        features: ['AI Agent', 'Collaborative', 'Deploy', 'Database'],
        rating: 4,
        bestFor: 'پروژه‌های آنلاین',
      },
    ],
  },
  {
    id: 'productivity',
    title: 'ابزارهای بهره‌وری',
    icon: '⚡',
    color: 'from-violet-500 to-purple-500',
    tools: [
      {
        name: 'Notion AI',
        description: 'مدیریت پروژه و یادداشت با AI داخلی',
        url: 'notion.so',
        price: 'رایگان / AI $10/ماه اضافه',
        features: ['خلاصه‌سازی', 'تولید محتوا', 'Q&A', 'ترجمه'],
        rating: 4,
        bestFor: 'مدیریت پروژه',
      },
      {
        name: 'Zapier',
        description: 'اتوماسیون بین اپلیکیشن‌ها',
        url: 'zapier.com',
        price: 'رایگان / از $20/ماه',
        features: ['۶۰۰۰+ اپ', 'AI Actions', 'Workflow', 'No-code'],
        rating: 4,
        bestFor: 'اتوماسیون',
      },
      {
        name: 'Gamma',
        description: 'ساخت ارائه (Presentation) با AI',
        url: 'gamma.app',
        price: 'رایگان (محدود) / پرو $10/ماه',
        features: ['AI Slides', 'تمپلیت', 'Export', 'Collaborate'],
        rating: 4,
        bestFor: 'ساخت ارائه',
      },
      {
        name: 'Otter.ai',
        description: 'تبدیل صدا به متن و صورت‌جلسه خودکار',
        url: 'otter.ai',
        price: 'رایگان (محدود) / پرو $17/ماه',
        features: ['Transcription', 'Summary', 'Speaker ID', 'Integration'],
        rating: 4,
        bestFor: 'تبدیل صدا به متن',
      },
    ],
  },
];

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('text');
  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="gradient-text">ابزارهای هوش مصنوعی</span> 🛠️
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            معرفی و بررسی بهترین ابزارهای AI برای هر نوع نیاز
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/5 hover:border-white/20'
              }`}
            >
              <span className="ml-1">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.tools.map((tool, index) => (
              <div key={index} className="glass-card p-6 hover:border-purple-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                    <span className="text-xs text-gray-500">{tool.url}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-sm ${i < tool.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm text-green-400">💰 {tool.price}</span>
                  <span className="text-xs text-gray-500">🎯 {tool.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-16 glass-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">💡 نکات مهم انتخاب ابزار</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-white mb-1">بر اساس نیاز انتخاب کنید</h4>
                  <p className="text-sm text-gray-400">هر ابزار برای کار خاصی بهینه شده. قبل از انتخاب، نیاز دقیق خود را مشخص کنید.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h4 className="font-bold text-white mb-1">از نسخه رایگان شروع کنید</h4>
                  <p className="text-sm text-gray-400">اکثر ابزارها نسخه رایگان دارند. ابتدا تست کنید و سپس ارتقا دهید.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-bold text-white mb-1">ترکیب ابزارها</h4>
                  <p className="text-sm text-gray-400">بهترین نتیجه از ترکیب چند ابزار به دست می‌آید. مثلاً ChatGPT + Midjourney + CapCut</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-bold text-white mb-1">دسترسی در ایران</h4>
                  <p className="text-sm text-gray-400">برخی ابزارها نیاز به تغییر IP دارند. از VPN معتبر استفاده کنید.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💳</span>
                <div>
                  <h4 className="font-bold text-white mb-1">پرداخت بین‌المللی</h4>
                  <p className="text-sm text-gray-400">برای خرید اشتراک از کارت‌های مجازی یا سرویس‌های واسط استفاده کنید.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-bold text-white mb-1">یادگیری مداوم</h4>
                  <p className="text-sm text-gray-400">ابزارها سریع آپدیت می‌شوند. همیشه از آخرین قابلیت‌ها آگاه باشید.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
