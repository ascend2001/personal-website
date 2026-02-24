// eslint-disable-next-line import/prefer-default-export
import { BookOpenIcon, GlobeIcon, UsersIcon } from 'lucide-react';
import bpLogo from '../assets/bp-logo.png';
import uclaLogo from '../assets/uclaLogo.png';
import IEEELogo from '../assets/IEEELogo.png';
import oracleLogo from '../assets/oracle-img.svg';
import FOTCApp from '../assets/fotc.png';
import TCKLogo from '../assets/tck-logo.svg';
import stdetector from '../assets/icon-logo.svg';
import mlbThumbnail from '../assets/baseball.png';
import smartTherapy from '../assets/smart-therapy.svg';
import chatTracker from '../assets/ChatTracker.svg';
import TimeExperiment from '../assets/TimeExperiment.svg';

export const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1c1917',
    border: 'none',
  },
  overlay: {
    backgroundColor: '#1e293b',
    opacity: '0.98',
    zIndex: '20',
  },
};

const OracleInternWork = ['Converted a monthly Home Energy Report email to an external user-facing MERN-stack web application that presents dynamically updated data insights and a carbon footprint calculator, using real-time energy consumption data collected from Oracle Smart Energy Meters, to over 1 million+ active users.',
  'Augmented the data insights with a recommendation algorithm to recommend personalized energy efficiency and decarbonization tips to each user based on their energy consumption data, view their hypothetical consumption, and filter based on months, and years.'];

const OracleWork = ['Owned the end-to-end design and execution of a large-scale relational database migration (MySQL → Oracle Autonomous DB) for PII data across 5+ Java Dropwizard microservices, including schema design, data validation, rollout strategy, and rollback planning.\nResult: ~20% reduction in query latency across critical workflows serving 700,000+ customers.',
  'Delivered backend data-layer enhancements and built frontend modules for a production UI redesign of a GraphQL-backed React application used by 800+ utility companies, adding new seasonal energy savings performance rankings and peak-day rebate earning trends features that have increased customer onboarding by 28% and end user engagement by 15%.',
  'Improved system performance and deployment safety by implementing service-level metrics tracking and alerting with Prometheus across Dropwizard services, and Oozie workflows and increasing unit and integration test coverage to over 90% across 10+ products.',
  'Developed a PySpark analytics pipeline processing large-scale time-series energy consumption data and peak pricing from 200+ global utilities, calculating hourly savings forecasts over one year for end users based on rate plans, past usage and location heuristics.'];

export const Experiences = [
  {
    year: 'July 2023 - Present',
    image: oracleLogo,
    role: 'Applications Developer',
    company: 'Oracle',
    description:
        'Full-stack engineer delivering DB migrations, analytics pipelines, and UI features across distributed systems serving 700K+ customers.',
    work: OracleWork,
    tags: ['React', 'Java', 'JUnit', 'GraphQL', 'Dropwizard', 'Nomad', 'Flyway', 'Python', 'Oozie'],
  },
  {
    year: 'June 2022 - September 2022',
    image: oracleLogo,
    role: 'Software Engineering Intern',
    company: 'Oracle',
    description:
        'Built a MERN-stack energy insights web app with personalized decarbonization recommendations and carbon footprint calculator for 1M+ users',
    work: OracleInternWork,
    tags: ['React', 'Node.js', 'Express.js', 'Flask', 'MongoDB'],
  },
];

const LAWork = ['Tutored and facilitated instruction to 300+ students for a lower division Intro to Computer Science course taught in C++ through weekly lectures, code tracing workshops, review sessions, and office hours.',
  'Developed content of class to maximize student learning through weekly content meetings with the instructor to design and walkthrough 20+ assignments through weekly lectures, and project walkthroughs.',
  'Increased student engagement by over 45% by incorporating feedback from students and peer observations to our lecture.'];

const IDEAHacksWork = ['Spearheaded correspondence and detail-oriented negotiations with 30+ sponsors for Southern California’s largest hackathon.',
  'Secured 20% of the sponsorships on the team including Chipotle offering cash prizes of eight $50 gift cards and 2 meals of $100'];

const BPWork = ['Directing organization-wide funding efforts by building a funding guide and pipeline to request for UCLA grants and reimbursements, leading corporate sponsorship outreach and sent out 300+ emails to 60+ prospects, and leading fundraisers throughout the year.',
  'Heading member recruitment by organizing info sessions for different student affinity groups, streamlining the application process that receives 250+ applications all the way through coffee chats, final interviews, deliberation calls, and decisions.',
  'Organizing internal events, cross-chapter and internal socials, and the annual chapter retreat that caters to 40+ members.'];

export const Activities = [
  {
    company: 'LA Blueprint',
    role: 'Internal Vice President',
    year: 'January 2022 - June 2023',
    description:
        'Directed organization-wide funding efforts and built a funding pipeline, led corporate sponsorship outreach, directed member recruitment and outreach, and organized internal and cross-chapter events.',
    impact: '60+ sponsors reached, member recruitment scaled to 250+ applicants, 40+ volunteers mobilized, 3+ projects shipped.',
    color: 'coral',
    icon: UsersIcon,
    image: bpLogo,
    work: BPWork,
    location: 'Los Angeles, CA',
  },
  {
    company: 'Undergraduate Learning Assistant Program at UCLA',
    role: 'CS 31 Learning Assistant',
    year: 'September 2021 - June 2022',
    description:
        'Tutored and facilitated instruction to undergraduate students for an Intro to Computer Science course taught in C++ and developed content of class to maximize student learning through weekly content meetings.',
    impact: 'Taught 300+ students how to essential coding skills and boosted student engagement by 45%',
    color: 'sky',
    icon: BookOpenIcon,
    image: uclaLogo,
    work: LAWork,
    location: 'Los Angeles, CA',
  },
  {
    company: 'IEEE at UCLA',
    role: 'Sponsorship Outreach | IDEA Hacks 2021',
    year: 'May 2020 - January 2021',
    description:
        'Spearheaded correspondence and negotiations with sponsors for Southern California’s largest hackathon.',
    impact: 'Secured 20% of overall sponsorships including $600 Chipotle deal.',
    color: 'yellow',
    icon: GlobeIcon,
    image: IEEELogo,
    work: IDEAHacksWork,
    location: 'Los Angeles, CA',
  },
];

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

const MLBWork = ['Built an end-to-end Python data pipeline (web scraping, cleaning, feature engineering) using data from Baseball-Reference.com to enable predictive modeling of Major League Baseball playoff outcomes.',
  'Conducted EDA and trained machine learning models on hitting, pitching, and fielding metrics to identify key performance drivers and improve playoff prediction accuracy.',
  'Developed interactive dashboards (Tableau) and documentation to communicate insights, operationalize results, and support data-driven decision-making for stakeholders.'];

export const Projects = [
  {
    title: 'Friends of The Children Non-Profit Web App',
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
    title: 'The Conscious Kid Non-Profit Web App',
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
    impact: 'Placed first in the Health and Wellness track of QWER Hacks, and won Most Innovative Project sponsored by the CIA.',
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
    title: 'MLB Playoff Prediction Engine',
    displayTitle: 'Major League Baseball',
    description: 'End-to-end ML system forecasting MLB playoff outcomes from real-world data.',
    tags: ['Tableau', 'PyTorch', 'Scikit-Learn'],
    color: 'bg-sky/10',
    work: MLBWork,
    link: 'https://github.com/the-data-science-union/DSU-S2022-MLB',
    image: mlbThumbnail,
    timeline: 'August 2022',
    role: 'Front-End Developer',
  },
  {
    title: 'Chat Tracker',
    displayTitle: 'Chat Tracker',
    description: 'A chat tracker written in C++ that can track user activity on a mock user platform.',
    tags: ['C++', 'Binary Trees', 'Hash Maps'],
    color: 'bg-coral/10',
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
    color: 'bg-yellow/20',
    work: ReactionWork,
    link: 'https://github.com/ascend2001/Reaction-Time-Experiment',
    image: TimeExperiment,
    timeline: 'June 2020- August 2020',
    role: 'Undergraduate Researcher',
  },
];

export const Skills = [
  {
    name: 'Languages',
    color: 'coral',
    skills: [
      'Java',
      'C++',
      'Python',
      'Javascript',
      'Typescript',
      'PL/SQL',
      'HTML',
      'CSS',
    ],
  },
  {
    name: 'Full-Stack',
    color: 'sky',
    skills: [
      'React',
      'React Native',
      'MongoDB',
      'Dropwizard',
      'Node.js',
      'Express.js',
      'Oracle ADB',
      'Firebase',
    ],
  },
  {
    name: 'Infrastructure & Reliability',
    color: 'lavender',
    skills: [
      'Git',
      'GitHub',
      'Nomad',
      'Docker',
      'Flyway',
      'JUnit',
      'Prometheus',
      'Wiremock',
    ],
  },
];
