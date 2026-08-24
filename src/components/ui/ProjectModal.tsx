import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Zap, Layers } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import GlowingButton from './GlowingButton';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] isolate flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop overlay: rendered at document level so it covers every page section. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-0 cursor-pointer bg-black/75 backdrop-blur-xl"
        />

        {/* Modal Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-[#0e1220] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] custom-scrollbar text-slate-200"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="theme-btn-control absolute top-3 right-3 z-20 p-2 rounded-full bg-slate-900/85 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Project Preview Banner */}
          <div className="relative w-full h-36 sm:h-44 md:h-48 overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1220] via-transparent to-black/40" />

            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-2.5 py-0.5 mb-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 rounded-full backdrop-blur-md">
                {project.category}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white pr-8">
                {project.title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-5 space-y-5">
            {/* Action CTAs */}
            <div className="flex flex-wrap gap-3 items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <GlowingButton
                    href={project.demoUrl}
                    target="_blank"
                    size="sm"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Launch Live Demo
                  </GlowingButton>
                )}
                {project.githubUrl && (
                  <GlowingButton
                    href={project.githubUrl}
                    target="_blank"
                    variant="outline"
                    size="sm"
                    icon={<Github className="w-4 h-4" />}
                  >
                    View Source Code
                  </GlowingButton>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview Description */}
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Project Architecture & Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Key Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Key Performance Metrics
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center"
                    >
                      <div className="text-lg sm:text-xl font-bold text-cyan-300 font-mono">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Engineering & Design Highlights
                </h3>
                <ul className="space-y-1.5">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
