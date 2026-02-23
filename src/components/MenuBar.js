import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { HandleClick } from '../common/handlers';

const navLinks = [
  {
    name: 'About',
    id: 'ToAbout',
  },
  {
    name: 'Experience',
    id: 'ToExperience',
  },
  {
    name: 'Extracurriculars',
    id: 'ToExtracurriculars',
  },
  {
    name: 'Projects',
    id: 'ToProjects',
  },
];

function MenuBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`h-16 ${scrolled ? 'bg-midnight/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'} flex flex-row fixed w-full z-10`}>
      <div className="flex place-items-center pl-8 w-full font-heading font-black text-coral-light tracking-tight text-3xl">
        avnish
        <span className="text-teal-200">
          .dev
        </span>
      </div>
      <div className="hidden md:flex flex-row place-items-center place-content-center justify-center gap-x-16 text-white text-2xl lg:pr-8">
        {navLinks.map((navLink) => <div className="font-medium hover:text-coral transition-colors relative group" onClick={HandleClick} onKeyPress={HandleClick} role="button" tabIndex={0} id={navLink.id}>{navLink.name}</div>)}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: 'auto',
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          className="md:hidden bg-white border-b border-lavender-dark"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-lg font-medium text-text-dark hover:bg-lavender rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MenuBar;
