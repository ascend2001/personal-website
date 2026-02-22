import React from 'react';
import ProfileImg from './assets/AvnishImg.png';
import ContactBar from './Contact';

function AboutMe() {
  return (
    <section className="bg-gradient-to-r gap-x-80 to-red-400 lg:to-amber-300 from-orange-500 flex flex-col lg:flex-row text-white gap-x-14 py-10" id="AboutMe" name="AboutMe">
      <div className="lg:basis-1/2 sm:basis-3/3 flex flex-col mt-6 ml-12">
        <div className="text-6xl mt-8 ml-4">About Me</div>
        <div className="experience-card-company-role text-3xl ml-4 mt-8">
          I am currently working as a software engineer at Oracle, building B2B software
          for utility companies to help end users track and optimize their energy savings
          for a greener tomorrow! I like problem solving by building products to improve
          the world around us, particularly building tech for social good. I specialize in
          end to end full-stack development and large-scale microservices architecture. I am
          currently learning about ethical AI practices and how to incorporate RAG pipelines
          and AI-based features into the stack. If you ever want to connect or just have a chat,
          please drop by and say hi!
        </div>
        <ContactBar />
      </div>
      <img src={ProfileImg} alt="" className="profile-img mx-auto my-12 flex items-center" />
    </section>
  );
}

export default AboutMe;
