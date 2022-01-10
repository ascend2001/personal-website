import React from 'react';
import AvnishMoon from './assets/avnish-on-moon.svg';
import stars from './assets/stars.svg';
import leaningMan from './assets/leaning-man.svg';
import SkillsChest from './assets/Skills-chest.svg';
import ExpCard from './ExpCard';
import apprenticeLogo from './assets/apprentice-logo.png';
import hussleLogo from './assets/hussle-logo.png';
import bpLogo from './assets/bp-logo.png';
import dsuLogo from './assets/dsuLogo.png';
import uclaLogo from './assets/uclaLogo.png';
// import DMLogo from './assets/datamatchLogo.png';
import IEEELogo from './assets/IEEELogo.png';
import JokeGenerator from './jokeGenerator';
import smartTherapy from './assets/smart-therapy.png';

// import transparent from './assets/transparent.png';

const apprenticeWork = ['Increased sales tracking efficiency by over 70% by automating tracking on commission dashboard using Excel and Zapier.',
  'Led a comparative UI/UX analysis between the companys old website and 10+ other Talent Acquisition Companies with a team of 4 people, consistently communicating and incorporating the decisions made by stakeholders and designers.',
  'Boosted exposure over 50% by developing a revamped website for the company using React, HTML, CSS, and Node'];

const hussleWork = ['Worked on the development of the beta version of a cross-platform mobile app on a team of 10 developers for clients to offer and buy amateur services.',
  'Augmented a settings interface onto the user profile using React Native, Tab and Stack React Navigation, and Expo APIs.',
  'Led UI/UX analysis on the current interface and identified 10+ pain points with optimal solutions on a team of 5 people.'];

const LAWork = ['Tutored and facilitated instruction to 200+ students through weekly lectures, workshops, review sessions, and office hours.',
  'Developed content of class to maximize student learning through weekly content meetings with the instructor to design 20+ assignments.',
  'Increased student engagement by over 45% by incorporating feedback from students and peer observations to our lecture'];

const IDEAHacksWork = ['Spearheaded correspondence and detail-oriented negotiations with 30+ sponsors for Southern California’s largest hackathon.',
  'Secured 20% of the sponsorships on the team including Chipotle offering cash prizes of eight $50 gift cards and 2 meals of $100'];

function App() {
  return (
    <div className="flex flex-col select-none">
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
      <section className="flex flex-row gap-x-32 second-wrapper text-white">
        <div className=" flex flex-col mt-6 ml-12 lg:basis-2/3">
          <div className="text-6xl mt-8 ml-4">Experiences</div>
          <ExpCard imageName={hussleLogo} company="Hussle" work={hussleWork} role="Frontend Engineering Intern" timeline="September 2021 - December 2021" location="Los Angeles, CA" />
          <ExpCard imageName={apprenticeLogo} work={apprenticeWork} company="Apprentice" role="Software Engineering Intern" timeline="August 2021 - October 2021" location="Los Angeles, CA" />

        </div>
        <div className="sm:hidden lg:flex place-items-center">
          <img src={leaningMan} alt="" className="leaning-man-img" />
        </div>

      </section>
      <section className="flex flex-row gap-x-32 third-wrapper text-white">
        <div className="lg:basis-2/3 sm:basis-3/3 flex flex-col">
          <div className="text-6xl mt-8 ml-4">Extracurriculars</div>
          <div className="flex flex-col mt-6 ml-12">
            <ExpCard imageName={bpLogo} company="LA Blueprint" role="Incoming Full-Stack Developer" timeline="January 2022" location="Los Angeles, CA" />
            <ExpCard imageName={dsuLogo} company="Data Science Union" role="Incoming Data Analyst" timeline="January 2022" location="Los Angeles, CA" />
            <ExpCard imageName={uclaLogo} work={LAWork} company="Undergraduate Learning Assistant Program at UCLA" role="Math 31AL Learning Assistant" timeline="September 2021 - December 2021" location="Los Angeles, CA" />
            {/* <ExpCard
            imageName={DMLogo}
            company="Datamatch at UCLA"
            role="Vice President of Social Affairs"
            timeline="June 2021 - Present"
            location="Los Angeles, CA" /> */}
            <ExpCard imageName={IEEELogo} work={IDEAHacksWork} company="IEEE at UCLA" role="Company Outreach | UCLA IDEA Hacks 2021" timeline="May 2020 - January 2021" location="Los Angeles, CA" />
          </div>
        </div>
        <div className="place-items-center sm:hidden lg:flex">
          <img src={SkillsChest} alt="" className="skillsChest-img" />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row fourth-wrapper">
        <div className="flex flex-col text-white">
          <div className="text-6xl mt-8 ml-4">Projects</div>
          <div className="ml-32 mt-24 grid grid-cols-2 gap-12">
            <div className="relative">
              <img src={smartTherapy} alt="" className="project-img" />
              <div className="h-52 w-52 bg-black absolute duration-300 delay-150 opacity-0 hover:opacity-70 top-0">Click on me!</div>
            </div>
            <div className="relative">
              <img src={smartTherapy} alt="" className="project-img" />
              <div className="h-52 w-52 bg-black absolute duration-300 delay-150 opacity-0 hover:opacity-70 top-0">Click on me!</div>
            </div>
            <div className="relative">
              <img src={smartTherapy} alt="" className="project-img" />
              <div className="h-52 w-52 bg-black absolute duration-300 delay-150 opacity-0 hover:opacity-70 top-0">Click on me!</div>
            </div>
            <div className="relative">
              <img src={smartTherapy} alt="" className="project-img" />
              <div className="h-52 w-52 bg-black absolute duration-300 delay-150 opacity-0 hover:opacity-70 top-0">Click on me!</div>
            </div>
          </div>
        </div>
        <JokeGenerator />
      </section>

    </div>
  );
}

export default App;
