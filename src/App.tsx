import React from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import GitHubSection from './components/sections/GitHubSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ContactSection from './components/sections/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--theme-bg)] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Bar */}
      <Navbar name={portfolioData.personal.name} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection personal={portfolioData.personal} />
        <AboutSection personal={portfolioData.personal} />
        <SkillsSection skillGroups={portfolioData.skillGroups} />
        <ProjectsSection projects={portfolioData.projects} />
        <GitHubSection />
        <CertificatesSection />
        <ContactSection personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer
        name={portfolioData.personal.name}
        email={portfolioData.personal.email}
        socials={portfolioData.personal.socials}
      />
    </div>
  );
};

export default App;
