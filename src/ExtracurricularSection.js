import React from 'react';
import SkillsChest from './assets/Skills-chest.svg';
import ExpCard from './ExpCard';
import dsuLogo from './assets/dsuLogo.png';
import uclaLogo from './assets/uclaLogo.png';
import IEEELogo from './assets/IEEELogo.png';
// import DMLogo from './assets/datamatchLogo.png';
// import transparent from './assets/transparent.png';

const LAWork = ['Tutored and facilitated instruction to 200+ students through weekly lectures, workshops, review sessions, and office hours.',
  'Developed content of class to maximize student learning through weekly content meetings with the instructor to design 20+ assignments.',
  'Increased student engagement by over 45% by incorporating feedback from students and peer observations to our lecture'];

const IDEAHacksWork = ['Spearheaded correspondence and detail-oriented negotiations with 30+ sponsors for Southern California’s largest hackathon.',
  'Secured 20% of the sponsorships on the team including Chipotle offering cash prizes of eight $50 gift cards and 2 meals of $100'];

function ExtracurricularSection() {
  return (
    <section className="flex bg-gradient-to-r from-cyan-500 to-blue-500 flex-row gap-x-16 text-white" id="Extracurriculars" name="Extracurriculars">
      <div className="lg:basis-2/3 sm:basis-3/3 mt-6 ml-12 flex flex-col">
        <div className="text-6xl mt-8">Extracurriculars</div>
        <div className="flex flex-col">
          <ExpCard imageName={dsuLogo} company="Data Science Union" role="Incoming Data Analyst" timeline="February 2022" location="Los Angeles, CA" />
          <ExpCard imageName={uclaLogo} work={LAWork} company="Undergraduate Learning Assistant Program at UCLA" role="Math 31AL Learning Assistant" timeline="September 2021 - December 2021" location="Los Angeles, CA" />
          <ExpCard imageName={IEEELogo} work={IDEAHacksWork} company="IEEE at UCLA" role="Company Outreach | IDEA Hacks 2021" timeline="May 2020 - January 2021" location="Los Angeles, CA" />
        </div>
      </div>
      <div className="place-items-center sm:hidden lg:flex">
        <img src={SkillsChest} alt="" className="skillsChest-img" />
      </div>
    </section>
  );
}

export default ExtracurricularSection;
