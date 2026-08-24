import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

interface NavbarProps {
  name: string;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#07080d]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-white focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-shadow">
            <div className="w-full h-full bg-[#0a0b10] rounded-xl flex items-center justify-center">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
              {name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE &bull; PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right-side spacing keeps the brand and navigation balanced on desktop. */}
        <div className="hidden md:block w-4" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#07080d]/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                    activeSection === link.href.substring(1)
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 opacity-60" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
