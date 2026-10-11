import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  MessageSquare, 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: preselectedService || '',
    budget: '',
    message: '',
    honeypot: '' // anti-bot spam protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.service) {
      errs.service = 'Please select a required service or interest.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a brief message (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot trapped

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate reliable secure submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        honeypot: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#080B12] border-t border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare size={12} />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Whether you're looking for a website, a creative design, a video edit, or a technology-focused collaboration, let's discuss your idea.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Let's Build Something Together
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                I am currently open for select client freelance commissions, development collaborations, and creative production contracts.
              </p>

              {/* Direct channels list */}
              <div className="space-y-4">
                
                {/* Email with copy button */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Direct Email
                      </span>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-xs font-mono text-white hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* WhatsApp Direct link */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-green-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-green-500/10 text-green-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        WhatsApp Consultation
                      </span>
                      <span className="text-xs text-white font-mono">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </div>

                  <ArrowRight size={16} className="text-slate-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Base Location
                    </span>
                    <span className="text-xs text-white">
                      {PERSONAL_INFO.location} • Available for Remote Global Work
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Social Profiles:
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-slate-400 transition-all flex items-center justify-center group shadow-sm"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <GithubIcon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-blue-600/15 text-slate-300 hover:text-blue-400 border border-white/10 hover:border-blue-500/40 transition-all flex items-center justify-center group shadow-sm"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-pink-600/15 text-slate-300 hover:text-pink-400 border border-white/10 hover:border-pink-500/40 transition-all flex items-center justify-center group shadow-sm"
                    aria-label="Instagram Profile"
                    title="Instagram"
                  >
                    <InstagramIcon size={18} className="text-pink-400 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              
              {/* Form Success Message */}
              {submitStatus === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in-down">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Thank you for reaching out. I have received your project details and will review and respond to your email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Honeypot field for bot protection */}
                  <input
                    type="text"
                    name="website_anti_bot_hp"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full bg-[#101522] border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full bg-[#101522] border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5">
                        Phone Number <span className="text-slate-500 font-sans">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 8086380373"
                        className="w-full bg-[#101522] border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5">
                        Service Required <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full bg-[#101522] border rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors ${
                          errors.service ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                        }`}
                      >
                        <option value="">Select a service category...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Collaboration / Other">General Collaboration / Other</option>
                      </select>
                      {errors.service && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.service}</span>
                      )}
                    </div>
                  </div>

                  {/* Project Budget (Optional) */}
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5">
                      Estimated Project Budget <span className="text-slate-500 font-sans">(Optional)</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#101522] border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range...</option>
                      <option value="Under $500 / ₹40,000">Under $500 / ₹40,000</option>
                      <option value="$500 - $1,500 / ₹40k - ₹1.2L">$500 - $1,500 / ₹40k - ₹1.2L</option>
                      <option value="$1,500 - $3,000 / ₹1.2L - ₹2.5L">$1,500 - $3,000 / ₹1.2L - ₹2.5L</option>
                      <option value="Custom / Long-term Contract">Custom / Long-term Contract</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-mono uppercase text-slate-300 block mb-1.5">
                      Project Details & Goals <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, deliverables, and vision..."
                      className={`w-full bg-[#101522] border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-mono pt-2">
                    * Your information is handled securely and will never be shared with third parties.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
