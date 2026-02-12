export type ServiceTheme = 'blue' | 'teal' | 'indigo' | 'rose' | 'amber' | 'emerald';

export interface ServiceInfo {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    fullContent: string;
    features: string[];
    benefits: string[];
    techStack: string[];
    image: string;
    ctaText: string;
    colorTheme: ServiceTheme;
}

export interface Project {
    id: number;
    title: string;
    industry: string;
    category: string;
    clientType: string;
    services: string[];
    description: string;
    objective?: string;
    solution?: string;
    techUsed?: string[];
    results: string[];
    img: string;
    featured?: boolean;
}

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    excerpt: string;
    content: string[];
    date: string;
    readTime: string;
    author: string;
    img: string;
    tags?: string[];
}
