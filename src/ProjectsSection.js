import React from 'react';
import JokeGenerator from './jokeGenerator';
import ProjectCard from './ProjectCard';
import smartTherapy from './assets/smart-therapy.svg';
import chatTracker from './assets/ChatTracker.svg';
import TimeExperiment from './assets/TimeExperiment.svg';
import NPDatabase from './assets/NPDatabase.svg';

function ProjectsSection() {
  return (
    <section className="flex flex-col lg:flex-row fourth-wrapper" id="Projects">
      <div className="flex flex-col text-white">
        <div className="text-6xl mt-8 ml-4">Projects</div>
        <div className="ml-32 mt-24 grid grid-cols-2 gap-12">
          <ProjectCard title="Smart Therapy" subtitle="Web Application for users to leave reviews for local therapists!" link="https://github.com/AlexPascadi/therapy-review" image={smartTherapy} />
          <ProjectCard title="Chat Tracker" subtitle="A chat tracker written in C++ that can track user activity on a mock user platform using Binary Trees and Hash maps." link="https://github.com/ascend2001/ChatTracker" image={chatTracker} />
          <ProjectCard title="Reaction Time Experiment" subtitle="A research study using C code and Arduinos to measure Reaction Time to light stimuli vs word stimuli" link="https://github.com/ascend2001/Reaction-Time-Experiment" image={TimeExperiment} />
          <ProjectCard title="Nobel Prize Database" subtitle="A web based JSON API to search Nobel Prizes and laureates, their affiliations, dates, and place of birth." link="https://github.com/ascend2001/NobelPrizeDb" image={NPDatabase} />
        </div>
      </div>
      <JokeGenerator />
    </section>
  );
}

export default ProjectsSection;
