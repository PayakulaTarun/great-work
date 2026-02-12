import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MapPin, UploadCloud, Briefcase, FileText, Check, Loader2, Send, X } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import FloatingInput from '../components/ui/FloatingInput';
import { Link } from 'react-router-dom';

const JobApplication = () => {
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        category: '',
        message: '',
        resume: null as File | null
    });

    const categories = [
        { id: 'fresher', label: 'Fresher', desc: 'Just starting your career journey' },
        { id: 'freelancer', label: 'Freelancer', desc: 'Expert looking for project-based work' },
        { id: 'layoff', label: 'Laid Off', desc: 'Seeking new opportunities immediately' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');

        // Simulate API upload
        setTimeout(() => {
            setFormState('success');
            console.log(formData);
        }, 2000);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen">
            <section className="relative min-h-[40vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E5EFF]/20 via-[#020617] to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <SectionTitle
                        subtitle="Join Our Team"
                        title="Build The Future With Us"
                        description="We are always looking for talented individuals to join our mission of delivering digital excellence."
                        light centered
                    />
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <AnimatePresence mode="wait">
                        {formState === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="bg-[#020617] p-16 rounded-[60px] text-white text-center shadow-2xl overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-bl-full blur-3xl" />
                                <div className="w-24 h-24 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-10 border border-teal-500/20">
                                    <Check size={48} className="animate-bounce" />
                                </div>
                                <h2 className="text-5xl font-black mb-6">Application Received!</h2>
                                <p className="text-xl text-white/60 mb-12 font-medium leading-relaxed">Thank you for your interest. <br /> Our HR team will review your profile and get back to you soon.</p>
                                <Link
                                    to="/"
                                    className="px-12 py-5 bg-[#1E5EFF] text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block"
                                >
                                    Back Home
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white p-8 md:p-12 lg:p-16 rounded-[60px] shadow-2xl border border-slate-100"
                            >
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-12 h-12 rounded-2xl bg-[#1E5EFF]/10 text-[#1E5EFF] flex items-center justify-center">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-[#020617]">Application Form</h2>
                                        <p className="text-slate-500 font-medium">Please fill in your details accurately.</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-10">
                                    {/* Category Selection */}
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">I am a...</label>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {categories.map((cat) => (
                                                <label
                                                    key={cat.id}
                                                    className={`relative cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col gap-3 group
                            ${formData.category === cat.id
                                                            ? 'border-[#1E5EFF] bg-[#1E5EFF]/5 shadow-lg scale-[1.02]'
                                                            : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value={cat.id}
                                                        checked={formData.category === cat.id}
                                                        onChange={handleInputChange}
                                                        className="absolute opacity-0 inset-0 cursor-pointer"
                                                        required
                                                    />
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${formData.category === cat.id ? 'bg-[#1E5EFF] text-white' : 'bg-slate-100 text-slate-300'}`}>
                                                        {formData.category === cat.id && <Check size={16} />}
                                                    </div>
                                                    <span className={`text-lg font-black transition-colors ${formData.category === cat.id ? 'text-[#1E5EFF]' : 'text-slate-700'}`}>{cat.label}</span>
                                                    <span className="text-xs font-medium text-slate-400 leading-snug">{cat.desc}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Personal Details */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <FloatingInput label="Full Name" name="name" required icon={User} value={formData.name} onChange={handleInputChange} />
                                        <FloatingInput label="Email Address" name="email" type="email" required icon={Mail} value={formData.email} onChange={handleInputChange} />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <FloatingInput label="Phone Number" name="phone" required icon={Phone} value={formData.phone} onChange={handleInputChange} />
                                        <FloatingInput label="City / Location" name="address" required icon={MapPin} value={formData.address} onChange={handleInputChange} />
                                    </div>

                                    <div className="relative group">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            placeholder="Tell us about yourself or your requirements..."
                                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 outline-none transition-all duration-300 text-base md:text-lg text-slate-800 font-medium resize-none focus:border-[#1E5EFF] focus:bg-white focus:ring-4 focus:ring-[#1E5EFF]/5"
                                        />
                                        <label className="absolute left-6 -top-3 bg-white px-2 text-[10px] font-black uppercase tracking-widest text-[#1E5EFF]">
                                            Message (Optional)
                                        </label>
                                    </div>

                                    {/* Resume Upload */}
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Upload Resume (PDF/DOCX)</label>
                                        <div className={`relative border-2 border-dashed rounded-3xl p-10 text-center transition-all duration-300 group
                        ${formData.resume ? 'border-[#1E5EFF] bg-[#1E5EFF]/5' : 'border-slate-200 hover:border-[#1E5EFF]/50'}`}
                                        >
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                required
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            />
                                            <div className="flex flex-col items-center gap-4">
                                                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                                ${formData.resume ? 'bg-[#1E5EFF] text-white' : 'bg-slate-50 text-slate-300 group-hover:bg-[#1E5EFF]/10 group-hover:text-[#1E5EFF]'}`}
                                                >
                                                    {formData.resume ? <FileText size={32} /> : <UploadCloud size={32} />}
                                                </div>
                                                {formData.resume ? (
                                                    <div>
                                                        <p className="text-lg font-bold text-[#020617]">{formData.resume.name}</p>
                                                        <p className="text-xs text-[#1E5EFF] font-black uppercase tracking-widest mt-2 flex items-center justify-center gap-2">Change File</p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className="text-lg font-bold text-slate-600">Click to Browse or Drag File</p>
                                                        <p className="text-sm text-slate-400 mt-2">Max file size: 5MB</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'loading'}
                                        className="w-full py-6 bg-gradient-to-r from-[#1E5EFF] to-[#1E5EFF]/80 text-white rounded-[24px] font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-[#1E5EFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formState === 'loading' ? (
                                            <Loader2 className="animate-spin" size={24} />
                                        ) : (
                                            <>Submit Application <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </motion.div>
    );
};

export default JobApplication;
