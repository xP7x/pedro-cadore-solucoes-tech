import React, { useEffect } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0b0d12] border border-white/15 rounded-3xl max-w-4xl w-full p-6 md:p-8 relative space-y-6 shadow-2xl my-auto max-h-[88vh] overflow-y-auto font-sans custom-scrollbar"
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">Cliente: {project.client}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="Fechar"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-extrabold font-display text-white">{project.title}</h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">{project.subtitle}</p>
        </div>

        {/* Image Preview Container */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">// Visualização do Projeto</span>
          </div>

          {/* Browser Frame Container */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050505] p-2 md:p-4 group">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <div className="bg-[#11141b] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="mx-auto bg-black/40 px-4 py-1 rounded-md text-[11px] font-mono text-slate-400 max-w-xs truncate border border-white/5">
                  {project.url}
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[420px] object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 mb-1">// Visão Geral do Projeto</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <h5 className="text-xs font-mono font-bold text-white mb-1">Desafio:</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{project.challenge}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <h5 className="text-xs font-mono font-bold text-cyan-300 mb-1">Solução Soluções Tech:</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 mb-2">// Funcionalidades Principais</h4>
              <div className="space-y-1.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stack & Actions */}
          <div className="md:col-span-1 space-y-6 bg-white/5 p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">Tecnologias Utilizadas</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span>Ano:</span>
                  <span className="text-white font-bold">{project.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Categoria:</span>
                  <span className="text-white font-bold">{project.category}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <span>Acessar Projeto Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
