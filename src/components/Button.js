import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Button({
  variant,
  children,
  size,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-coral text-white hover:bg-coral-dark focus:ring-coral',
    secondary: 'bg-sky text-white hover:bg-[#3DBDB5] focus:ring-sky',
    outline:
            'bg-transparent border-2 border-text-dark text-text-dark hover:bg-text-dark hover:text-white focus:ring-text-dark',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  children: {},
  className: '',
};

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
