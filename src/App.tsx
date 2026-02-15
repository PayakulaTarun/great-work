import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import JobApplication from './pages/JobApplication';
import Login from './pages/Login';
import Profile from './pages/Profile';

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    const check = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', check);
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/about" element={<About />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<JobApplication />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<div className="pt-60 text-center font-black text-4xl uppercase text-slate-200">404 - Page Not Found</div>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-28 right-8 w-12 h-12 bg-white text-[#020617] rounded-full flex items-center justify-center shadow-2xl z-[90] border border-slate-100"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Primary Global Contact Trigger (WhatsApp) */}
      <motion.a
        href="https://wa.me/918367208436"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-8 w-16 h-16 bg-emerald-500 text-white rounded-[24px] flex items-center justify-center shadow-2xl z-[90] ring-4 ring-white"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
