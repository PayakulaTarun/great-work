import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data';
import { getServiceColors } from '../../utils/theme';
import SectionTitle from '../ui/SectionTitle';

const ServicesGrid = () => {
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
                                className={`p-10 rounded-[54px] border border-slate-200 bg-white transition-all group cursor-pointer relative overflow-hidden h-full flex flex-col ${colors.border} ${colors.glow}`}
                            >
                                <Link to={`/services/${s.id}`} className="absolute inset-0 z-30" />

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

export default ServicesGrid;
