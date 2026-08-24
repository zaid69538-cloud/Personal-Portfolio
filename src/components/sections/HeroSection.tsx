import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Download, Sparkles, Send, Github } from 'lucide-react';
import GlowingButton from '../ui/GlowingButton';
import { PortfolioData } from '../../types/portfolio';

interface HeroSectionProps {
  personal: PortfolioData['personal'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullTitle = personal.titles[currentTitleIndex] || personal.titles[0];
    const typeSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullTitle) {
        // Pause at the end of word
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        // Move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % personal.titles.length);
      } else {
        // Typing or deleting
        const nextText = isDeleting
          ? fullTitle.substring(0, currentText.length - 1)
          : fullTitle.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, personal.titles]);

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{personal.statusBadge}</span>
          </motion.div>

          {/* Greeting & Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-cyan-400 font-mono text-sm sm:text-base tracking-wider mb-2">
              Hi there, I am
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
              {personal.name}
            </h1>
          </motion.div>

          {/* Dynamic Typewriter Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 flex items-center h-12"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {currentText}
            </span>
            <span className="w-0.5 h-8 bg-cyan-400 ml-1.5 animate-pulse" />
          </motion.div>

          {/* Subtitle / Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            {personal.headline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center mb-12"
          >
            <GlowingButton
              href="#projects"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Projects
            </GlowingButton>
            <GlowingButton
              href="#contact"
              size="lg"
              variant="secondary"
              icon={<Send className="w-4 h-4" />}
            >
              Get in Touch
            </GlowingButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Connect:
            </span>
            <div className="flex items-center gap-2.5">
              {personal.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all hover:scale-110 shadow-sm"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="p-3 text-center sm:text-left border-r last:border-r-0 border-white/5">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
