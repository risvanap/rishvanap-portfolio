import React from 'react';
import { 
  ArrowUp, 
  Mail 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070c] border-t border-white/10 text-slate-400 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#080B12] rounded-[7px] flex items-center justify-center">
                  <span className="font-heading font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    RAP
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {PERSONAL_INFO.title}
            </p>

            <p className="text-xs text-cyan-400 font-mono italic">
              "{PERSONAL_INFO.tagline}"
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-mono uppercase text-white tracking-wider block mb-2 font-medium">
                Navigation
              </span>
              <ul className="space-y-1.5">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <span className="font-mono uppercase text-white tracking-wider block mb-2 font-medium">
                Portfolio
              </span>
              <ul className="space-y-1.5">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a></li>
                <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-600/10 text-slate-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all"
                aria-label="GitHub Profile"
                title="GitHub: github.com/risvanap"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/10 text-slate-400 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn: www.linkedin.com/in/rishvanap"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-600/10 text-slate-400 hover:text-pink-400 border border-white/10 hover:border-pink-500/30 transition-all"
                aria-label="Instagram Profile"
                title="Instagram: https://www.instagram.com/risvan_ap (@risvan_ap)"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-all"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="font-mono">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="font-mono flex items-center gap-1.5">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
