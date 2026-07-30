import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AboutIntroSection: React.FC = () => {
  const marqueeItems = [
    'DESENVOLVIMENTO WEB',
    'LANDING PAGES',
    'EXPERIÊNCIAS DIGITAIS',
    'REACT & TYPESCRIPT',
    'DESIGN DE LUXO',
    'PERFORMANCE & SEO',
    'ALTAS TAXAS DE CONVERSÃO',
    'PORTAL INSTITUCIONAL'
  ];

  return (
    <section id="sobre" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Infinite Horizontal Marquee Band */}
      <div className="w-full bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-violet-950/30 border-y border-white/10 py-5 overflow-hidden mb-20 select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-display font-extrabold text-xl md:text-2xl text-slate-300 tracking-wider hover:text-cyan-400 transition-colors">
                {text}
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Heading */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
              <Terminal className="w-3.5 h-3.5" />
              <span>APRESENTAÇÃO</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              Eu transformo ideias em <span className="gradient-text-cyan">produtos digitais</span> marcantes.
            </h2>

            <p className="text-slate-300 leading-relaxed font-sans text-base md:text-lg">
              Como desenvolvedor web e fundador da <strong className="text-white">Pedro Cadore Soluções Tech</strong>, ajudo empresas, escritórios e empreendedores a construírem uma presença online que transmite máxima credibilidade e gera novos negócios.
            </p>
          </div>

          {/* Right Column Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">Arquitetura Sob Medida</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Desenvolvimento sem templates genéricos ou lentos. Cada linha de código é estruturada para velocidade e facilidade de manutenção.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 group space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">Estética Dark Premium</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Interfaces modernas com efeitos visuais calculados, gradientes suaves e tipografia marcante para encantar o visitante.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-all duration-300 group space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">Foco Comercial & SEO</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Sua página não é apenas bonita, mas é otimizada para aparecer nos mecanismos de busca e converter visitantes em contatos via WhatsApp.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 block mb-1">// RESULTADOS COMPROVADOS</span>
                <h3 className="text-lg font-bold font-display text-white">Pronto para o Próximo Nível?</h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-2">
                  Atendimento direto e personalizado do planejamento até a publicação.
                </p>
              </div>

              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold hover:text-cyan-300 transition-colors pt-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Fazer um orçamento agora</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
