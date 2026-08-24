import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Code2, Database, Wrench, Sparkles, Zap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SkillDetail } from '../../types/portfolio';

interface MindmapNode {
  id: string;
  name: string;
  category: string;
  color: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  icon?: string;
  info: SkillDetail;
}

export const SkillMindmap: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<MindmapNode | null>(null);

  // Helper to extract skill detail from portfolioData
  const getSkillInfo = (categoryName: string, skillName: string): SkillDetail => {
    const group = portfolioData.skillGroups.find(g => g.category.toLowerCase().includes(categoryName.toLowerCase()));
    if (group) {
      const found = group.skills.find(s => {
        if (typeof s === 'string') return s.toLowerCase() === skillName.toLowerCase();
        return s.name.toLowerCase() === skillName.toLowerCase();
      });
      if (found && typeof found !== 'string') return found;
    }
    return {
      name: skillName,
      description: `Hands-on practical development and algorithmic implementation of ${skillName} in Machine Learning and software systems.`,
      topics: ["Core Concepts", "Implementation", "ML Workflows"],
      level: "Core Competency"
    };
  };

  const nodes: MindmapNode[] = [
    {
      id: 'ml',
      name: 'Machine Learning',
      category: 'AI & Data',
      color: '#ec4899',
      x: 78,
      y: 22,
      info: getSkillInfo('AI & Data', 'Machine Learning')
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Programming',
      color: '#06b6d4',
      x: 22,
      y: 22,
      info: getSkillInfo('Programming', 'Python')
    },
    {
      id: 'pandas-numpy',
      name: 'Pandas & NumPy',
      category: 'AI & Data',
      color: '#a855f7',
      x: 85,
      y: 52,
      info: getSkillInfo('AI & Data', 'Pandas')
    },
    {
      id: 'data-analysis',
      name: 'Data Analysis',
      category: 'AI & Data',
      color: '#f43f5e',
      x: 75,
      y: 82,
      info: getSkillInfo('AI & Data', 'Data Analysis')
    },
    {
      id: 'sql',
      name: 'SQL & MySQL',
      category: 'Database',
      color: '#10b981',
      x: 25,
      y: 82,
      info: getSkillInfo('Database', 'MySQL')
    },
    {
      id: 'frontend',
      name: 'Frontend & JS',
      category: 'Frontend',
      color: '#8b5cf6',
      x: 15,
      y: 52,
      info: getSkillInfo('Frontend', 'HTML5')
    },
    {
      id: 'c',
      name: 'C',
      category: 'Programming',
      color: '#f59e0b',
      x: 50,
      y: 12,
      info: getSkillInfo('Programming', 'C')
    }
  ];

  const centerNode = {
    x: 50,
    y: 52,
    name: "MOHD ZAID KHAN",
    role: "CSE (AIML)",
    affiliation: "GLA University"
  };

  return (
    <div className="relative w-full rounded-3xl bg-[#090b14]/90 border border-cyan-500/30 p-4 sm:p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.2)] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Hint */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          <Sparkles className="w-3 h-3 text-cyan-400 animate-spin-slow" />
          <span>INTERACTIVE SKILL MAP</span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
          Hover over nodes to inspect details
        </span>
      </div>

      {/* Interactive Map Visual Area */}
      <div className="relative w-full h-[360px] sm:h-[400px] select-none">
        {/* SVG Connecting Synapse Beams */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Radial Aura */}
          <circle cx="50%" cy="52%" r="90" fill="url(#centerGlow)" className="animate-pulse" />

          {/* Connecting Branch Lines to Skills */}
          {nodes.map((node) => {
            const isHovered = hoveredNode?.id === node.id;
            return (
              <g key={`line-${node.id}`}>
                {/* Outer glowing trace */}
                <line
                  x1={`${centerNode.x}%`}
                  y1={`${centerNode.y}%`}
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke={isHovered ? node.color : 'rgba(255, 255, 255, 0.12)'}
                  strokeWidth={isHovered ? 3 : 1.5}
                  strokeDasharray={isHovered ? '4 2' : 'none'}
                  className="transition-all duration-300"
                />
                {/* Interactive synapse particle pulse */}
                {isHovered && (
                  <circle
                    r="4"
                    fill={node.color}
                    className="filter drop-shadow-[0_0_8px_currentColor]"
                  >
                    <animateMotion
                      path={`M 0,0 L ${(node.x - centerNode.x) * 4} ${(node.y - centerNode.y) * 4}`}
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Core Identity Node */}
        <motion.div
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ left: `${centerNode.x}%`, top: `${centerNode.y}%` }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(6,182,212,0.6)] group">
            <div className="px-4 py-3 rounded-2xl bg-[#0b0e1b] backdrop-blur-md flex flex-col items-center justify-center border border-white/10 min-w-[170px] sm:min-w-[190px]">
              <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono font-bold tracking-wider mb-0.5">
                <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                <span>{centerNode.name}</span>
              </div>
              <div className="text-[12px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 leading-tight">
                {centerNode.role}
              </div>
              <div className="text-[10px] font-mono text-slate-400 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                {centerNode.affiliation}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Branching Skill Nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode?.id === node.id;
          return (
            <div
              key={node.id}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => setHoveredNode(hoveredNode?.id === node.id ? null : node)}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-300 border backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap shadow-lg ${
                  isHovered
                    ? 'bg-slate-900 text-white border-cyan-400 scale-110 shadow-[0_0_20px_rgba(6,182,212,0.6)]'
                    : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-cyan-400/50'
                }`}
                style={{
                  borderColor: isHovered ? node.color : undefined,
                  boxShadow: isHovered ? `0 0 20px ${node.color}88` : undefined
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: node.color }}
                />
                <span>{node.name}</span>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Popover Skill Info Card on Hover - Fixed Height to prevent any screen jitter */}
      <div className="h-[148px] mt-2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {hoveredNode ? (
            <motion.div
              key={hoveredNode.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="h-full p-4 rounded-2xl bg-slate-900/95 border border-cyan-400/40 backdrop-blur-2xl shadow-[0_0_25px_rgba(6,182,212,0.25)] flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: hoveredNode.color }}
                    />
                    <h4 className="font-bold text-white text-sm sm:text-base truncate">
                      {hoveredNode.info.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-white/10 shrink-0">
                      {hoveredNode.category}
                    </span>
                  </div>
                  {hoveredNode.info.level && (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 shrink-0">
                      <Zap className="w-3 h-3 text-yellow-400" />
                      {hoveredNode.info.level}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-2">
                  {hoveredNode.info.description}
                </p>
              </div>

              {/* Topics */}
              {hoveredNode.info.topics && (
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5 overflow-hidden max-h-[28px]">
                  {hoveredNode.info.topics.slice(0, 4).map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60 truncate max-w-[140px]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="h-full p-4 rounded-2xl bg-slate-900/40 border border-white/5 text-center text-xs text-slate-400 font-mono flex flex-col items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Hover over any skill node in the branch map above to inspect how Mohd Zaid Khan applies it.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillMindmap;
