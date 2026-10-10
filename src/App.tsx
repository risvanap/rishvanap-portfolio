import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { JourneySection } from './components/JourneySection';
import { CreativeGallery } from './components/CreativeGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { LightboxModal } from './components/LightboxModal';
import type { Project, CreativeItem } from './data/portfolioData';
import { CREATIVE_GALLERY_ITEMS } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCreativeItem, setSelectedCreativeItem] = useState<CreativeItem | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Scrollspy to accurately track active section for Navbar highlight
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'services', 'journey', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
  };

  const handleSelectCreativeIndex = (index: number) => {
    if (index >= 0 && index < CREATIVE_GALLERY_ITEMS.length) {
      setSelectedCreativeItem(CREATIVE_GALLERY_ITEMS[index]);
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] font-body selection:bg-blue-600/30 selection:text-cyan-300 relative">
      
      {/* Sticky Responsive Navbar */}
      <Navbar 
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />
        <JourneySection />
        <CreativeGallery onSelectItem={(item) => setSelectedCreativeItem(item)} />
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <LightboxModal
        item={selectedCreativeItem}
        items={CREATIVE_GALLERY_ITEMS}
        onClose={() => setSelectedCreativeItem(null)}
        onSelectIndex={handleSelectCreativeIndex}
      />

    </div>
  );
};

export default App;
