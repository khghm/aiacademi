interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm text-purple-300">۱۰۰٪ رایگان • بدون ثبت‌نام • دسترسی فوری</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">تسلط کامل بر</span>
          <br />
          <span className="gradient-text">هوش مصنوعی</span>
          <br />
          <span className="text-white text-3xl sm:text-4xl md:text-5xl">برای بازار کار ایران 🇮🇷</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
          از وایب کدینگ و تولید محتوا تا بازاریابی هوشمند — همه چیز را به صورت
          <span className="text-purple-300 font-bold"> حرفه‌ای و کاربردی </span>
          یاد بگیرید و همین امروز وارد بازار کار شوید 🚀
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => setActiveSection('vibe-coding')}
            className="group px-8 py-4 bg-gradient-to-l from-purple-600 to-pink-600 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            شروع یادگیری 💡
          </button>
          <button
            onClick={() => setActiveSection('tools')}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            مشاهده ابزارها 🛠️
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
          {[
            { number: '۵۰+', label: 'درس آموزشی', icon: '📚' },
            { number: '۲۰+', label: 'ابزار معرفی‌شده', icon: '🔧' },
            { number: '۱۰۰٪', label: 'رایگان', icon: '🎁' },
            { number: '۲۴/۷', label: 'دسترسی آزاد', icon: '⏰' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 text-center hover:border-purple-500/30 transition-all duration-300">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black gradient-text">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
