import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { PORTFOLIO_PROJECTS } from '../data';

const Portfolio = () => {
    const [filter, setFilter] = useState('All Projects');
    // Note: selectedProject state was used for a modal or detail view which wasn't fully implemented in the original code beyond setting state.
    // For now, I'll keep the view simple or just show the same list. 
    // If detail view is needed, we can add a route /portfolio/:id. 
    // The original code has a "View Details" button that sets selectedProject but didn't seem to render a modal in the snippet I saw (maybe I missed it or it was implicit).
    // I'll stick to the filtering logic for now.

    const categories = ['All Projects', 'Websites', 'Mobile Apps', 'Digital Marketing', 'Advertising', 'Branding'];

    const filteredProjects = filter === 'All Projects'
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

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
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((p) => (
                                <motion.div
                                    layout
                                    key={p.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ y: -15 }}
                                    className="group relative rounded-[48px] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
                                >
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute top-6 left-6 flex gap-2">
                                            <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#1E5EFF]">{p.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-grow">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Industry: {p.industry}</div>
                                        <h3 className="text-2xl font-black text-[#020617] mb-6 group-hover:text-[#1E5EFF] transition-colors">{p.title}</h3>
                                        <button className="w-full py-4 bg-slate-50 text-[#020617] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#1E5EFF] hover:text-white transition-all">View Details</button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
