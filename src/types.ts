export interface Project {
  id: number;
  slug: string;
  title: string;
  category: 'Institucional' | 'Landing Page' | 'Voluntário' | 'Portfólio';
  subtitle: string;
  description: string;
  client: string;
  year: number;
  url: string;
  image: string;
  mobileImage?: string;
  technologies: string[];
  featured: boolean;
  objective: string;
  challenge: string;
  solution: string;
  features: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  highlights: string[];
}

export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & CMS';
  level: 'Especialista' | 'Avançado' | 'Intermediário';
  icon: string;
  color: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}
