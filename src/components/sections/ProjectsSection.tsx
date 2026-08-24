import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ProjectModal from '../ui/ProjectModal';
import { ProjectItem } from '../../types/portfolio';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

type ProjectFilter = 'All' | 'Full Stack' | '3D / WebGL' | 'AI / Machine Learning' | 'Mobile & Apps';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters: ProjectFilter[] = ['All'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Works"
          title="Crafted with Precision"
          subtitle="Explore high-performance web applications, interactive 3D WebGL experiences, and autonomous AI systems."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`theme-btn-control relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === filter
                  ? 'text-white'
                  : 'text-slate-400 bg-slate-900/60 hover:text-slate-200 border border-white/5'
              }`}
            >
              {selectedFilter === filter && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="theme-filter-active absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <motion.div
                  className="h-full bg-[#0d101d] border border-white/10 rounded-2xl flex flex-col cursor-pointer shadow-lg"
                  onClick={() => setActiveModalProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveModalProject(project);
                    }
                  }}
                  aria-label={`Open details for ${project.title}`}
                >
                  {/* Card Thumbnail Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d101d] via-[#0d101d]/30 to-transparent" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-cyan-300 bg-slate-950/80 border border-cyan-500/30 rounded-full backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-slate-800/50 text-slate-400">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Direct Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                          <span>Details</span> &rarr;
                        </span>

                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-slate-800/60 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-700 transition-colors"
                              aria-label="GitHub Repository"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-slate-800/60 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-700 transition-colors"
                              aria-label="Live Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project In-Depth Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
