import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Compass, Target, Award, MapPin, Mail, Clock, Download, Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import GlowingButton from '../ui/GlowingButton';
import { PortfolioData } from '../../types/portfolio';

import SkillMindmap from '../ui/SkillMindmap';

interface AboutSectionProps {
  personal: PortfolioData['personal'];
}

type TabType = 'story' | 'philosophy' | 'highlights';

export const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => {
  const [activeTab, setActiveTab] = useState<TabType>('story');

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'story', label: 'My Story', icon: <User className="w-4 h-4" /> },
    { id: 'philosophy', label: 'Philosophy', icon: <Compass className="w-4 h-4" /> },
    { id: 'highlights', label: 'Quick Facts', icon: <Target className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Profile Overview"
          title="Machine Learning & Data Intelligence"
          subtitle="Bridging mathematical statistical learning, exploratory data science, and intelligent software engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Skill Mindmap */}
          <div className="lg:col-span-6 flex justify-center">
            <SkillMindmap />
          </div>

          {/* Right Column: Tabbed Information */}
          <div className="lg:col-span-6">
            {/* Tab Navigation */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md mb-8 max-w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeAboutTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/40 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Box */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-xl min-h-[340px]">
              <AnimatePresence mode="wait">
                {activeTab === 'story' && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-cyan-400" />
                      The Journey So Far
                    </h3>
                    {personal.bioParagraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-slate-300 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'philosophy' && (
                  <motion.div
                    key="philosophy"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">Core Engineering Values</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                        <div className="text-cyan-300 font-semibold mb-1">⚡ Performance First</div>
                        <p className="text-xs text-slate-400">Sub-second load times, 60fps WebGL rendering, and zero layout shifts.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                        <div className="text-purple-300 font-semibold mb-1">🎨 Spatial Aesthetics</div>
                        <p className="text-xs text-slate-400">Fluid physics-based animations, tactile micro-interactions, and visual harmony.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                        <div className="text-pink-300 font-semibold mb-1">🔒 Resilient Architecture</div>
                        <p className="text-xs text-slate-400">Strict typing, modular separation of concerns, and automated test coverage.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                        <div className="text-emerald-300 font-semibold mb-1">💡 Product Empathy</div>
                        <p className="text-xs text-slate-400">Building solutions that solve real business problems and delight end users.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'highlights' && (
                  <motion.div
                    key="highlights"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Learning, Exploring & Growing</h3>
                    <div className="space-y-3">
                      {[
                        "A curious student who enjoys learning new concepts and understanding how technology works.",
                        "Exploring web development, Python, AI/ML, and core computer science through hands-on practice.",
                        "Building projects to turn new ideas into practical skills and meaningful solutions.",
                        "Focused on mastering technologies step by step through consistency, experimentation, and problem solving."
                      ].map((fact, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                          <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{fact}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
