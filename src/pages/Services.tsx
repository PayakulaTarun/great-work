import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ServicesGrid from '../components/home/ServicesGrid';
import PerformanceStats from '../components/home/PerformanceStats';

const Services = () => {
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
            <ServicesGrid />
            <PerformanceStats />
        </motion.div>
    );
};

export default Services;
