import { useState, ReactNode } from 'react';

// Progress Bar Component
export function ProgressBar({ value, max, label, color = 'purple' }: { value: number; max: number; label: string; color?: string }) {
  const percentage = (value / max) * 100;
  const colors: Record<string, string> = {
    purple: 'from-purple-500 to-indigo-500',
    pink: 'from-pink-500 to-rose-500',
    cyan: 'from-cyan-500 to-blue-500',
    amber: 'from-amber-500 to-orange-500',
    emerald: 'from-emerald-500 to-teal-500',
  };
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{label}</span>
        <span className="text-sm text-gray-400">{value}/{max}</span>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-l ${colors[color] || colors.purple} transition-all duration-1000`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

// Accordion Component
export function Accordion({ title, children, icon }: { title: string; children: ReactNode; icon?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-all">
        <div className="flex items-center gap-3">
          {icon && <span className="text-lg text-purple-400">{icon}</span>}
          <span className="font-bold text-white">{title}</span>
        </div>
        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="p-4 bg-white/[0.02] border-t border-white/5">{children}</div>}
    </div>
  );
}

// Tabs Component
export function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-6">
      <div className="flex gap-1 mb-4 overflow-x-auto pb-2">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${active === i ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="glass-card p-5">{tabs[active].content}</div>
    </div>
  );
}

// Comparison Table
export function ComparisonTable({ headers, rows, title }: { headers: string[]; rows: string[][]; title?: string }) {
  return (
    <div className="my-6 overflow-x-auto">
      {title && <h4 className="text-lg font-bold text-white mb-3">{title}</h4>}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-right text-purple-300 font-bold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Code Block
export function CodeBlock({ code, language = 'text', title }: { code: string; language?: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-white/10">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
          <span className="text-xs text-gray-400">{title}</span>
          <div className="flex items-center gap-2">
            {language && <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">{language}</span>}
            <button onClick={handleCopy} className="text-xs text-gray-400 hover:text-white transition-colors">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
      <pre className="p-4 bg-[#0d0d15] overflow-x-auto text-sm leading-relaxed">
        <code className="text-gray-300">{code}</code>
      </pre>
    </div>
  );
}

// Info Card
export function InfoCard({ type = 'info', title, children }: { type?: 'info' | 'warning' | 'success' | 'tip'; title: string; children: ReactNode }) {
  const styles = {
    info: { border: 'border-blue-500/30', bg: 'bg-blue-500/5', icon: 'border-blue-500', text: 'text-blue-300' },
    warning: { border: 'border-amber-500/30', bg: 'bg-amber-500/5', icon: 'border-amber-500', text: 'text-amber-300' },
    success: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', icon: 'border-emerald-500', text: 'text-emerald-300' },
    tip: { border: 'border-purple-500/30', bg: 'bg-purple-500/5', icon: 'border-purple-500', text: 'text-purple-300' },
  };
  const s = styles[type];
  const icons = { info: 'i', warning: '!', success: '\u2713', tip: '\u2605' };
  return (
    <div className={`my-4 rounded-xl border ${s.border} ${s.bg} p-5`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-7 h-7 rounded-lg ${s.bg} border ${s.icon} flex items-center justify-center ${s.text} font-bold text-sm`}>
          {icons[type]}
        </div>
        <h4 className={`font-bold ${s.text}`}>{title}</h4>
      </div>
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

// Step/Timeline Component
export function Timeline({ steps }: { steps: { title: string; description: string; detail?: string }[] }) {
  return (
    <div className="my-6 relative">
      <div className="absolute right-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 opacity-30"></div>
      {steps.map((step, i) => (
        <div key={i} className="relative flex gap-5 mb-6 last:mb-0">
          <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
            {i + 1}
          </div>
          <div className="flex-1 glass-card p-4">
            <h4 className="font-bold text-white mb-1">{step.title}</h4>
            <p className="text-gray-400 text-sm">{step.description}</p>
            {step.detail && <p className="text-gray-500 text-xs mt-2">{step.detail}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

// Stat Card
export function StatCard({ number, label, icon, color = 'purple' }: { number: string; label: string; icon: ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    purple: 'from-purple-500/20 to-indigo-500/20 border-purple-500/20',
    pink: 'from-pink-500/20 to-rose-500/20 border-pink-500/20',
    cyan: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/20',
    amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/20',
    emerald: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/20',
  };
  return (
    <div className={`rounded-xl bg-gradient-to-br ${colors[color]} border p-5 text-center`}>
      <div className="mb-2 flex justify-center">{icon}</div>
      <div className="text-2xl font-black gradient-text mb-1">{number}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

// Interactive Diagram
export function FlowDiagram({ nodes, title }: { nodes: { label: string; sublabel?: string; color?: string }[]; title?: string }) {
  const defaultColors = ['from-purple-500 to-indigo-500', 'from-pink-500 to-rose-500', 'from-cyan-500 to-blue-500', 'from-amber-500 to-orange-500', 'from-emerald-500 to-teal-500'];
  return (
    <div className="my-6">
      {title && <h4 className="text-lg font-bold text-white mb-4 text-center">{title}</h4>}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`px-5 py-3 rounded-xl bg-gradient-to-br ${node.color || defaultColors[i % defaultColors.length]} text-white text-center min-w-[120px]`}>
              <div className="font-bold text-sm">{node.label}</div>
              {node.sublabel && <div className="text-xs opacity-80 mt-1">{node.sublabel}</div>}
            </div>
            {i < nodes.length - 1 && (
              <svg className="w-6 h-6 text-gray-500 shrink-0 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Expandable Section
export function ExpandableSection({ title, children, defaultOpen = false }: { title: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="my-4 border border-white/10 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-all">
        <span className="font-bold text-white text-sm">{title}</span>
        <div className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {open && <div className="p-4 bg-white/[0.02] border-t border-white/5">{children}</div>}
    </div>
  );
}

// Donut Chart (CSS-based)
export function DonutChart({ segments, title, size = 160 }: { segments: { label: string; value: number; color: string }[]; title?: string; size?: number }) {
  const total = segments.reduce((a, b) => a + b.value, 0);
  let accumulated = 0;
  const gradientParts = segments.map((seg) => {
    const start = (accumulated / total) * 100;
    accumulated += seg.value;
    const end = (accumulated / total) * 100;
    return `${seg.color} ${start}% ${end}%`;
  });
  return (
    <div className="my-6 flex flex-col items-center">
      {title && <h4 className="text-lg font-bold text-white mb-4">{title}</h4>}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded-full" style={{ background: `conic-gradient(${gradientParts.join(', ')})` }}></div>
          <div className="absolute inset-4 rounded-full bg-[#0a0a0f] flex items-center justify-center">
            <span className="text-xl font-black gradient-text">{total}</span>
          </div>
        </div>
        <div className="space-y-2">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: seg.color }}></div>
              <span className="text-sm text-gray-300">{seg.label}</span>
              <span className="text-sm text-gray-500">({seg.value}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Section Heading
export function SectionHeading({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string }) {
  return (
    <div className="text-center mb-12">
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
          <span className="text-xs text-purple-300">{badge}</span>
        </div>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
        <span className="gradient-text">{title}</span>
      </h1>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}
