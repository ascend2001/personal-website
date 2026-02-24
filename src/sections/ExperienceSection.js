import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import leaningMan from '../assets/leaning-man.svg';
import Badge from '../components/Badge';
import Card from '../components/Card';
import ProjectModal from '../components/ProjectModal';
import { ModalStyles, Experiences } from '../common/constants';

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
          {Experiences.map((exp, index) => (
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

                  <Card hover className="h-full flex flex-col">
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
                  </Card>
                </div>
              </motion.div>
              {modalData
                  && (
                  <Modal isOpen={displayStatus} onRequestClose={closeModal} style={ModalStyles}>
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
