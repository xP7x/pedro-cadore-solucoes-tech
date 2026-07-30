import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MessageSquare, Mail, Instagram, Linkedin, Github, Send, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { socialLinksData } from '../../data/social';
import { MagneticButton } from '../ui/MagneticButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Website Institucional',
    budget: 'R$ 2.000 - R$ 5.000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch { }

    setSubmitted(true);

    // Format WhatsApp message URL
    const text = `Olá Pedro! Meu nome é *${formData.name}* (${formData.email}).%0A%0A*Serviço:* ${formData.serviceType}%0A*Orçamento:* ${formData.budget}%0A*Mensagem:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/5554999109299?text=${text}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram': return <Instagram className="w-5 h-5 text-rose-400" />;
      case 'Linkedin': return <Linkedin className="w-5 h-5 text-blue-400" />;
      case 'Github': return <Github className="w-5 h-5 text-purple-400" />;
      case 'Mail': return <Mail className="w-5 h-5 text-cyan-400" />;
      default: return <MessageSquare className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="contato" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
            // VAMOS CONVERSAR SOBRE O SEU PROJETO
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-display text-white leading-tight">
            Tem uma ideia? <br />
            Vamos transformá-la em uma <span className="gradient-text-cyan">experiência digital</span>.
          </h2>
          <p className="text-slate-400 font-sans text-base md:text-lg">
            Entre em contato direto pelo WhatsApp ou preencha os dados abaixo para um diagnóstico gratuito do seu projeto.
          </p>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-display text-white border-b border-white/10 pb-4">
                Canais Diretos de Atendimento
              </h3>

              <div className="space-y-4">
                {socialLinksData.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getSocialIcon(s.icon)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-display text-white">{s.platform}</h4>
                        <p className="text-xs font-mono text-slate-400">{s.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Status Notice */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-2xl text-xs font-mono text-cyan-300 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Atendimento ágil em Porto Alegre — RS e para clientes de todo o Brasil.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Proposal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">

              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Solicite uma Proposta sem Compromisso
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Ao clicar em enviar, você será direcionado para o WhatsApp com todos os detalhes já preenchidos.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-white/5 rounded-2xl border border-cyan-500/30 p-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold font-display text-white">Mensagem Preparada!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    A janela do WhatsApp foi aberta. Se a janela não abriu automaticamente, clique no botão abaixo para iniciar a conversa com Pedro Cadore.
                  </p>
                  <a
                    href={`https://wa.me/5551999999999?text=Ol%C3%A1%20Pedro!%20Gostaria%20de%20um%20or%C3%A7amento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir WhatsApp Novamente</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Seu Nome / Empresa *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: João Silva"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">E-mail ou Telefone *</label>
                      <input
                        type="text"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com ou WhatsApp"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Tipo de Solução</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1017] border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm font-sans"
                      >
                        <option value="Website Institucional">Website Institucional</option>
                        <option value="Landing Page de Conversão">Landing Page de Conversão</option>
                        <option value="Redesign & Presença Digital">Redesign & Presença Digital</option>
                        <option value="Aplicação Web Interativa 3D">Aplicação Web Interativa 3D</option>
                        <option value="Outra Solução Customizada">Outra Solução Customizada</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Expectativa de Investimento</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1017] border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm font-sans"
                      >
                        <option value="R$ 1.500 - R$ 3.000">R$ 1.500 - R$ 3.000</option>
                        <option value="R$ 3.000 - R$ 6.000">R$ 3.000 - R$ 6.000</option>
                        <option value="Acima de R$ 6.000">Acima de R$ 6.000</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Detalhes do Projeto *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte brevemente sobre o seu negócio, os objetivos do site e se possui prazo estimado..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm font-sans"
                    />
                  </div>

                  <MagneticButton
                    className="w-full py-4 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(34,211,238,0.3)] group cursor-pointer"
                    cursorText="Enviar"
                  >
                    <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    <span>Enviar Proposta via WhatsApp</span>
                  </MagneticButton>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
