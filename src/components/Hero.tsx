import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  ShieldCheck, 
  Code, 
  Palette, 
  Film, 
  Mail, 
  ChevronRight, 
  Copy, 
  Check, 
  Sparkles,
  Cpu,
  Layers,
  Lock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { AntiGravity } from './AntiGravity';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'terminal' | 'security' | 'creative' | 'portrait'>('terminal');
  
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<{ cmd: string; output: string }[]>([
    { cmd: 'initialize-systems', output: 'System initialized. Node v24.14 / React / Tailwind loaded.' },
    { cmd: 'whoami', output: 'Rishvan A P — Ethical Hacker | Web Developer | Graphic Designer | Video Editor' },
    { cmd: 'status --check', output: '[OK] Security: Authorized labs active | Dev: Clean TS/React | Design: Creative active' }
  ]);

  // Terminal animated typing text
  const typingSnippets = [
    '> Initializing creative systems...',
    '> Exploring secure solutions...',
    '> Building digital experiences...'
  ];
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [displayedSnippet, setDisplayedSnippet] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const snippet = typingSnippets[currentSnippetIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedSnippet === snippet) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedSnippet === '') {
        setIsDeleting(false);
        setCurrentSnippetIndex((prev) => (prev + 1) % typingSnippets.length);
      } else {
        setDisplayedSnippet(
          isDeleting
            ? snippet.substring(0, displayedSnippet.length - 1)
            : snippet.substring(0, displayedSnippet.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedSnippet, isDeleting, currentSnippetIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    if (cmd === 'help') {
      output = 'Available commands: about, skills, projects, services, contact, clear, date';
    } else if (cmd === 'about') {
      output = `${PERSONAL_INFO.aboutParagraph} Location: ${PERSONAL_INFO.location}`;
    } else if (cmd === 'skills') {
      output = 'Core pillars: [1] Cybersecurity (OWASP, Linux, Networking) [2] Web Dev (React, Angular, TypeScript, Python) [3] Graphic Design [4] Video Editing';
    } else if (cmd === 'projects') {
      output = 'Featured: LifeDrop (Blood Donor Finder), Lyndra Garden (E-Commerce), Security Lab, Digital Service Centre, Design Portfolio, Video Reels.';
    } else if (cmd === 'contact') {
      output = `Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}`;
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'date') {
      output = new Date().toUTCString();
    } else {
      output = `Command not recognized: '${cmd}'. Type 'help' to see valid commands.`;
    }

    setTerminalLogs((prev) => [...prev, { cmd: terminalInput, output }]);
    setTerminalInput('');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 sm:pt-36 lg:pt-36 pb-20 overflow-hidden bg-grid-pattern flex flex-col justify-center"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Branding, Headline, Supporting Text, CTAs, Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Header with AntiGravity Floating Profile Wrapper */}
            <div className="header mb-6">
              <AntiGravity>
                {/* Place the profile details ONLY inside the animation wrapper */}
                <div 
                  className="profile-container flex items-center gap-3.5 sm:gap-4 p-2.5 sm:p-3 pr-5 sm:pr-6 rounded-2xl bg-[#101522]/90 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/60 w-fit" 
                  style={{ position: 'relative', zIndex: 10 }}
                >
                  <img 
                    src="/rishvan-profile.jpg" 
                    alt="Rishvan A P" 
                    className="profile-img w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover object-[center_18%] border-2 border-cyan-400 shadow-md shrink-0" 
                  />
                  <div className="profile-details flex flex-col justify-center">
                    <h3 className="text-xs font-medium text-slate-300">Rishvan A P</h3>
                    <h1 className="font-heading font-black text-lg sm:text-xl text-white tracking-tight leading-tight">
                      RISHVAN A P
                    </h1>
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-wider text-cyan-400 uppercase mt-0.5">
                      SECURITY & CREATIVE
                    </p>
                  </div>
                </div>
              </AntiGravity>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>AVAILABLE FOR SELECT PROJECTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.08] tracking-tight text-white mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">Secure</span> Digital Experiences. <br className="hidden sm:inline" />
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">Visual Stories.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a technology enthusiast and creative professional exploring <span className="text-blue-300 font-medium">ethical hacking</span>, <span className="text-cyan-300 font-medium">web development</span>, <span className="text-purple-300 font-medium">graphic design</span>, and <span className="text-pink-300 font-medium">video editing</span>. I turn ideas into practical digital experiences through technology, design, and creativity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ChevronRight size={16} />
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#101522] hover:bg-[#18223B] border border-white/10 hover:border-blue-500/40 transition-all"
              >
                <span>Let's Work Together</span>
              </a>
            </div>

            {/* Social Media Links & Email Quick Copy */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-white/10 w-full">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Connect:
              </span>

              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
                  title="Click to copy email address"
                >
                  <Mail size={16} className="text-cyan-400" />
                  <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                  {copiedEmail ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-slate-400" />}
                </button>
              </div>

              <div className="ml-auto hidden xl:flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Tech Composition & Interactive Terminal */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            
            {/* Terminal Window Container */}
            <div className="w-full rounded-2xl glass-card overflow-hidden shadow-2xl shadow-black/80 border border-white/15 relative">
              
              {/* Terminal Title Bar */}
              <div className="bg-[#0b0e18] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  <span className="text-xs font-mono text-slate-400 ml-2">rishvan@portfolio:~</span>
                </div>

                {/* Tab selector */}
                <div className="flex items-center gap-1 bg-[#101522] p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'terminal' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    CLI
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'security' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Security
                  </button>
                  <button
                    onClick={() => setActiveTab('creative')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'creative' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Creative
                  </button>
                  <button
                    onClick={() => setActiveTab('portrait')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'portrait' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Portrait
                  </button>
                </div>
              </div>

              {/* Dynamic Animated Typing Header inside Terminal */}
              <div className="bg-[#0d121f] px-4 py-2 border-b border-white/5 flex items-center justify-between text-xs font-mono text-cyan-300">
                <div className="flex items-center gap-2">
                  <TerminalIcon size={14} className="text-cyan-400" />
                  <span>{displayedSnippet}</span>
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest hidden sm:inline">
                  LIVE SHELL
                </span>
              </div>

              {/* Tab 1: Live Interactive CLI */}
              {activeTab === 'terminal' && (
                <div className="p-4 bg-[#080B12]/95 min-h-[300px] flex flex-col justify-between font-mono text-xs">
                  <div className="space-y-3 overflow-y-auto max-h-[220px] pr-1">
                    <div className="text-slate-400 text-[11px]">
                      Type <span className="text-cyan-400">'help'</span> or click the quick chips below to query portfolio records:
                    </div>

                    {terminalLogs.map((log, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-1.5 text-blue-400">
                          <span className="text-cyan-400">❯</span>
                          <span className="text-slate-200">{log.cmd}</span>
                        </div>
                        <div className="text-slate-400 pl-4 border-l border-white/10 whitespace-pre-wrap leading-relaxed">
                          {log.output}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Preset Quick Command Chips */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {['help', 'skills', 'projects', 'about', 'clear'].map((cmd) => (
                        <button
                          key={cmd}
                          type="button"
                          onClick={() => {
                            setTerminalInput(cmd);
                          }}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 text-slate-400 text-[10px] border border-white/10 transition-colors"
                        >
                          ${cmd}
                        </button>
                      ))}
                    </div>

                    {/* Interactive Input Line */}
                    <form onSubmit={handleRunCommand} className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">❯</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="Type a command and press Enter..."
                        className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-slate-600 text-xs"
                      />
                      <button
                        type="submit"
                        className="px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white text-[11px] transition-colors"
                      >
                        Run
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Tab 2: Security Assessment Sandbox View */}
              {activeTab === 'security' && (
                <div className="p-5 bg-[#080B12]/95 min-h-[300px] flex flex-col justify-between font-mono text-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <ShieldCheck size={18} />
                        <span className="font-semibold uppercase tracking-wider">Security Testing Matrix</span>
                      </div>
                      <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30">
                        AUTHORIZED LABS
                      </span>
                    </div>

                    <div className="space-y-2.5 text-slate-300">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Lock size={14} className="text-blue-400" />
                          <span>OWASP Top 10 Assessment</span>
                        </div>
                        <span className="text-cyan-300 text-[11px]">Passed Audit</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu size={14} className="text-purple-400" />
                          <span>Linux Hardening & Network Recon</span>
                        </div>
                        <span className="text-cyan-300 text-[11px]">Strict Sandbox</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code size={14} className="text-green-400" />
                          <span>Input Sanitization & CSP Headers</span>
                        </div>
                        <span className="text-cyan-300 text-[11px]">Zero Injection</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 italic pt-3 border-t border-white/10">
                    * All cybersecurity research adheres strictly to legal boundaries in authorized learning environments.
                  </p>
                </div>
              )}

              {/* Tab 3: Creative Suite View */}
              {activeTab === 'creative' && (
                <div className="p-5 bg-[#080B12]/95 min-h-[300px] flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2 text-pink-400 font-mono">
                        <Palette size={18} />
                        <span className="font-semibold uppercase tracking-wider">Creative Direction Suite</span>
                      </div>
                      <span className="text-[10px] bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded border border-pink-500/30 font-mono">
                        4K / 60FPS
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-slate-300">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-pink-300 font-medium">
                          <Film size={14} />
                          <span>DaVinci Resolve</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Color Grading & Node Pipelines</span>
                      </div>

                      <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-purple-300 font-medium">
                          <Palette size={14} />
                          <span>Photoshop & Canva</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Posters & Brand Systems</span>
                      </div>

                      <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-cyan-300 font-medium">
                          <Layers size={14} />
                          <span>CapCut Pro</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Vertical 9:16 Retention Hooks</span>
                      </div>

                      <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-blue-300 font-medium">
                          <Sparkles size={14} />
                          <span>Motion Graphics</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Kinetic Typography & SFX</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 italic pt-3 border-t border-white/10 font-mono">
                    * Designed for maximum audience retention, visual aesthetic, and brand storytelling.
                  </p>
                </div>
              )}

              {/* Tab 4: Portrait Profile View */}
              {activeTab === 'portrait' && (
                <div className="p-5 bg-[#080B12]/95 min-h-[300px] flex flex-col sm:flex-row items-center gap-5 text-xs">
                  <div className="relative w-32 h-44 rounded-xl overflow-hidden border border-cyan-500/30 shrink-0 shadow-xl shadow-cyan-500/10">
                    <img
                      src="/rishvan-profile.jpg"
                      alt="Rishvan A P"
                      className="w-full h-full object-cover object-[center_18%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] text-cyan-300 font-bold font-mono">RAP</span>
                  </div>

                  <div className="flex-1 space-y-2 text-left">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white">{PERSONAL_INFO.name}</h4>
                      <p className="text-[11px] text-cyan-400 font-mono">{PERSONAL_INFO.title}</p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                      <div><span className="text-slate-400 font-mono">Location:</span> {PERSONAL_INFO.location}</div>
                      <div><span className="text-slate-400 font-mono">Security:</span> Authorized Labs & OWASP</div>
                      <div><span className="text-slate-400 font-mono">Dev Stack:</span> TypeScript, React, Python</div>
                      <div><span className="text-slate-400 font-mono">Media:</span> DaVinci Resolve & Photoshop</div>
                    </div>

                    <a
                      href="#about"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-cyan-300 pt-2 transition-colors font-medium"
                    >
                      <span>Read full bio in About section</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              )}

            </div>

            {/* Quick 4-Discipline Micro Badges below Terminal */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-4">
              <div className="p-3 rounded-xl bg-[#101522]/90 border border-white/10 hover:border-cyan-500/30 flex items-center gap-2.5 transition-colors group min-w-0">
                <ShieldCheck size={18} className="text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-200 font-medium truncate">Cybersecurity</span>
              </div>
              <div className="p-3 rounded-xl bg-[#101522]/90 border border-white/10 hover:border-blue-500/30 flex items-center gap-2.5 transition-colors group min-w-0">
                <Code size={18} className="text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-200 font-medium truncate">Web Development</span>
              </div>
              <div className="p-3 rounded-xl bg-[#101522]/90 border border-white/10 hover:border-purple-500/30 flex items-center gap-2.5 transition-colors group min-w-0">
                <Palette size={18} className="text-purple-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-200 font-medium truncate">Graphic Design</span>
              </div>
              <div className="p-3 rounded-xl bg-[#101522]/90 border border-white/10 hover:border-pink-500/30 flex items-center gap-2.5 transition-colors group min-w-0">
                <Film size={18} className="text-pink-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-200 font-medium truncate">Video Editing</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator at bottom */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors group"
            aria-label="Scroll to about section"
          >
            <span>DISCOVER MORE</span>
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-cyan-400/50 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
