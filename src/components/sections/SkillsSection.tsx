import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, BrainCircuit, Database, Wrench, Terminal, X, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { SkillGroup, SkillDetail } from '../../types/portfolio';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups }) => {
  const [selectedSkill, setSelectedSkill] = useState<{
    skill: SkillDetail;
    category: string;
    color: string;
    icon: string;
  } | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSkill(null);
    };
    if (selectedSkill) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSkill]);

  const getCategoryIcon = (iconName: string, color?: string) => {
    switch (iconName.toLowerCase()) {
      case 'code2':
        return <Code2 className="w-5 h-5" style={{ color: color || '#06b6d4' }} />;
      case 'layout':
        return <Layout className="w-5 h-5" style={{ color: color || '#8b5cf6' }} />;
      case 'braincircuit':
        return <BrainCircuit className="w-5 h-5" style={{ color: color || '#ec4899' }} />;
      case 'database':
        return <Database className="w-5 h-5" style={{ color: color || '#10b981' }} />;
      case 'wrench':
        return <Wrench className="w-5 h-5" style={{ color: color || '#f59e0b' }} />;
      default:
        return <Terminal className="w-5 h-5" style={{ color: color || '#06b6d4' }} />;
    }
  };

  const getAccentBorder = (category: string) => {
    switch (category) {
      case 'Programming':
        return 'from-cyan-500 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]';
      case 'Frontend':
        return 'from-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(139,92,246,0.4)]';
      case 'AI & Data':
        return 'from-pink-500 to-rose-500 shadow-[0_0_15px_rgba(236,72,153,0.4)]';
      case 'Database':
        return 'from-emerald-500 to-teal-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]';
      case 'Tools':
        return 'from-amber-500 to-orange-500 shadow-[0_0_15px_rgba(245,158,11,0.4)]';
      default:
        return 'from-cyan-500 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]';
    }
  };

  const getSkillObj = (skill: string | SkillDetail, category: string): SkillDetail => {
    if (typeof skill === 'string') {
      return {
        name: skill,
        description: `Detailed exploration and application of ${skill} in ${category} workflows and software engineering projects.`,
        topics: ["Core Fundamentals", "Practical Implementation", "Best Practices"],
        level: "Active Competency"
      };
    }
    return skill;
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="A structured overview of programming languages, machine learning toolkits, web technologies, and developer tools."
        />

        {/* Interactive Click Hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-300/80 bg-cyan-950/40 border border-cyan-500/20 py-2 px-4 rounded-full max-w-fit mx-auto mb-10 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Click on any skill to explore detailed applications & key concepts</span>
        </motion.div>

        {/* Skill Groups Container */}
        <div className="space-y-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-900/70 border border-white/10 p-6 sm:p-7 backdrop-blur-xl hover:border-cyan-400/40 transition-all shadow-lg group">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-white/10 shadow-sm">
                      {getCategoryIcon(group.icon, group.color)}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider hidden sm:inline-block">
                    {group.skills.length} competencies
                  </span>
                </div>

                {/* Vertical Indicator Bar + Bulleted Interactive Skills List */}
                <div className="flex items-start gap-4 pl-1">
                  {/* Glowing Vertical Left Bar (matching image style) */}
                  <div
                    className={`w-1.5 self-stretch min-h-[38px] rounded-full bg-gradient-to-b ${getAccentBorder(
                      group.category
                    )} shrink-0 mt-0.5`}
                  />

                  {/* Skills Inline Bullet List with Clickable Badges */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2.5 text-slate-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                    {group.skills.map((skillItem, sIdx) => {
                      const skillObj = getSkillObj(skillItem, group.category);
                      const isSelected = selectedSkill?.skill.name === skillObj.name;

                      return (
                        <React.Fragment key={skillObj.name}>
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedSkill({
                                skill: skillObj,
                                category: group.category,
                                color: group.color,
                                icon: group.icon,
                              })
                            }
                            className={`group/btn relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer text-left focus:outline-none ${
                              isSelected
                                ? 'theme-btn-control bg-cyan-500/25 border-cyan-400 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                                : 'theme-btn-control bg-slate-800/60 hover:bg-slate-800 border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 hover:scale-105 shadow-sm'
                            }`}
                          >
                            <span>{skillObj.name}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover/btn:bg-cyan-400 group-hover/btn:scale-125 transition-all" />
                          </button>

                          {sIdx < group.skills.length - 1 && (
                            <span className="text-cyan-400/60 select-none font-bold text-base sm:text-lg">
                              &bull;
                            </span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#0e1220] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)] z-10 text-slate-200 overflow-hidden"
            >
              {/* Background ambient light */}
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ backgroundColor: selectedSkill.color }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="theme-btn-control absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-3 rounded-2xl bg-slate-800/80 border border-white/10 shadow-lg"
                  style={{ borderColor: `${selectedSkill.color}55` }}
                >
                  {getCategoryIcon(selectedSkill.icon, selectedSkill.color)}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                    {selectedSkill.category} Competency
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedSkill.skill.name}
                  </h3>
                </div>
              </div>

              {/* Level Badge */}
              {selectedSkill.skill.level && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  <span>{selectedSkill.skill.level}</span>
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 tracking-wider">
                  Overview &amp; Practical Application
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedSkill.skill.description}
                </p>
              </div>

              {/* Key Topics & Concepts */}
              {selectedSkill.skill.topics && selectedSkill.skill.topics.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Key Concepts &amp; Toolkits Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.skill.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-white/10 text-cyan-300 text-xs font-mono"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer CTA */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Mohd Zaid Khan &bull; AIML @ GLA University</span>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="theme-btn-control px-4 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;
