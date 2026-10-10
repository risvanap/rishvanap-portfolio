import React from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  Globe 
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, JOURNEY_MILESTONES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in-down"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0d1322] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#101522] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Curriculum Vitae / Resume
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-400 font-mono">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d17] text-slate-200 text-xs">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm text-cyan-400 font-mono mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {PERSONAL_INFO.location}
              </p>
            </div>

            <div className="text-right space-y-1 font-mono text-[11px] text-slate-400">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail size={12} className="text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone size={12} className="text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe size={12} className="text-cyan-400" />
                <span>github.com/risvanap</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
              Professional Profile
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {PERSONAL_INFO.aboutParagraph}
            </p>
          </div>

          {/* Core Competencies Matrix */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-3">
              Core Technical & Creative Competencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-semibold text-white mb-1.5 text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{cat.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] text-slate-300 font-mono">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Technical & Security Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-3">
              Featured Practical Projects & Research Labs
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="border-l-2 border-blue-500/50 pl-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">{proj.title}</span>
                    <span className="font-mono text-[10px] text-cyan-300 bg-white/5 px-2 py-0.5 rounded">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">
                    Stack: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Journey & Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-3">
              Learning Journey & Key Milestones
            </h2>

            <div className="space-y-3">
              {JOURNEY_MILESTONES.map((jm, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-mono text-[11px] text-cyan-400 font-bold shrink-0">{jm.year}</span>
                  <div>
                    <span className="font-semibold text-white text-xs block">{jm.title}</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">{jm.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
