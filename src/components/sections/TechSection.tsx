import React from 'react';
import { TechPhysicsCanvas } from '../three/TechPhysicsCanvas';
import { Cpu, Terminal, Sparkles, Layers } from 'lucide-react';

export const TechSection: React.FC = () => {
  return (
    <section id="tecnologias" className="py-24 bg-[#0b0d12] relative overflow-hidden border-t border-white/5">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
              // STACK & HARD SKILLS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white">
              Tecnologias Dominadas
            </h2>
            <p className="text-slate-400 font-sans text-base">
              Ecossistema completo de ferramentas modernas para desenvolvimento web, desde o front-end reativo até o banco de dados e controle de versão.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>FÍSICA INTERATIVA NO BROWSER</span>
          </div>
        </div>

        {/* Physics Tag Cloud Canvas & Inspector Component */}
        <TechPhysicsCanvas />

      </div>
    </section>
  );
};
