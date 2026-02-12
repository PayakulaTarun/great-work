import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import SectionTitle from '../components/ui/SectionTitle';

const Blog = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
            <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-[#020617] to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <SectionTitle
                        subtitle="Our Insights"
                        title="The Great Work Journal"
                        description="Expert perspectives on digital strategy, design, and growth."
                        light centered
                    />
                </div>
            </section>
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {BLOG_POSTS.map((post) => (
                            <motion.div
                                key={post.id}
                                whileHover={{ y: -15 }}
                                className="group rounded-[48px] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#1E5EFF] mb-4">
                                        <span>{post.category}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                        <span className="text-slate-400">{post.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-[#020617] mb-6 group-hover:text-[#1E5EFF] transition-colors line-clamp-2 leading-tight">{post.title}</h3>
                                    <p className="text-slate-500 font-medium mb-8 line-clamp-3 text-sm">{post.excerpt}</p>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="mt-auto flex items-center gap-3 text-[#1E5EFF] font-black uppercase tracking-widest text-[10px] group/btn"
                                    >
                                        Read More <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Blog;
