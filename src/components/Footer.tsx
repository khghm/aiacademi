export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xl">
                🤖
              </div>
              <span className="text-lg font-bold gradient-text">آکادمی AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              مرجع آموزش هوش مصنوعی برای بازار کار ایران. 
              یادگیری رایگان، بدون ثبت‌نام، با محتوای حرفه‌ای و کاربردی.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">📚 دوره‌ها</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-purple-300 transition-colors cursor-pointer">وایب کدینگ</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">تولید محتوا</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">بازاریابی AI</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">ابزارها</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">بازار کار</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">🔗 منابع</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-purple-300 transition-colors cursor-pointer">راهنمای شروع</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">سوالات متداول</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">بلاگ</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">تماس با ما</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">📱 شبکه‌های اجتماعی</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all">
                <span>💬</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all">
                <span>💼</span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">📧 خبرنامه هفتگی:</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                />
                <button className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors">
                  عضویت
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © ۱۴۰۴ آکادمی هوش مصنوعی. تمامی حقوق محفوظ است. ❤️
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="hover:text-purple-300 cursor-pointer transition-colors">حریم خصوصی</span>
            <span>•</span>
            <span className="hover:text-purple-300 cursor-pointer transition-colors">قوانین استفاده</span>
            <span>•</span>
            <span className="hover:text-purple-300 cursor-pointer transition-colors">درباره ما</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
