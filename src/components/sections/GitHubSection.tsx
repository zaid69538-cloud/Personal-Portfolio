import React from 'react';
import { ArrowUpRight, GitBranch, Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import GlowingButton from '../ui/GlowingButton';

const githubUrl = 'https://github.com/zaid69538-cloud';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Open Source"
          title="Find Me on GitHub"
          subtitle="Explore my learning journey, experiments, and projects as I continue building with curiosity."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-1 shadow-[0_20px_80px_rgba(6,182,212,0.12)] backdrop-blur-xl"
        >
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/25" />
          <div className="absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-purple-500/15 blur-3xl transition-all duration-500 group-hover:bg-purple-500/25" />

          <div className="relative flex flex-col items-center gap-8 rounded-[1.35rem] border border-white/5 bg-[#0a0d18]/80 px-6 py-9 text-center sm:px-10 md:flex-row md:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.18)]">
              <Github className="h-10 w-10" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-cyan-300">
                <GitBranch className="h-3.5 w-3.5" />
                <span>Learning in public</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Let&apos;s connect on GitHub</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Follow along as I explore computer science, AI, machine learning, and web development through hands-on projects and continuous practice.
              </p>
              <p className="mt-3 break-all text-xs font-mono text-slate-500">github.com/zaid69538-cloud</p>
            </div>

            <GlowingButton
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Visit GitHub
            </GlowingButton>
          </div>
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>More projects and experiments will be added over time.</span>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
