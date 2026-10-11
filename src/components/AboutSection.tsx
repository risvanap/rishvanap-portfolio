import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Code2, 
  Palette, 
  Film, 
  FileText, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<number>(0);

  const disciplines = [
    {
      title: "Cybersecurity & Ethical Hacking",
      icon: ShieldCheck,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
      summary: "Ethical research, OWASP Top 10 analysis, network packet inspection, and web application security testing in authorized environments.",
      highlights: [
        "Network fundamentals (TCP/IP, Wireshark, DNS routing)",
        "Linux system administration, permissions & bash automation",
        "Vulnerability assessment & defensive security analysis",
        "Strict adherence to legal, authorized testing frameworks"
      ]
    },
    {
      title: "Web Development",
      icon: Code2,
      color: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
      summary: "Modern full-stack web applications built with TypeScript, React, Angular, Python/Django REST Framework, and clean component systems.",
      highlights: [
        "Responsive, accessible frontend engineering with Tailwind CSS",
        "Component-driven architectures (React, TypeScript, Angular)",
        "RESTful API design and PostgreSQL database integration",
        "Git version control and modular, maintainable codebases"
      ]
    },
    {
      title: "Graphic Design",
      icon: Palette,
      color: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/10",
      summary: "Visual identity design, high-impact event posters, social media creatives, and marketing collateral focused on hierarchy and balance.",
      highlights: [
        "Adobe Photoshop photo manipulation & compositing",
        "Typography pairing, focal points, and color harmony",
        "High-CTR social media promotional graphics & banners",
        "Brand identity systems and minimalist monogram marks"
      ]
    },
    {
      title: "Video Editing",
      icon: Film,
      color: "text-pink-400",
      border: "border-pink-500/30",
      bg: "bg-pink-500/10",
      summary: "Cinematic short-form storytelling, DaVinci Resolve color grading, CapCut speed ramping, and retention-engineered social reels.",
      highlights: [
        "Non-linear timeline editing & dynamic beat-synced cuts",
        "Professional color grading & cinematic LUT workflows",
        "Multi-track audio balance, atmospheric sound design & SFX",
        "Vertical 9:16 reels optimized for retention and viewer engagement"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080B12] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            A Little About Me
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Bridging technical precision, ethical security, and creative visual expression to build memorable digital solutions.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Visual Bio Card & Quick Badges */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
              
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

              {/* Profile Image & Identity Showcase */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-cyan-500/30 transition-colors shadow-2xl">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt="Rishvan A P Profile Photo"
                  className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/20 to-transparent" />

                {/* Monogram Badge Top Right */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-mono font-bold">
                  RAP
                </div>

                {/* Bottom Photo Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading font-bold text-2xl text-white drop-shadow-md">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5 drop-shadow">
                    {PERSONAL_INFO.title}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                    <MapPin size={13} className="text-red-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Verified Identity Highlights */}
              <div className="space-y-3 mb-6 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5">
                  <span className="text-slate-400">Core Focus</span>
                  <span className="font-medium text-white">Security & Full-Stack Tech</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5">
                  <span className="text-slate-400">Creative Media</span>
                  <span className="font-medium text-white">Design & Cinematic Video</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5">
                  <span className="text-slate-400">Work Philosophy</span>
                  <span className="font-medium text-cyan-300">"Technology meets creativity"</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/10 mb-4 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Social Profiles:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-slate-400 transition-all shadow-sm"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/15 text-slate-300 hover:text-blue-400 border border-white/10 hover:border-blue-500/40 transition-all shadow-sm"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={16} className="text-blue-400" />
                  </a>

                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-600/15 text-slate-300 hover:text-pink-400 border border-white/10 hover:border-pink-500/40 transition-all shadow-sm"
                    aria-label="Instagram Profile"
                    title="Instagram"
                  >
                    <InstagramIcon size={16} className="text-pink-400" />
                  </a>
                </div>
              </div>

              {/* Resume Download Action */}
              <button
                onClick={onOpenResume}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600/30 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-400 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-600/20"
              >
                <FileText size={15} />
                <span>View & Download Resume</span>
              </button>

            </div>
          </div>

          {/* Right Column: Introduction Paragraph & Discipline Explorer */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Core Introduction Text */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 mb-6">
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
                <Terminal size={18} className="text-cyan-400" />
                <span>Passion & Philosophy</span>
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                "{PERSONAL_INFO.aboutParagraph}"
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Rather than treating software, security, and aesthetics as separate silos, I approach every project holistically. A secure application deserves an intuitive, beautiful interface; while creative video and visual media must communicate with structure, purpose, and impact.
              </p>
            </div>

            {/* Discipline Selector Tabs */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Explore Core Disciplines:
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {disciplines.map((d, index) => {
                  const Icon = d.icon;
                  const isSelected = selectedDiscipline === index;
                  return (
                    <button
                      key={d.title}
                      onClick={() => setSelectedDiscipline(index)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected 
                          ? `${d.bg} ${d.border} text-white shadow-md` 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon size={18} className={isSelected ? d.color : 'text-slate-400'} />
                      <div className="text-xs font-medium mt-2 line-clamp-1">
                        {d.title.split('&')[0].trim()}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Discipline Details Box */}
              <div className={`p-6 rounded-2xl border ${disciplines[selectedDiscipline].border} ${disciplines[selectedDiscipline].bg} backdrop-blur-sm transition-all`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-black/40 ${disciplines[selectedDiscipline].color}`}>
                    {React.createElement(disciplines[selectedDiscipline].icon, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                      {disciplines[selectedDiscipline].title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {disciplines[selectedDiscipline].summary}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10">
                  {disciplines[selectedDiscipline].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className={`${disciplines[selectedDiscipline].color} shrink-0 mt-0.5`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
