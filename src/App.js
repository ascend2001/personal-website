import React from 'react';
import ExperienceSection from './ExperienceSection';
import ExtracurricularSection from './ExtracurricularSection';
import ProfileImg from './assets/AvnishImg.png';
import LandingSection from './LandingSection';
import MenuBar from './MenuBar';
import ProjectsSection from './ProjectsSection';

function App() {
  return (
    <div className="flex flex-col select-none">
      <MenuBar />
      <LandingSection />
      <section className="about-me-wrapper flex flex-row text-white gap-x-28" id="AboutUs" name="AboutUs">
        <div className="lg:basis-2/3 sm:basis-3/3 flex flex-col">
          <div className="text-6xl mt-8 ml-4">About Me</div>
        </div>
        <img src={ProfileImg} alt="" className="profile-img my-12 flex" />
      </section>
      <ExperienceSection />
      <ExtracurricularSection />
      <ProjectsSection />

    </div>
  );
}

export default App;
