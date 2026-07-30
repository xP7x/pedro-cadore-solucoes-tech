import React from 'react';
import { motion } from 'motion/react';
import { HeroLogoCard } from '../ui/HeroLogoCard';
import { ParticleNetworkCanvas } from '../ui/ParticleNetworkCanvas';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowDown, ArrowUpRight, MessageSquare, Sparkles, Code2, Globe } from 'lucide-react';
import { socialLinksData } from '../../data/social';

export const HeroSection: React.FC = () => {
  const whatsappUrl = socialLinksData.find(s => s.platform === 'WhatsApp')?.url || '#contato';

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-radial-gradient">
      {/* Background Redes e Partículas Texture (Discreet Particle Network) */}
      <ParticleNetworkCanvas particleCount={90} />

      {/* Background Decorative Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-semibold uppercase tracking-wider">Pedro Cadore Soluções Tech</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Porto Alegre — RS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-[1.08] tracking-tight text-white">
                Desenvolvo <br className="hidden sm:block" />
                <span className="gradient-text-brand">experiências digitais</span> <br className="hidden sm:block" />
                que geram resultados.
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed font-normal">
                Sou <strong className="text-white font-semibold">Pedro Cadore</strong>, desenvolvedor web e fundador da <span className="text-cyan-300 font-medium">Pedro Cadore Soluções Tech</span>. Crio websites institucionais, landing pages e aplicações web interativas de altíssima performance.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                href="#projetos"
                onClick={scrollToProjects}
                className="px-7 py-4 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-95 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center gap-3 group"
                cursorText="Explorar"
              >
                <span>Conheça Meus Projetos</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl font-mono text-xs font-bold text-slate-200 bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 hover:text-cyan-300 transition-all flex items-center gap-2.5 group"
                cursorText="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Vamos Conversar</span>
              </MagneticButton>
            </motion.div>

            {/* Tech Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>React & TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Websites & Landing Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Soluções Sob Medida</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Official Company Logo Card Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] lg:min-h-[480px]"
          >
            <HeroLogoCard />
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex items-center justify-between pt-8 text-xs font-mono text-slate-500">
        <a
          href="#sobre"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors group cursor-pointer"
        >
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-cyan-400/50 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          </div>
          <span className="uppercase tracking-widest text-[10px]">Rolar para explorar</span>
        </a>

        <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400">
          <span>PORTFÓLIO OFICIAL</span>
          <span>•</span>
          <span>VERSÃO 2026</span>
        </div>
      </div>
    </section>
  );
};
