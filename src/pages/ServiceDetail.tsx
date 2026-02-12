import { motion } from 'framer-motion';
import { X, Zap, CheckCircle2, Rocket, Monitor } from 'lucide-react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data';
import SectionTitle from '../components/ui/SectionTitle';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = SERVICES_DATA.find(s => s.id === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-32 min-h-screen bg-white">
            <div className="container mx-auto px-6">
                <Link to="/services" className="flex items-center gap-2 text-slate-400 font-bold mb-12 hover:text-[#1E5EFF] transition-colors w-fit">
                    <X size={20} /> Back to Services
                </Link>

                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
                        <SectionTitle subtitle="Core Service" title={service.title} />
                        <p className="text-2xl font-medium text-slate-500 leading-relaxed mb-12">{service.fullContent}</p>
                        <Link to="/contact" className="px-10 py-5 bg-[#1E5EFF] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#020617] transition-all shadow-xl inline-block">
                            Inquire About This Service
                        </Link>
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

export default ServiceDetail;
