import React from 'react';
import propTypes from 'prop-types';
import { GoMarkGithub } from 'react-icons/go';
import bullet from './assets/bullet.svg';

function ProjectModal({
  imageName, title, timeline, work, role, link,
}) {
  return (
    <div className="flex flex-col my-6 bg-stone-900 text-white">
      <div className="flex flex-row place-items-center mx-auto">
        <img src={imageName} alt="" width="75" height="75" />
        <div className="flex flex-col ml-6 justify-end grow">
          <div className="experience-card-company-name text-4xl">{title}</div>
          <div className="experience-card-company-role text-2xl flex flex-row gap-x-4 place-items-center">
            {role}
            <a href={link}>
              <GoMarkGithub />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-right ml-36 sm:mr-12 justify-end">
          <div className="experience-card-company-duration text-xl">{timeline}</div>
        </div>
      </div>
      <div className="flex flex-col mt-7 mx-auto">
        { work.map((element) => (
          <div key={element} className="flex flex-row ml-12 items-start my-1.5">
            <img src={bullet} alt="" height="10" width="10" className="mt-2" />
            <div className="ml-2 experience-bullet-text text-lg">
              {element}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ProjectModal.defaultProps = {
  work: [],
};
ProjectModal.propTypes = {
  imageName: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  timeline: propTypes.string.isRequired,
  work: propTypes.arrayOf(propTypes.string),
  role: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};

export default ProjectModal;
