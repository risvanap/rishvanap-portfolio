import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Code2, 
  Palette, 
  Film, 
  Search, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    cybersecurity: ShieldCheck,
    webdev: Code2,
    graphicdesign: Palette,
    videoediting: Film
  };

  // Filter skills based on category and search
  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategory === 'all') return true;
    return cat.id === activeCategory;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080B12]/80 border-t border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Cpu size={12} />
              <span>Technical & Creative Stack</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-3">
              Grounded competency across ethical cybersecurity, modern web development, visual graphic craft, and cinematic video editing.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill or tool..."
              className="w-full bg-[#101522] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            All Disciplines
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Icon size={14} />
                <span>{cat.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Categories & Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            
            // Filter skills inside category by search query
            const matchingSkills = category.skills.filter((s) => {
              if (!searchQuery) return true;
              const q = searchQuery.toLowerCase();
              return (
                s.name.toLowerCase().includes(q) ||
                s.description.toLowerCase().includes(q) ||
                s.tags.some((t) => t.toLowerCase().includes(q))
              );
            });

            if (matchingSkills.length === 0) return null;

            return (
              <div key={category.id} className="space-y-6">
                
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 hidden sm:inline-block">
                    {category.badge}
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {matchingSkills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        {/* Skill Title & Level Tag */}
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <h4 className="font-heading font-semibold text-base text-white">
                            {skill.name}
                          </h4>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 border ${
                            skill.level === 'Core Tool' 
                              ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                              : skill.level === 'Practical Competency'
                              ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
                              : 'bg-purple-500/15 text-purple-400 border-purple-500/30'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          {skill.description}
                        </p>
                      </div>

                      {/* Tool & Tag Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 rounded-xl bg-[#101522]/90 border border-white/10 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * All listed skills represent verified, practical competencies actively studied and applied in projects and authorized test environments. No arbitrary percentage scores.
          </p>
        </div>

      </div>
    </section>
  );
};
