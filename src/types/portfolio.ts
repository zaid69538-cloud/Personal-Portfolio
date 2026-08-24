export interface SocialLink {
  name: string;
  url: string;
  icon: string; // lucide icon identifier
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface SkillDetail {
  name: string;
  description: string;
  topics: string[];
  level?: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: (string | SkillDetail)[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  skills: string[];
  description: string;
  badgeColor?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | '3D / WebGL' | 'AI / Machine Learning' | 'Mobile & Apps';
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Open Source' | 'Education';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    titles: string[];
    headline: string;
    bioParagraphs: string[];
    statusBadge: string;
    avatarUrl: string;
    resumeUrl: string;
    email: string;
    location: string;
    availability: string;
    socials: SocialLink[];
    stats: StatItem[];
  };
  skillGroups: SkillGroup[];
  certificates: CertificateItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
}
