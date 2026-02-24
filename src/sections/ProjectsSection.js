import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Modal from 'react-modal';
import Badge from '../components/Badge';
import Card from '../components/Card';
import ProjectModal from '../components/ProjectModal';
import { ModalStyles, Projects } from '../common/constants';

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
          {Projects.map((project, index) => (
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
                <Card
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
                </Card>
              </motion.div>
              {modalData
              && (
              <Modal isOpen={displayStatus} onRequestClose={closeModal} style={ModalStyles}>
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
