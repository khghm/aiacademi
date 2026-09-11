import { useState, useEffect, useRef } from 'react';

// Animated Counter
export function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString('fa-IR')}{suffix}</span>;
}

// Interactive Flow Builder
export function InteractiveFlow({ steps, title }: { steps: { id: string; title: string; description: string; details: string[]; icon: string; color: string }[]; title?: string }) {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Steps Navigation */}
        <div className="lg:w-64 shrink-0">
          <div className="space-y-2">
            {steps.map((step, i) => (
              <button key={step.id} onClick={() => setActiveStep(i)}
                className={`w-full text-right p-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeStep === i ? `${step.color} text-white shadow-lg scale-[1.02]` : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
                }`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg shrink-0 ${activeStep === i ? 'bg-white/20' : 'bg-white/5'}`}>
                  {step.icon}
                </div>
                <span className="text-sm font-medium truncate">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 glass-card p-6 min-h-[300px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl ${steps[activeStep].color} flex items-center justify-center text-2xl`}>
                {steps[activeStep].icon}
              </div>
              <div>
                <div className="text-xs text-gray-500">مرحله {activeStep + 1} از {steps.length}</div>
                <h5 className="text-xl font-bold text-white">{steps[activeStep].title}</h5>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{steps[activeStep].description}</p>
            <div className="space-y-2">
              {steps[activeStep].details.map((detail, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white/5 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={`w-5 h-5 rounded-full ${steps[activeStep].color} flex items-center justify-center text-xs text-white font-bold shrink-0 mt-0.5`}>{i + 1}</div>
                  <span className="text-sm text-gray-300">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Comparison Slider
export function ComparisonSlider({ left, right, title }: { left: { title: string; items: string[]; color: string }; right: { title: string; items: string[]; color: string }; title?: string }) {
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null);
  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div onMouseEnter={() => setHovered('left')} onMouseLeave={() => setHovered(null)}
          className={`p-6 rounded-xl border transition-all duration-500 ${hovered === 'left' ? `${left.color} scale-[1.02] shadow-xl` : 'bg-white/5 border-white/10'}`}>
          <h5 className="text-xl font-bold text-white mb-4">{left.title}</h5>
          <ul className="space-y-2">
            {left.items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div onMouseEnter={() => setHovered('right')} onMouseLeave={() => setHovered(null)}
          className={`p-6 rounded-xl border transition-all duration-500 ${hovered === 'right' ? `${right.color} scale-[1.02] shadow-xl` : 'bg-white/5 border-white/10'}`}>
          <h5 className="text-xl font-bold text-white mb-4">{right.title}</h5>
          <ul className="space-y-2">
            {right.items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Interactive Learning Cards (Flash Cards)
export function FlashCards({ cards, title }: { cards: { front: string; back: string; category?: string }[]; title?: string }) {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="max-w-2xl mx-auto">
        <div className="relative h-64 perspective-1000" style={{ perspective: '1000px' }}>
          <div className={`relative w-full h-full transition-transform duration-500 ${flipped ? '' : ''}`} style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : '' }}>
            {/* Front */}
            <div className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center text-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
              {cards[current].category && <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 mb-3">{cards[current].category}</span>}
              <p className="text-xl font-bold text-white">{cards[current].front}</p>
              <button onClick={() => setFlipped(true)} className="mt-4 text-sm text-purple-400 hover:text-purple-300">برای دیدن پاسخ کلیک کنید</button>
            </div>
            {/* Back */}
            <div className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center text-center border-purple-500/30" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <p className="text-gray-300 leading-relaxed">{cards[current].back}</p>
              <button onClick={() => setFlipped(false)} className="mt-4 text-sm text-cyan-400 hover:text-cyan-300">بازگشت به سوال</button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button onClick={() => { setCurrent((current - 1 + cards.length) % cards.length); setFlipped(false); }}
            className="px-4 py-2 glass-card text-sm hover:bg-white/10 transition-all">کارت قبلی</button>
          <span className="text-sm text-gray-500">{current + 1} / {cards.length}</span>
          <button onClick={() => { setCurrent((current + 1) % cards.length); setFlipped(false); }}
            className="px-4 py-2 glass-card text-sm hover:bg-white/10 transition-all">کارت بعدی</button>
        </div>
      </div>
    </div>
  );
}

// Animated Skill Tree
export function SkillTree({ skills, title }: { skills: { name: string; level: number; color: string; children?: { name: string; level: number }[] }[]; title?: string }) {
  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i} className="glass-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-white">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${skill.color} transition-all duration-1000 animate-pulse-slow`} style={{ width: `${skill.level}%` }}></div>
            </div>
            {skill.children && (
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
                {skill.children.map((child, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 rounded-full" style={{ background: child.level > 70 ? '#10b981' : child.level > 40 ? '#f59e0b' : '#ef4444' }}></div>
                    <span>{child.name}</span>
                    <span className="text-gray-600">({child.level}%)</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Interactive Scenario Simulator
export function ScenarioSimulator({ scenarios, title }: { scenarios: { situation: string; options: { text: string; result: string; quality: 'good' | 'better' | 'best' }[] }[]; title?: string }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const scenario = scenarios[current];

  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="glass-card p-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">{current + 1}</div>
          <div className="flex-1">
            <div className="text-xs text-gray-500">سناریو {current + 1} از {scenarios.length}</div>
            <h5 className="font-bold text-white">{scenario.situation}</h5>
          </div>
        </div>

        <div className="space-y-3">
          {scenario.options.map((option, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className={`w-full text-right p-4 rounded-xl border transition-all duration-300 ${
                selected === i
                  ? option.quality === 'best' ? 'bg-emerald-500/20 border-emerald-500/50' : option.quality === 'better' ? 'bg-cyan-500/20 border-cyan-500/50' : 'bg-amber-500/20 border-amber-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">{option.text}</span>
                {selected === i && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    option.quality === 'best' ? 'bg-emerald-500/30 text-emerald-300' : option.quality === 'better' ? 'bg-cyan-500/30 text-cyan-300' : 'bg-amber-500/30 text-amber-300'
                  }`}>
                    {option.quality === 'best' ? 'بهترین انتخاب' : option.quality === 'better' ? 'انتخاب خوب' : 'قابل قبول'}
                  </span>
                )}
              </div>
              {selected === i && <p className="text-sm text-gray-300 mt-2 pt-2 border-t border-white/10">{option.result}</p>}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={() => { setCurrent(Math.max(0, current - 1)); setSelected(null); }} disabled={current === 0}
            className="px-4 py-2 glass-card text-sm disabled:opacity-30 hover:bg-white/10 transition-all">سناریوی قبلی</button>
          <button onClick={() => { setCurrent(Math.min(scenarios.length - 1, current + 1)); setSelected(null); }} disabled={current === scenarios.length - 1}
            className="px-4 py-2 glass-card text-sm disabled:opacity-30 hover:bg-white/10 transition-all">سناریوی بعدی</button>
        </div>
      </div>
    </div>
  );
}

// Animated Stats Grid
export function AnimatedStatsGrid({ stats }: { stats: { value: number; label: string; suffix?: string; prefix?: string; color: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {stats.map((stat, i) => (
        <div key={i} className="glass-card p-5 text-center hover:scale-105 transition-transform duration-300">
          <div className={`text-3xl font-black mb-1 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
            <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// Interactive Prompt Builder
export function PromptBuilder({ fields, output, title }: { fields: { label: string; placeholder: string; type?: 'text' | 'select'; options?: string[] }[]; output: (values: string[]) => string; title?: string }) {
  const [values, setValues] = useState<string[]>(fields.map(() => ''));
  const [showOutput, setShowOutput] = useState(false);

  const updateValue = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="glass-card p-6 max-w-3xl mx-auto">
        <div className="space-y-4">
          {fields.map((field, i) => (
            <div key={i}>
              <label className="text-sm text-gray-300 mb-1 block">{field.label}</label>
              {field.type === 'select' ? (
                <select value={values[i]} onChange={(e) => updateValue(i, e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50">
                  <option value="">انتخاب کنید</option>
                  {field.options?.map((opt, j) => <option key={j} value={opt}>{opt}</option>)}
                </select>
              ) : (
                <input type="text" value={values[i]} onChange={(e) => updateValue(i, e.target.value)} placeholder={field.placeholder}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50" />
              )}
            </div>
          ))}
        </div>
        <button onClick={() => setShowOutput(!showOutput)} disabled={!values.every(v => v)}
          className="mt-4 w-full py-3 rounded-lg bg-gradient-to-l from-purple-600 to-pink-600 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/30 transition-all">
          {showOutput ? 'پنهان کردن' : 'ساخت پرامپت'}
        </button>
        {showOutput && (
          <div className="mt-4 p-4 rounded-lg bg-[#0d0d15] border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">پرامپت ساخته‌شده:</span>
              <button onClick={() => navigator.clipboard.writeText(output(values))} className="text-xs text-purple-400 hover:text-purple-300">کپی</button>
            </div>
            <pre className="text-sm text-gray-300 whitespace-pre-wrap">{output(values)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

// Animated Process Diagram
export function AnimatedProcess({ steps, title }: { steps: { label: string; description: string; icon: string; duration: string }[]; title?: string }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2 flex-1">
            <div className={`relative flex flex-col items-center p-4 rounded-xl border transition-all duration-500 ${
              i === activeIndex ? 'bg-purple-500/20 border-purple-500/50 scale-110 shadow-lg shadow-purple-500/20' :
              i < activeIndex ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/10'
            }`}>
              {i === activeIndex && <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-500 animate-ping"></div>}
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="text-sm font-bold text-white text-center">{step.label}</div>
              <div className="text-xs text-gray-500 mt-1">{step.duration}</div>
            </div>
            {i < steps.length - 1 && (
              <svg className={`w-6 h-6 shrink-0 transition-colors duration-500 ${i < activeIndex ? 'text-emerald-400' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </div>
        ))}
      </div>
      {activeIndex >= 0 && (
        <div className="mt-4 p-4 glass-card text-center animate-fade-in">
          <p className="text-gray-300">{steps[activeIndex].description}</p>
        </div>
      )}
    </div>
  );
}

// Interactive ROI Calculator
export function ROICalculator({ title }: { title?: string }) {
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(500);
  const [aiSpeed, setAiSpeed] = useState(5);

  const traditionalCost = hours * rate;
  const aiCost = (hours / aiSpeed) * rate;
  const savings = traditionalCost - aiCost;
  const timeSaved = hours - (hours / aiSpeed);

  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="glass-card p-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="text-sm text-gray-300 mb-1 block">ساعات کار در ماه</label>
            <input type="range" min="10" max="200" value={hours} onChange={(e) => setHours(+e.target.value)} className="w-full accent-purple-500" />
            <div className="text-center text-lg font-bold text-white mt-1">{hours} ساعت</div>
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-1 block">نرخ ساعتی (هزار تومان)</label>
            <input type="range" min="100" max="2000" step="100" value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full accent-purple-500" />
            <div className="text-center text-lg font-bold text-white mt-1">{rate.toLocaleString('fa-IR')}</div>
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-1 block">سرعت AI (برابر)</label>
            <input type="range" min="2" max="20" value={aiSpeed} onChange={(e) => setAiSpeed(+e.target.value)} className="w-full accent-purple-500" />
            <div className="text-center text-lg font-bold text-white mt-1">{aiSpeed}x</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
            <div className="text-xs text-gray-400 mb-1">روش سنتی</div>
            <div className="text-xl font-bold text-rose-400">{(traditionalCost / 1000).toLocaleString('fa-IR')} هزار</div>
            <div className="text-xs text-gray-500">{hours} ساعت کار</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <div className="text-xs text-gray-400 mb-1">با AI</div>
            <div className="text-xl font-bold text-emerald-400">{(aiCost / 1000).toLocaleString('fa-IR')} هزار</div>
            <div className="text-xs text-gray-500">{Math.round(hours / aiSpeed)} ساعت کار</div>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
            <div className="text-xs text-gray-400 mb-1">صرفه‌جویی</div>
            <div className="text-xl font-bold gradient-text">{(savings / 1000).toLocaleString('fa-IR')} هزار</div>
            <div className="text-xs text-gray-500">{Math.round(timeSaved)} ساعت آزاد</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Knowledge Map
export function KnowledgeMap({ nodes, title }: { nodes: { id: string; label: string; level: 'basic' | 'intermediate' | 'advanced'; connections: string[]; description: string }[]; title?: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const levelColors = { basic: 'bg-emerald-500', intermediate: 'bg-amber-500', advanced: 'bg-rose-500' };
  const levelLabels = { basic: 'پایه', intermediate: 'متوسط', advanced: 'پیشرفته' };

  return (
    <div className="my-8">
      {title && <h4 className="text-lg font-bold text-white mb-6 text-center">{title}</h4>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {nodes.map((node) => (
          <button key={node.id} onClick={() => setSelected(selected === node.id ? null : node.id)}
            className={`p-4 rounded-xl border transition-all duration-300 text-right ${
              selected === node.id ? 'bg-purple-500/20 border-purple-500/50 scale-105' : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}>
            <div className="flex items-center justify-between mb-2">
              <div className={`w-3 h-3 rounded-full ${levelColors[node.level]}`}></div>
              <span className="text-xs text-gray-500">{levelLabels[node.level]}</span>
            </div>
            <div className="font-bold text-white text-sm">{node.label}</div>
          </button>
        ))}
      </div>
      {selected && (
        <div className="mt-4 glass-card p-5 animate-fade-in">
          <h5 className="font-bold text-white mb-2">{nodes.find(n => n.id === selected)?.label}</h5>
          <p className="text-gray-300 text-sm">{nodes.find(n => n.id === selected)?.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {nodes.find(n => n.id === selected)?.connections.map((conn, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10">مرتبط: {conn}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
