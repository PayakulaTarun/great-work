import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Briefcase, Clock, FileText, CheckCircle2, LogOut, Settings, Bell } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Simulate logout
        navigate('/login');
    };

    const user = {
        name: "Demo User",
        email: "demo@greatwork.com",
        role: "Freelancer / Applicant",
        phone: "+91 98765 43210",
        location: "Hyderabad, India",
        joined: "February 2024"
    };

    const applications = [
        { id: 1, role: "Senior React Developer", date: "12 Feb 2024", status: "In Review" },
        { id: 2, role: "UI/UX Designer", date: "10 Jan 2024", status: "Interview Scheduled" }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-[#020617]">My Dashboard</h1>
                        <p className="text-slate-500 font-medium">Welcome back, {user.name}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: User Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 text-center overflow-hidden">
                            <div className="h-32 bg-gradient-to-r from-[#1E5EFF] to-[#22E6C3] w-full" />
                            <div className="px-8 pb-8 relative">
                                <div className="w-24 h-24 mx-auto bg-white rounded-full p-1 shadow-lg -mt-12 mb-6 relative z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h2 className="text-2xl font-black text-[#020617] mb-1">{user.name}</h2>
                                <p className="text-[#1E5EFF] font-bold text-xs uppercase tracking-widest mb-6">{user.role}</p>

                                <div className="space-y-4 text-left">
                                    <div className="flex items-center gap-4 text-slate-600 font-medium text-sm p-4 bg-slate-50 rounded-2xl">
                                        <Mail size={18} className="text-slate-400" /> {user.email}
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600 font-medium text-sm p-4 bg-slate-50 rounded-2xl">
                                        <Phone size={18} className="text-slate-400" /> {user.phone}
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600 font-medium text-sm p-4 bg-slate-50 rounded-2xl">
                                        <MapPin size={18} className="text-slate-400" /> {user.location}
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-4 justify-center">
                                    <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:bg-[#1E5EFF] hover:text-white transition-colors"><Settings size={20} /></button>
                                    <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:bg-[#1E5EFF] hover:text-white transition-colors"><Bell size={20} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#020617] p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22E6C3]/20 rounded-full blur-[40px] -mr-10 -mt-10" />
                            <h3 className="text-xl font-black mb-6 relative z-10">Application Status</h3>
                            <div className="space-y-6 relative z-10">
                                {applications.map(app => (
                                    <div key={app.id} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-lg leading-tight">{app.role}</h4>
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${app.status === 'In Review' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-emerald-500/20 text-emerald-400'
                                                }`}>
                                                {app.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 text-white/50 text-xs font-bold uppercase tracking-widest">
                                            <span className="flex items-center gap-1"><Clock size={12} /> Applied: {app.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Stats Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                    <Briefcase size={28} />
                                </div>
                                <h3 className="text-4xl font-black text-[#020617] mb-2 font-space">12</h3>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Active Projects</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                                    <CheckCircle2 size={28} />
                                </div>
                                <h3 className="text-4xl font-black text-[#020617] mb-2 font-space">86%</h3>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Profile Completion</p>
                            </motion.div>
                        </div>

                        {/* Documents / Portfolio Section */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-8 md:p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-2xl font-black text-[#020617]">Recent Documents</h3>
                                <Link to="#" className="text-[#1E5EFF] font-black uppercase tracking-widest text-[10px]">View All</Link>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "Resume_Senior_Dev_2024.pdf", size: "2.4 MB", type: "PDF" },
                                    { name: "Portfolio_Design_Works.pdf", size: "18.5 MB", type: "PDF" },
                                    { name: "Cover_Letter_Great_Work.docx", size: "45 KB", type: "DOCX" }
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-colors group cursor-pointer border border-transparent hover:border-slate-200">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:text-[#1E5EFF] transition-colors">
                                            <FileText size={24} />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-[#020617] mb-1">{doc.name}</h4>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{doc.size} • {doc.type}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#1E5EFF] group-hover:border-[#1E5EFF] group-hover:text-white transition-all">
                                            <CheckCircle2 size={18} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-8 py-4 bg-[#020617] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#1E5EFF] transition-colors shadow-xl">
                                Upload New Document
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
