import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle, 
  Layers, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in-down"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0d1322] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Close Button */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-[#0d1322]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all z-10"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>

          {/* Banner Details */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/20 text-cyan-400 border border-blue-500/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/15">
                  Status: {project.status}
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-4xl text-white">
                {project.title}
              </h3>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-all"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all"
                >
                  <span>Explore Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          {/* Tagline */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm italic font-sans">
            "{project.tagline}"
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
              <Sparkles size={14} />
              <span>Project Overview</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 mb-2 flex items-center gap-2">
              <AlertCircle size={14} />
              <span>Problem Statement</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle size={14} />
              <span>Key Objectives</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Layers size={14} />
              <span>Architecture & Key Features</span>
            </h4>
            <div className="space-y-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#101522] border border-white/5 text-xs text-slate-200">
                  <CheckCircle size={15} className="text-blue-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions.length > 0 && (
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3">
                Challenges & Solutions
              </h4>
              <div className="space-y-3">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                    <div className="font-semibold text-amber-300 flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-300">Challenge</span>
                      <span>{item.challenge}</span>
                    </div>
                    <div className="text-slate-300 pl-4 border-l border-cyan-500/40">
                      <span className="font-mono text-[10px] uppercase text-cyan-400 font-semibold mr-1">Solution:</span>
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Code2 size={14} />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-lg bg-blue-500/10 text-cyan-300 text-xs font-mono border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#0a0f1b] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px]">
            * Documented as part of Rishvan's practical development & security portfolio.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
