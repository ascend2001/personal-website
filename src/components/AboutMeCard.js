import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function AboutMeCard({ children, className, hover }) {
  return (
    <motion.div
      className={`bg-white rounded-3xl shadow-sm border border-lavender-dark/50 p-6 ${className}`}
      whileHover={
                hover
                  ? {
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  }
                  : {}
            }
      transition={{
        type: 'spring',
        stiffness: 300,
      }}
    >
      {children}
    </motion.div>
  );
}
AboutMeCard.defaultProps = {
  children: {},
  className: '',
  hover: false,
};
AboutMeCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default AboutMeCard;
