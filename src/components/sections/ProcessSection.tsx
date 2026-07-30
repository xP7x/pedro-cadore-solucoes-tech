import React from 'react';
import { processStepsData } from '../../data/process';
import { CheckCircle2, Workflow, ArrowRight, Sparkles } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
              // METODOLOGIA & ETAPAS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white">
              Processo de Trabalho
            </h2>
            <p className="text-slate-400 font-sans text-base">
              Fluxo transparente, ágil e focado em resultados desde a primeira conversa até o acompanhamento pós-lançamento.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500">
            <span>06 ETAPAS ESTRUTURADAS</span>
          </div>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {processStepsData.map((step, idx) => (
            <TiltCard key={step.number} className="h-full">
              <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden">
                
                {/* Glowing Corner Badge */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all duration-500" />

                <div className="space-y-6 relative z-10">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center font-mono text-lg font-bold text-cyan-300 group-hover:scale-110 transition-transform">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      ETAPA 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  {/* Details Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Pedro Cadore Soluções Tech</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
