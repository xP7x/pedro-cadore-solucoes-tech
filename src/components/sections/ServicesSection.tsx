import React, { useState } from 'react';
import { servicesData } from '../../data/services';
import { Service } from '../../types';
import { TiltCard } from '../ui/TiltCard';
import { Globe, Zap, Sparkles, Layers, ShieldCheck, ArrowRight, CheckCircle2, X, MessageSquare } from 'lucide-react';
import { socialLinksData } from '../../data/social';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-violet-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  const whatsappUrl = socialLinksData.find(s => s.platform === 'WhatsApp')?.url || '#contato';

  return (
    <section id="servicos" className="py-24 bg-[#0b0d12] relative overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
              // SOLUÇÕES TECH
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white">
              Serviços Especializados
            </h2>
            <p className="text-slate-400 font-sans text-base">
              Soluções completas de desenvolvimento front-end e presença digital construídas para destacar sua marca e gerar contatos qualificados.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 text-right">
            <span>05 SERVIÇOS DISPONÍVEIS</span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <TiltCard
              key={service.id}
              className="h-full"
              glowColor="rgba(34, 211, 238, 0.15)"
            >
              <div
                onClick={() => setSelectedService(service)}
                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col justify-between cursor-pointer group relative overflow-hidden"
                data-cursor-text="Detalhes"
              >
                {/* Background Subtle Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500" />

                <div className="space-y-6 relative z-10">
                  {/* Top Card Bar: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-4xl font-extrabold text-white/20 group-hover:text-cyan-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300 group-hover:border-white/15"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Arrow */}
                <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span>Saber mais</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="bg-[#0b0d12] border border-white/15 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl font-extrabold text-cyan-400">
                {selectedService.number}
              </span>
              <div>
                <h3 className="text-2xl font-bold font-display text-white">{selectedService.title}</h3>
                <span className="text-xs font-mono text-slate-400">Pedro Cadore Soluções Tech</span>
              </div>
            </div>

            <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed border-t border-white/10 pt-4">
              {selectedService.fullDesc}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider">
                // O que está incluso no serviço:
              </h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="text-xs font-mono text-slate-400">
                Dúvidas ou orçamento sob medida?
              </div>
              <a
                href={`${whatsappUrl}&text=Ol%C3%A1%20Pedro!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20${encodeURIComponent(selectedService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
