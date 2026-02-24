import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Modal from 'react-modal';
import Badge from '../components/Badge';
import smartTherapy from '../assets/smart-therapy.svg';
import chatTracker from '../assets/ChatTracker.svg';
import TimeExperiment from '../assets/TimeExperiment.svg';
import stdetector from '../assets/icon-logo.svg';
import TCKLogo from '../assets/tck-logo.svg';
import FOTCApp from '../assets/fotc.png';
import AboutMeCard from '../components/AboutMeCard';
import ProjectModal from '../components/ProjectModal';

Modal.setAppElement(document.getElementById('root'));
Modal.defaultStyles.overlay.backgroundColor = '#1e293b';
Modal.defaultStyles.content.backgroundColor = '#1c1917';
Modal.defaultStyles.overlay.opacity = '0.98';
Modal.defaultStyles.content.border = 'none';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const SmartTherapyWork = ['Coordinated a team of 5 people to create a full-stack web application for users to leave reviews on local therapists.',
  'Utilized React, HTML, JavaScript, and CSS to create the frontend interface with login functionality, filtered search, anonymous reviews, dynamically updated ratings, creating accounts, adding favorites, and used React Router to connect all webpages.',
  "Utilized the Fetch API to query a Node server and access data from a MySQL database for the website's front end."];

const ChatTrackerWork = ['Created a chat-tracker that tracks if a user joined, left, or created a chat on an arbitrary platform using C++, OpenMP and STL library.',
  'Used a multi-threaded Hash Table with Binary Search Trees to create the tracker reducing retrieval of data from high-collision buckets',
  'Reduced the performance time of the tracker by over 95% over 70000+ commands for 100+ users received via chat logs.'];

const ReactionWork = ['Used Arduinos, ultrasonic sensors, and motors to set up circuits for data collection from 5+ different motional models.',
  'Engineered an experiment for a research study using C code and Arduinos to measure Reaction Time to light stimuli vs word stimuli.',
  'Utilized SciPy, and polyfit Python libraries to analyze data files, create a fitted model, and present statistically significant scatter plots.'];

const STDWork = ['Built a mobile app to track the sexual health of a user and allow the exchange of sexual health profiles between users in 2 days that placed first in the Health and Wellness track of QWER Hacks, and won Most Innovative Project sponsored by the CIA.',
  'Coded the STI dashboard hosting the sexual health profiles of every user, the interface to upload STI testing documents, the functionality to view other users\' profiles, and react navigation using React Native, Expo APIs, and TailwindCSS for the frontend.',
  'Generated a SQL schema from an entity-relationship model, hosted our database on Airtable, and used Cloudinary API to host images.'];

const TCKWork = ['Partnered with The Conscious Kid to create a web anti-racism education hub with a library of curated books, and a book recommendation quiz with 5 developers to help consumers find works about minority groups easily.',
  'Used Airtable as a backend database, created the author and illustrator profile interfaces, searching and filtering functionality, the recommendation quiz interface, and a styled component library using React, React Router, Swiper API, and MaterialUI.',
  'Delegated developer tasks using the Agile Methodology and presented our work at tri-monthly checkpoints through internal demo days'];

const FOTCWork = ['Partnered with Friends of The Children to create a user-friendly and streamlined communication system to improve collaboration and information sharing between mentors, administrators, and caregivers.',
  'Created module filesystem containing links and resources, calendar with upcoming events, auth login, announcements wall and profile pages using React and React Router and handled login and user role global states using Redux.',
  'Built text/email system for admin to send reminders and announcements using Mailchimp API and setup noSQL database using Firebase to store admin and caregiver profiles, modules, notices and events.'];

const projects = [
  {
    title: 'Friends of The Children Non Profit Web App',
    displayTitle: 'Friends of The Children',
    description: 'A user-friendly communication system to improve information sharing between administrators and caregivers!',
    impact: 'Used by over 100 caregivers, mentors and administrators to serve over 3,000 children and 15,000 family members.',
    tags: ['React', 'Firebase', 'AWS'],
    color: 'bg-sky/10',
    work: FOTCWork,
    link: 'https://github.com/lablueprint/friends-of-the-children',
    blueprintlink: 'https://lablueprint.org/projects/fotc',
    livelink: 'https://friends-of-the-children-gamma.vercel.app/',
    image: FOTCApp,
    timeline: 'January 2023 - June 2023',
    role: 'Full-Stack Developer',
  },
  {
    title: 'The Conscious Kid Non Profit Web App',
    displayTitle: 'The Conscious Kid',
    description: 'An online anti-racism education and resource hub for educators and children!',
    impact: 'Increased access to 100,000+ representative books and racial identity educational resources to 2M+ people.',
    tags: ['React', 'Airtable', 'Airlock'],
    color: 'bg-coral/10',
    work: TCKWork,
    link: 'https://github.com/lablueprint/tck-web-app',
    blueprintlink: 'https://lablueprint.org/projects/tck',
    livelink: 'https://tck-web-app.herokuapp.com/',
    image: TCKLogo,
    timeline: 'January 2022 - June 2022',
    role: 'Full-Stack Developer',
  },
  {
    title: 'STDetector',
    displayTitle: 'STDetector',
    description: 'Winning Hack of QWER Hacks 2022! A mobile app to track your sexual health and to share it with prospective partners!',
    tags: ['React Native', 'Expo', 'Airtable', 'Cloudinary'],
    color: 'bg-yellow/20',
    work: STDWork,
    link: 'https://github.com/faizahsayyid/qwerhacks2022',
    youtubelink: 'https://www.youtube.com/watch?v=tvQJHaNVfGo',
    devlink: 'https://devpost.com/software/stdetector',
    image: stdetector,
    timeline: 'January 2022',
    role: 'Full-Stack Developer',
  },
  {
    title: 'Smart Therapy',
    displayTitle: 'Smart Therapy',
    description: 'Web Application for users to leave reviews for local therapists!',
    tags: ['React', 'MongoDB', 'Express.js', 'Node.js'],
    color: 'bg-purple-100',
    work: SmartTherapyWork,
    link: 'https://github.com/AlexPascadi/therapy-review',
    image: smartTherapy,
    timeline: 'February 2021',
    role: 'Front-End Developer',
  },
  {
    title: 'Chat Tracker',
    displayTitle: 'Chat Tracker',
    description: 'A chat tracker written in C++ that can track user activity on a mock user platform.',
    tags: ['C++', 'Binary Trees', 'Hash Maps'],
    color: 'bg-purple-100',
    work: ChatTrackerWork,
    link: 'https://github.com/ascend2001/ChatTracker',
    image: chatTracker,
    timeline: 'May 2020',
    role: 'Developer',
  },
  {
    title: 'Reaction Time Experiment',
    displayTitle: 'Reaction Time',
    description: 'A research study using C code and Arduinos to measure Reaction Time to light stimuli vs word stimuli',
    tags: ['C', 'Arduino', 'Ultrasonic Sensors', 'SciPy'],
    color: 'bg-purple-100',
    work: ReactionWork,
    link: 'https://github.com/ascend2001/Reaction-Time-Experiment',
    image: TimeExperiment,
    timeline: 'June 2020- August 2020',
    role: 'Undergraduate Researcher',
  },
];

function ProjectsSection() {
  const [modalData, setModalData] = useState(null);
  const [displayStatus, setDisplayStatus] = useState(false);
  const openModal = useCallback((data) => {
    setModalData(data);
    setDisplayStatus(true);
  }, []);
  const closeModal = useCallback(() => setDisplayStatus(false), []);

  return (
    <section className="flex flex-col bg-lavender-dark py-10" id="Projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-black text-text-dark mb-4">
          Selected Works
        </h2>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Projects that showcase the blend of systems thinking and creative
          execution.
        </p>
      </div>
      <div className="px-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <>
              <motion.div
                key={uuidv4()}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                onClick={() => openModal(project)}
              >
                <AboutMeCard
                  hover
                  className="h-full flex flex-col overflow-hidden group"
                >
                  <div
                    className={`-mx-6 -mt-6 h-48 ${project.color} flex items-center justify-center mb-6 relative overflow-hidden`}
                  >
                    {/* Abstract shapes for visual interest */}
                    <div className="absolute w-32 h-32 bg-white/30 rounded-full -top-10 -right-10" />
                    <div className="absolute w-20 h-20 bg-white/20 rounded-full bottom-5 left-10" />

                    <h3 className="text-3xl font-heading font-black text-text-dark/20 group-hover:scale-110 transition-transform duration-500">
                      {project.displayTitle}
                    </h3>
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-heading font-bold text-text-dark">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.link}
                        className="text-text-muted hover:text-coral transition-colors"
                      >
                        <GithubIcon size={20} />
                      </a>
                      <a
                        href={project.link}
                        className="text-text-muted hover:text-coral transition-colors"
                      >
                        <ExternalLinkIcon size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-text-muted text-lg mb-4">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    {project.impact && (
                    <div className="p-3 bg-lavender rounded-xl mb-4 border border-lavender-dark/50">
                      <p className="text-sm font-bold text-text-dark">
                        ⚡ Impact:
                        {' '}
                        <span className="font-normal text-text-muted">
                          {project.impact}
                        </span>
                      </p>
                    </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AboutMeCard>
              </motion.div>
              {modalData
              && (
              <Modal isOpen={displayStatus} onRequestClose={closeModal} style={customStyles}>
                <ProjectModal
                  imageName={modalData.image}
                  title={modalData.title}
                  timeline={modalData.timeline}
                  work={modalData.work}
                  role={modalData.role}
                  link={modalData.link}
                  devlink={modalData.devlink}
                  youtubelink={modalData.youtubelink}
                  blueprintlink={modalData.blueprintlink}
                  livelink={modalData.livelink}
                />
              </Modal>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
