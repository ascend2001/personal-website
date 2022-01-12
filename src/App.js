import React from 'react';
import ExperienceSection from './ExperienceSection';
import ExtracurricularSection from './ExtracurricularSection';
import LandingSection from './LandingSection';
import MenuBar from './MenuBar';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="flex flex-col select-none">
      <MenuBar />
      <LandingSection />
      <AboutMe />
      <ExperienceSection />
      <ExtracurricularSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
