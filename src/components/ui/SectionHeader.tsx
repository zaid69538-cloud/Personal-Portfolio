import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center'
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}`}
    >
      {/* Glowing Badge */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)] ${isCenter ? 'justify-center' : ''}`}>
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
        <span>{badge}</span>
      </div>

      {/* Main Title with Gradient Glow */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title.split(' ').map((word, idx, arr) => {
          // Give special gradient to the last 1-2 words
          if (idx >= arr.length - 2) {
            return (
              <span
                key={idx}
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              >
                {word}{' '}
              </span>
            );
          }
          return `${word} `;
        })}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
