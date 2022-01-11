import React from 'react';
import AvnishMoon from './assets/avnish-on-moon.svg';
import stars from './assets/stars.svg';

function LandingSection() {
  return (
    <section className="initial-wrapper">
      <div className="absolute">
        <img src={stars} alt="" width="1392.3" height="695" className="blur-sm" />
      </div>
      <div className="initial-wrapper flex md:flex-row flex-col">
        <div className="flex flex-col md:mb-60 justify-center ml-48 text-white text-6xl font-sans basis-2/3">
          <div className="mb-5 initial-wrapper-text">
            Hi, I am Avnish.
          </div>
          <div>
            <div className="flex flex-col lg:flex-row relative">
              <div className="initial-wrapper-text">Welcome to</div>
              <div className="flex flex-row md:ml-3.5 initial-wrapper-text">
                my world
                <div className="blinking-cursor z-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row content-end justify-end md:basis-1/3 overflow-hidden">
          <img src={AvnishMoon} alt="" width="536" height="798" className="z-10 md:-mb-96" />
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
