import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { ExperienceItem } from '../../types/portfolio';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  const filteredItems = experience.filter(item => item.type === 'Education');

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Education"
          title="Education"
          subtitle="My academic journey and foundation in Computer Science, Artificial Intelligence, and Machine Learning."
        />

        {/* Timeline Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Center Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

          <div className="space-y-12">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#07080d] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#06b6d4] z-10">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-xl hover:border-cyan-400/40 transition-all shadow-xl group">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                          {item.period}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-purple-300 mb-3">
                        {item.company}
                      </h4>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Achievements */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="space-y-1.5 mb-4">
                          {item.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
