import React from 'react';
import ExperienceSection from './sections/ExperienceSection';
import ExtracurricularSection from './sections/ExtracurricularSection';
import LandingSection from './sections/LandingSection';
import MenuBar from './components/MenuBar';
import ProjectsSection from './sections/ProjectsSection';
import Footer from './components/Footer';
import AboutMe from './sections/AboutMe';

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
