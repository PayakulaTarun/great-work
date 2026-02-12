import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-[#020617]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E5EFF]/20 rounded-full blur-[160px] -mr-64 -mt-64" />
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                        <span className="text-white/70 text-[10px] font-black tracking-widest uppercase">Trusted Growth Partner</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                        Driving Business Growth <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5EFF] via-[#6EC1FF] to-[#22E6C3]">Through Digital Excellence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl font-medium leading-relaxed">
                        Premium web, mobile, and marketing solutions tailored to drive engagement, visibility, and long-term performance.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <Link to="/contact" className="px-10 py-5 bg-[#1E5EFF] text-white rounded-lg font-black uppercase tracking-widest text-[12px] hover:scale-105 transition-all shadow-xl">Start Project</Link>
                        <Link to="/portfolio" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-lg font-black uppercase tracking-widest text-[12px] hover:bg-white/10 transition-all">View Portfolio</Link>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="lg:block hidden">
                    <div className="animate-float">
                        <div className="glass rounded-[50px] p-6 border-white/10 shadow-2xl relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" className="rounded-[40px] opacity-80" fetchPriority="high" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
