import React from 'react';

import propTypes from 'prop-types';
import bullet from './assets/bullet.svg';

function ExpCard({
  imageName, company, role, timeline, location,
}) {
  return (
    <div className="flex flex-col my-6">
      <div className="flex flex-row place-items-center">
        <img src={imageName} alt="" width="75" height="75" />
        <div className="flex flex-col ml-6 justify-end">
          <div className="experience-card-company-name text-4xl">{company}</div>
          <div className="experience-card-company-role text-2xl">{role}</div>
        </div>
        <div className="flex flex-col text-right ml-36 sm:mr-12 justify-end">
          <div className="text-xl mb-2">{location}</div>
          <div className="experience-card-company-duration text-xl">{timeline}</div>
        </div>
      </div>
      <div className="flex flex-col mt-7">
        <div className="flex flex-row ml-12 items-start my-1.5">
          <img src={bullet} alt="" height="10" width="10" className="mt-2" />
          <div className="ml-2 experience-bullet-text text-lg">
            Increased sales tracking efficiency by over 70% by automating tracking
            on commission dashboard using Excel and Zapier.
          </div>
        </div>
        <div className="flex flex-row ml-12 items-start my-1.5">
          <img src={bullet} alt="" height="10" width="10" className="mt-2" />
          <div className="ml-2 experience-bullet-text text-lg">
            Led a comparative UI/UX analysis between the company’s old website
            and 10+ other Talent Acquisition Companies with a team of 4 people,
            consistently communicating and incorporating the decisions made by
            stakeholders and designers.
          </div>
        </div>
        <div className="flex flex-row ml-12 items-start my-1.5">
          <img src={bullet} alt="" height="10" width="10" className="mt-2" />
          <div className="ml-2 experience-bullet-text text-lg">
            Boosted exposure over 50% by developing a revamped website for the
            company using React, HTML, CSS, and Node
          </div>
        </div>
      </div>
    </div>
  );
}

ExpCard.defaultProps = {
  location: '',
  company: '',
};

ExpCard.propTypes = {
  imageName: propTypes.string.isRequired,
  company: propTypes.string,
  role: propTypes.string.isRequired,
  timeline: propTypes.string.isRequired,
  location: propTypes.string,
};

export default ExpCard;
