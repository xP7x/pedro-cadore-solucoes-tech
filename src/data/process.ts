import { ProcessStep } from '../types';

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    title: 'Descoberta e Imersão',
    description: 'Entendimento profundo do seu negócio, público-alvo, objetivos comerciais e diferenciais competitivos.',
    details: [
      'Alinhamento de expectativas e metas',
      'Análise de concorrentes e referências',
      'Mapeamento da jornada do usuário',
      'Definição da estratégia do projeto'
    ]
  },
  {
    number: '02',
    title: 'Planejamento e Arquitetura',
    description: 'Estruturação do mapa do site, hierarquia de conteúdo e definição das tecnologias adequadas.',
    details: [
      'Wireframe funcional das telas',
      'Definição da paleta e guia de estilo',
      'Planejamento de SEO e palavras-chave',
      'Escopo técnico detalhado'
    ]
  },
  {
    number: '03',
    title: 'Design UI/UX & Prototipagem',
    description: 'Criação da identidade visual exclusiva da interface com foco em estética moderna, clareza e conversão.',
    details: [
      'Interfaces em modo Dark Luxo ou sob medida',
      'Tipografia e hierarquia refinadas',
      'Componentes e estados de hover',
      'Validação prévia dos protótipos'
    ]
  },
  {
    number: '04',
    title: 'Desenvolvimento e Animações',
    description: 'Codificação limpa em React/TypeScript com animações fluidas, efeitos 3D e responsividade total.',
    details: [
      'Desenvolvimento em componentes reutilizáveis',
      'Animações leves a 60 FPS',
      'Integrações com WhatsApp, formulários e APIs',
      'Testes em múltiplos dispositivos e navegadores'
    ]
  },
  {
    number: '05',
    title: 'Otimização e Publicação',
    description: 'Ajustes finais de performance, segurança, indexação no Google e lançamento oficial do site.',
    details: [
      'Otimização do tempo de carregamento',
      'Configuração de metadados SEO e Open Graph',
      'Ajuste de certificados SSL e domínio customizado',
      'Deploy em servidores de alta performance (Vercel)'
    ]
  },
  {
    number: '06',
    title: 'Suporte e Evolução',
    description: 'Acompanhamento pós-lançamento para garantir estabilidade, atualizações e melhorias contínuas.',
    details: [
      'Treinamento e orientações de uso',
      'Monitoramento de métricas de uso',
      'Suporte técnico direto via WhatsApp',
      'Evolução gradual de novas funcionalidades'
    ]
  }
];
