import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { socialLinksData } from '../../data/social';

export const FloatingQuickActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl =
    socialLinksData.find((s) => s.platform === 'WhatsApp')?.url ||
    'https://wa.me/5551999999999?text=Ol%C3%A1%20Pedro!%20Gostaria%20de%20um%20or%C3%A7amento.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0b0d12]/90 hover:bg-[#11141b] border border-white/15 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all cursor-pointer"
            title="Voltar para o início"
            aria-label="Voltar para o início"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs font-mono font-bold">Voltar ao Início</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-mono text-xs font-bold shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all cursor-pointer border border-emerald-300/30"
        aria-label="Falar no WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span>WhatsApp</span>
      </motion.a>
    </div>
  );
};
