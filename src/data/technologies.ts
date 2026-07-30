import { Technology } from '../types';

export const technologiesData: Technology[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    level: 'Especialista',
    icon: 'Code2',
    color: '#61DAFB',
    description: 'Biblioteca principal para criação de interfaces modernas, reativas e modulares.'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 'Especialista',
    icon: 'FileCode2',
    color: '#3178C6',
    description: 'Tipagem estática para garantia de previsibilidade, robustez e manutenibilidade do código.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 'Especialista',
    icon: 'Braces',
    color: '#F7DF1E',
    description: 'Linguagem base para manipulação do DOM, lógicas complexas e animações assíncronas.'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Especialista',
    icon: 'Palette',
    color: '#06B6D4',
    description: 'Framework CSS utilitário para estilização rápida, responsiva e altamente customizada.'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    level: 'Especialista',
    icon: 'Layout',
    color: '#E34F26',
    description: 'Semântica web impecável, acessibilidade WCAG e estilizações modernas com Flexbox/Grid.'
  },
  {
    name: 'Angular',
    category: 'Frontend',
    level: 'Avançado',
    icon: 'Component',
    color: '#DD0031',
    description: 'Framework robusto para aplicações enterprise com arquitetura MVC rigorosa.'
  },
  {
    name: 'Ionic',
    category: 'Frontend',
    level: 'Intermediário',
    icon: 'Smartphone',
    color: '#3880FF',
    description: 'Desenvolvimento de aplicações mobile híbridas com experiência nativa.'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    level: 'Avançado',
    icon: 'Server',
    color: '#339933',
    description: 'Ambiente de execução assíncrono para microsserviços e APIs de alta performance.'
  },
  {
    name: 'C# / .NET',
    category: 'Backend',
    level: 'Avançado',
    icon: 'Cpu',
    color: '#512BD4',
    description: 'Desenvolvimento de serviços backend seguros, estruturados e escaláveis.'
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    level: 'Especialista',
    icon: 'Network',
    color: '#22D3EE',
    description: 'Arquitetura de endpoints padronizados para integração entre serviços front e backend.'
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 'Avançado',
    icon: 'Database',
    color: '#4169E1',
    description: 'Banco de dados relacional poderoso para armazenamento estruturado e seguro.'
  },

  // Tools & CMS
  {
    name: 'Git & GitHub',
    category: 'Tools & CMS',
    level: 'Especialista',
    icon: 'GitBranch',
    color: '#F05032',
    description: 'Controle de versão, CI/CD e colaboração estruturada de projetos.'
  },
  {
    name: 'Vercel',
    category: 'Tools & CMS',
    level: 'Especialista',
    icon: 'Globe2',
    color: '#FFFFFF',
    description: 'Plataforma cloud para deploys instantâneos, edge caching e alta disponibilidade.'
  },
  {
    name: 'WordPress & Elementor',
    category: 'Tools & CMS',
    level: 'Avançado',
    icon: 'Layers',
    color: '#21759B',
    description: 'Criação de gestores de conteúdo personalizados para clientes que necessitam de edição rápida.'
  },
  {
    name: 'Three.js / WebGL',
    category: 'Frontend',
    level: 'Intermediário',
    icon: 'Box',
    color: '#8B5CF6',
    description: 'Renderização de elementos 3D interativos e efeitos de shaders no navegador.'
  },
  {
    name: 'GSAP & Motion',
    category: 'Frontend',
    level: 'Avançado',
    icon: 'Sparkles',
    color: '#88CE02',
    description: 'Orquestração de animações complexas, scroll triggers e microinterações fluida.'
  }
];
