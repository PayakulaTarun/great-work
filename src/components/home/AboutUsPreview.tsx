import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const AboutUsPreview = () => {
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
                    <Link to="/about" className="flex items-center gap-3 text-[#1E5EFF] font-black uppercase tracking-widest text-xs group">
                        Our Story & Values <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full" />
                    <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="About Team" className="w-full" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsPreview;
