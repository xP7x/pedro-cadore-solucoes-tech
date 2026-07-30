import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { socialLinksData } from '../../data/social';
import { PedroCadoreLogo } from '../ui/PedroCadoreLogo';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = socialLinksData.find(s => s.platform === 'WhatsApp')?.url || '#contato';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 md:px-8 ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group hover:scale-[1.02] transition-transform duration-300"
          >
            <PedroCadoreLogo layout="horizontal" size="sm" glow={isScrolled} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 relative ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] flex items-center gap-2 group hover:scale-[1.02]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white focus:outline-none hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden border-b border-white/10 overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Navegação Principal</span>
              </div>

              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-200 hover:text-cyan-300 font-display text-2xl font-bold transition-all border border-transparent hover:border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-cyan-500 font-normal">0{index + 1}</span>
                      <span>{item.label}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 opacity-40 text-cyan-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10 mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl font-mono text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(34,211,238,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>

              <div className="flex items-center justify-around text-xs font-mono text-slate-400 pt-2">
                {socialLinksData.slice(0, 3).map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
