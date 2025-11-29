export interface Project {
  title: string;
  category: string;
  description: string;
  tools: string[];
  image?: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}