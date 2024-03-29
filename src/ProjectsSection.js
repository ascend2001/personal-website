import React from 'react';
import JokeGenerator from './jokeGenerator';
import ProjectCard from './ProjectCard';
import smartTherapy from './assets/smart-therapy.svg';
import chatTracker from './assets/ChatTracker.svg';
import TimeExperiment from './assets/TimeExperiment.svg';
import NPDatabase from './assets/NPDatabase.svg';
import stdetector from './assets/icon-logo.svg';
import TCKLogo from './assets/tck-logo.svg';

const SmartTherapyWork = ['Coordinated a team of 5 people to create a full-stack web application for users to leave reviews on local therapists.',
  'Utilized React, HTML, JavaScript, and CSS to create the frontend interface with login functionality, filtered search, anonymous reviews, dynamically updated ratings, creating accounts, adding favorites, and used React Router to connect all webpages.',
  "Utilized the Fetch API to query a Node server and access data from a MySQL database for the website's front end."];

const ChatTrackerWork = ['Created a chat-tracker that tracks if a user joined, left, or created a chat on an arbitrary platform using C++, OpenMP and STL library.',
  'Used a multi-threaded Hash Table with Binary Search Trees to create the tracker reducing retrieval of data from high-collision buckets',
  'Reduced the performance time of the tracker by over 95% over 70000+ commands for 100+ users received via chat logs.'];

const ReactionWork = ['Used Arduinos, ultrasonic sensors, and motors to set up circuits for data collection from 5+ different motional models.',
  'Engineered an experiment for a research study using C code and Arduinos to measure Reaction Time to light stimuli vs word stimuli.',
  'Utilized SciPy, and polyfit Python libraries to analyze data files, create a fitted model, and present statistically significant scatter plots.'];

const DbWork = ['Designed an entity-relationship model to store JSON data about Nobel Prizes and laureates, their affiliations, dates, and place of birth.',
  'Cleaned JSON data by creating a parser using the Python Filesystem API to convert JSON objects to del files for each SQL table.',
  'Used MySQL DDL queries to generate tables based off the ER model and used PHP to create a web based JSON API to filter and pull data about each laureate from the database using SQL queries based on their affiliations, name, year awarded, or category of award.'];

const STDWork = ['Built a mobile app to track the sexual health of a user and allow the exchange of sexual health profiles between users in 2 days that placed first in the Health and Wellness track of QWER Hacks, and won Most Innovative Project sponsored by the CIA.',
  'Coded the STI dashboard hosting the sexual health profiles of every user, the interface to upload STI testing documents, the functionality to view other users\' profiles, and react navigation using React Native, Expo APIs, and TailwindCSS for the frontend.',
  'Generated a SQL schema from an entity-relationship model, hosted our database on Airtable, and used Cloudinary API to host images.'];

const TCKWork = ['Partnered with The Conscious Kid to create a web anti-racism education hub with a library of curated books, and a book recommendation quiz with 5 developers to help consumers find works about minority groups easily.',
  'Used Airtable as a backend database, created the author and illustrator profile interfaces, searching and filtering functionality, the recommendation quiz interface, and a styled component library using React, React Router, Swiper API, and MaterialUI.',
  'Delegated developer tasks using the Agile Methodology and presented our work at tri-monthly checkpoints through internal demo days'];

function ProjectsSection() {
  return (
    <section className="flex flex-col lg:flex-row bg-gradient-to-r from-fuchsia-300 to-orange-600" id="Projects">
      <div className="flex flex-col text-white">
        <div className="text-6xl mt-8 ml-4">Projects</div>
        <div className="md:ml-32 mt-24 md:grid md:grid-cols-3 lg:gap-12 sm:flex sm:flex-col sm:items-center sm:gap-y-8">
          <ProjectCard timeline="January 2022 - June 2022" work={TCKWork} role="Full-Stack Developer" title="The Conscious Kid Non Profit Web App" subtitle="An online anti-racism education and resource hub for educators and children!" link="https://github.com/lablueprint/tck-web-app" image={TCKLogo} />
          <ProjectCard timeline="January 2022" work={STDWork} role="Full-Stack Developer" title="STDetector" subtitle="Winning Hack of QWER Hacks 2022! A mobile app to track your sexual health and to share it with prospective partners!" youtubelink="https://www.youtube.com/watch?v=tvQJHaNVfGo" devlink="https://devpost.com/software/stdetector" link="https://github.com/faizahsayyid/qwerhacks2022" image={stdetector} />
          <ProjectCard timeline="February 2021" work={SmartTherapyWork} role="Lead Front-end Developer" title="Smart Therapy" subtitle="Web Application for users to leave reviews for local therapists!" link="https://github.com/AlexPascadi/therapy-review" image={smartTherapy} />
          <ProjectCard timeline="May 2020" work={ChatTrackerWork} role="Developer" title="Chat Tracker" subtitle="A chat tracker written in C++ that can track user activity on a mock user platform using Binary Trees and Hash maps." link="https://github.com/ascend2001/ChatTracker" image={chatTracker} />
          <ProjectCard timeline="June 2020- August 2020" work={ReactionWork} role="Undergraduate Researcher" title="Reaction Time Experiment" subtitle="A research study using C code and Arduinos to measure Reaction Time to light stimuli vs word stimuli" link="https://github.com/ascend2001/Reaction-Time-Experiment" image={TimeExperiment} />
          <ProjectCard timeline="November 2021" work={DbWork} role="Developer" title="Nobel Prize Database" subtitle="A web based JSON API to search Nobel Prizes and laureates, their affiliations, dates, and place of birth." link="https://github.com/ascend2001/NobelPrizeDb" image={NPDatabase} />
        </div>
      </div>
      <JokeGenerator />
    </section>
  );
}

export default ProjectsSection;
