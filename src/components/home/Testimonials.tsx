import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { REVIEWS } from '../../data';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
    return (
        <section className="py-32 bg-[#F8FAFC]">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="Client Feedback" title="What Leaders Say About Us" centered />
                <div className="grid lg:grid-cols-3 gap-8">
                    {REVIEWS.map((r, i) => (
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

export default Testimonials;
