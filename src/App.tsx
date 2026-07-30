import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/layout/Preloader';
import { FloatingQuickActions } from './components/layout/FloatingQuickActions';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutIntroSection } from './components/sections/AboutIntroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechSection } from './components/sections/TechSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AboutPedroSection } from './components/sections/AboutPedroSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize Smooth Lenis Scrolling
  useEffect(() => {
    if (isLoading) return;

    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    } catch {
      // Fallback to standard scroll
    }

    return () => {
      lenis?.destroy();
    };
  }, [isLoading]);

  // Section Observer for Active Navigation Highlight
  useEffect(() => {
    if (isLoading) return;

    const sections = ['hero', 'sobre', 'servicos', 'projetos', 'tecnologias', 'processo', 'sobre-pedro', 'contato'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className="bg-[#050505] text-[#f7f7f7] min-h-screen selection:bg-cyan-500/30 selection:text-white relative">
      {/* Preloader Animation */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Floating Quick Action Buttons (WhatsApp + Back to Top) */}
      {!isLoading && <FloatingQuickActions />}

      {/* Main Portfolio Content */}
      {!isLoading && (
        <>
          <Navbar activeSection={activeSection} />

          <main className="relative z-10 space-y-0">
            <HeroSection />
            <AboutIntroSection />
            <ServicesSection />
            <ProjectsSection />
            <TechSection />
            <ProcessSection />
            <AboutPedroSection />
            <ContactSection />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
