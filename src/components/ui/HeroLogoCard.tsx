import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, CircuitBoard, Layers, CheckCircle2 } from 'lucide-react';
import { PedroCadoreLogo } from './PedroCadoreLogo';

export const HeroLogoCard: React.FC = () => {
  const [layoutMode, setLayoutMode] = useState<'vertical' | 'horizontal'>('vertical');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full min-h-[420px] md:min-h-[480px] relative flex flex-col items-center justify-between p-6 md:p-8 rounded-3xl glass-panel border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden group select-none transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Radial Neon Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/15 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-all duration-700" />

      {/* Top Header Controls / Badge inside card */}
      <div className="w-full flex items-center justify-between relative z-10 text-xs font-mono">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
          <CircuitBoard className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-wider font-semibold">Identidade Visual Oficial</span>
        </div>

        {/* Layout Switcher Pill */}
        <button
          onClick={() => setLayoutMode(layoutMode === 'vertical' ? 'horizontal' : 'vertical')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-all text-[10px] cursor-pointer"
          title="Alternar orientação da logo"
        >
          <Layers className="w-3 h-3 text-cyan-400" />
          <span>{layoutMode === 'vertical' ? 'Ver Horizontal' : 'Ver Vertical'}</span>
        </button>
      </div>

      {/* Center: Official Company Logo Display */}
      <div className="my-auto py-8 relative z-10 w-full flex items-center justify-center">
        <motion.div
          key={layoutMode}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="p-6 md:p-8 rounded-2xl bg-[#080b11]/80 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl relative group-hover:border-cyan-500/40 transition-all duration-500"
        >
          {/* Subtle Ambient Circuit Glow behind SVG */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 rounded-2xl pointer-events-none" />

          <PedroCadoreLogo
            layout={layoutMode}
            size={layoutMode === 'vertical' ? 'lg' : 'md'}
            glow={true}
            animated={isHovered}
          />
        </motion.div>
      </div>

      {/* Bottom Footer Details inside Card */}
      <div className="w-full relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2 text-cyan-300 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Pedro Cadore Soluções Tech</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Logo Vetorial Interativa</span>
        </div>
      </div>
    </div>
  );
};
