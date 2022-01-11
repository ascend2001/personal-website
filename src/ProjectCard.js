import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

function ProjectCard({
  image, title, subtitle, link,
}) {
  return (
    <div className="relative">
      <img src={image} alt="" className="project-img" />
      <a href={link}>
        <div className="flex flex-col gap-4 place-items-center place-content-center text-center h-52 w-52 bg-black absolute duration-300 delay-150 opacity-0 hover:opacity-80 top-0">
          <h3 className="text-lg">{title}</h3>
          <p className="text-base">{subtitle}</p>
          <FontAwesomeIcon icon={faLink} />
        </div>
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};

export default ProjectCard;
