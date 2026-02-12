import { motion } from 'framer-motion';

interface SectionTitleProps {
    subtitle: string;
    title: string;
    description?: string;
    light?: boolean;
    centered?: boolean;
}

const SectionTitle = ({ subtitle, title, description, light = false, centered = false }: SectionTitleProps) => (
    <div className={`max-w-4xl mb-16 ${centered ? 'mx-auto text-center' : ''} ${light ? 'text-white' : 'text-[#1F2933]'}`}>
        <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`text-[11px] font-black uppercase tracking-[0.4em] mb-4 ${light ? 'text-[#6EC1FF]' : 'text-[#1E5EFF]'}`}
        >
            {subtitle}
        </motion.h4>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
        >
            {title}
        </motion.h2>
        {description && (
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={`text-lg md:text-xl font-medium leading-relaxed ${light ? 'text-white/60' : 'text-slate-500'}`}
            >
                {description}
            </motion.p>
        )}
    </div>
);

export default SectionTitle;
