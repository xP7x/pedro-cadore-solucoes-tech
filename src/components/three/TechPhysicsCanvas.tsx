import React, { useEffect, useRef, useState } from 'react';
import { technologiesData } from '../../data/technologies';
import { Technology } from '../../types';
import { Code2, Cpu, Database, Globe2, Layers, Palette, Server, ShieldCheck, Sparkles, Terminal, Check } from 'lucide-react';

interface TechNode {
  tech: Technology;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isHovered: boolean;
  isDragging: boolean;
}

export const TechPhysicsCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<Technology | null>(technologiesData[0]);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools & CMS'];

  const filteredTechs = activeCategory === 'All'
    ? technologiesData
    : technologiesData.filter(t => t.category === activeCategory);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight || 450);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight || 450;
    };
    window.addEventListener('resize', handleResize);

    // Initialize Physics Nodes
    const nodes: TechNode[] = filteredTechs.map((tech, idx) => {
      const radius = 42 + tech.name.length * 3;
      return {
        tech,
        x: Math.random() * (width - radius * 2) + radius,
        y: Math.random() * (height - radius * 2) + radius,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius,
        isHovered: false,
        isDragging: false
      };
    });

    let mouseX = -1000;
    let mouseY = -1000;
    let draggedNodeIndex: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (draggedNodeIndex !== null && nodes[draggedNodeIndex]) {
        nodes[draggedNodeIndex].x = mouseX;
        nodes[draggedNodeIndex].y = mouseY;
        nodes[draggedNodeIndex].vx = 0;
        nodes[draggedNodeIndex].vy = 0;
      } else {
        nodes.forEach(node => {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          node.isHovered = dist < node.radius;
        });
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mX = e.clientX - rect.left;
      const mY = e.clientY - rect.top;

      nodes.forEach((node, idx) => {
        const dx = mX - node.x;
        const dy = mY - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius) {
          draggedNodeIndex = idx;
          node.isDragging = true;
          setSelectedTech(node.tech);
        }
      });
    };

    const handleMouseUp = () => {
      if (draggedNodeIndex !== null && nodes[draggedNodeIndex]) {
        nodes[draggedNodeIndex].isDragging = false;
        nodes[draggedNodeIndex].vx = (Math.random() - 0.5) * 2;
        nodes[draggedNodeIndex].vy = (Math.random() - 0.5) * 2;
      }
      draggedNodeIndex = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connections between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 180) * 0.15;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update & Render Nodes
      nodes.forEach(node => {
        if (!node.isDragging) {
          // Physics movement
          node.x += node.vx;
          node.y += node.vy;

          // Wall collision
          if (node.x - node.radius < 0) { node.x = node.radius; node.vx *= -1; }
          if (node.x + node.radius > width) { node.x = width - node.radius; node.vx *= -1; }
          if (node.y - node.radius < 0) { node.y = node.radius; node.vy *= -1; }
          if (node.y + node.radius > height) { node.y = height - node.radius; node.vy *= -1; }

          // Mouse repel
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 0) {
            const force = (140 - dist) / 140;
            node.vx -= (dx / dist) * force * 0.35;
            node.vy -= (dy / dist) * force * 0.35;
          }

          // Friction damping
          node.vx *= 0.985;
          node.vy *= 0.985;
        }

        // Draw Node Bubble
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        // Fill background
        if (node.isHovered || node.isDragging || selectedTech?.name === node.tech.name) {
          ctx.fillStyle = 'rgba(17, 20, 27, 0.92)';
          ctx.shadowColor = node.tech.color;
          ctx.shadowBlur = 20;
          ctx.strokeStyle = node.tech.color;
          ctx.lineWidth = 2;
        } else {
          ctx.fillStyle = 'rgba(11, 13, 18, 0.75)';
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 1;
        }

        ctx.fill();
        ctx.stroke();

        // Draw Tech Name
        ctx.fillStyle = node.isHovered || selectedTech?.name === node.tech.name ? '#ffffff' : '#a8adb8';
        ctx.font = `600 ${node.radius > 50 ? '13px' : '12px'} "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.tech.name, node.x, node.y - 4);

        // Draw Category pill dot
        ctx.beginPath();
        ctx.arc(node.x, node.y + 12, 3, 0, Math.PI * 2);
        ctx.fillStyle = node.tech.color;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [filteredTechs, selectedTech, activeCategory]);

  return (
    <div className="w-full space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Interaja, arraste ou selecione cada tecnologia</span>
        </div>
      </div>

      {/* Physics Canvas & Tech Details Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Physics Arena */}
        <div
          ref={containerRef}
          className="lg:col-span-2 relative min-h-[380px] h-[420px] rounded-2xl glass-panel border border-white/10 overflow-hidden cursor-crosshair group"
        >
          <canvas ref={canvasRef} className="w-full h-full block" />
          <div className="absolute top-4 left-4 pointer-events-none text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
            // SIMULAÇÃO DE FÍSICA E CONECTIVIDADE
          </div>
        </div>

        {/* Selected Tech Inspector Box */}
        <div className="lg:col-span-1 rounded-2xl glass-panel border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />

          {selectedTech ? (
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 shadow-lg"
                    style={{ backgroundColor: `${selectedTech.color}15`, borderColor: `${selectedTech.color}40` }}
                  >
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedTech.color }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-white">{selectedTech.name}</h4>
                    <span className="text-xs font-mono text-slate-400">{selectedTech.category}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/5 border border-white/10 text-cyan-300">
                  {selectedTech.level}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Descrição Técnica</span>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">{selectedTech.description}</p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Aplicações na Soluções Tech</span>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Desenvolvimento de arquiteturas reativas e rápidas</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Padrões limpos de código e manutenibilidade</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Integrações robustas para projetos empresariais</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center text-slate-500 font-mono text-xs">
              Selecione ou clique em qualquer nó de tecnologia para inspecionar.
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Stack Tech Total</span>
            <span className="text-cyan-400 font-bold">{technologiesData.length} Tecnologias</span>
          </div>
        </div>
      </div>
    </div>
  );
};
