import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ZapIcon, CoffeeIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import ProfileImg from '../assets/AvnishImg.png';
import ContactBar from '../components/Contact';
import AboutMeCard from '../components/AboutMeCard';

const stats = [
  {
    icon: ZapIcon,
    label: 'Years Active',
    value: '2+',
    color: 'text-yellow-dark',
  },
  {
    icon: HeartIcon,
    label: 'Projects Loved',
    value: '20+',
    color: 'text-coral',
  },
  {
    icon: CoffeeIcon,
    label: 'Coffees Brewed',
    value: '∞',
    color: 'text-sky',
  },
];

function AboutMe() {
  return (
    <section className="flex flex-col bg-lavender-dark text-text-dark pt-8 pb-20 px-10">
      <div className="text-center my-16">
        <h2 className="text-4xl font-heading font-black text-text-dark mb-4">
          More Than Just Code
        </h2>
        <p className="text-xl text-text-muted max-w-2xl mx-auto ">
          I believe the best digital products are born at the intersection
          of social welfare and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8" id="AboutMe" name="AboutMe">
        <div className="md:col-span-6">
          <AboutMeCard className="flex flex-col justify-center">
            <h3 className="text-2xl font-heading font-bold mb-4 text-text-dark">
              &gt; cat ~/about_me.txt
            </h3>
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              I am currently working as a software engineer at Oracle, building B2B software
              for utility companies to help end users track and optimize their energy savings
              for a greener tomorrow!
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              I like problem solving by building products to improve
              the world around us, particularly building tech for social good. I specialize in
              end to end full-stack development and large-scale microservices architecture. I am
              currently learning about ethical AI practices and how to incorporate RAG pipelines
              and AI-based features into the stack. If you ever want to connect or just have a chat,
              please drop by and say hi!
            </p>
            <ContactBar />
          </AboutMeCard>
        </div>
        <div className="md:col-span-3 my-auto max-w-sm space-y-8">
          {stats.map((stat) => (
            <AboutMeCard
              key={uuidv4()}
              className="flex items-center space-x-4 py-4"
              hover
            >
              <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <div className="text-2xl font-heading font-black text-text-dark">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            </AboutMeCard>
          ))}
        </div>
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="md:col-span-3 m-auto w-80 h-80 rounded-xl shadow-2xl border-8 border-white flex items-center justify-center overflow-hidden"
        >
          <img src={ProfileImg} alt="" className="profile-img mx-auto flex items-center mt-10" />
        </motion.div>
      </div>
    </section>

  );
}

export default AboutMe;
