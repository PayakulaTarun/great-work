import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import IndustrySolutionsPreview from '../components/home/IndustrySolutionsPreview';
import Testimonials from '../components/home/Testimonials';

const Solutions = () => {
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
            <IndustrySolutionsPreview />
            <div className="py-20">
                <Testimonials />
            </div>
        </motion.div>
    );
};

export default Solutions;
