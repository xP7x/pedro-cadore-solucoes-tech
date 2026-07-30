import React from 'react';
import { TerminalBox } from '../ui/TerminalBox';
import { Instagram, Linkedin, Github, MessageSquare, Code2, MapPin, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { socialLinksData } from '../../data/social';

export const AboutPedroSection: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram': return <Instagram className="w-4 h-4" />;
      case 'Linkedin': return <Linkedin className="w-4 h-4" />;
      case 'Github': return <Github className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <section id="sobre-pedro" className="py-24 bg-[#0b0d12] relative overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
              // QUEM ESTÁ POR TRÁS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white">
              Sobre Pedro Cadore
            </h2>
            <p className="text-slate-400 font-sans text-base">
              Desenvolvedor apaixonado pela união de tecnologia, engenharia de software e design de alta performance.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500">
            <span>PORTO ALEGRE — RS</span>
          </div>
        </div>

        {/* Content Grid: Photo/Card + Terminal + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Profile Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl">

              {/* Photo Avatar Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 bg-[#050505] mb-6">
                <img
                  src="public\1784759377841.jfif"
                  alt="Pedro Cadore"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Dev & Founder
                  </span>
                  <span className="text-slate-300 font-bold">Pedro Cadore</span>
                </div>
              </div>

              {/* Quick Info List */}
              <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Localização:</span>
                  </span>
                  <span className="text-white font-semibold">Porto Alegre, RS</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Empresa:</span>
                  </span>
                  <span className="text-cyan-300 font-semibold">Pedro Cadore Soluções Tech</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Instagram Oficial:</span>
                  </span>
                  <a
                    href="https://www.instagram.com/cadore_tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    @cadore_tech
                  </a>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-3">
                {socialLinksData.slice(0, 3).map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all"
                    title={social.platform}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Bio & Interactive Terminal (8 cols) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Bio Paragraphs */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-white flex items-center gap-2">
                <span>Engenharia de Software com foco em experiência do usuário</span>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </h3>

              <p className="text-slate-300 font-sans text-base leading-relaxed">
                Acredito que um excelente produto digital nasce da união perfeita entre uma arquitetura técnica limpa e uma interface que encanta o olhar. Fundei a <strong className="text-white">Pedro Cadore Soluções Tech</strong> para oferecer soluções completas de desenvolvimento web que elevam o patamar de marcas e profissionais.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                <div className="flex items-center gap-2.5 text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Soluções personalizadas do zero</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Domínio em React, TypeScript, C# e Node</span>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Box */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                // INSPECIONAR CONSOLE DE DESENVOLVIMENTO
              </span>
              <TerminalBox />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
