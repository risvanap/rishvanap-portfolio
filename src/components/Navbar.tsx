import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Journey', href: '#journey' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#080B12]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Monogram & Name */}
            <a 
              href="#home" 
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Rishvan A P Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow overflow-visible">
                <img 
                  src="/rishvan-profile.jpg" 
                  alt="Rishvan A P" 
                  className="w-full h-full object-cover object-[center_18%] rounded-[10px]" 
                />
                {/* Subtle active status indicator */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase hidden sm:inline-block">
                  Security & Creative
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#101522]/80 backdrop-blur-lg border border-white/10 px-3 py-1.5 rounded-full shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm shadow-blue-500/20' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Resume & Let's Talk CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:border-slate-500"
                title="View and Download Resume"
              >
                <FileText size={14} className="text-blue-400" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/25 transition-all hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenResume}
                className="sm:hidden flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs"
                title="Resume"
              >
                <FileText size={16} className="text-blue-400" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 animate-fade-in-down">
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 pb-2 border-b border-white/10">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 px-4 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center gap-2"
            >
              <FileText size={16} className="text-blue-400" />
              <span>Download / Preview Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      )}
    </>
  );
};
