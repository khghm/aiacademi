import { ProgressBar } from './ui';

interface CoursesProps {
  setActiveSection: (section: string) => void;
}

const courses = [
  {
    id: 'vibe-coding', title: 'وایب کدینگ با AI',
    description: 'یاد بگیرید چگونه بدون دانش قبلی برنامه‌نویسی، با کمک هوش مصنوعی اپلیکیشن‌ها و وب‌سایت‌های حرفه‌ای بسازید.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    color: 'from-purple-500 to-indigo-500', lessons: 8, duration: '۲۰ ساعت', progress: 35,
  },
  {
    id: 'prompt', title: 'پرامپت‌نویسی پیشرفته',
    description: 'تسلط کامل بر هنر ارتباط با هوش مصنوعی. مهم‌ترین مهارت عصر AI که در تمام زمینه‌ها کاربرد دارد.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    color: 'from-violet-500 to-purple-500', lessons: 10, duration: '۲۰ ساعت', progress: 25,
  },
  {
    id: 'content', title: 'تولید محتوا با AI',
    description: 'تسلط کامل بر تولید محتوای متنی، تصویری، ویدیویی و صوتی با استفاده از پیشرفته‌ترین ابزارها.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    color: 'from-pink-500 to-rose-500', lessons: 7, duration: '۱۸ ساعت', progress: 20,
  },
  {
    id: 'marketing', title: 'بازاریابی هوشمند با AI',
    description: 'استراتژی‌های بازاریابی مدرن با AI. سئو، تبلیغات، ایمیل مارکتینگ و تحلیل داده.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    color: 'from-cyan-500 to-blue-500', lessons: 6, duration: '۱۵ ساعت', progress: 15,
  },
  {
    id: 'automation', title: 'اتوماسیون کسب‌وکار',
    description: 'خودکارسازی فرآیندهای کسب‌وکار با AI. از ایمیل مارکتینگ تا CRM و پشتیبانی مشتری.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    color: 'from-amber-500 to-orange-500', lessons: 12, duration: '۲۵ ساعت', progress: 15,
  },
  {
    id: 'chatbots', title: 'ساخت چت‌بات و دستیار AI',
    description: 'طراحی و پیاده‌سازی چت‌بات‌های هوشمند برای پشتیبانی، فروش و رزرو.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    color: 'from-teal-500 to-cyan-500', lessons: 10, duration: '۲۰ ساعت', progress: 10,
  },
  {
    id: 'design', title: 'طراحی گرافیک با AI',
    description: 'خلق طرح‌های حرفه‌ای شامل لوگو، بنر، UI و هویت بصری با ابزارهای AI.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    color: 'from-fuchsia-500 to-pink-500', lessons: 10, duration: '۱۸ ساعت', progress: 10,
  },
  {
    id: 'tools', title: 'ابزارهای حرفه‌ای AI',
    description: 'معرفی و آموزش بیش از ۳۰ ابزار AI در دسته‌بندی‌های مختلف.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    color: 'from-yellow-500 to-amber-500', lessons: 6, duration: '۱۲ ساعت', progress: 25,
  },
  {
    id: 'market', title: 'آماده‌سازی بازار کار',
    description: 'همه چیز برای ورود موفق به بازار کار AI. قیمت‌گذاری، مشتری‌یابی و رشد.',
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    color: 'from-emerald-500 to-teal-500', lessons: 7, duration: '۱۰ ساعت', progress: 10,
  },
];

export default function Courses({ setActiveSection }: CoursesProps) {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="text-xs text-purple-300">مسیر یادگیری شما</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="gradient-text">دوره‌های آموزشی</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ۹ دوره تخصصی با بیش از ۷۰ درس و ۱۵۰ ساعت آموزش کاربردی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} onClick={() => setActiveSection(course.id)}
              className="group glass-card p-6 cursor-pointer hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">{course.lessons} درس</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{course.description}</p>
              <div className="mb-4"><ProgressBar value={course.progress} max={100} label="محتوای تکمیل‌شده" color={course.id === 'vibe-coding' ? 'purple' : course.id === 'prompt' ? 'purple' : course.id === 'content' ? 'pink' : course.id === 'marketing' ? 'cyan' : course.id === 'automation' ? 'amber' : course.id === 'chatbots' ? 'cyan' : course.id === 'design' ? 'pink' : course.id === 'tools' ? 'amber' : 'emerald'} /></div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500">{course.duration} آموزش</span>
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
