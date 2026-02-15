import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'About', path: '/about' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl py-3 md:py-4 border-b border-slate-100' : 'bg-transparent py-4 md:py-7'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="cursor-pointer group">
                    <img
                        src="/logo.png"
                        alt="Great Work - 100% Genuine Work"
                        className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-8">

                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `text-[12px] uppercase tracking-widest font-black transition-all relative group ${isActive ? 'text-[#1E5EFF]' : 'text-slate-500 hover:text-[#1E5EFF]'}`}
                        >
                            {({ isActive }) => (
                                <>
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#1E5EFF] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </>
                            )}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        className="px-6 py-3 bg-[#1E5EFF] text-white rounded-lg text-[11px] font-black uppercase tracking-widest hover:bg-[#020617] transition-all shadow-xl hover:scale-105 active:scale-95 btn-glow"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/login"
                        className="px-6 py-3 bg-[#020617] text-white rounded-lg text-[11px] font-black uppercase tracking-widest hover:bg-[#1E5EFF] transition-all shadow-xl hover:scale-105 active:scale-95"
                    >
                        Login / Join
                    </Link>
                </div>

                <button aria-label="Toggle mobile menu" className="lg:hidden p-2 text-[#1F2933] min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-[#020617] z-[110] p-10 lg:hidden flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <img
                                src="/logo.png"
                                alt="Great Work"
                                className="h-16 w-auto object-contain"
                            />
                            <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={28} /></button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-left text-2xl font-black text-white/60 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-white/10 my-4" />
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-5 bg-[#1E5EFF] text-white rounded-xl text-lg font-bold text-center">Contact Us</Link>
                            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full py-5 bg-[#020617] border border-white/20 text-white rounded-xl text-lg font-bold text-center">Login / Join</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
