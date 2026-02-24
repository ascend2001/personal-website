import React from 'react';
import PropTypes from 'prop-types';

function Badge({
  children,
  variant = 'default',
  className = '',
}) {
  const variants = {
    coral: 'bg-coral/10 text-coral-dark border-coral/20',
    sky: 'bg-sky/10 text-sky-dark border-sky/20',
    yellow: 'bg-yellow/20 text-yellow-dark border-yellow/30',
    lavender: 'bg-lavender-dark/30 text-text-muted border-lavender-dark',
    default: 'bg-gray-100 text-gray-700 border-gray-200',
  };
  // Fix for sky text color since we didn't define sky-dark in config explicitly,
    // using a hardcoded hex or class
  const colorClass = variant === 'sky'
    ? 'bg-sky/10 text-[#2A9D96] border-sky/20'
    : variants[variant];
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}

Badge.defaultProps = {
  children: {},
  variant: 'default',
  className: '',
};

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Badge;
