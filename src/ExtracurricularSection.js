import React from 'react';
import SkillsChest from './assets/Skills-chest.svg';
import ExpCard from './ExpCard';
import uclaLogo from './assets/uclaLogo.png';
import IEEELogo from './assets/IEEELogo.png';
import bpLogo from './assets/bp-logo.png';
// import DMLogo from './assets/datamatchLogo.png';
// import transparent from './assets/transparent.png';

const LAWork = ['Tutored and facilitated instruction to 300+ students for a lower division Intro to Computer Science course taught in C++ through weekly lectures, code tracing workshops, review sessions, and office hours.',
  'Developed content of class to maximize student learning through weekly content meetings with the instructor to design and walkthrough 20+ assignments through weekly lectures, and project walkthroughs.',
  'Increased student engagement by over 45% by incorporating feedback from students and peer observations to our lecture.'];

const IDEAHacksWork = ['Spearheaded correspondence and detail-oriented negotiations with 30+ sponsors for Southern California’s largest hackathon.',
  'Secured 20% of the sponsorships on the team including Chipotle offering cash prizes of eight $50 gift cards and 2 meals of $100'];

const bpwork = ['Directing organization-wide funding efforts by building a funding guide and pipeline to request for UCLA grants and reimbursements, leading corporate sponsorship outreach and sent out 300+ emails to 60+ prospects, and leading fundraisers throughout the year.',
  'Heading member recruitment by organizing info sessions for different student affinity groups, streamlining the application process that receives 200+ applications all the way through coffee chats, final interviews, deliberation calls, and decisions.',
  'Organizing internal events, cross-chapter and internal socials, and the annual chapter retreat that caters to 40+ members.'];

function ExtracurricularSection() {
  return (
    <section className="flex bg-gradient-to-r from-cyan-500 to-blue-500 flex-row gap-x-16 text-white" id="Extracurriculars" name="Extracurriculars">
      <div className="lg:basis-2/3 sm:basis-3/3 mt-6 ml-12 flex flex-col">
        <div className="text-6xl mt-8">Extracurriculars</div>
        <div className="flex flex-col">
          <ExpCard imageName={bpLogo} work={bpwork} company="LA Blueprint" role="Internal Vice President" timeline="January 2022 - Present" location="Los Angeles, CA" />
          <ExpCard imageName={uclaLogo} work={LAWork} company="Undergraduate Learning Assistant Program at UCLA" role="CS 31 Learning Assistant" timeline="September 2021 - June 2022" location="Los Angeles, CA" />
          <ExpCard imageName={IEEELogo} work={IDEAHacksWork} company="IEEE at UCLA" role="Company Outreach | IDEA Hacks 2021" timeline="May 2020 - January 2021" location="Remote US" />
        </div>
      </div>
      <div className="place-items-center sm:hidden lg:flex">
        <img src={SkillsChest} alt="" className="skillsChest-img" />
      </div>
    </section>
  );
}

export default ExtracurricularSection;
