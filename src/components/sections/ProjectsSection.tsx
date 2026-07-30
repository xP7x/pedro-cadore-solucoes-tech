import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Eye, Sparkles, FolderCode, ArrowUpRight } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Institucional', 'Landing Page', 'Voluntário', 'Portfólio'];

  const filteredProjects = activeCategory === 'Todos'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
              // CASE STUDIES & PROJETOS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white">
              Projetos Desenvolvidos
            </h2>
            <p className="text-slate-400 font-sans text-base">
              Conheça algumas das soluções web reais desenvolvidas para escritórios, joalherias, clínicas veterinárias e marcas que buscam destaque.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.2)] font-bold'
                    : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Large Project Showcase */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <TiltCard
                key={project.id}
                className="w-full"
                glowColor="rgba(34, 211, 238, 0.2)"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="glass-panel rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-500 p-6 md:p-10 cursor-pointer group relative overflow-hidden"
                  data-cursor-text="Ver Projeto"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Project Image Frame (Left or Right) */}
                    <div className={`lg:col-span-7 relative ${isEven ? '' : 'lg:order-2'}`}>
                      <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0b0d12] relative group-hover:scale-[1.01] transition-transform duration-500 shadow-2xl">
                        
                        {/* Browser Top Bar */}
                        <div className="bg-[#11141b] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 truncate max-w-[200px]">
                            {project.url}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-300">
                            {project.category}
                          </span>
                        </div>

                        {/* Image Preview with Hover Dark Overlay */}
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img
                            src={project.image}
                            alt={project.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                        </div>

                      </div>
                    </div>

                    {/* Project Text Information (Right or Left) */}
                    <div className={`lg:col-span-5 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-3xl font-extrabold text-cyan-400/80">
                          0{project.id}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                          {project.year}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </h3>
                        <p className="text-xs font-mono text-cyan-400">{project.subtitle}</p>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                        {project.description}
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 flex items-center gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-white bg-white/10 hover:bg-cyan-500/20 border border-white/15 hover:border-cyan-500/40 transition-all flex items-center gap-2"
                        >
                          <Eye className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Ver Detalhes do Projeto</span>
                        </button>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all"
                          title="Acessar site ao vivo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
