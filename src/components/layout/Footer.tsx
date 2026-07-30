import React from 'react';
import { ArrowUp, Instagram, Linkedin, Github, Mail, MessageSquare, Heart } from 'lucide-react';
import { socialLinksData } from '../../data/social';
import { PedroCadoreLogo } from '../ui/PedroCadoreLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram': return <Instagram className="w-4 h-4" />;
      case 'Linkedin': return <Linkedin className="w-4 h-4" />;
      case 'Github': return <Github className="w-4 h-4" />;
      case 'Mail': return <Mail className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <PedroCadoreLogo layout="horizontal" size="md" glow={true} />

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed pt-2">
              Desenvolvimento de websites modernos, landing pages de alta conversão e experiências digitais interativas com máxima performance.
            </p>

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Disponível para novos projetos</span>
            </div>
          </div>

          {/* Location & Quick Info */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Localização & Foco</h4>
            <p className="text-slate-400">Porto Alegre — RS, Brasil</p>
            <p className="text-slate-400">Atendimento Global & Remoto</p>
            <p className="text-slate-400">Desenvolvimento Front-End & Full Stack</p>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider font-mono text-sm">Canais Oficiais</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinksData.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 text-slate-300 hover:text-cyan-300 font-mono text-xs transition-all duration-300 flex items-center gap-2"
                >
                  {getSocialIcon(social.icon)}
                  <span>{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Pedro Cadore Soluções Tech. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Desenvolvido com <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 inline" /> por Pedro Cadore
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-white/10 transition-all flex items-center gap-2 group"
              data-cursor-text="Topo"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
