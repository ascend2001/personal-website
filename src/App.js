import React from 'react';
import ExperienceSection from './ExperienceSection';
import ExtracurricularSection from './ExtracurricularSection';
import LandingSection from './LandingSection';
import MenuBar from './MenuBar';
import ProjectsSection from './ProjectsSection';

function App() {
  return (
    <div className="flex flex-col select-none">
      <MenuBar />
      <LandingSection />
      <ExperienceSection />
      <ExtracurricularSection />
      <ProjectsSection />

    </div>
  );
}

export default App;
