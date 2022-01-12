/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillFacebook,
} from 'react-icons/ai';
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
      <section className="bg-gradient-to-r gap-x-80 to-amber-200 from-orange-500 flex flex-col lg:flex-row text-white gap-x-14" id="AboutMe" name="AboutMe">
        <div className="lg:basis-1/2 sm:basis-3/3 flex flex-col mt-6 ml-12">
          <div className="text-6xl mt-8 ml-4">About Me</div>
          <div className="experience-card-company-role text-3xl ml-4 mt-8">
            I am a rising Junior at UCLA, majoring in Computer Science! I like solving problems,
            through technology and building products to help the world.
            I am fascinated by and interested in pursuing full-stack development,
            data engineering, and learning new ways to create things. When I am not coding,
            or working I like writing, organizing events, and playing badminton!
          </div>
          <div className="flex flex-row justify-center gap-x-4 mt-12">
            <a href="https://www.instagram.com/asengupta2001/">
              <AiFillInstagram size="2.5em" />
            </a>
            <a href="https://github.com/ascend2001">
              <AiFillGithub size="2.5em" />
            </a>
            <a href="https://www.linkedin.com/in/avnish-sengupta/">
              <AiFillLinkedin size="2.5em" />
            </a>
            <a href="https://www.facebook.com/avnish.sengupta/">
              <AiFillFacebook size="2.5em" />
            </a>
          </div>
        </div>
        <img src={ProfileImg} alt="" className="profile-img mx-auto my-12 flex items-center" />
      </section>
    </div>
  );
}

export default LandingSection;
