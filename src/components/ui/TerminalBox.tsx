import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check, Circle, FileCode, Cpu, Sparkles } from 'lucide-react';

export const TerminalBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'philosophy'>('profile');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `// Pedro Cadore Soluções Tech
const developer = {
  name: "Pedro Cadore",
  role: "Web Developer & Founder",
  location: "Porto Alegre, RS",
  focus: ["Landing Pages", "Web Apps", "Digital Experiences"],
  whatsapp: "+55 (54) 99910-9299 Soluções Tech"
};`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#080a0f] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Top Window Header */}
      <div className="px-4 py-3 bg-[#0d1017] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Circle className="w-3 h-3 fill-rose-500 text-rose-500" />
          <Circle className="w-3 h-3 fill-amber-500 text-amber-500" />
          <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
          <span className="ml-2 text-slate-400 text-[11px] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>pedro@cadore-tech:~</span>
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3 py-1 rounded text-[10px] transition-colors ${activeTab === 'profile' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
          >
            profile.ts
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-3 py-1 rounded text-[10px] transition-colors ${activeTab === 'stack' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
          >
            stack.json
          </button>
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-3 py-1 rounded text-[10px] transition-colors ${activeTab === 'philosophy' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
              }`}
          >
            manifesto.md
          </button>
        </div>

        {/* Copy Code */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
          title="Copiar código"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Code Body */}
      <div className="p-5 space-y-4 text-slate-300 overflow-x-auto min-h-[220px]">
        {activeTab === 'profile' && (
          <div className="space-y-1.5 leading-relaxed">
            <div><span className="text-purple-400">import</span> &#123; <span className="text-yellow-300">Developer</span>, <span className="text-yellow-300">SolutionEngine</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@cadore-tech/core'</span>;</div>
            <br />
            <div><span className="text-purple-400">export const</span> <span className="text-blue-400">pedroCadore</span>: <span className="text-yellow-300">Developer</span> = &#123;</div>
            <div className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-emerald-300">'Pedro Cadore'</span>,</div>
            <div className="pl-4"><span className="text-cyan-300">company</span>: <span className="text-emerald-300">'Pedro Cadore Soluções Tech'</span>,</div>
            <div className="pl-4"><span className="text-cyan-300">location</span>: <span className="text-emerald-300">'Porto Alegre - RS'</span>,</div>
            <div className="pl-4"><span className="text-cyan-300">status</span>: <span className="text-emerald-300">'Disponível para novos projetos'</span>,</div>
            <div className="pl-4"><span className="text-cyan-300">specialties</span>: [</div>
            <div className="pl-8 text-emerald-300">'Sites Institucionais de Alta Performance',</div>
            <div className="pl-8 text-emerald-300">'Landing Pages de Alta Conversão',</div>
            <div className="pl-8 text-emerald-300">'Experiências Web Interativas 3D'</div>
            <div className="pl-4">],</div>
            <div className="pl-4"><span className="text-cyan-300">execute</span>: () =&gt; <span className="text-emerald-300">'Transformando ideias em código e resultados'</span></div>
            <div>&#125;;</div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-1.5 leading-relaxed text-slate-300">
            <div>&#123;</div>
            <div className="pl-4"><span className="text-blue-400">"frontend"</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"Angular"</span>, <span className="text-emerald-300">"Ionic"</span>],</div>
            <div className="pl-4"><span className="text-blue-400">"backend"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"C# / .NET"</span>, <span className="text-emerald-300">"REST APIs"</span>],</div>
            <div className="pl-4"><span className="text-blue-400">"database"</span>: [<span className="text-emerald-300">"PostgreSQL"</span>],</div>
            <div className="pl-4"><span className="text-blue-400">"tooling"</span>: [<span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"GitHub"</span>, <span className="text-emerald-300">"Vercel"</span>, <span className="text-emerald-300">"WordPress / Elementor"</span>],</div>
            <div className="pl-4"><span className="text-blue-400">"animation_3d"</span>: [<span className="text-emerald-300">"Three.js / WebGL"</span>, <span className="text-emerald-300">"GSAP / Motion"</span>]</div>
            <div>&#125;</div>
          </div>
        )}

        {activeTab === 'philosophy' && (
          <div className="space-y-2 leading-relaxed text-slate-300 font-sans text-xs">
            <p className="text-cyan-400 font-mono font-bold"># Manifesto Pedro Cadore Soluções Tech</p>
            <p className="text-slate-300">
              Não crio apenas sites; desenvolvo experiências digitais fluidas, velozes e focadas na conversão. Cada linha de código é pensada para gerar valor real para o seu negócio.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-400">
              <li>Design elegante sem excessos genéricos.</li>
              <li>Tempo de carregamento otimizado para máxima retenção.</li>
              <li>Compromisso com o sucesso comercial do cliente.</li>
            </ul>
          </div>
        )}
      </div>

      {/* Terminal Command Line Footer */}
      <div className="px-4 py-2.5 bg-[#0a0d14] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold">$</span>
          <span>ready to build your next digital experience...</span>
          <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
        </div>
        <span className="text-[10px] text-slate-400 uppercase">UTF-8 // PORTFOLIO_BUILD_2026</span>
      </div>
    </div>
  );
};
