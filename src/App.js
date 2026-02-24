import React from 'react';
import ExperienceSection from './sections/ExperienceSection';
import ExtracurricularSection from './sections/ExtracurricularSection';
import LandingSection from './sections/LandingSection';
import MenuBar from './components/MenuBar';
import ProjectsSection from './sections/ProjectsSection';
import Footer from './components/Footer';
import AboutMeSection from './sections/AboutMeSection';
import SkillsSection from './sections/SkillsSection';

function App() {
  return (
    <div className="flex flex-col select-none">
      <MenuBar />
      <LandingSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ExtracurricularSection />
      <Footer />
    </div>
  );
}

export default App;
