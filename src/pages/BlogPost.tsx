import { motion } from 'framer-motion';
import { User, Calendar, Clock, CheckCircle2, X } from 'lucide-react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data';

const BlogPost = () => {
    const { id } = useParams();
    const post = BLOG_POSTS.find(p => p.id === Number(id));

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen pt-32 pb-32">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link to="/blog" className="flex items-center gap-2 text-slate-400 font-bold mb-12 hover:text-[#1E5EFF] transition-colors w-fit">
                    <X size={20} /> Back to Insights
                </Link>

                <article>
                    <header className="mb-16">
                        <div className="px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-8">{post.category}</div>
                        <h1 className="text-4xl lg:text-6xl font-black text-[#020617] leading-[1.1] mb-10">{post.title}</h1>
                        <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                            <span className="flex items-center gap-2 text-[#020617]"><User size={14} className="text-[#1E5EFF]" /> By {post.author}</span>
                            <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime} read</span>
                        </div>
                    </header>

                    <div className="rounded-[60px] overflow-hidden mb-16 shadow-2xl aspect-video">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="prose prose-xl max-w-none space-y-10 text-slate-600 font-medium leading-relaxed">
                        {post.content.map((para, i) => (
                            <div key={i}>
                                {/* Simple logic to detect lists or normal paragraphs */}
                                <p className="text-xl">
                                    {para.includes('✔') ? (
                                        <span className="block mt-4 space-y-2">
                                            {para.split(',').map((item, j) => (
                                                <span key={j} className="flex items-center gap-3">
                                                    <CheckCircle2 size={18} className="text-teal-500" /> {item.replace('✔ ', '')}
                                                </span>
                                            ))}
                                        </span>
                                    ) : para}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-10 bg-slate-50 rounded-[48px] border-l-8 border-[#1E5EFF]">
                        <h3 className="text-2xl font-black text-[#020617] mb-4">Conclusion</h3>
                        <p className="text-lg text-slate-500 italic">Businesses that invest in digital innovation today will be better positioned for long-term success.</p>
                    </div>
                </article>
            </div>
        </motion.div>
    );
};

export default BlogPost;
