/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import ProjectModal from './ProjectModal';

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

function ProjectCard({
  image, title, subtitle, link, work, timeline, role,
}) {
  const [displayStatus, setDisplayStatus] = useState(false);
  function openModal() {
    setDisplayStatus(true);
  }
  function closeModal() {
    setDisplayStatus(false);
  }
  return (
    <div className="relative ring-offset-purple-100 hover:ring-offset-green-100 ring-offset-2 ring-lime-400 hover:ring-purple-700 duration-300 delay-150 ring-4">
      <img src={image} alt="" className="project-img" />
      <div onClick={openModal} onKeyPress={openModal} role="button" tabIndex={0}>
        <div className="flex flex-col gap-4 place-items-center place-content-center text-center h-52 w-52 bg-black absolute duration-300 delay-150 opacity-0 hover:opacity-80 top-0">
          <h3 className="text-lg">{title}</h3>
          <p className="text-base">{subtitle}</p>
        </div>
      </div>
      <Modal isOpen={displayStatus} onRequestClose={closeModal} style={customStyles}>
        <ProjectModal
          imageName={image}
          title={title}
          timeline={timeline}
          work={work}
          role={role}
          link={link}
        />
      </Modal>
    </div>
  );
}

ProjectCard.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  work: propTypes.arrayOf(propTypes.string).isRequired,
  timeline: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
};

export default ProjectCard;
