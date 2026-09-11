interface CoursesProps {
  setActiveSection: (section: string) => void;
}

const courses = [
  {
    id: 'vibe-coding',
    title: 'وایب کدینگ با AI',
    description: 'یاد بگیرید چگونه بدون دانش قبلی برنامه‌نویسی، با کمک هوش مصنوعی اپلیکیشن‌ها و وب‌سایت‌های حرفه‌ای بسازید',
    icon: '💻',
    color: 'from-purple-500 to-indigo-500',
    topics: ['ساخت وب‌سایت با AI', 'اپلیکیشن موبایل', 'اتوماسیون فرایندها', 'پروژه‌های واقعی'],
    lessons: 15,
  },
  {
    id: 'content',
    title: 'تولید محتوا با AI',
    description: 'تسلط کامل بر تولید محتوای متنی، تصویری، ویدیویی و صوتی با استفاده از پیشرفته‌ترین ابزارهای هوش مصنوعی',
    icon: '🎨',
    color: 'from-pink-500 to-rose-500',
    topics: ['تولید متن حرفه‌ای', 'ساخت تصویر با AI', 'تولید ویدیو', 'پادکست و صدا'],
    lessons: 12,
  },
  {
    id: 'marketing',
    title: 'بازاریابی هوشمند با AI',
    description: 'استراتژی‌های بازاریابی مدرن با استفاده از هوش مصنوعی برای رشد کسب‌وکار در بازار ایران',
    icon: '📈',
    color: 'from-cyan-500 to-blue-500',
    topics: ['سئو با AI', 'تبلیغات هوشمند', 'ایمیل مارکتینگ', 'تحلیل داده'],
    lessons: 10,
  },
  {
    id: 'tools',
    title: 'ابزارهای حرفه‌ای AI',
    description: 'معرفی و آموزش کامل بهترین ابزارهای هوش مصنوعی برای هر نوع نیاز کاری و شخصی',
    icon: '🛠️',
    color: 'from-amber-500 to-orange-500',
    topics: ['ChatGPT پیشرفته', 'Midjourney و DALL-E', 'ابزارهای صوتی', 'ابزارهای ویدیویی'],
    lessons: 18,
  },
  {
    id: 'market',
    title: 'آماده‌سازی بازار کار',
    description: 'همه چیز درباره ورود به بازار کار هوش مصنوعی در ایران، قیمت‌گذاری، فریلنسری و ساخت پورتفولیو',
    icon: '💼',
    color: 'from-emerald-500 to-teal-500',
    topics: ['فریلنسری', 'قیمت‌گذاری خدمات', 'ساخت پورتفولیو', 'مشتری‌یابی'],
    lessons: 8,
  },
];

export default function Courses({ setActiveSection }: CoursesProps) {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="gradient-text">مسیر یادگیری شما</span> 🗺️
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
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {course.icon}
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
              <div className="flex flex-wrap gap-2 mb-4">
                {course.topics.map((topic, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
                    {topic}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-sm text-gray-500">📚 {course.lessons} درس</span>
                <span className="text-sm text-purple-400 group-hover:text-purple-300">
                  مشاهده ←
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
