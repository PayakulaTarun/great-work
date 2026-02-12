import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, LogIn, Loader2, ArrowRight, User, Phone, MapPin, UploadCloud, Briefcase, FileText, Check, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import FloatingInput from '../components/ui/FloatingInput';

const Login = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'join'>('login');
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const navigate = useNavigate();

    // Login Form State
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    // Join Form State
    const [joinData, setJoinData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        category: '',
        message: '',
        resume: null as File | null
    });

    const categories = [
        { id: 'fresher', label: 'Fresher', desc: 'Just starting' },
        { id: 'freelancer', label: 'Freelancer', desc: 'Project-based' },
        { id: 'layoff', label: 'Laid Off', desc: 'Immediate joiner' }
    ];

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLoginData(prev => ({ ...prev, [name]: value }));
    };

    const handleJoinChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setJoinData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setJoinData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');
        // Simulate Login API
        setTimeout(() => {
            setFormState('success');
            setTimeout(() => {
                navigate('/profile');
            }, 1000);
        }, 1500);
    };

    const handleJoinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');
        // Simulate Application API
        setTimeout(() => {
            setFormState('success');
            // Reset after success if needed, or redirect
            setTimeout(() => {
                // navigate('/'); 
                console.log('Application submitted', joinData);
            }, 2000);
        }, 2000);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen flex items-center justify-center p-6 bg-[#020617] relative overflow-hidden py-32">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E5EFF]/10 rounded-full blur-[160px] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#22E6C3]/10 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />

            <div className={`w-full relative z-10 transition-all duration-500 ${activeTab === 'join' ? 'max-w-4xl' : 'max-w-md'}`}>


                <motion.div
                    layout
                    className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {formState === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-[#020617] mb-2">
                                    {activeTab === 'login' ? 'Login Successful!' : 'Application Sent!'}
                                </h3>
                                <p className="text-slate-500 font-medium">
                                    {activeTab === 'login' ? 'Redirecting to your dashboard...' : 'We will review your profile shortly.'}
                                </p>
                            </motion.div>
                        ) : activeTab === 'login' ? (
                            <motion.form
                                key="login-form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleLoginSubmit}
                                className="space-y-6"
                            >
                                <FloatingInput
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    required
                                    icon={Mail}
                                    value={loginData.email}
                                    onChange={handleLoginChange}
                                />
                                <div className="space-y-2">
                                    <FloatingInput
                                        label="Password"
                                        name="password"
                                        type="password"
                                        required
                                        icon={Lock}
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                    />
                                    <div className="text-right">
                                        <Link to="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#1E5EFF] transition-colors">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'loading'}
                                    className="w-full py-5 bg-[#020617] text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#1E5EFF] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group"
                                >
                                    {formState === 'loading' ? <Loader2 className="animate-spin" size={24} /> : <>Sign In <LogIn size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                                </button>

                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-slate-100"></div>
                                    <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-black uppercase tracking-widest">Or</span>
                                    <div className="flex-grow border-t border-slate-100"></div>
                                </div>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setLoginData({ email: 'demo@greatwork.com', password: 'password123' });
                                        setFormState('loading');
                                        setTimeout(() => {
                                            setFormState('success');
                                            setTimeout(() => navigate('/profile'), 1000);
                                        }, 1500);
                                    }}
                                    className="w-full py-5 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-3"
                                >
                                    Demo Login <span className="px-2 py-0.5 bg-slate-100 text-[9px] rounded-md text-slate-400">One Click</span>
                                </button>

                                <div className="mt-8 text-center pt-8 border-t border-slate-100">
                                    <p className="text-slate-500 font-medium text-sm">
                                        Don't have an account?{' '}
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab('join')}
                                            className="text-[#1E5EFF] font-black uppercase tracking-wider hover:underline"
                                        >
                                            Join Team
                                        </button>
                                    </p>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.form
                                key="join-form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleJoinSubmit}
                                className="space-y-8"
                            >
                                <div className="grid md:grid-cols-3 gap-4 mb-8">
                                    {categories.map((cat) => (
                                        <label
                                            key={cat.id}
                                            className={`relative cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col gap-2 group text-center
                                            ${joinData.category === cat.id
                                                    ? 'border-[#1E5EFF] bg-[#1E5EFF]/5'
                                                    : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}
                                        >
                                            <input
                                                type="radio"
                                                name="category"
                                                value={cat.id}
                                                checked={joinData.category === cat.id}
                                                onChange={handleJoinChange}
                                                className="absolute opacity-0 inset-0 cursor-pointer"
                                                required
                                            />
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto transition-colors ${joinData.category === cat.id ? 'bg-[#1E5EFF] text-white' : 'bg-slate-100 text-slate-300'}`}>
                                                {joinData.category === cat.id && <Check size={16} />}
                                            </div>
                                            <span className={`font-black text-sm transition-colors ${joinData.category === cat.id ? 'text-[#1E5EFF]' : 'text-slate-700'}`}>{cat.label}</span>
                                        </label>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <FloatingInput label="Full Name" name="name" required icon={User} value={joinData.name} onChange={handleJoinChange} />
                                    <FloatingInput label="Email Address" name="email" type="email" required icon={Mail} value={joinData.email} onChange={handleJoinChange} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <FloatingInput label="Phone Number" name="phone" required icon={Phone} value={joinData.phone} onChange={handleJoinChange} />
                                    <FloatingInput label="City / Location" name="address" required icon={MapPin} value={joinData.address} onChange={handleJoinChange} />
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        value={joinData.message}
                                        onChange={handleJoinChange}
                                        rows={3}
                                        placeholder="Tell us about yourself..."
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 outline-none transition-all duration-300 text-base font-medium resize-none focus:border-[#1E5EFF] focus:bg-white focus:ring-4 focus:ring-[#1E5EFF]/5"
                                    />
                                    <label className="absolute left-6 -top-3 bg-white px-2 text-[10px] font-black uppercase tracking-widest text-[#1E5EFF]">
                                        Message (Optional)
                                    </label>
                                </div>

                                <div className={`relative border-2 border-dashed rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer hover:border-[#1E5EFF]/50 ${joinData.resume ? 'border-[#1E5EFF] bg-[#1E5EFF]/5' : 'border-slate-200'}`}>
                                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                    <div className="flex flex-col items-center gap-3">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${joinData.resume ? 'bg-[#1E5EFF] text-white' : 'bg-slate-50 text-slate-300'}`}>
                                            {joinData.resume ? <FileText size={20} /> : <UploadCloud size={20} />}
                                        </div>
                                        {joinData.resume ? (
                                            <div>
                                                <p className="font-bold text-[#020617]">{joinData.resume.name}</p>
                                                <p className="text-[10px] text-[#1E5EFF] font-black uppercase tracking-widest mt-1">Change File</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="font-bold text-slate-600">Upload Resume</p>
                                                <p className="text-xs text-slate-400">PDF/DOCX Max 5MB</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'loading'}
                                    className="w-full py-5 bg-[#020617] text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#1E5EFF] transition-all flex items-center justify-center gap-4 group"
                                >
                                    {formState === 'loading' ? <Loader2 className="animate-spin" size={24} /> : <>Submit Application <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                                </button>

                                <div className="mt-8 text-center pt-8 border-t border-slate-100">
                                    <p className="text-slate-500 font-medium text-sm">
                                        Already have an account?{' '}
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab('login')}
                                            className="text-[#1E5EFF] font-black uppercase tracking-wider hover:underline"
                                        >
                                            Login
                                        </button>
                                    </p>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Login;
