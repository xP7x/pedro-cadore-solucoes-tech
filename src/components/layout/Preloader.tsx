import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PedroCadoreLogo } from '../ui/PedroCadoreLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setProgress(100);
      setIsFinished(true);
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              onComplete();
            }, 600);
          }, 200);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-between p-8 md:p-16 select-none overflow-hidden"
        >
          {/* Top Brand Tag */}
          <div className="w-full flex items-center justify-between font-mono text-xs text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Pedro Cadore Soluções Tech</span>
            </div>
            <span>Porto Alegre — RS</span>
          </div>

          {/* Central Animated Logo */}
          <div className="flex flex-col items-center text-center space-y-6 max-w-lg my-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <PedroCadoreLogo layout="vertical" size="lg" glow={true} animated={true} />
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-md space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">CARREGANDO AMBIENTE</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>

            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-0.5 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
