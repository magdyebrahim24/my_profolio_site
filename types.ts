
export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  thumbnail: string;
  images?: string[];
  techStack: string[];
  links: {
    appStore?: string;
    playStore?: string;
    github?: string;
    website?: string;
  };
  // New property for multi-app projects (e.g., User, Provider, Delivery)
  apps?: {
    name: string;
    links: {
      playStore?: string;
      appStore?: string;
    };
  }[];
  features?: { title: string; description: string; icon: string }[];
  role?: string;
  company?: string;
  companyUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'language' | 'framework' | 'tool' | 'specialization';
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  type: 'degree' | 'certification';
  logo: string;
  issuer?: string;
  verifyLink?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Material symbol name or SVG path
}