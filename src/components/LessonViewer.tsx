import { useState } from 'react';
import { ProgressBar } from './ui';

export interface LessonBlock {
  type: 'heading' | 'paragraph' | 'code' | 'table' | 'info' | 'list' | 'stats' | 'flow' | 'comparison' | 'timeline' | 'flashcard' | 'scenario' | 'diagram' | 'quote' | 'checklist' | 'tabs';
  content: any;
}

export interface LessonData {
  title: string;
  subtitle?: string;
  blocks: LessonBlock[];
}

export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  lessons: { id: number; title: string; duration: string; difficulty: string; data: LessonData }[];
}

const colorMap: Record<string, string> = {
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  pink: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  amber: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  violet: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  rose: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  teal: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
};

const activeColorMap: Record<string, string> = {
  purple: 'bg-purple-500 text-white',
  pink: 'bg-pink-500 text-white',
  cyan: 'bg-cyan-500 text-white',
  amber: 'bg-amber-500 text-white',
  emerald: 'bg-emerald-500 text-white',
  violet: 'bg-violet-500 text-white',
  rose: 'bg-rose-500 text-white',
  teal: 'bg-teal-500 text-white',
};

const difficultyColors: Record<string, string> = {
  'مبتدی': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'متوسط': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'پیشرفته': 'bg-red-500/20 text-red-300 border-red-500/30',
  'همه سطوح': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
};

function BlockRenderer({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'heading':
      return <h3 className={`text-${block.content.size || 'xl'} font-bold text-white ${block.content.mt ? `mt-${block.content.mt}` : 'mt-8'} mb-4`}>{block.content.text}</h3>;
    
    case 'paragraph':
      return <p className="text-gray-300 leading-loose mb-4 text-[15px]">{block.content}</p>;
    
    case 'code':
      return <CodeBlock title={block.content.title} language={block.content.language} code={block.content.code} />;
    
    case 'table':
      return <TableBlock title={block.content.title} headers={block.content.headers} rows={block.content.rows} />;
    
    case 'info':
      return <InfoBlock type={block.content.type} title={block.content.title} content={block.content.content} />;
    
    case 'list':
      return <ListBlock items={block.content.items} style={block.content.style} title={block.content.title} />;
    
    case 'stats':
      return <StatsBlock stats={block.content} />;
    
    case 'flow':
      return <FlowBlock title={block.content.title} steps={block.content.steps} />;
    
    case 'comparison':
      return <ComparisonBlock title={block.content.title} left={block.content.left} right={block.content.right} />;
    
    case 'timeline':
      return <TimelineBlock title={block.content.title} steps={block.content.steps} />;
    
    case 'flashcard':
      return <FlashCardBlock title={block.content.title} cards={block.content.cards} />;
    
    case 'scenario':
      return <ScenarioBlock title={block.content.title} scenarios={block.content.scenarios} />;
    
    case 'diagram':
      return <DiagramBlock title={block.content.title} nodes={block.content.nodes} />;
    
    case 'quote':
      return <QuoteBlock text={block.content.text} author={block.content.author} />;
    
    case 'checklist':
      return <ChecklistBlock title={block.content.title} items={block.content.items} />;
    
    case 'tabs':
      return <TabsBlock tabs={block.content.tabs} />;
    
    default:
      return null;
  }
}

function CodeBlock({ title, language, code }: { title?: string; language?: string; code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="my-5 rounded-xl overflow-hidden border border-white/10">
      {(title || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-2">
            {title && <span className="text-xs text-gray-400">{title}</span>}
            {language && <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">{language}</span>}
          </div>
          <button onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            className="text-xs text-gray-400 hover:text-white transition-colors">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      )}
      <pre className="p-4 bg-[#0a0a12] overflow-x-auto text-sm leading-relaxed"><code className="text-gray-300">{code}</code></pre>
    </div>
  );
}

function TableBlock({ title, headers, rows }: { title?: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="my-6 overflow-x-auto">
      {title && <h4 className="text-base font-bold text-white mb-3">{title}</h4>}
      <div className="rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5">
              {headers.map((h, i) => <th key={i} className="px-4 py-3 text-right text-purple-300 font-bold border-b border-white/10">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                {row.map((cell, j) => <td key={j} className="px-4 py-3 text-gray-300">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InfoBlock({ type, title, content }: { type: string; title: string; content: string | string[] }) {
  const styles: Record<string, { border: string; bg: string; text: string }> = {
    info: { border: 'border-blue-500/30', bg: 'bg-blue-500/5', text: 'text-blue-300' },
    warning: { border: 'border-amber-500/30', bg: 'bg-amber-500/5', text: 'text-amber-300' },
    success: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', text: 'text-emerald-300' },
    tip: { border: 'border-purple-500/30', bg: 'bg-purple-500/5', text: 'text-purple-300' },
    danger: { border: 'border-red-500/30', bg: 'bg-red-500/5', text: 'text-red-300' },
  };
  const s = styles[type] || styles.info;
  return (
    <div className={`my-5 rounded-xl border ${s.border} ${s.bg} p-5`}>
      <h4 className={`font-bold ${s.text} mb-2 flex items-center gap-2`}>
        <span className={`w-6 h-6 rounded-md ${s.bg} border ${s.border} flex items-center justify-center text-xs`}>
          {type === 'info' ? 'i' : type === 'warning' ? '!' : type === 'success' ? '\u2713' : type === 'danger' ? '\u2717' : '\u2605'}
        </span>
        {title}
      </h4>
      {Array.isArray(content) ? (
        <ul className="space-y-1.5 text-sm text-gray-300 list-disc list-inside">{content.map((item, i) => <li key={i}>{item}</li>)}</ul>
      ) : (
        <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
      )}
    </div>
  );
}

function ListBlock({ items, style = 'disc', title }: { items: string[]; style?: string; title?: string }) {
  return (
    <div className="my-4">
      {title && <h4 className="text-base font-bold text-white mb-3">{title}</h4>}
      <ul className={`space-y-2 text-gray-300 text-sm list-${style} list-inside`}>
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed flex items-start gap-2">
            {style === 'check' && <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
            {style === 'arrow' && <span className="text-purple-400 shrink-0">\u2190</span>}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatsBlock({ stats }: { stats: { label: string; value: string; color: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
      {stats.map((stat, i) => (
        <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} border border-white/10 text-center`}>
          <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
          <div className="text-xs text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

function FlowBlock({ title, steps }: { title?: string; steps: { label: string; sublabel?: string; color?: string }[] }) {
  const defaultColors = ['from-purple-500 to-indigo-500', 'from-pink-500 to-rose-500', 'from-cyan-500 to-blue-500', 'from-amber-500 to-orange-500', 'from-emerald-500 to-teal-500', 'from-violet-500 to-purple-500'];
  return (
    <div className="my-6">
      {title && <h4 className="text-base font-bold text-white mb-4 text-center">{title}</h4>}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`px-4 py-3 rounded-xl bg-gradient-to-br ${step.color || defaultColors[i % defaultColors.length]} text-white text-center min-w-[100px] shadow-lg`}>
              <div className="font-bold text-sm">{step.label}</div>
              {step.sublabel && <div className="text-xs opacity-80 mt-1">{step.sublabel}</div>}
            </div>
            {i < steps.length - 1 && (
              <svg className="w-5 h-5 text-gray-500 shrink-0 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonBlock({ title, left, right }: { title?: string; left: { title: string; items: string[]; color: string }; right: { title: string; items: string[]; color: string } }) {
  return (
    <div className="my-6">
      {title && <h4 className="text-base font-bold text-white mb-4 text-center">{title}</h4>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`p-5 rounded-xl border ${left.color} bg-white/5`}>
          <h5 className="text-lg font-bold text-white mb-3">{left.title}</h5>
          <ul className="space-y-2">{left.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              {item}
            </li>
          ))}</ul>
        </div>
        <div className={`p-5 rounded-xl border ${right.color} bg-white/5`}>
          <h5 className="text-lg font-bold text-white mb-3">{right.title}</h5>
          <ul className="space-y-2">{right.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              {item}
            </li>
          ))}</ul>
        </div>
      </div>
    </div>
  );
}

function TimelineBlock({ title, steps }: { title?: string; steps: { title: string; description: string; detail?: string }[] }) {
  return (
    <div className="my-6 relative">
      {title && <h4 className="text-base font-bold text-white mb-4">{title}</h4>}
      <div className="absolute right-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 opacity-30"></div>
      {steps.map((step, i) => (
        <div key={i} className="relative flex gap-4 mb-5 last:mb-0">
          <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">{i + 1}</div>
          <div className="flex-1 glass-card p-4">
            <h5 className="font-bold text-white mb-1">{step.title}</h5>
            <p className="text-gray-400 text-sm">{step.description}</p>
            {step.detail && <p className="text-gray-500 text-xs mt-2">{step.detail}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function FlashCardBlock({ title, cards }: { title?: string; cards: { front: string; back: string; category?: string }[] }) {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="my-6">
      {title && <h4 className="text-base font-bold text-white mb-4 text-center">{title}</h4>}
      <div className="max-w-2xl mx-auto">
        <div className="relative h-56" style={{ perspective: '1000px' }}>
          <div className="relative w-full h-full transition-transform duration-500" style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : '' }}>
            <div className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center text-center" style={{ backfaceVisibility: 'hidden' }}>
              {cards[current].category && <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 mb-3">{cards[current].category}</span>}
              <p className="text-lg font-bold text-white">{cards[current].front}</p>
              <button onClick={() => setFlipped(true)} className="mt-4 text-sm text-purple-400 hover:text-purple-300">مشاهده پاسخ</button>
            </div>
            <div className="absolute inset-0 glass-card p-6 flex flex-col items-center justify-center text-center border-purple-500/30" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <p className="text-gray-300 leading-relaxed text-sm">{cards[current].back}</p>
              <button onClick={() => setFlipped(false)} className="mt-4 text-sm text-cyan-400 hover:text-cyan-300">بازگشت به سوال</button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button onClick={() => { setCurrent((current - 1 + cards.length) % cards.length); setFlipped(false); }} className="px-4 py-2 glass-card text-sm hover:bg-white/10 transition-all">قبلی</button>
          <span className="text-sm text-gray-500">{current + 1} / {cards.length}</span>
          <button onClick={() => { setCurrent((current + 1) % cards.length); setFlipped(false); }} className="px-4 py-2 glass-card text-sm hover:bg-white/10 transition-all">بعدی</button>
        </div>
      </div>
    </div>
  );
}

function ScenarioBlock({ title, scenarios }: { title?: string; scenarios: { situation: string; options: { text: string; result: string; quality: string }[] }[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const scenario = scenarios[current];
  return (
    <div className="my-6">
      {title && <h4 className="text-base font-bold text-white mb-4 text-center">{title}</h4>}
      <div className="glass-card p-5 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">{current + 1}</div>
          <div className="flex-1">
            <div className="text-xs text-gray-500">سناریو {current + 1} از {scenarios.length}</div>
            <h5 className="font-bold text-white text-sm">{scenario.situation}</h5>
          </div>
        </div>
        <div className="space-y-2">
          {scenario.options.map((option, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className={`w-full text-right p-3 rounded-xl border transition-all duration-300 ${
                selected === i
                  ? option.quality === 'best' ? 'bg-emerald-500/20 border-emerald-500/50' : option.quality === 'better' ? 'bg-cyan-500/20 border-cyan-500/50' : 'bg-amber-500/20 border-amber-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}>
              <div className="flex items-center justify-between">
                <span className="font-medium text-white text-sm">{option.text}</span>
                {selected === i && (
                  <span className={`text-xs px-2 py-0.5 rounded ${option.quality === 'best' ? 'bg-emerald-500/30 text-emerald-300' : option.quality === 'better' ? 'bg-cyan-500/30 text-cyan-300' : 'bg-amber-500/30 text-amber-300'}`}>
                    {option.quality === 'best' ? 'بهترین' : option.quality === 'better' ? 'خوب' : 'قابل قبول'}
                  </span>
                )}
              </div>
              {selected === i && <p className="text-xs text-gray-300 mt-2 pt-2 border-t border-white/10">{option.result}</p>}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={() => { setCurrent(Math.max(0, current - 1)); setSelected(null); }} disabled={current === 0} className="px-3 py-1.5 glass-card text-xs disabled:opacity-30 hover:bg-white/10 transition-all">قبلی</button>
          <button onClick={() => { setCurrent(Math.min(scenarios.length - 1, current + 1)); setSelected(null); }} disabled={current === scenarios.length - 1} className="px-3 py-1.5 glass-card text-xs disabled:opacity-30 hover:bg-white/10 transition-all">بعدی</button>
        </div>
      </div>
    </div>
  );
}

function DiagramBlock({ title, nodes }: { title?: string; nodes: { label: string; description: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-6">
      {title && <h4 className="text-base font-bold text-white mb-4 text-center">{title}</h4>}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {nodes.map((node, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${active === i ? 'bg-purple-500/30 text-purple-200 border border-purple-500/50' : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'}`}>
            {node.label}
          </button>
        ))}
      </div>
      <div className="glass-card p-5 text-center animate-fade-in">
        <p className="text-gray-300 leading-relaxed">{nodes[active].description}</p>
      </div>
    </div>
  );
}

function QuoteBlock({ text, author }: { text: string; author?: string }) {
  return (
    <div className="my-5 p-5 rounded-xl bg-gradient-to-l from-purple-500/10 to-pink-500/10 border border-purple-500/20">
      <svg className="w-8 h-8 text-purple-400 mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
      <p className="text-gray-200 italic leading-relaxed text-lg">{text}</p>
      {author && <p className="text-purple-300 text-sm mt-3 text-left">- {author}</p>}
    </div>
  );
}

function ChecklistBlock({ title, items }: { title?: string; items: { text: string; checked?: boolean }[] }) {
  return (
    <div className="my-5 glass-card p-5">
      {title && <h4 className="text-base font-bold text-white mb-3">{title}</h4>}
      <div className="space-y-2">
        {items.map((item, i) => (
          <label key={i} className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${item.checked ? 'bg-emerald-500 border-emerald-500' : 'border-white/20 group-hover:border-purple-500/50'}`}>
              {item.checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </div>
            <span className={`text-sm ${item.checked ? 'text-gray-500 line-through' : 'text-gray-300'}`}>{item.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function TabsBlock({ tabs }: { tabs: { label: string; content: LessonBlock[] }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-6">
      <div className="flex gap-1 mb-4 overflow-x-auto pb-2">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${active === i ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="glass-card p-5">
        {tabs[active].content.map((block, i) => <BlockRenderer key={i} block={block} />)}
      </div>
    </div>
  );
}

export default function LessonViewer({ course }: { course: CourseData }) {
  const [activeLesson, setActiveLesson] = useState(0);
  const lesson = course.lessons[activeLesson];

  return (
    <section className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="text-xs text-purple-300">{course.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4"><span className="gradient-text">{course.title}</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{course.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${colorMap[course.color]?.split(' ')[1] || 'text-purple-300'}`}>سرفصل‌های دوره</h3>
                <span className="text-xs text-gray-500">{activeLesson + 1}/{course.lessons.length}</span>
              </div>
              <div className="mb-4"><ProgressBar value={activeLesson + 1} max={course.lessons.length} label="پیشرفت دوره" color={course.color} /></div>
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pl-1">
                {course.lessons.map((l, index) => (
                  <button key={l.id} onClick={() => setActiveLesson(index)}
                    className={`w-full text-right px-3 py-3 rounded-lg text-sm transition-all duration-300 flex items-center gap-3 ${
                      activeLesson === index ? colorMap[course.color]
                      : index < activeLesson ? 'text-gray-300 hover:bg-white/5 border border-transparent'
                      : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      activeLesson === index ? activeColorMap[course.color] : index < activeLesson ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-gray-500'
                    }`}>
                      {index < activeLesson ? <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> : index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{l.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{l.duration}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded border ${difficultyColors[l.difficulty]}`}>{l.difficulty}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="glass-card p-6 sm:p-8">
              {lesson.data.subtitle && <p className="text-gray-400 mb-6 leading-relaxed">{lesson.data.subtitle}</p>}
              {lesson.data.blocks.map((block, i) => <BlockRenderer key={i} block={block} />)}
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))} disabled={activeLesson === 0}
                className="px-6 py-3 glass-card text-sm font-medium disabled:opacity-30 hover:bg-white/10 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                درس قبلی
              </button>
              <button onClick={() => setActiveLesson(Math.min(course.lessons.length - 1, activeLesson + 1))} disabled={activeLesson === course.lessons.length - 1}
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
