import React from 'react';
import leaningMan from './assets/leaning-man.svg';
import apprenticeLogo from './assets/apprentice-logo.png';
import hussleLogo from './assets/hussle-logo.png';
import ExpCard from './ExpCard';

const apprenticeWork = ['Increased sales tracking efficiency by over 70% by automating tracking on commission dashboard using Excel and Zapier.',
  'Led a comparative UI/UX analysis between the companys old website and 10+ other Talent Acquisition Companies with a team of 4 people, consistently communicating and incorporating the decisions made by stakeholders and designers.',
  'Boosted exposure over 50% by developing a revamped website prototype for the company using React, HTML, CSS, and Node'];

const hussleWork = ['Worked on the development of the beta version of a cross-platform mobile app on a team of 10 developers for clients to offer and buy amateur services.',
  'Augmented a settings interface onto the user profile using React Native, Tab and Stack React Navigation, and Expo APIs.',
  'Performed UI/UX analysis on the current interface and identified 10+ pain points with optimal solutions on a team of 5 people.'];

function ExperienceSection() {
  return (
    <section className="flex flex-row gap-x-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white" id="Experience" name="Experience">
      <div className=" flex flex-col mt-6 ml-12 lg:basis-2/3">
        <div className="text-6xl mt-8 ml-4">Experiences</div>
        <ExpCard imageName={hussleLogo} company="Hussle" work={hussleWork} role="Frontend Engineering Intern" timeline="September 2021 - December 2021" location="Los Angeles, CA" />
        <ExpCard imageName={apprenticeLogo} work={apprenticeWork} company="Apprentice" role="Software Engineering Intern" timeline="August 2021 - October 2021" location="Los Angeles, CA" />

      </div>
      <div className="sm:hidden lg:flex place-items-center">
        <img src={leaningMan} alt="" className="leaning-man-img" />
      </div>

    </section>
  );
}

export default ExperienceSection;
