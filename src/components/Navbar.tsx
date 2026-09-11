import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'خانه' },
  { id: 'vibe-coding', label: 'وایب کدینگ' },
  { id: 'prompt', label: 'پرامپت‌نویسی' },
  { id: 'content', label: 'تولید محتوا' },
  { id: 'marketing', label: 'بازاریابی AI' },
  { id: 'automation', label: 'اتوماسیون' },
  { id: 'chatbots', label: 'چت‌بات‌ها' },
  { id: 'design', label: 'طراحی با AI' },
  { id: 'tools', label: 'ابزارها' },
  { id: 'market', label: 'بازار کار' },
];

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-lg font-bold gradient-text">آکادمی AI</span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => setActiveSection(item.id)}
                className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}>
                {item.label}
              </button>
            ))}
          </div>

          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
