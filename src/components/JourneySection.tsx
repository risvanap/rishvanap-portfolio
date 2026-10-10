import React, { useState } from 'react';
import { 
  Milestone, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import { JOURNEY_MILESTONES, CERTIFICATIONS_DATA } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'journey' | 'certifications'>('journey');

  const categoryBadgeColors: Record<string, string> = {
    Cybersecurity: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    Development: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    Design: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    Media: 'text-pink-400 border-pink-500/30 bg-pink-500/10'
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#080B12] border-t border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Milestone size={12} />
              <span>Growth & Competency</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              My Learning Journey
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-3">
              A transparent timeline of continuous technical exploration, hands-on security labs, and creative skill development.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#101522] border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'journey'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Timeline Milestones
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'certifications'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Verified Competencies
            </button>
          </div>
        </div>

        {/* Tab 1: Vertical Timeline */}
        {activeTab === 'journey' && (
          <div className="relative pl-6 sm:pl-10 border-l border-white/10 ml-4 sm:ml-8 space-y-12">
            {JOURNEY_MILESTONES.map((milestone, idx) => (
              <div key={idx} className="relative group">
                
                {/* Node icon on line */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#080B12] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Milestone Card */}
                <div className="glass-card rounded-2xl p-6 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-blue-500/20 text-cyan-400 border border-blue-500/30">
                      {milestone.year}
                    </span>

                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${categoryBadgeColors[milestone.category] || 'text-slate-300'}`}>
                      {milestone.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-4 text-xs text-cyan-300 font-mono">
                    <span className="text-slate-400 mr-2">Highlight:</span>
                    {milestone.highlight}
                  </div>

                  {/* Associated tools */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {milestone.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Verified Competencies / Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Award size={22} />
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 size={13} />
                      <span>Verified Knowledge</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {cert.category} • {cert.date}
                  </span>

                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-cyan-300 font-mono mb-3">
                    Provider / Method: {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">Credential ID: REP-SEC-VERIFIED</span>
                  <span className="text-cyan-400 font-medium">Active Portfolio Standard</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
