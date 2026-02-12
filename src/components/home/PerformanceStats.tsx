import { motion } from 'framer-motion';
import { STATS } from '../../data';

const PerformanceStats = () => {
    return (
        <section className="py-24 bg-[#020617] text-white">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
                {STATS.map((s, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="text-6xl font-black font-space mb-2 text-[#22E6C3]">{s.val}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{s.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PerformanceStats;
