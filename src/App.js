import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import ExperienceSection from './ExperienceSection';
import ExtracurricularSection from './ExtracurricularSection';
import LandingSection from './LandingSection';
import MenuBar from './MenuBar';
import ProjectsSection from './ProjectsSection';
import ContactBar from './Contact';
import bullet from './assets/bullet-grey.svg';

function App() {
  return (
    <div className="flex flex-col select-none">
      <MenuBar />
      <LandingSection />
      <ExperienceSection />
      <ExtracurricularSection />
      <ProjectsSection />
      <footer className="flex flex-col bg-black gap-y-9 py-9">
        <ContactBar color="grey" gapLength="10" />
        <div className="flex flex-row justify-center gap-x-2 items-center grow">
          <FaRegCopyright size="1.0em" color="grey" />
          <div className="text-slate-400 text-lg">Copyright 2020 Avnish Sengupta</div>
          <img src={bullet} alt="" height="10" width="10" className="" />
          <div className="text-slate-400 text-lg">Designed on Figma</div>
          <img src={bullet} alt="" height="10" width="10" className="" />
          <div className="text-slate-400 text-lg">
            Icons from
            {' '}
            <a href="https://react-icons.github.io/react-icons" className="underline">React Icons</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
