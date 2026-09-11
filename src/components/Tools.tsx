import { useState } from 'react';
import { ComparisonTable, InfoCard, SectionHeading } from './ui';

const categories = [
  {
    id: 'text', title: 'ابزارهای متنی', color: 'from-purple-500 to-indigo-500',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    tools: [
      { name: 'ChatGPT', desc: 'قدرتمندترین چت‌بات هوش مصنوعی دنیا، مناسب برای نوشتن، ترجمه، برنامه‌نویسی و تحلیل', url: 'chat.openai.com', price: 'رایگان / پلاس $20/ماه', features: ['GPT-4o', 'تولید تصویر', 'تحلیل فایل', 'Plugins'], rating: 5, bestFor: 'همه کاربردها' },
      { name: 'Claude', desc: 'محصول Anthropic، عالی برای نوشتن محتوای طولانی، تحلیل اسناد و برنامه‌نویسی', url: 'claude.ai', price: 'رایگان / پرو $20/ماه', features: ['200K Context', 'تحلیل فایل', 'Artifacts', 'Projects'], rating: 5, bestFor: 'نوشتن و تحلیل' },
      { name: 'Gemini', desc: 'هوش مصنوعی گوگل، یکپارچه با سرویس‌های گوگل، مناسب تحقیق و تحلیل', url: 'gemini.google.com', price: 'رایگان / Advanced $20/ماه', features: ['جستجوی وب', 'تحلیل تصویر', 'Multimodal', 'Google Integration'], rating: 4, bestFor: 'تحقیق و جستجو' },
      { name: 'Perplexity', desc: 'موتور جستجوی AI، عالی برای تحقیق با ذکر منابع', url: 'perplexity.ai', price: 'رایگان / پرو $20/ماه', features: ['جستجوی وب', 'ذکر منابع', 'تحلیل عمیق', 'Pro Search'], rating: 4, bestFor: 'تحقیق و ریسرچ' },
      { name: 'Copy.ai', desc: 'تخصصی برای کپی‌رایتینگ و محتوای تبلیغاتی', url: 'copy.ai', price: 'رایگان / پرو $49/ماه', features: ['90+ تمپلیت', 'Workflow', 'تیم', 'API'], rating: 4, bestFor: 'کپی‌رایتینگ' },
    ],
  },
  {
    id: 'image', title: 'ابزارهای تصویری', color: 'from-pink-500 to-rose-500',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    tools: [
      { name: 'Midjourney', desc: 'بهترین ابزار تولید تصویر هنری با کیفیت فوق‌العاده', url: 'midjourney.com', price: 'از $10/ماه', features: ['کیفیت سینمایی', 'Styles متنوع', 'Upscale', 'Variations'], rating: 5, bestFor: 'تصاویر هنری' },
      { name: 'DALL-E 3', desc: 'تولید تصویر توسط OpenAI، یکپارچه با ChatGPT', url: 'از طریق ChatGPT', price: 'شامل ChatGPT Plus', features: ['فهم عالی پرامپت', 'متن در تصویر', 'ویرایش', 'یکپارچه با GPT'], rating: 5, bestFor: 'تصاویر دقیق' },
      { name: 'Leonardo AI', desc: 'ابزار قدرتمند با کنترل دقیق، مناسب game art و طراحی', url: 'leonardo.ai', price: 'رایگان / از $12/ماه', features: ['مدل‌های متنوع', 'ControlNet', 'Real-time', 'Fine-tune'], rating: 4, bestFor: 'طراحی بازی' },
      { name: 'Canva AI', desc: 'طراحی گرافیک با AI، مناسب غیرحرفه‌ای‌ها', url: 'canva.com', price: 'رایگان / پرو $13/ماه', features: ['Magic Design', 'حذف پس‌زمینه', 'تمپلیت', 'تیم'], rating: 4, bestFor: 'طراحی سریع' },
      { name: 'Remove.bg', desc: 'حذف خودکار پس‌زمینه تصاویر', url: 'remove.bg', price: 'رایگان / از $9/ماه', features: ['حذف فوری', 'API', 'Batch', 'HD'], rating: 4, bestFor: 'حذف پس‌زمینه' },
    ],
  },
  {
    id: 'video', title: 'ابزارهای ویدیویی', color: 'from-cyan-500 to-blue-500',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    tools: [
      { name: 'Runway ML', desc: 'پیشرفته‌ترین ابزار تولید و ویرایش ویدیو با AI', url: 'runwayml.com', price: 'رایگان / از $15/ماه', features: ['Gen-3 Alpha', 'Text to Video', 'Video Edit', 'Motion Brush'], rating: 5, bestFor: 'تولید ویدیو' },
      { name: 'Kling AI', desc: 'ابزار چینی با کیفیت فوق‌العاده برای ویدیوهای سینمایی', url: 'klingai.com', price: 'رایگان / اشتراک ماهانه', features: ['ویدیو ۲ دقیقه', '1080p', 'حرکت دوربین', 'افکت‌ها'], rating: 5, bestFor: 'ویدیو سینمایی' },
      { name: 'Synthesia', desc: 'ساخت ویدیو با آواتار انسانی، مناسب آموزش', url: 'synthesia.io', price: 'از $30/ماه', features: ['160+ آواتار', '130 زبان', 'لیپ‌سینک', 'برندینگ'], rating: 4, bestFor: 'ویدیو آموزشی' },
      { name: 'HeyGen', desc: 'ترجمه ویدیو و لیپ‌سینک خودکار', url: 'heygen.com', price: 'رایگان / از $29/ماه', features: ['ترجمه ویدیو', 'آواتار', 'لیپ‌سینک', 'API'], rating: 4, bestFor: 'ترجمه ویدیو' },
      { name: 'CapCut', desc: 'ویرایش ویدیو رایگان با قابلیت‌های AI', url: 'capcut.com', price: 'رایگان / پرو $8/ماه', features: ['زیرنویس خودکار', 'حذف BG', 'افکت', 'تمپلیت'], rating: 4, bestFor: 'ویرایش ویدیو' },
    ],
  },
  {
    id: 'audio', title: 'ابزارهای صوتی', color: 'from-amber-500 to-orange-500',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>,
    tools: [
      { name: 'ElevenLabs', desc: 'بهترین ابزار تبدیل متن به گفتار با کیفیت طبیعی', url: 'elevenlabs.io', price: 'رایگان / از $5/ماه', features: ['30+ زبان', 'Voice Cloning', 'احساسات', 'API'], rating: 5, bestFor: 'نریشن و پادکست' },
      { name: 'Suno AI', desc: 'ساخت آهنگ کامل با وکال از متن', url: 'suno.com', price: 'رایگان / پرو $10/ماه', features: ['آهنگ کامل', 'وکال', 'سبک‌های متنوع', 'لیریک'], rating: 5, bestFor: 'ساخت موسیقی' },
      { name: 'Murf AI', desc: 'تبدیل متن به صدا با صداهای حرفه‌ای', url: 'murf.ai', price: 'رایگان / از $23/ماه', features: ['120+ صدا', 'تنظیم سرعت', 'پس‌زمینه', 'دانلود'], rating: 4, bestFor: 'ویدیو حرفه‌ای' },
      { name: 'Descript', desc: 'ویرایش پادکست و ویدیو با ویرایش متن', url: 'descript.com', price: 'رایگان / از $24/ماه', features: ['ویرایش متنی', 'حذف filler', 'ترجمه', 'Screen Record'], rating: 4, bestFor: 'ویرایش پادکست' },
    ],
  },
  {
    id: 'coding', title: 'ابزارهای کدنویسی', color: 'from-emerald-500 to-teal-500',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    tools: [
      { name: 'Cursor', desc: 'بهترین IDE مبتنی بر AI برای وایب کدینگ', url: 'cursor.com', price: 'رایگان / پرو $20/ماه', features: ['AI Chat', 'Tab Completion', 'Codebase', 'Multi-file Edit'], rating: 5, bestFor: 'وایب کدینگ حرفه‌ای' },
      { name: 'Bolt.new', desc: 'ساخت وب‌اپلیکیشن در مرورگر با AI', url: 'bolt.new', price: 'رایگان / پرو $20/ماه', features: ['بدون نصب', 'Live Preview', 'Deploy', 'Full Stack'], rating: 5, bestFor: 'ساخت سریع وب‌اپ' },
      { name: 'v0 by Vercel', desc: 'ساخت UI با AI، تخصصی React و Tailwind', url: 'v0.dev', price: 'رایگان / پرو $20/ماه', features: ['React/Tailwind', 'Iterate', 'Components', 'Deploy'], rating: 4, bestFor: 'ساخت UI' },
      { name: 'GitHub Copilot', desc: 'دستیار کدنویسی AI در VS Code', url: 'github.com/features/copilot', price: '$10/ماه', features: ['Autocomplete', 'Chat', 'CLI', 'Workspace'], rating: 4, bestFor: 'تکمیل خودکار کد' },
      { name: 'Replit', desc: 'محیط توسعه آنلاین با AI Agent', url: 'replit.com', price: 'رایگان / Core $25/ماه', features: ['AI Agent', 'Collaborative', 'Deploy', 'Database'], rating: 4, bestFor: 'پروژه‌های آنلاین' },
    ],
  },
  {
    id: 'productivity', title: 'ابزارهای بهره‌وری', color: 'from-violet-500 to-purple-500',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    tools: [
      { name: 'Notion AI', desc: 'مدیریت پروژه و یادداشت با AI داخلی', url: 'notion.so', price: 'رایگان / AI $10/ماه', features: ['خلاصه‌سازی', 'تولید محتوا', 'Q&A', 'ترجمه'], rating: 4, bestFor: 'مدیریت پروژه' },
      { name: 'Zapier', desc: 'اتوماسیون بین اپلیکیشن‌ها', url: 'zapier.com', price: 'رایگان / از $20/ماه', features: ['6000+ اپ', 'AI Actions', 'Workflow', 'No-code'], rating: 4, bestFor: 'اتوماسیون' },
      { name: 'Gamma', desc: 'ساخت ارائه (Presentation) با AI', url: 'gamma.app', price: 'رایگان / پرو $10/ماه', features: ['AI Slides', 'تمپلیت', 'Export', 'Collaborate'], rating: 4, bestFor: 'ساخت ارائه' },
      { name: 'Otter.ai', desc: 'تبدیل صدا به متن و صورت‌جلسه خودکار', url: 'otter.ai', price: 'رایگان / پرو $17/ماه', features: ['Transcription', 'Summary', 'Speaker ID', 'Integration'], rating: 4, bestFor: 'تبدیل صدا به متن' },
    ],
  },
];

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('text');
  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="ابزارهای هوش مصنوعی" subtitle="معرفی و بررسی بهترین ابزارهای AI برای هر نوع نیاز" badge="۶ دسته‌بندی | ۳۰+ ابزار" />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-gray-400 hover:text-white bg-white/5 border border-white/5 hover:border-white/20'
              }`}>
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.tools.map((tool, index) => (
              <div key={index} className="glass-card p-6 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                    <span className="text-xs text-gray-500">{tool.url}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < tool.rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{tool.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">{feature}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm text-emerald-400">{tool.price}</span>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{tool.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-16 glass-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">نکات مهم انتخاب ابزار</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">بر اساس نیاز انتخاب کنید</h4>
                  <p className="text-sm text-gray-400">هر ابزار برای کار خاصی بهینه شده. قبل از انتخاب، نیاز دقیق خود را مشخص کنید.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">از نسخه رایگان شروع کنید</h4>
                  <p className="text-sm text-gray-400">اکثر ابزارها نسخه رایگان دارند. ابتدا تست کنید و سپس ارتقا دهید.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">ترکیب ابزارها</h4>
                  <p className="text-sm text-gray-400">بهترین نتیجه از ترکیب چند ابزار به دست می‌آید.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">دسترسی در ایران</h4>
                  <p className="text-sm text-gray-400">برخی ابزارها نیاز به تغییر IP دارند. از VPN معتبر استفاده کنید.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">پرداخت بین‌المللی</h4>
                  <p className="text-sm text-gray-400">برای خرید اشتراک از کارت‌های مجازی یا سرویس‌های واسط استفاده کنید.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
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
