import React from 'react';
import { 
  Globe, 
  Layout, 
  Sparkles, 
  Palette, 
  Share2, 
  Video, 
  ShieldAlert, 
  Wrench, 
  CheckCircle, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const iconMap: Record<string, React.ElementType> = {
    Globe,
    Layout,
    Sparkles,
    Palette,
    Share2,
    Video,
    ShieldAlert,
    Wrench
  };

  const handleRequestQuote = (serviceTitle: string) => {
    onSelectServiceForQuote(serviceTitle);
    // Smooth scroll to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#080B12]/90 border-t border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase size={12} />
            <span>Offerings & Solutions</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Services & Expertise
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Comprehensive creative and technical services tailored for founders, creators, event organizers, and growing initiatives.
          </p>
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            const isSecurity = service.category === 'Cybersecurity';

            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${
                      isSecurity 
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                        : service.category === 'Design'
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : service.category === 'Media'
                        ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      <Icon size={22} />
                    </div>

                    {service.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Deliverables:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Request Quote Button */}
                <div className="pt-4 border-t border-white/10 mt-2">
                  <button
                    onClick={() => handleRequestQuote(service.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-200 hover:text-white border border-white/10 hover:border-transparent text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group-hover:shadow-lg group-hover:shadow-blue-500/20"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal & Standards Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#101522] border border-white/10 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * All security evaluations are strictly restricted to client-owned or explicitly authorized domains and sandbox configurations. Standard quote turnaround within 24 hours.
          </p>
        </div>

      </div>
    </section>
  );
};
