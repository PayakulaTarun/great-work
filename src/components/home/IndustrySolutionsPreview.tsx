import { motion } from 'framer-motion';
import { ChevronRight, Rocket } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../../data';
import { getServiceColors } from '../../utils/theme';
import SectionTitle from '../ui/SectionTitle';

const IndustrySolutionsPreview = () => {
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
                    {INDUSTRIES.map((ind, i) => {
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

                                    <Link
                                        to="/solutions"
                                        className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] group/btn transition-all"
                                    >
                                        View Case Studies
                                        <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-2 transition-transform`}>
                                            <ChevronRight size={14} />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="mt-20 text-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                        <Link
                            to="/solutions"
                            className="px-12 py-6 bg-[#020617] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1E5EFF] transition-all shadow-2xl flex items-center gap-4 mx-auto"
                        >
                            Explore All Industry Hubs <Rocket size={16} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutionsPreview;
