import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/Badge';
import { Skills } from '../common/constants';

function SkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-black text-text-dark mb-4">
            Toolbox & Domains
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Skills.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="text-center"
            >
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-6 relative inline-block">
                {category.name}
                <span
                  className={`absolute -bottom-2 left-0 w-full h-1 bg-${category.color} rounded-full opacity-50`}
                />
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={category.color}
                    className="text-base py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
