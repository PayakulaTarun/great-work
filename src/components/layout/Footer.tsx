import { Link } from 'react-router-dom';
import { TrendingUp, ChevronRight, Instagram, MessageCircle, Facebook, Twitter } from 'lucide-react';

const Footer = () => (
    <footer className="py-24 bg-[#020617] text-white/50 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <img src="/logo.png" alt="Great Work" className="w-auto h-12 object-contain" />
                    <span className="text-2xl font-black text-white tracking-tighter">Great Work</span>
                </div>
                <p className="text-sm font-medium leading-relaxed mb-8">Delivering premium digital solutions worldwide. 100% genuine work for global brands.</p>
            </div>
            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Quick Links</h4>
                <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
                    {[
                        { label: 'home', path: '/' },
                        { label: 'services', path: '/services' },
                        { label: 'solutions', path: '/solutions' },
                        { label: 'about', path: '/about' },
                        { label: 'contact', path: '/contact' }
                    ].map(link => (
                        <li key={link.label}>
                            <Link to={link.path} className="hover:text-white cursor-pointer transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Contact Us</h4>
                <p className="text-sm font-medium mb-4">📍 Hyderabad, India</p>
                <p className="text-sm font-medium text-[#6EC1FF] mb-6">workgreat76@gmail.com</p>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/greatwork.solutions?utm_source=qr&igsh=dWVraGE0cGh1dHhv" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all text-white/60">
                        <Instagram size={18} />
                    </a>
                    <a href="https://wa.me/qr/7QTLRCDFVZQHP1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-white/60">
                        <MessageCircle size={18} />
                    </a>
                    <a href="https://www.facebook.com/Greatwork.Solutions" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all text-white/60">
                        <Facebook size={18} />
                    </a>
                    <a href="https://x.com/Greatwork_Sltns" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-black hover:text-white transition-all text-white/60">
                        <Twitter size={18} />
                    </a>
                </div>
            </div>
            <div>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Newsletter</h4>
                <div className="flex gap-2">
                    <input type="email" placeholder="email@company.com" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs w-full focus:border-[#1E5EFF] outline-none" />
                    <button className="p-3 bg-[#1E5EFF] text-white rounded-lg"><ChevronRight size={18} /></button>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-6 pt-10 border-t border-white/5 text-[11px] font-black uppercase tracking-widest">
            <p>© 2024 Great Work Agency. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;
