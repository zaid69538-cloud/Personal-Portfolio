import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Github } from 'lucide-react';
import { SocialLink } from '../../types/portfolio';

interface FooterProps {
  name: string;
  email: string;
  socials: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ name, email, socials }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#06070a]/90 backdrop-blur-xl text-slate-400 py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0b10] rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="font-bold text-white tracking-tight">{name}</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />

          {/* Real-time Clock */}
          <div className="flex items-center gap-2 text-xs font-mono bg-slate-900/80 px-3 py-1.5 rounded-full border border-white/5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>LOCAL TIME: {time || '00:00:00 UTC'}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all hover:scale-110"
              aria-label={social.name}
            >
              {getIcon(social.icon)}
            </a>
          ))}
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={`mailto:${email}`}
            className="font-mono text-slate-400 transition-colors hover:text-cyan-300"
          >
            {email}
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
