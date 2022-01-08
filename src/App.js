import React from 'react';
import AvnishMoon from './assets/avnish-on-moon.svg';
import stars from './assets/stars.svg';
import leaningMan from './assets/leaning-man.svg';
import SkillsChest from './assets/Skills-chest.svg';
import laptop from './assets/laptop.svg';
import askerSpeech from './assets/asker-speech-bubble.svg';
import responderSpeech from './assets/responder-speech-bubble.svg';
import ExpCard from './ExpCard';
import apprenticeLogo from './assets/apprentice-logo.png';
import hussleLogo from './assets/hussle-logo.png';
import bpLogo from './assets/bp-logo.png';
import dsuLogo from './assets/dsuLogo.png';
import uclaLogo from './assets/uclaLogo.png';
import DMLogo from './assets/datamatchLogo.png';
import IEEELogo from './assets/IEEELogo.png';
import transparent from './assets/transparent.png';

function App() {
  return (
    <div>
      <header className="initial-wrapper">
        <div className="absolute">
          <img src={stars} alt="" width="1392.3" height="695" className="blur-sm" />
        </div>
        <div className="initial-wrapper flex md:flex-row flex-col">
          <div className="flex flex-col md:mb-60 justify-center ml-48 text-white text-6xl font-sans basis-2/3">
            <div className="mb-5 initial-wrapper-text">
              Hi, I am Avnish.
            </div>
            <div>
              <div className="flex flex-col lg:flex-row relative">
                <div className="initial-wrapper-text">Welcome to</div>
                <div className="flex flex-row md:ml-3.5 initial-wrapper-text">
                  my world
                  <div className="blinking-cursor z-10" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row content-end justify-end md:basis-1/3 overflow-hidden">
            <img src={AvnishMoon} alt="" width="536" height="798" className="z-10 md:-mb-96" />
          </div>
        </div>
      </header>
      <section className="flex flex-row second-wrapper text-white">
        <div className=" flex flex-col mt-6 ml-12 basis-2/3">
          <div className="text-6xl mt-8 ml-4">Experiences</div>
          <ExpCard imageName={hussleLogo} company="Hussle" role="Frontend Engineering Intern" timeline="September 2021 - December 2021" location="Los Angeles, CA" />
          <ExpCard imageName={apprenticeLogo} company="Apprentice" role="Software Engineering Intern" timeline="August 2021 - October 2021" location="Los Angeles, CA" />

        </div>
        <img src={leaningMan} alt="" width="203.5" height="659" className="place-items-center basis-1/3 my-10" />
      </section>
      <section className="flex flex-row third-wrapper text-white">
        <div className="lg:basis-2/3 sm:basis-3/3 flex flex-col">
          <div className="text-6xl mt-8 ml-4">Extracurriculars</div>
          <div className="flex flex-col mt-6 ml-12">
            <ExpCard imageName={bpLogo} company="LA Blueprint" role="Incoming Full-Stack Developer" timeline="January 2022" location="Los Angeles, CA" />
            <ExpCard imageName={dsuLogo} company="Data Science Union" role="Incoming Data Analyst" timeline="January 2022" location="Los Angeles, CA" />
            <ExpCard imageName={uclaLogo} company="Undergraduate Learning Assistant Program at UCLA" role="Math 31AL Learning Assistant" timeline="September 2021 - December 2021" location="Los Angeles, CA" />
            <ExpCard imageName={DMLogo} company="Datamatch at UCLA" role="Vice President of Social Affairs" timeline="January 2021 - Present" location="Los Angeles, CA" />
            <ExpCard imageName={IEEELogo} company="IEEE Student Branch at UCLA" role="Company Outreach | UCLA IDEA Hacks 2021" timeline="May 2020 - January 2021" location="Los Angeles, CA" />
            <ExpCard imageName={transparent} role="IEEE Open Project Space (OPS)" timeline="September 2019 - May2020" location="Los Angeles, CA" />
          </div>
        </div>
        <img src={SkillsChest} alt="" width="536" height="798" className="place-items-center lg:basis-1/3 sm:hidden lg:flex" />
      </section>
      <section className="flex flex-row fourth-wrapper">
        <div className="flex flex-col basis-2/3 text-3xl place-content-center">
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>lorem ipsum dolsum lorem ipsum dolsum</div>
        </div>
        <div className="flex flex-col justify-around relative">
          <img src={askerSpeech} alt="" width="280" height="144.25" />
          <div className="speech-bubble-wrapper absolute top-20 left-8 text-lg">
            Which github branch are you on?
          </div>
          <img src={laptop} alt="" width="440.5" height="239.5" className="basis-1/3" />
          <div className="flex flex-row place-content-end">
            <img src={responderSpeech} alt="" width="280" height="144.25" />
            <div className="absolute bottom-20 right-6 text-lg">
              The one where I am branching out.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
