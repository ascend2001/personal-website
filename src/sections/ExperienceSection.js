import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import leaningMan from '../assets/leaning-man.svg';
import Badge from '../components/Badge';
import oracleLogo from '../assets/oracle-img.svg';
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

const OracleInternWork = ['Converted a monthly Home Energy Report email to an external user-facing MERN-stack web application that presents dynamically updated data insights and a carbon footprint calculator, using real-time energy consumption data collected from Oracle Smart Energy Meters, to over 1 million+ active users.',
  'Augmented the data insights with a recommendation algorithm to recommend personalized energy efficiency and decarbonization tips to each user based on their energy consumption data, view their hypothetical consumption, and filter based on months, and years.'];

const OracleWork = ['Owned the end-to-end design and execution of a large-scale relational database migration (MySQL → Oracle Autonomous DB) for PII data across 5+ Java Dropwizard microservices, including schema design, data validation, rollout strategy, and rollback planning.\nResult: ~20% reduction in query latency across critical workflows serving 700,000+ customers.',
  'Delivered backend data-layer enhancements and built frontend modules for a production UI redesign of a GraphQL-backed React application used by 800+ utility companies, adding new seasonal energy savings performance rankings and peak-day rebate earning trends features that have increased customer onboarding by 28% and end user engagement by 15%.',
  'Improved system performance and deployment safety by implementing service-level metrics tracking and alerting with Prometheus across Dropwizard services, and Oozie workflows and increasing unit and integration test coverage to over 90% across 10+ products.',
  'Developed a PySpark analytics pipeline processing large-scale time-series energy consumption data and peak pricing from 200+ global utilities, calculating hourly savings forecasts over one year for end users based on rate plans, past usage and location heuristics.'];

const experiences = [
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

function ExperienceSection() {
  const [modalData, setModalData] = useState(null);
  const [displayStatus, setDisplayStatus] = useState(false);
  const openModal = useCallback((data) => {
    setModalData(data);
    setDisplayStatus(true);
  }, []);
  const closeModal = useCallback(() => setDisplayStatus(false), []);

  return (
    <section className="flex flex-col gap-x-32 bg-midnight text-white px-20 py-20" id="Experience" name="Experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 py-12">
        <h2 className="text-4xl font-heading font-black  mb-4">
          The Journey So Far
        </h2>
        <p className="text-xl text-text-muted">
          A timeline of growth, learning, and building.
        </p>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col basis-2/3">
          {experiences.map((exp, index) => (
            <>
              <motion.div
                key={uuidv4()}
                className="min-w-[350px] md:min-w-[400px] snap-center"
                initial={{
                  opacity: 0,
                  y: 50,
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
                  duration: 0.5,
                }}
                onClick={() => openModal(exp)}
              >
                <div className="relative pl-8 border-l-4 border-lavender-dark h-full py-2">
                  <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-coral border-4 border-white shadow-sm" />

                  <AboutMeCard hover className="h-full flex flex-col">
                    <span className="text-sm font-bold text-coral mb-2 block">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-text-dark mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-text-muted font-medium mb-4">
                      {exp.company}
                    </p>
                    <p className="text-text-dark/80 mb-6 flex-grow">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="lavender">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </AboutMeCard>
                </div>
              </motion.div>
              {modalData
                  && (
                  <Modal isOpen={displayStatus} onRequestClose={closeModal} style={customStyles}>
                    <ProjectModal
                      imageName={modalData.image}
                      title={modalData.company}
                      timeline={modalData.year}
                      work={modalData.work}
                      role={modalData.role}
                    />
                  </Modal>
                  )}
            </>

          ))}
        </div>
        <div className="mx-auto sm:hidden lg:flex place-items-center">
          <img src={leaningMan} alt="" className="leaning-man-img" />
        </div>
      </div>

    </section>
  );
}

export default ExperienceSection;
