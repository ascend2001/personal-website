/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import {
  CodeIcon,
  GraduationCapIcon,
  UsersIcon,
  DatabaseIcon,
} from 'lucide-react';

import Button from '../components/Button';

import AvnishMoon from '../assets/avnish-on-moon.svg';
import { HandleClick } from '../common/handlers';

const floatingIcons = [
  {
    Icon: CodeIcon,
    color: 'text-coral',
    bg: 'bg-coral/10',
    delay: 0,
    x: '77%',
    y: '15%',
  },
  {
    Icon: GraduationCapIcon,
    color: 'text-sky',
    bg: 'bg-sky/10',
    delay: 1.5,
    x: '65%',
    y: '15%',
  },
  {
    Icon: UsersIcon,
    color: 'text-yellow-dark',
    bg: 'bg-yellow/20',
    delay: 0.8,
    x: '60%',
    y: '30%',
  },
  {
    Icon: DatabaseIcon,
    color: 'text-purple-300',
    bg: 'bg-purple-50/20',
    delay: 2.2,
    x: '85%',
    y: '30%',
  },
];

function LandingSection() {
  return (
    <div>
      <section id="Landing">
        <div className="initial-wrapper flex md:flex-row flex-col">
          <div className="flex flex-col justify-center ml-24 text-white text-6xl font-sans h-dvh">
            <div className="mb-5 initial-wrapper-text">
              Hi, I am
              {' '}
              <span className="text-coral-light">Avnish.</span>
            </div>
            <div className="mb-5 initial-wrapper-text">
              Let&apos;s build something
              {' '}
              <span className="text-teal-500">different</span>
            </div>
            <div className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed">
              Bridging the gap between social inequities using tech.
              <br />
              I build applications and microservices dedicated to uplifting
              the communities around us.
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-lg shadow-coral/20" onClick={HandleClick} id="ToProjects">
                View My Work
              </Button>
            </div>
          </div>
          <div className="flex flex-row content-end justify-end overflow-hidden hidden lg:block">
            {floatingIcons.map((item, index) => (
              <motion.div
                key={uuidv4()}
                className={`absolute w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center shadow-lg backdrop-blur-sm`}
                style={{
                  left: item.x,
                  top: item.y,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  },
                  scale: {
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  },
                  y: {
                    repeat: Infinity,
                    duration: 3 + index,
                    ease: 'easeInOut',
                    delay: item.delay,
                  },
                }}
              >
                <item.Icon className={`w-8 h-8 ${item.color}`} />
              </motion.div>
            ))}
            <img src={AvnishMoon} alt="" width="536" height="798" className="md:-mb-72" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingSection;
