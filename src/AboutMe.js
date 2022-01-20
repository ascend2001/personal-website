import React from 'react';
import ProfileImg from './assets/AvnishImg.png';
import ContactBar from './Contact';

function AboutMe() {
  return (
    <section className="bg-gradient-to-r gap-x-80 to-red-400 lg:to-amber-300 from-orange-500 flex flex-col lg:flex-row text-white gap-x-14" id="AboutMe" name="AboutMe">
      <div className="lg:basis-1/2 sm:basis-3/3 flex flex-col mt-6 ml-12">
        <div className="text-6xl mt-8 ml-4">About Me</div>
        <div className="experience-card-company-role text-3xl ml-4 mt-8">
          I am a rising Junior at UCLA, majoring in Computer Science! I like solving problems,
          through technology and building products to help the world.
          I am fascinated by and interested in pursuing full-stack development,
          data engineering, and learning new ways to create things. When I am not coding,
          or working I like writing, organizing events, and playing badminton!
        </div>
        <ContactBar />
      </div>
      <img src={ProfileImg} alt="" className="profile-img mx-auto my-12 flex items-center" />
    </section>
  );
}

export default AboutMe;
