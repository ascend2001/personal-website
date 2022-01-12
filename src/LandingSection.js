/* eslint-disable react/jsx-no-bind */
import React from 'react';
import AvnishMoon from './assets/avnish-on-moon.svg';
import ProfileImg from './assets/AvnishImg.png';

function LandingSection() {
  return (
    <div>
      <section className="initial-wrapper">
        <div className="initial-wrapper flex md:flex-row flex-col">
          <div className="flex flex-col md:mb-60 justify-center ml-48 text-white text-6xl font-sans basis-2/3">
            <div className="mb-5 initial-wrapper-text">
              Hi, I am Avnish.
            </div>
            <div>
              <div className="flex flex-col lg:flex-row">
                <div className="initial-wrapper-text">Welcome to</div>
                <div className="flex flex-row md:ml-3.5 initial-wrapper-text">
                  my world
                  <div className="blinking-cursor" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row content-end justify-end md:basis-1/3 overflow-hidden">
            <img src={AvnishMoon} alt="" width="536" height="798" className="md:-mb-96" />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r to-amber-200 from-orange-500 flex flex-row text-white gap-x-14" id="AboutUs" name="AboutUs">
        <div className="lg:basis-2/3 sm:basis-3/3 flex flex-col mt-6 ml-12">
          <div className="text-6xl mt-8 ml-4">About Me</div>
        </div>
        <img src={ProfileImg} alt="" className="profile-img my-12 flex" />
      </section>
    </div>
  );
}

export default LandingSection;
