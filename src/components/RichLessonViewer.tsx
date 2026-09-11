import { useState } from 'react';
import { ProgressBar } from './ui';
import type { LessonBlock, LessonData, CourseData } from './LessonViewer';

// کامپوننت‌های بصری پیشرفته
function VisualHero({ title, subtitle, gradient }: { title: string; subtitle: string; gradient: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-8 mb-8 bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="relative">
        <h2 className="text-3xl font-black text-white mb-3">{title}</h2>
        <p className="text-white/80 text-lg">{subtitle}</p>
      </div>
    </div>
  );
}

function VisualStats({ stats }: { stats: { label: string; value: string; icon: string; color: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {stats.map((stat, i) => (
        <div key={i} className={`relative overflow-hidden rounded-xl p-5 bg-gradient-to-br ${stat.color} border border-white/10 group hover:scale-105 transition-all duration-300`}>
          <div className="absolute top-2 left-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">{stat.icon}</div>
          <div className="relative">
            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-sm text-white/80">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VisualProcess({ steps, title }: { steps: { icon: string; title: string; description: string }[]; title: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center">{title}</h3>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/3 space-y-2">
          {steps.map((step, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-full text-right p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                active === i ? 'bg-gradient-to-l from-purple-500/30 to-pink-500/30 border border-purple-500/50 scale-105' : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0 ${active === i ? 'bg-white/20' : 'bg-white/5'}`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white text-sm">{step.title}</div>
                <div className="text-xs text-gray-400">مرحله {i + 1}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="lg:w-2/3 glass-card p-6 min-h-[200px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="text-5xl mb-4">{steps[active].icon}</div>
            <h4 className="text-2xl font-bold text-white mb-3">{steps[active].title}</h4>
            <p className="text-gray-300 leading-relaxed">{steps[active].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualComparison({ left, right, title }: { left: { title: string; items: string[]; icon: string; color: string }; right: { title: string; items: string[]; icon: string; color: string }; title: string }) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`relative overflow-hidden rounded-xl p-6 border ${left.color} bg-gradient-to-br ${left.color.replace('border', 'from').replace('/30', '-500/10').replace('/50', '-500/20')} to-transparent`}>
          <div className="absolute top-4 left-4 text-6xl opacity-10">{left.icon}</div>
          <div className="relative">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">{left.icon}</span>
              {left.title}
            </h4>
            <ul className="space-y-3">
              {left.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`relative overflow-hidden rounded-xl p-6 border ${right.color} bg-gradient-to-br ${right.color.replace('border', 'from').replace('/30', '-500/10').replace('/50', '-500/20')} to-transparent`}>
          <div className="absolute top-4 left-4 text-6xl opacity-10">{right.icon}</div>
          <div className="relative">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">{right.icon}</span>
              {right.title}
            </h4>
            <ul className="space-y-3">
              {right.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualTimeline({ steps, title }: { steps: { icon: string; title: string; description: string; duration: string }[]; title: string }) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center">{title}</h3>
      <div className="relative">
        <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"></div>
        {steps.map((step, i) => (
          <div key={i} className="relative flex gap-4 mb-6 last:mb-0">
            <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xl shrink-0 shadow-lg shadow-purple-500/30">
              {step.icon}
            </div>
            <div className="flex-1 glass-card p-4 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold text-white">{step.title}</h5>
                <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300">{step.duration}</span>
              </div>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualCode({ title, code, language }: { title: string; code: string; language: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-l from-purple-500/20 to-pink-500/20 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-gray-400 ml-2">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-0.5 rounded bg-purple-500/30 text-purple-300">{language}</span>
          <button onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            className="text-xs text-gray-400 hover:text-white transition-colors">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
      <pre className="p-4 bg-[#0a0a12] overflow-x-auto text-sm leading-relaxed"><code className="text-gray-300">{code}</code></pre>
    </div>
  );
}

function VisualTable({ title, headers, rows }: { title: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="my-6 overflow-x-auto">
      <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
      <div className="rounded-xl border border-white/10 overflow-hidden shadow-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-l from-purple-500/20 to-pink-500/20">
              {headers.map((h, i) => <th key={i} className="px-4 py-3 text-right text-purple-300 font-bold border-b border-white/10">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                {row.map((cell, j) => <td key={j} className="px-4 py-3 text-gray-300">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VisualInfo({ type, title, content }: { type: string; title: string; content: string | string[] }) {
  const styles: Record<string, { border: string; bg: string; text: string; icon: string }> = {
    info: { border: 'border-blue-500/30', bg: 'bg-blue-500/5', text: 'text-blue-300', icon: '\u2139' },
    warning: { border: 'border-amber-500/30', bg: 'bg-amber-500/5', text: 'text-amber-300', icon: '\u26A0' },
    success: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', text: 'text-emerald-300', icon: '\u2713' },
    tip: { border: 'border-purple-500/30', bg: 'bg-purple-500/5', text: 'text-purple-300', icon: '\u2605' },
    danger: { border: 'border-red-500/30', bg: 'bg-red-500/5', text: 'text-red-300', icon: '\u2717' },
  };
  const s = styles[type] || styles.info;
  return (
    <div className={`my-5 rounded-xl border ${s.border} ${s.bg} p-5 relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
      <div className="relative">
        <h4 className={`font-bold ${s.text} mb-3 flex items-center gap-2 text-lg`}>
          <span className={`w-8 h-8 rounded-lg ${s.bg} border ${s.border} flex items-center justify-center text-lg`}>{s.icon}</span>
          {title}
        </h4>
        {Array.isArray(content) ? (
          <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
            {content.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
          </ul>
        ) : (
          <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  );
}

function VisualQuote({ text, author }: { text: string; author?: string }) {
  return (
    <div className="my-8 relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/20">
      <div className="absolute top-4 right-4 text-8xl text-purple-500/20 font-serif">"</div>
      <div className="relative">
        <p className="text-xl text-gray-200 italic leading-relaxed mb-4">{text}</p>
        {author && <p className="text-purple-300 text-sm font-bold">- {author}</p>}
      </div>
    </div>
  );
}

function VisualChecklist({ title, items }: { title: string; items: { text: string; checked?: boolean }[] }) {
  const [checked, setChecked] = useState(items.map(i => i.checked || false));
  return (
    <div className="my-6 glass-card p-5">
      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        {title}
      </h4>
      <div className="space-y-2">
        {items.map((item, i) => (
          <label key={i} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/5 transition-all">
            <div onClick={(e) => { e.preventDefault(); const n = [...checked]; n[i] = !n[i]; setChecked(n); }}
              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${checked[i] ? 'bg-emerald-500 border-emerald-500' : 'border-white/20 group-hover:border-purple-500/50'}`}>
              {checked[i] && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </div>
            <span className={`text-sm ${checked[i] ? 'text-gray-500 line-through' : 'text-gray-300'}`}>{item.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

// کامپوننت اصلی نمایش درس با محتوای بصری غنی
export default function RichLessonViewer({ course }: { course: CourseData }) {
  const [activeLesson, setActiveLesson] = useState(0);
  const lesson = course.lessons[activeLesson];
  const lessonData = lesson.data;

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

  const renderBlock = (block: LessonBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        return <h3 key={index} className={`text-${block.content.size || 'xl'} font-bold text-white ${block.content.mt ? `mt-${block.content.mt}` : 'mt-8'} mb-4`}>{block.content.text}</h3>;
      case 'paragraph':
        return <p key={index} className="text-gray-300 leading-loose mb-4 text-[15px]">{block.content}</p>;
      case 'code':
        return <VisualCode key={index} title={block.content.title} language={block.content.language} code={block.content.code} />;
      case 'table':
        return <VisualTable key={index} title={block.content.title} headers={block.content.headers} rows={block.content.rows} />;
      case 'info':
        return <VisualInfo key={index} type={block.content.type} title={block.content.title} content={block.content.content} />;
      case 'stats':
        return <VisualStats key={index} stats={block.content} />;
      case 'flow':
        return <VisualProcess key={index} title={block.content.title} steps={block.content.steps.map((s: any, i: number) => ({ icon: ['\u{1F3AF}', '\u{26A1}', '\u{1F527}', '\u{2705}', '\u{1F4CA}', '\u{1F680}'][i % 6], title: s.label || s, description: s.sublabel || '' }))} />;
      case 'comparison':
        return <VisualComparison key={index} title={block.content.title} left={{ ...block.content.left, icon: '\u{274C}' }} right={{ ...block.content.right, icon: '\u2705' }} />;
      case 'timeline':
        return <VisualTimeline key={index} title={block.content.title} steps={block.content.steps.map((s: any) => ({ icon: '\u{1F4CC}', ...s, duration: s.detail || s.duration || '' }))} />;
      case 'quote':
        return <VisualQuote key={index} text={block.content.text} author={block.content.author} />;
      case 'checklist':
        return <VisualChecklist key={index} title={block.content.title} items={block.content.items} />;
      case 'list':
        return (
          <div key={index} className="my-4">
            {block.content.title && <h4 className="text-base font-bold text-white mb-3">{block.content.title}</h4>}
            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
              {block.content.items.map((item: string, i: number) => (
                <li key={i} className="leading-relaxed flex items-start gap-2">
                  <span className="text-purple-400 shrink-0">\u2022</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

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
              <VisualHero title={lessonData.title} subtitle={lessonData.subtitle || ''} gradient={`from-${course.color}-500/30 via-purple-500/20 to-pink-500/30`} />
              {lessonData.blocks.map((block, i) => renderBlock(block, i))}
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
