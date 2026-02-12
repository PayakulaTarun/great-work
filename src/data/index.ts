import React from 'react';
import {
    Smartphone, Layout, TrendingUp, BarChart3, Globe, Activity, GraduationCap, ShoppingCart, DollarSign,
    Trophy, Handshake, Heart, Clock, Users2, Shield, Award, Zap, Gem, Megaphone, Target
} from 'lucide-react';
import { ServiceInfo, BlogPost, Project } from '../types';

export const SERVICES_DATA: ServiceInfo[] = [
    {
        id: 'app-design',
        title: 'Mobile App Design & Development',
        desc: 'We design and develop high-performance, secure, and user-friendly mobile applications that deliver seamless experiences across platforms.',
        icon: React.createElement(Smartphone),
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
        fullContent: 'Our App Design and Development service focuses on creating high-performance, user-centric mobile applications. We don\'t just build apps; we build business tools that solve problems and delight users. From conceptualization and UI/UX design to robust backend engineering and deployment, we cover the entire lifecycle of mobile product development.',
        features: ['Android & iOS Development', 'Cross-Platform Solutions (Flutter / React Native)', 'UI/UX Design Optimization', 'API & Cloud Integration', 'App Testing & Quality Assurance', 'Maintenance & Support'],
        benefits: ['Scalable architecture', 'Faster deployment', 'Enhanced user engagement'],
        techStack: ['Swift', 'Kotlin', 'React Native', 'Firebase', 'AWS', 'Node.js'],
        ctaText: 'Request App Quote',
        colorTheme: 'blue'
    },
    {
        id: 'website-design',
        title: 'Website Design & Development',
        desc: 'We build modern, responsive, and conversion-focused websites that represent your brand and drive business growth.',
        icon: React.createElement(Layout),
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        fullContent: 'In the digital-first world, your website is your primary storefront. Our Web Design service combines cutting-edge aesthetics with flawless functionality. We specialize in building responsive, lightning-fast, and SEO-optimized websites that convert visitors into loyal customers.',
        features: ['Corporate & Business Websites', 'E-Commerce Platforms', 'Landing Pages', 'CMS Integration', 'SEO-Friendly Architecture', 'Performance Optimization'],
        benefits: ['Improved online presence', 'Higher conversions', 'Better customer experience'],
        techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Vercel'],
        ctaText: 'Request Website Quote',
        colorTheme: 'teal'
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing Solutions',
        desc: 'Our data-driven marketing strategies help businesses attract, engage, and convert the right audience.',
        icon: React.createElement(TrendingUp),
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        fullContent: 'Digital Marketing is an ever-evolving landscape. We help you navigate this by using data-backed strategies to reach the right audience at the right time. Our focus is on sustainable growth, building a strong online presence that consistently generates high-quality leads.',
        features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click Advertising (PPC)', 'Social Media Marketing', 'Content Strategy', 'Email Campaigns', 'Performance Analytics'],
        benefits: ['Increased visibility', 'Qualified leads', 'Measurable ROI'],
        techStack: ['Google Analytics 4', 'Semrush', 'HubSpot', 'Mailchimp', 'Meta Business Suite'],
        ctaText: 'Request Marketing Plan',
        colorTheme: 'indigo'
    },
    {
        id: 'advertising',
        title: 'Business Advertising & Promotion',
        desc: 'We create impactful advertising campaigns that strengthen brand identity and maximize market reach.',
        icon: React.createElement(BarChart3),
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
        fullContent: 'When you need immediate results, our Advertising service delivers. We manage complex paid campaigns across multiple platforms, ensuring every dollar of your budget is optimized for maximum impact and return on ad spend (ROAS).',
        features: ['Digital Advertising Campaigns', 'Print & Outdoor Advertising', 'Creative Design & Copywriting', 'Media Planning & Buying', 'Brand Awareness Campaigns'],
        benefits: ['Stronger brand recall', 'Improved customer acquisition'],
        techStack: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'TikTok Ads', 'Taboola'],
        ctaText: 'Launch Campaign',
        colorTheme: 'rose'
    },
    {
        id: 'integrated-marketing',
        title: 'Integrated Marketing Solutions',
        desc: 'Our integrated marketing approach ensures consistent brand communication across digital and physical channels.',
        icon: React.createElement(Globe),
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        fullContent: 'Consistency is the key to brand trust. Our Integrated Marketing service ensures that your message is unified across all digital and physical touchpoints. We synchronize your marketing efforts to create a seamless customer journey from discovery to purchase.',
        features: ['Event Marketing', 'Influencer Campaigns', 'Local Market Promotions', 'CRM & Lead Management', 'Partnership Marketing'],
        benefits: ['Unified brand presence', 'Higher customer loyalty'],
        techStack: ['CRM Systems', 'Automation Tools', 'Data Fabric Platforms', 'Project Management Suites'],
        ctaText: 'Build Marketing Strategy',
        colorTheme: 'amber'
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: 'How Digital Transformation Drives Business Growth in 2026',
        category: 'Digital Strategy',
        excerpt: 'Discover how modern technologies help businesses improve efficiency, customer experience, and profitability.',
        content: [
            "In today’s digital economy, businesses must adapt to evolving technologies to remain competitive. Digital transformation enables organizations to improve efficiency, enhance customer experience, and unlock new growth opportunities.",
            "1. Understanding Digital Transformation: Digital transformation refers to the integration of digital technology into all areas of a business.",
            "2. Key Benefits: Improved Productivity, Better Decision Making, Enhanced Customer Engagement.",
            "3. Implementation Strategy: Successful transformation requires clear objectives, skilled teams, and continuous improvement."
        ],
        date: 'Jan 15, 2026',
        readTime: '6 min',
        author: 'Great Work Team',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        tags: ['Digital Strategy', 'Innovation', 'Growth']
    }
];

export const INDUSTRIES = [
    {
        title: 'Healthcare Systems',
        features: ['HIPAA Compliant Portals', 'Telehealth Infrastructure', 'Patient Management'],
        icon: React.createElement(Activity),
        color: "blue",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: 'EduTech Solutions',
        features: ['Custom LMS Platforms', 'Virtual Learning Rooms', 'Academic Analytics'],
        icon: React.createElement(GraduationCap),
        color: "teal",
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: 'Retail & E-commerce',
        features: ['Headless Storefronts', 'Unified Commerce APIs', 'Inventory Automation'],
        icon: React.createElement(ShoppingCart),
        color: "indigo",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: 'FinTech Platforms',
        features: ['Digital Banking Core', 'Investment Dashboards', 'Risk Calculation'],
        icon: React.createElement(DollarSign),
        color: "emerald",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
];

export const REVIEWS = [
    { name: 'Sarah Jenkins', role: 'CEO, FintechFlow', text: "Their team didn't just build an app; they built our business foundation. 100% genuine quality and insane performance." },
    { name: 'Mark Thompson', role: 'Director, EduSpark', text: "The most transparent agency we've ever worked with. The ROI on our digital transformation was immediate and measurable." },
    { name: 'Elena Rodriguez', role: 'Founder, LuxeCart', text: "From strategy to launch, the attention to detail was unparalleled. Our website conversion increased by 300% in 3 months." }
];

export const STATS = [
    { label: 'Projects Delivered', val: '250+' },
    { label: 'Happy Clients', val: '180+' },
    { label: 'Success Rate', val: '98%' }
];

export const ABOUT_STATS = [
    { label: 'Successful Projects', val: '150+', icon: React.createElement(Trophy) },
    { label: 'Satisfied Clients', val: '120+', icon: React.createElement(Handshake) },
    { label: 'Client Retention Rate', val: '98%', icon: React.createElement(Heart) },
    { label: 'Years Experience', val: '5+', icon: React.createElement(Clock) },
    { label: 'Skilled Professionals', val: '20+', icon: React.createElement(Users2) }
];

export const VALUES = [
    { title: 'Integrity & Transparency', icon: React.createElement(Shield), desc: 'Open, honest communication at every step' },
    { title: 'Client-Centered Approach', icon: React.createElement(Heart), desc: 'Your success is our priority' },
    { title: 'Innovation & Creativity', icon: React.createElement(Zap), desc: 'Embracing new technologies and ideas' },
    { title: 'Quality & Excellence', icon: React.createElement(Award), desc: 'Delivering outstanding results every time' },
    { title: 'Continuous Improvement', icon: React.createElement(TrendingUp), desc: 'Always evolving and learning' },
    { title: 'Accountability & Trust', icon: React.createElement(Handshake), desc: 'Standing by our commitments' }
];

export const DIFFERENTIATORS = [
    '100% Genuine & Transparent Processes',
    'Experienced & Certified Professionals',
    'Customized Business Solutions',
    'Data-Driven Decision Making',
    'On-Time Project Delivery',
    'Dedicated Client Support',
    'Long-Term Partnership Approach'
];

export const EXPERTISE = [
    { title: 'Website Design & Development', icon: React.createElement(Layout) },
    { title: 'Mobile App Development', icon: React.createElement(Smartphone) },
    { title: 'UI/UX Design', icon: React.createElement(Gem) },
    { title: 'Digital Marketing & SEO', icon: React.createElement(TrendingUp) },
    { title: 'Business Advertising', icon: React.createElement(Megaphone) },
    { title: 'Online & Offline Marketing', icon: React.createElement(Globe) },
    { title: 'Brand Strategy & Consulting', icon: React.createElement(Target) }
];

export const PORTFOLIO_PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Corporate Website Redesign',
        industry: 'IT Services',
        category: 'Websites',
        clientType: 'Enterprise',
        services: ['Website Design', 'SEO'],
        description: 'Modern, responsive website optimized for performance and lead generation.',
        results: ['60% Traffic Growth', 'Conversions: +35%', 'ROI: +180%'],
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
];
