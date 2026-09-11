import { ProgressBar } from './ui';

interface CoursesProps {
  setActiveSection: (section: string) => void;
}

const courses = [
  {
    id: 'vibe-coding',
    title: 'وایب کدینگ با AI',
    description: 'یاد بگیرید چگونه بدون دانش قبلی برنامه‌نویسی، با کمک هوش مصنوعی اپلیکیشن‌ها و وب‌سایت‌های حرفه‌ای بسازید. از مبانی تا پروژه‌های واقعی و کسب درآمد.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    color: 'from-purple-500 to-indigo-500',
    topics: ['ساخت وب‌سایت با AI', 'اپلیکیشن موبایل', 'اتوماسیون فرایندها', 'پروژه‌های واقعی', 'کسب درآمد'],
    lessons: 8,
    level: 'مبتدی تا پیشرفته',
    duration: '۲۰ ساعت',
    progress: 35,
  },
  {
    id: 'content',
    title: 'تولید محتوا با AI',
    description: 'تسلط کامل بر تولید محتوای متنی، تصویری، ویدیویی و صوتی با استفاده از پیشرفته‌ترین ابزارهای هوش مصنوعی. شامل پرامپت‌های آماده و تکنیک‌های حرفه‌ای.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    color: 'from-pink-500 to-rose-500',
    topics: ['تولید متن حرفه‌ای', 'ساخت تصویر با AI', 'تولید ویدیو', 'پادکست و صدا', 'کسب درآمد'],
    lessons: 7,
    level: 'مبتدی تا پیشرفته',
    duration: '۱۸ ساعت',
    progress: 20,
  },
  {
    id: 'marketing',
    title: 'بازاریابی هوشمند با AI',
    description: 'استراتژی‌های بازاریابی مدرن با استفاده از هوش مصنوعی. سئو، تبلیغات، ایمیل مارکتینگ، تحلیل داده و اتوماسیون — همه با مثال‌های عملی بازار ایران.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    topics: ['سئو با AI', 'تبلیغات هوشمند', 'ایمیل مارکتینگ', 'تحلیل داده', 'اتوماسیون'],
    lessons: 6,
    level: 'متوسط تا پیشرفته',
    duration: '۱۵ ساعت',
    progress: 15,
  },
  {
    id: 'tools',
    title: 'ابزارهای حرفه‌ای AI',
    description: 'معرفی و آموزش کامل بیش از ۳۰ ابزار هوش مصنوعی در دسته‌بندی‌های مختلف. مقایسه، قیمت‌گذاری، و بهترین کاربرد هر ابزار.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    color: 'from-amber-500 to-orange-500',
    topics: ['ChatGPT پیشرفته', 'Midjourney و DALL-E', 'ابزارهای صوتی', 'ابزارهای ویدیویی', 'ابزارهای کدنویسی'],
    lessons: 6,
    level: 'همه سطوح',
    duration: '۱۲ ساعت',
    progress: 25,
  },
  {
    id: 'market',
    title: 'آماده‌سازی بازار کار',
    description: 'همه چیز درباره ورود به بازار کار هوش مصنوعی در ایران. قیمت‌گذاری، فریلنسری، ساخت پورتفولیو، مذاکره، مشتری‌یابی و مسیر رشد بلندمدت.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    color: 'from-emerald-500 to-teal-500',
    topics: ['فریلنسری', 'قیمت‌گذاری خدمات', 'ساخت پورتفولیو', 'مشتری‌یابی', 'رشد بلندمدت'],
    lessons: 7,
    level: 'متوسط تا پیشرفته',
    duration: '۱۰ ساعت',
    progress: 10,
  },
];

export default function Courses({ setActiveSection }: CoursesProps) {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="text-xs text-purple-300">مسیر یادگیری شما</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="gradient-text">دوره‌های آموزشی</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            هر بخش به صورت مستقل و کامل طراحی شده تا بتوانید در هر سطحی که هستید، از آن بهره‌مند شوید
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => setActiveSection(course.id)}
              className="group glass-card p-6 cursor-pointer hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Icon & Level */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">{course.level}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-5">
                {course.topics.map((topic, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
                    {topic}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div className="mb-4">
                <ProgressBar value={course.progress} max={100} label="محتوای تکمیل‌شده" color={course.id === 'vibe-coding' ? 'purple' : course.id === 'content' ? 'pink' : course.id === 'marketing' ? 'cyan' : course.id === 'tools' ? 'amber' : 'emerald'} />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    {course.lessons} درس
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {course.duration}
                  </span>
                </div>
                <span className="text-sm text-purple-400 group-hover:text-purple-300 flex items-center gap-1">
                  مشاهده
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
