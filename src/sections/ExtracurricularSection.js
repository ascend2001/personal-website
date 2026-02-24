import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProjectModal from '../components/ProjectModal';
import { ModalStyles, Activities } from '../common/constants';

function ExtracurricularSection() {
  const [modalData, setModalData] = useState(null);
  const [displayStatus, setDisplayStatus] = useState(false);
  const openModal = useCallback((data) => {
    setModalData(data);
    setDisplayStatus(true);
  }, []);
  const closeModal = useCallback(() => setDisplayStatus(false), []);

  return (
    <section className="px-20 flex bg-midnight flex-row gap-x-16 text-white py-20" id="Extracurriculars" name="Extracurriculars">
      <div className="mt-6 ml-12 flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-black mb-4">
            Beyond the Code
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Commitment to community, mentorship, and using technology for
            positive social impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Activities.map((activity, index) => (
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
                onClick={() => openModal(activity)}
              >
                <Card
                  hover
                  className="h-full flex flex-col relative overflow-hidden"
                >
                  {/* Decorative background circle */}
                  <div
                    className={`absolute -right-10 -top-10 w-32 h-32 bg-${activity.color}/10 rounded-full blur-2xl`}
                  />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div
                      className={`p-3 rounded-2xl bg-${activity.color}/10 text-${activity.color === 'sky' ? '[#2A9D96]' : `${activity.color}-dark`}`}
                    >
                      <activity.icon size={24} />
                    </div>
                    <Badge variant={activity.color}>{activity.year}</Badge>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-text-dark mb-1 relative z-10">
                    {activity.company}
                  </h3>
                  <p className="text-sm font-bold text-text-muted mb-4 uppercase tracking-wider relative z-10">
                    {activity.role}
                  </p>

                  <p className="text-text-dark/80 mb-6 flex-grow relative z-10">
                    {activity.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 mt-auto relative z-10">
                    <span className="text-sm font-bold text-text-dark flex items-center">
                      <span
                        className={`w-2 h-2 rounded-full bg-${activity.color} mr-2`}
                      />
                      {activity.impact}
                    </span>
                  </div>
                </Card>
              </motion.div>
              {modalData
                    && (
                    <Modal isOpen={displayStatus} onRequestClose={closeModal} style={ModalStyles}>
                      <ProjectModal
                        imageName={modalData.image}
                        title={modalData.company}
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

export default ExtracurricularSection;
