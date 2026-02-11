
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Menu, X, ChevronRight, Layout, Smartphone, PieChart,
  BarChart3, Globe, Award, Zap, Heart, MessageSquare,
  ArrowUpRight, Mail, MapPin, Phone, Github, Linkedin, Twitter,
  CheckCircle2, Rocket, Search, Monitor, ShieldCheck, Users,
  Briefcase, TrendingUp, BookOpen, ExternalLink, ArrowUp, ChevronDown,
  Activity, Shield, DollarSign, ShoppingCart, GraduationCap,
  Layers, Megaphone, Target, Quote, Eye, Gem, Handshake, HeartHandshake,
  Users2, Trophy, Clock, Filter, Check, Settings, Code, LifeBuoy, Server, Cpu, Database,
  Calendar, User, Share2, Facebook, Link, Hash, Send, Loader2, MessageCircle
} from 'lucide-react';
// Explicitly import Variants to fix typing issues in animation definitions
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Types ---
type Page = 'home' | 'services' | 'solutions' | 'portfolio' | 'process' | 'about' | 'pricing' | 'blog' | 'contact' | 'service-detail' | 'blog-detail';

interface ServiceInfo {
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
  colorTheme: 'blue' | 'teal' | 'indigo' | 'rose' | 'amber' | 'emerald';
}

interface Project {
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

interface BlogPost {
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

// --- Global Constants ---
const PRIMARY_BLUE = "#1E5EFF";
const LIGHT_BLUE = "#6EC1FF";
const TEAL = "#22E6C3";
const DARK_BG = "#020617";
const LIGHT_BG = "#F8FAFC";

// --- Data ---
const SERVICES_DATA: ServiceInfo[] = [
  {
    id: 'app-design',
    title: 'Mobile App Design & Development',
    desc: 'We design and develop high-performance, secure, and user-friendly mobile applications that deliver seamless experiences across platforms.',
    icon: <Smartphone />,
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
    icon: <Layout />,
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
    icon: <TrendingUp />,
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
    icon: <BarChart3 />,
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
    icon: <Globe />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'Consistency is the key to brand trust. Our Integrated Marketing service ensures that your message is unified across all digital and physical touchpoints. We synchronize your marketing efforts to create a seamless customer journey from discovery to purchase.',
    features: ['Event Marketing', 'Influencer Campaigns', 'Local Market Promotions', 'CRM & Lead Management', 'Partnership Marketing'],
    benefits: ['Unified brand presence', 'Higher customer loyalty'],
    techStack: ['CRM Systems', 'Automation Tools', 'Data Fabric Platforms', 'Project Management Suites'],
    ctaText: 'Build Marketing Strategy',
    colorTheme: 'amber'
  }
];

const BLOG_POSTS: BlogPost[] = [
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

// --- Helper Functions ---
const getServiceColors = (theme: string) => {
  switch (theme) {
    case 'teal': return {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      accent: 'bg-teal-600',
      gradient: 'from-teal-500/20 to-transparent',
      glow: 'shadow-[0_0_30px_rgba(34,230,195,0.2)]',
      border: 'hover:border-teal-200'
    };
    case 'indigo': return {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      accent: 'bg-indigo-600',
      gradient: 'from-indigo-500/20 to-transparent',
      glow: 'shadow-[0_0_30px_rgba(79,70,229,0.2)]',
      border: 'hover:border-indigo-200'
    };
    case 'rose': return {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      accent: 'bg-rose-600',
      gradient: 'from-rose-500/20 to-transparent',
      glow: 'shadow-[0_0_30px_rgba(225,29,72,0.2)]',
      border: 'hover:border-rose-200'
    };
    case 'amber': return {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      accent: 'bg-amber-600',
      gradient: 'from-amber-500/20 to-transparent',
      glow: 'shadow-[0_0_30px_rgba(217,119,6,0.2)]',
      border: 'hover:border-amber-200'
    };
    case 'emerald': return {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      accent: 'bg-emerald-600',
      gradient: 'from-emerald-500/20 to-transparent',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.2)]',
      border: 'hover:border-emerald-200'
    };
    default: return {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      accent: 'bg-blue-600',
      gradient: 'from-blue-500/20 to-transparent',
      glow: 'shadow-[0_0_30px_rgba(30,94,255,0.2)]',
      border: 'hover:border-blue-200'
    };
  }
};

// --- Components ---

const SectionTitle = ({ subtitle, title, description, light = false, centered = false }: { subtitle: string, title: string, description?: string, light?: boolean, centered?: boolean }) => (
  <div className={`max-w-4xl mb-16 ${centered ? 'mx-auto text-center' : ''} ${light ? 'text-white' : 'text-[#1F2933]'}`}>
    <motion.h4
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`text-[11px] font-black uppercase tracking-[0.4em] mb-4 ${light ? 'text-[#6EC1FF]' : 'text-[#1E5EFF]'}`}
    >
      {subtitle}
    </motion.h4>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={`text-lg md:text-xl font-medium leading-relaxed ${light ? 'text-white/60' : 'text-slate-500'}`}
      >
        {description}
      </motion.p>
    )}
  </div>
);

const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Blog', id: 'blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl py-4 border-b border-slate-100' : 'bg-transparent py-7'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="cursor-pointer group" onClick={() => setPage('home')}>
          <img
            src="/logo.png"
            alt="Great Work - 100% Genuine Work"
            className="h-16 md:h-20 w-16 md:w-20 object-cover rounded-full group-hover:scale-105 transition-transform duration-300 shadow-md"
          />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-[12px] uppercase tracking-widest font-black transition-all relative group ${activePage === link.id || (activePage === 'blog-detail' && link.id === 'blog') ? 'text-[#1E5EFF]' : 'text-slate-500 hover:text-[#1E5EFF]'}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#1E5EFF] transition-all duration-300 ${activePage === link.id || (activePage === 'blog-detail' && link.id === 'blog') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
          <button
            onClick={() => setPage('contact')}
            className="px-6 py-3 bg-[#1E5EFF] text-white rounded-lg text-[11px] font-black uppercase tracking-widest hover:bg-[#020617] transition-all shadow-xl hover:scale-105 active:scale-95 btn-glow"
          >
            Get Started
          </button>
        </div>

        <button className="lg:hidden p-2 text-[#1F2933]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-[#020617] z-[110] p-10 lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <img
                src="/logo.png"
                alt="Great Work"
                className="h-16 w-16 object-cover rounded-full shadow-lg border-2 border-white/20"
              />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setPage(link.id); setMobileMenuOpen(false); }}
                  className="text-left text-2xl font-black text-white/60 hover:text-white"
                >
                  {link.label}
                </button>
              ))}
              <hr className="border-white/10 my-4" />
              <button onClick={() => { setPage('contact'); setMobileMenuOpen(false); }} className="w-full py-5 bg-[#1E5EFF] text-white rounded-xl text-lg font-bold">Contact Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Contact Page Component ---

const ContactPage = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    details: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  const FloatingInput = ({ label, name, type = 'text', required = false, icon: Icon }: any) => {
    const [focused, setFocused] = useState(false);
    const hasValue = formData[name as keyof typeof formData] !== '';

    return (
      <div className="relative group">
        <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused || hasValue ? 'text-[#1E5EFF]' : 'text-slate-400'}`}>
          <Icon size={18} />
        </div>
        <input
          type={type}
          name={name}
          required={required}
          value={formData[name as keyof typeof formData]}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-slate-50 border-2 rounded-2xl pl-12 pr-6 py-5 outline-none transition-all duration-300 text-slate-800 font-medium 
            ${focused ? 'border-[#1E5EFF] bg-white ring-4 ring-[#1E5EFF]/5' : 'border-slate-100 hover:border-slate-200'}`}
        />
        <label className={`absolute left-12 transition-all duration-300 pointer-events-none 
          ${focused || hasValue ? 'top-[-10px] text-[10px] bg-white px-2 left-10 font-black uppercase tracking-widest text-[#1E5EFF]' : 'top-1/2 -translate-y-1/2 text-slate-400 font-medium'}`}>
          {label}{required && '*'}
        </label>
      </div>
    );
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-[#020617] to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionTitle
            subtitle="Contact Us"
            title="Let’s Start Building Your Success Story"
            description="Have a project in mind or need expert guidance? Our team is ready to help you transform your ideas into powerful digital solutions."
            light centered
          />
        </div>
      </section>

      {/* Quick Connect Bar */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-center text-slate-400">Connect With Us Instantly</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* WhatsApp */}
            <a href="https://wa.me/918367208436" target="_blank" rel="noreferrer"
              className="group p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <MessageCircle size={32} />
              </div>
              <h4 className="text-2xl font-black text-[#020617] mb-2">WhatsApp Chat</h4>
              <p className="text-slate-500 font-bold mb-6 tracking-wider">8367208436</p>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">Get instant responses from our support team.</p>
            </a>

            {/* Email */}
            <a href="mailto:workgreat76@gmail.com"
              className="group p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Mail size={32} />
              </div>
              <h4 className="text-2xl font-black text-[#020617] mb-2">Email Us</h4>
              <p className="text-slate-500 font-bold mb-6 tracking-wider">workgreat76@gmail.com</p>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">Send us your project details anytime.</p>
            </a>

            {/* Phone */}
            <a href="tel:+918367208436"
              className="group p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <Phone size={32} />
              </div>
              <h4 className="text-2xl font-black text-[#020617] mb-2">Call Us</h4>
              <p className="text-slate-500 font-bold mb-6 tracking-wider">8367208436</p>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">Speak directly with our consultants.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start max-w-7xl mx-auto">
            {/* Left: Contact Info */}
            <div className="w-full lg:w-2/5 space-y-16">
              <div>
                <SectionTitle subtitle="Direct Access" title="Our Contact Information" />
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-[#1E5EFF]"><MapPin size={24} /></div>
                    <div>
                      <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Office Address</h5>
                      <p className="text-xl font-bold text-[#020617] leading-relaxed">India Headquarters, Tech Valley Hub, Hyderabad</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-[#1E5EFF]"><Clock size={24} /></div>
                    <div>
                      <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Business Hours</h5>
                      <p className="text-xl font-bold text-[#020617]">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-[#1E5EFF]"><Mail size={24} /></div>
                    <div>
                      <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Support Email</h5>
                      <p className="text-xl font-bold text-[#1E5EFF]">workgreat76@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-[#1E5EFF]"><Phone size={24} /></div>
                    <div>
                      <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Customer Support</h5>
                      <p className="text-xl font-bold text-[#020617]">+91 8367208436</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-slate-400">Social & Messaging</h5>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <MessageCircle />, color: 'hover:bg-emerald-500', link: 'https://wa.me/918367208436' },
                    { icon: <Mail />, color: 'hover:bg-blue-500', link: 'mailto:workgreat76@gmail.com' },
                    { icon: <Phone />, color: 'hover:bg-indigo-500', link: 'tel:+918367208436' },
                    { icon: <Share2 />, color: 'hover:bg-purple-500', link: 'https://signal.me/#p/+918367208436' },
                  ].map((s, i) => (
                    <a key={i} href={s.link} className={`w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 transition-all duration-300 hover:text-white hover:scale-110 ${s.color}`}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-3/5">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="bg-[#020617] p-16 rounded-[60px] text-white text-center shadow-2xl overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-bl-full blur-3xl" />
                    <div className="w-24 h-24 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-10 border border-teal-500/20">
                      <Check size={48} className="animate-bounce" />
                    </div>
                    <h2 className="text-5xl font-black mb-6">🎉 Thank You!</h2>
                    <p className="text-xl text-white/60 mb-12 font-medium leading-relaxed">Your message has been successfully sent.<br />Our team will contact you shortly.</p>
                    <button
                      onClick={() => setPage('home')}
                      className="px-12 py-5 bg-[#1E5EFF] text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                      Back Home
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white p-12 lg:p-16 rounded-[60px] shadow-2xl border border-slate-100"
                  >
                    <h2 className="text-4xl font-black text-[#020617] mb-4">Send Us a Message</h2>
                    <p className="text-slate-500 font-medium mb-12">Fill out the form below and our experts will contact you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <FloatingInput label="Full Name" name="name" required icon={User} />
                        <FloatingInput label="Email Address" name="email" type="email" required icon={Mail} />
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <FloatingInput label="Phone Number" name="phone" required icon={Smartphone} />
                        <FloatingInput label="Company Name" name="company" icon={Briefcase} />
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Service Selection */}
                        <div className="relative">
                          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                            <Layout size={18} />
                          </div>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-10 py-5 outline-none appearance-none font-medium text-slate-800 hover:border-slate-200 focus:border-[#1E5EFF] transition-all"
                          >
                            <option value="">Service Interested In*</option>
                            <option value="app">App Development</option>
                            <option value="web">Website Design</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="advertising">Advertising</option>
                            <option value="integrated">Integrated Marketing</option>
                            <option value="consulting">Consulting</option>
                          </select>
                          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                        </div>

                        {/* Budget Selection */}
                        <div className="relative">
                          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                            <DollarSign size={18} />
                          </div>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-10 py-5 outline-none appearance-none font-medium text-slate-800 hover:border-slate-200 focus:border-[#1E5EFF] transition-all"
                          >
                            <option value="">Estimated Budget (Optional)</option>
                            <option value="low">Under ₹50,000</option>
                            <option value="mid">₹50,000 – ₹1,00,000</option>
                            <option value="high">₹1,00,000 – ₹5,00,000</option>
                            <option value="premium">Above ₹5,00,000</option>
                          </select>
                          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute left-5 top-8 text-slate-400">
                          <MessageSquare size={18} />
                        </div>
                        <textarea
                          name="details"
                          value={formData.details}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us about your project, goals, and timeline..."
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-6 py-5 outline-none resize-none font-medium text-slate-800 hover:border-slate-200 focus:border-[#1E5EFF] transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="w-full py-6 bg-gradient-to-r from-[#1E5EFF] to-[#1E5EFF]/80 text-white rounded-[24px] font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-[#1E5EFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formState === 'loading' ? (
                          <Loader2 className="animate-spin" size={24} />
                        ) : (
                          <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder / Visual Ornament */}
      <section className="h-[400px] bg-slate-200 overflow-hidden grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4522238477755!2d78.38466181471!3d17.43806088804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>
    </motion.div>
  );
};

// --- Hero Section Component ---

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E5EFF]/20 rounded-full blur-[160px] -mr-64 -mt-64" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-white/70 text-[10px] font-black tracking-widest uppercase">Trusted Growth Partner</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            Driving Business Growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5EFF] via-[#6EC1FF] to-[#22E6C3]">Through Digital Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl font-medium leading-relaxed">
            Premium web, mobile, and marketing solutions tailored to drive engagement, visibility, and long-term performance.
          </p>
          <div className="flex flex-wrap gap-5">
            <button onClick={onCtaClick} className="px-10 py-5 bg-[#1E5EFF] text-white rounded-lg font-black uppercase tracking-widest text-[12px] hover:scale-105 transition-all shadow-xl">Start Project</button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-lg font-black uppercase tracking-widest text-[12px] hover:bg-white/10 transition-all">View Portfolio</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="lg:block hidden">
          <div className="animate-float">
            <div className="glass rounded-[50px] p-6 border-white/10 shadow-2xl relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" className="rounded-[40px] opacity-80" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutUsPreview = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <SectionTitle
            subtitle="About Us"
            title="The Name Behind Excellence"
            description="We are more than just a digital agency; we are your strategic partner in the digital world. Our team combines over 5 years of industry experience with a relentless drive for innovation."
          />
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-xl font-black text-[#020617]">
              <CheckCircle2 className="text-[#1E5EFF]" /> 100% Genuine & Professional Work
            </div>
            <div className="flex items-center gap-4 text-xl font-black text-[#020617]">
              <CheckCircle2 className="text-[#22E6C3]" /> Data-Driven ROI Focus
            </div>
            <div className="flex items-center gap-4 text-xl font-black text-[#020617]">
              <CheckCircle2 className="text-[#6EC1FF]" /> Transparent Client Communication
            </div>
          </div>
          <button onClick={() => setPage('about')} className="flex items-center gap-3 text-[#1E5EFF] font-black uppercase tracking-widest text-xs group">
            Our Story & Values <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full" />
          <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="About Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = ({ onSelect }: { onSelect: (s: ServiceInfo) => void }) => {
  // Explicitly typing variants with the Variants interface from framer-motion to resolve type inference issues
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Our Core Expertise" title="Premium Digital Services" centered />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES_DATA.map((s) => {
            const colors = getServiceColors(s.colorTheme);
            return (
              <motion.div
                key={s.id}
                variants={cardVariants}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => onSelect(s)}
                className={`p-10 rounded-[54px] border border-slate-200 bg-white transition-all group cursor-pointer relative overflow-hidden h-full flex flex-col ${colors.border} ${colors.glow}`}
              >
                {/* Luxury Shine Effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-20 pointer-events-none" />

                {/* Background Accent Gradient */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${colors.gradient} rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-3xl ${colors.bg} ${colors.text} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:text-white group-hover:${colors.accent} transition-all duration-500 shadow-sm relative z-10`}>
                  {React.cloneElement(s.icon as any, { size: 36 })}
                </div>

                {/* Typography */}
                <h3 className="text-3xl font-black mb-6 text-[#020617] group-hover:text-[#1E5EFF] transition-colors relative z-10 leading-tight">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 flex-grow relative z-10 group-hover:text-slate-700 transition-colors">
                  {s.desc}
                </p>

                {/* Bottom Action */}
                <div className={`flex items-center gap-3 ${colors.text} font-black text-xs uppercase tracking-[0.2em] transition-all relative z-10`}>
                  <span className="group-hover:mr-2 transition-all">Explore Service Details</span>
                  <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center group-hover:bg-[#020617] group-hover:text-white transition-all`}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const IndustrySolutionsPreview = ({ setPage }: { setPage: (p: Page) => void }) => {
  const industries = [
    {
      title: 'Healthcare Systems',
      features: ['HIPAA Compliant Portals', 'Telehealth Infrastructure', 'Patient Management'],
      icon: <Activity />,
      color: "blue",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: 'EduTech Solutions',
      features: ['Custom LMS Platforms', 'Virtual Learning Rooms', 'Academic Analytics'],
      icon: <GraduationCap />,
      color: "teal",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: 'Retail & E-commerce',
      features: ['Headless Storefronts', 'Unified Commerce APIs', 'Inventory Automation'],
      icon: <ShoppingCart />,
      color: "indigo",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: 'FinTech Platforms',
      features: ['Digital Banking Core', 'Investment Dashboards', 'Risk Calculation'],
      icon: <DollarSign />,
      color: "emerald",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="Industry Expertise"
          title="Tailored Solutions for Specialized Markets"
          centered
          description="We engineer purpose-built digital ecosystems for complex industrial requirements."
        />
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {industries.map((ind, i) => {
            const colors = getServiceColors(ind.color);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative h-[500px] rounded-[60px] overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
              >
                <div className="absolute inset-0 z-0">
                  <img src={ind.img} alt={ind.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity`} />
                </div>

                <div className="relative z-10 p-12 mt-auto h-full flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform`}
                  >
                    {React.cloneElement(ind.icon as any, { size: 30 })}
                  </motion.div>

                  <h3 className="text-4xl font-black mb-6 text-white leading-tight">{ind.title}</h3>

                  <ul className="space-y-4 mb-10">
                    {ind.features.map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (j * 0.1) }}
                        className="flex items-center gap-3 text-sm font-bold text-white/70"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.accent}`} /> {f}
                      </motion.li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setPage('solutions')}
                    className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] group/btn transition-all"
                  >
                    View Case Studies
                    <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-2 transition-transform`}>
                      <ChevronRight size={14} />
                    </div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setPage('solutions')}
            className="px-12 py-6 bg-[#020617] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1E5EFF] transition-all shadow-2xl flex items-center gap-4 mx-auto"
          >
            Explore All Industry Hubs <Rocket size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah Jenkins', role: 'CEO, FintechFlow', text: "Their team didn't just build an app; they built our business foundation. 100% genuine quality and insane performance." },
    { name: 'Mark Thompson', role: 'Director, EduSpark', text: "The most transparent agency we've ever worked with. The ROI on our digital transformation was immediate and measurable." },
    { name: 'Elena Rodriguez', role: 'Founder, LuxeCart', text: "From strategy to launch, the attention to detail was unparalleled. Our website conversion increased by 300% in 3 months." }
  ];

  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Client Feedback" title="What Leaders Say About Us" centered />
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[50px] bg-white border border-slate-100 shadow-sm relative overflow-hidden h-full"
            >
              <Quote size={80} className="absolute -top-4 -right-4 text-[#1E5EFF]/5 -rotate-12" />
              <p className="text-xl font-medium text-[#1F2933] leading-relaxed mb-10 italic">"{r.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt={r.name} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#020617]">{r.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceDetailPage = ({ service, onBack }: { service: ServiceInfo, onBack: () => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-32 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 font-bold mb-12 hover:text-[#1E5EFF] transition-colors">
          <X size={20} /> Back to Services
        </button>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
            <SectionTitle subtitle="Core Service" title={service.title} />
            <p className="text-2xl font-medium text-slate-500 leading-relaxed mb-12">{service.fullContent}</p>
            <button className="px-10 py-5 bg-[#1E5EFF] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#020617] transition-all shadow-xl">
              Inquire About This Service
            </button>
          </motion.div>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="rounded-[60px] overflow-hidden shadow-2xl relative aspect-[4/3]">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="p-10 bg-slate-50 rounded-[48px] border border-slate-100">
            <h3 className="text-2xl font-black mb-8 text-[#020617] flex items-center gap-3">
              <Zap className="text-[#1E5EFF]" /> Core Features
            </h3>
            <ul className="space-y-4">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 font-bold text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-1"><CheckCircle2 size={12} /></div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 bg-slate-50 rounded-[48px] border border-slate-100">
            <h3 className="text-2xl font-black mb-8 text-[#020617] flex items-center gap-3">
              <Rocket className="text-[#1E5EFF]" /> Key Benefits
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 font-bold text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1"><CheckCircle2 size={12} /></div>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 bg-[#020617] text-white rounded-[48px] shadow-2xl">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <Monitor className="text-[#22E6C3]" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.techStack.map((t, i) => (
                <span key={i} className="px-5 py-2 bg-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-white/70 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BlogDetailPage = ({ post, onBack }: { post: BlogPost, onBack: () => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 font-bold mb-12 hover:text-[#1E5EFF] transition-colors">
          <X size={20} /> Back to Insights
        </button>

        <article>
          <header className="mb-16">
            <div className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-8">{post.category}</div>
            <h1 className="text-4xl lg:text-6xl font-black text-[#020617] leading-[1.1] mb-10">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <span className="flex items-center gap-2 text-[#020617]"><User size={14} className="text-[#1E5EFF]" /> By {post.author}</span>
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime} read</span>
            </div>
          </header>

          <div className="rounded-[60px] overflow-hidden mb-16 shadow-2xl aspect-video">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-xl max-w-none space-y-10 text-slate-600 font-medium leading-relaxed">
            {post.content.map((para, i) => (
              <p key={i} className="text-xl">
                {para.includes('✔') ? (
                  <span className="block mt-4 space-y-2">
                    {para.split(',').map((item, j) => (
                      <span key={j} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-teal-500" /> {item.replace('✔ ', '')}
                      </span>
                    ))}
                  </span>
                ) : para}
              </p>
            ))}
          </div>

          <div className="mt-16 p-10 bg-slate-50 rounded-[48px] border-l-8 border-[#1E5EFF]">
            <h3 className="text-2xl font-black text-[#020617] mb-4">Conclusion</h3>
            <p className="text-lg text-slate-500 italic">Businesses that invest in digital innovation today will be better positioned for long-term success.</p>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

const PortfolioPage = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [filter, setFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All Projects', 'Websites', 'Mobile Apps', 'Digital Marketing', 'Advertising', 'Branding'];

  const projects: Project[] = [
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

  const filteredProjects = filter === 'All Projects'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/10 via-[#020617] to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionTitle
            subtitle="Our Work Portfolio"
            title="Delivering Measurable Results Through Digital Excellence"
            description="Explore a selection of our successful projects that demonstrate our commitment to quality, innovation, and performance-driven solutions."
            light centered
          />
        </div>
      </section>

      <section className="py-10 sticky top-[72px] z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-[#1E5EFF] text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((p) => (
              <motion.div layout key={p.id} whileHover={{ y: -15 }} className="group relative rounded-[48px] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#1E5EFF]">{p.category}</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Industry: {p.industry}</div>
                  <h3 className="text-2xl font-black text-[#020617] mb-6 group-hover:text-[#1E5EFF] transition-colors">{p.title}</h3>
                  <button onClick={() => setSelectedProject(p)} className="w-full py-4 bg-slate-50 text-[#020617] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#1E5EFF] hover:text-white transition-all">View Details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PerformanceStats = () => {
  const stats = [
    { label: 'Projects Delivered', val: '250+' },
    { label: 'Happy Clients', val: '180+' },
    { label: 'Success Rate', val: '98%' }
  ];
  return (
    <section className="py-24 bg-[#020617] text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {stats.map((s, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-6xl font-black font-space mb-2 text-[#22E6C3]">{s.val}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <footer className="py-24 bg-[#020617] text-white/50 border-t border-white/5">
    <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-[#1E5EFF] rounded-lg flex items-center justify-center"><TrendingUp size={20} className="text-white" /></div>
          <span className="text-xl font-black text-white tracking-tighter">Great Work</span>
        </div>
        <p className="text-sm font-medium leading-relaxed mb-8">Delivering premium digital solutions worldwide. 100% genuine work for global brands.</p>
      </div>
      <div>
        <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Quick Links</h4>
        <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
          {['home', 'services', 'solutions', 'about', 'contact', 'blog'].map(p => (
            <li key={p} onClick={() => onNavigate(p as Page)} className="hover:text-white cursor-pointer transition-colors">{p}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Contact Us</h4>
        <p className="text-sm font-medium mb-4">📍 Hyderabad, India</p>
        <p className="text-sm font-medium text-[#6EC1FF]">workgreat76@gmail.com</p>
      </div>
      <div>
        <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Newsletter</h4>
        <div className="flex gap-2">
          <input type="email" placeholder="email@company.com" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs w-full focus:border-[#1E5EFF] outline-none" />
          <button className="p-3 bg-[#1E5EFF] text-white rounded-lg"><ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-6 pt-10 border-t border-white/5 text-[10px] font-black uppercase tracking-widest">
      <p>© 2024 Great Work Agency. All Rights Reserved.</p>
    </div>
  </footer>
);

const AboutPage = ({ setPage }: { setPage: (p: Page) => void }) => {
  const stats = [
    { label: 'Successful Projects', val: '150+', icon: <Trophy /> },
    { label: 'Satisfied Clients', val: '120+', icon: <Handshake /> },
    { label: 'Client Retention Rate', val: '98%', icon: <Heart /> },
    { label: 'Years Experience', val: '5+', icon: <Clock /> },
    { label: 'Skilled Professionals', val: '20+', icon: <Users2 /> }
  ];

  const values = [
    { title: 'Integrity & Transparency', icon: <Shield />, desc: 'Open, honest communication at every step' },
    { title: 'Client-Centered Approach', icon: <Heart />, desc: 'Your success is our priority' },
    { title: 'Innovation & Creativity', icon: <Zap />, desc: 'Embracing new technologies and ideas' },
    { title: 'Quality & Excellence', icon: <Award />, desc: 'Delivering outstanding results every time' },
    { title: 'Continuous Improvement', icon: <TrendingUp />, desc: 'Always evolving and learning' },
    { title: 'Accountability & Trust', icon: <Handshake />, desc: 'Standing by our commitments' }
  ];

  const differentiators = [
    '100% Genuine & Transparent Processes',
    'Experienced & Certified Professionals',
    'Customized Business Solutions',
    'Data-Driven Decision Making',
    'On-Time Project Delivery',
    'Dedicated Client Support',
    'Long-Term Partnership Approach'
  ];

  const expertise = [
    { title: 'Website Design & Development', icon: <Layout /> },
    { title: 'Mobile App Development', icon: <Smartphone /> },
    { title: 'UI/UX Design', icon: <Gem /> },
    { title: 'Digital Marketing & SEO', icon: <TrendingUp /> },
    { title: 'Business Advertising', icon: <Megaphone /> },
    { title: 'Online & Offline Marketing', icon: <Globe /> },
    { title: 'Brand Strategy & Consulting', icon: <Target /> }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-[#020617] to-transparent" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#22E6C3]/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <SectionTitle
            subtitle="About Great Work"
            title="Building Trust Through Performance, Innovation, and Integrity"
            description="We are a results-driven digital solutions company committed to delivering high-quality, transparent, and scalable services that empower businesses to grow in the digital era."
            light centered
          />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-5xl font-black text-[#020617] mb-8 leading-tight">Who We Are</h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
              Great Work is a full-service digital agency specializing in website development, mobile application design, digital marketing, and integrated business solutions.
            </p>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
              We partner with startups, small businesses, and enterprises to create powerful digital experiences that drive growth, engagement, and long-term success.
            </p>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Our team combines creativity, technology, and strategy to deliver solutions that are not only visually impressive but also performance-focused and measurable.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[60px] overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team Work" className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E5EFF]/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h3 className="text-5xl font-black text-[#020617] mb-8">Our Journey</h3>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
            <p>
              Founded with the vision of delivering honest, reliable, and result-oriented digital services, Great Work was built on the principle of "100% Genuine Work."
            </p>
            <p>
              What started as a small team of passionate professionals has grown into a trusted digital partner for businesses across multiple industries.
            </p>
            <p>
              Today, we continue to evolve by embracing new technologies, innovative design practices, and data-driven strategies to help our clients stay ahead in an ever-changing digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="py-32 bg-[#020617] text-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Our Foundation" title="Mission, Vision & Values" light centered />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {/* Mission */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-12 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#1E5EFF] flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h4 className="text-3xl font-black mb-6">Our Mission</h4>
              <p className="text-lg text-white/70 leading-relaxed">
                To deliver innovative, reliable, and scalable digital solutions that help businesses achieve sustainable growth and long-term success.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-12 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#22E6C3] flex items-center justify-center mb-8">
                <Eye size={32} className="text-[#020617]" />
              </div>
              <h4 className="text-3xl font-black mb-6">Our Vision</h4>
              <p className="text-lg text-white/70 leading-relaxed">
                To become a globally recognized digital transformation partner known for excellence, transparency, and customer satisfaction.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <h4 className="text-3xl font-black text-center mb-16">Our Core Values</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-[#22E6C3] group-hover:bg-[#22E6C3] group-hover:text-[#020617] transition-all">
                  {React.cloneElement(v.icon as any, { size: 28 })}
                </div>
                <h5 className="text-xl font-black mb-3">{v.title}</h5>
                <p className="text-white/60 font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionTitle subtitle="Unique Value" title="Why Choose Great Work" centered />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 mb-12">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-6 rounded-[24px] bg-slate-50 border border-slate-100 hover:border-[#1E5EFF] hover:shadow-xl transition-all group">
                <div className="w-8 h-8 rounded-full bg-[#1E5EFF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="text-white" size={18} />
                </div>
                <span className="text-lg font-bold text-[#020617]">{d}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl text-center font-bold text-slate-600 mt-12 leading-relaxed">
            We don't just deliver projects — we build lasting relationships based on trust, performance, and shared success.
          </motion.p>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="What We Do" title="Our Expertise" centered />
          <p className="text-xl text-center text-slate-600 max-w-4xl mx-auto mb-16 font-medium">
            We specialize in delivering high-impact solutions across multiple digital domains
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {expertise.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-10 rounded-[40px] bg-white border border-slate-200 hover:border-[#1E5EFF] hover:shadow-2xl transition-all group text-center">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-6 text-[#1E5EFF] group-hover:bg-[#1E5EFF] group-hover:text-white transition-all">
                  {React.cloneElement(e.icon as any, { size: 36 })}
                </div>
                <h5 className="text-xl font-black text-[#020617]">{e.title}</h5>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xl text-center font-bold text-[#1E5EFF] max-w-3xl mx-auto">
            Our multidisciplinary expertise allows us to provide complete end-to-end digital solutions under one roof.
          </motion.p>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <SectionTitle subtitle="The People" title="Meet Our Professionals" centered />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Our team consists of skilled designers, developers, marketers, and strategists who are passionate about delivering excellence.
            </p>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Every project is handled by dedicated experts who ensure quality, innovation, and precision at every stage of development.
            </p>
            <p className="text-2xl font-black text-[#1E5EFF] mt-8">
              Together, we work as one unified team focused on client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS & STATS */}
      <section className="py-32 bg-[#020617] text-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Impact" title="Our Impact in Numbers" light centered />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="text-center p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 text-[#22E6C3]">
                  {React.cloneElement(s.icon as any, { size: 32 })}
                </div>
                <div className="text-5xl font-black font-space mb-3 bg-gradient-to-r from-[#1E5EFF] to-[#22E6C3] bg-clip-text text-transparent">{s.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT COMMITMENT */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle subtitle="Our Promise" title="Our Commitment to Clients" centered />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center space-y-6">
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              At Great Work, client satisfaction is at the heart of everything we do.
            </p>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              We believe in open communication, transparent pricing, and measurable results. Our team works closely with clients to understand their business goals and deliver solutions that create real value.
            </p>
            <p className="text-3xl font-black text-[#1E5EFF] mt-8">
              Your success is our success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORPORATE SOCIAL RESPONSIBILITY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <SectionTitle subtitle="Giving Back" title="Our Responsibility" centered />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xl text-slate-600 font-medium leading-relaxed">
            We are committed to ethical business practices, environmental responsibility, and supporting local communities through digital empowerment and education initiatives.
          </motion.p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-transparent to-[#22E6C3]/20" />
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-white/70 mb-12 font-medium leading-relaxed">
              Partner with a team that values quality, transparency, and long-term success.
            </p>
            <button
              onClick={() => setPage('contact')}
              className="px-12 py-6 bg-gradient-to-r from-[#1E5EFF] to-[#22E6C3] text-white rounded-[24px] font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

// --- Missing Page Components Fixes ---

// Fix: Implemented ServicesPage component to resolve reference error
const ServicesPage = ({ onSelect, setPage }: { onSelect: (s: ServiceInfo) => void, setPage: (p: Page) => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-[#020617] to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionTitle
            subtitle="Expertise"
            title="Our Full Range of Digital Services"
            description="From conceptualization to deployment, we provide end-to-end digital excellence."
            light centered
          />
        </div>
      </section>
      <ServicesGrid onSelect={onSelect} />
      <PerformanceStats />
    </motion.div>
  );
};

// Fix: Implemented SolutionsPage component to resolve reference error
const SolutionsPage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-[#020617] to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionTitle
            subtitle="Industry Solutions"
            title="Strategic Digital Ecosystems"
            description="We build purpose-built solutions for complex industry requirements."
            light centered
          />
        </div>
      </section>
      <IndustrySolutionsPreview setPage={setPage} />
      <div className="py-20">
        <Testimonials />
      </div>
    </motion.div>
  );
};

// Fix: Implemented BlogPage component to resolve reference error
const BlogPage = ({ onReadPost, setPage }: { onReadPost: (p: BlogPost) => void, setPage: (p: Page) => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-[#020617] to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionTitle
            subtitle="Our Insights"
            title="The Great Work Journal"
            description="Expert perspectives on digital strategy, design, and growth."
            light centered
          />
        </div>
      </section>
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -15 }}
                className="group rounded-[48px] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#1E5EFF] mb-4">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#020617] mb-6 group-hover:text-[#1E5EFF] transition-colors line-clamp-2 leading-tight">{post.title}</h3>
                  <p className="text-slate-500 font-medium mb-8 line-clamp-3 text-sm">{post.excerpt}</p>
                  <button
                    onClick={() => onReadPost(post)}
                    className="mt-auto flex items-center gap-3 text-[#1E5EFF] font-black uppercase tracking-widest text-[10px] group/btn"
                  >
                    Read More <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<ServiceInfo | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, selectedService, selectedPost]);

  useEffect(() => {
    const check = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', check);
    return () => window.removeEventListener('scroll', check);
  }, []);

  const handleServiceSelect = (s: ServiceInfo) => {
    setSelectedService(s);
    setPage('service-detail');
  };

  const handlePostSelect = (p: BlogPost) => {
    setSelectedPost(p);
    setPage('blog-detail');
  };

  const renderContent = () => {
    if (page === 'service-detail' && selectedService) {
      return <ServiceDetailPage service={selectedService} onBack={() => { setPage('services'); setSelectedService(null); }} />;
    }

    if (page === 'blog-detail' && selectedPost) {
      return <BlogDetailPage post={selectedPost} onBack={() => { setPage('blog'); setSelectedPost(null); }} />;
    }

    switch (page) {
      case 'home':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero onCtaClick={() => setPage('contact')} />
            <AboutUsPreview setPage={setPage} />
            <ServicesGrid onSelect={handleServiceSelect} />
            <IndustrySolutionsPreview setPage={setPage} />
            <PerformanceStats />
            <Testimonials />
            <div className="py-32 bg-[#1E5EFF] text-center text-white relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl lg:text-7xl font-black mb-12 leading-tight">Ready to Elevate Your <br /> Digital Presence?</h2>
                <button onClick={() => setPage('contact')} className="px-12 py-6 bg-[#020617] text-white rounded-full font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">Start Project</button>
              </div>
              <div className="absolute inset-0 bg-[#22E6C3]/20 mix-blend-overlay" />
            </div>
          </motion.div>
        );
      case 'solutions': return <SolutionsPage setPage={setPage} />;
      case 'services': return <ServicesPage onSelect={handleServiceSelect} setPage={setPage} />;
      case 'portfolio': return <PortfolioPage setPage={setPage} />;
      case 'blog': return <BlogPage onReadPost={handlePostSelect} setPage={setPage} />;
      case 'about': return <AboutPage setPage={setPage} />;
      case 'contact': return <ContactPage setPage={setPage} />;
      default: return <div className="pt-60 text-center font-black text-4xl uppercase text-slate-200">Coming Soon...</div>;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activePage={page} setPage={setPage} />
      <main>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer onNavigate={setPage} />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-28 right-8 w-12 h-12 bg-white text-[#020617] rounded-full flex items-center justify-center shadow-2xl z-[90] border border-slate-100"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Primary Global Contact Trigger (WhatsApp) */}
      <motion.a
        href="https://wa.me/918367208436"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-8 w-16 h-16 bg-emerald-500 text-white rounded-[24px] flex items-center justify-center shadow-2xl z-[90] ring-4 ring-white"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
