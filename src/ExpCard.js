import React from 'react';

import propTypes from 'prop-types';
import bullet from './assets/bullet.svg';

function ExpCard({
  imageName, company, role, timeline, location, work,
}) {
  return (
    <div className="flex flex-col my-6">
      <div className="flex flex-row place-items-center">
        <img src={imageName} alt="" width="75" height="75" />
        <div className="flex flex-col ml-6 justify-end grow">
          <div className="experience-card-company-name text-4xl">{company}</div>
          <div className="experience-card-company-role text-2xl">{role}</div>
        </div>
        <div className="flex flex-col text-right ml-36 sm:mr-12 justify-end">
          <div className="text-xl mb-2">{location}</div>
          <div className="experience-card-company-duration text-xl">{timeline}</div>
        </div>
      </div>
      <div className="flex flex-col mt-7">
        { work.map((element) => (
          <div className="flex flex-row ml-12 items-start my-1.5">
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

ExpCard.defaultProps = {
  location: '',
  company: '',
  work: [],
};

ExpCard.propTypes = {
  imageName: propTypes.string.isRequired,
  company: propTypes.string,
  role: propTypes.string.isRequired,
  timeline: propTypes.string.isRequired,
  location: propTypes.string,
  work: propTypes.arrayOf(propTypes.string),
};

export default ExpCard;
