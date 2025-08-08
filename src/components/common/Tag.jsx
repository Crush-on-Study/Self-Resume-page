import React from 'react';
import '../../styles/components/Tag.css';

const Tag = ({ children, className = '', ...props }) => {
  return (
    <span 
      className={`tag ${className}`.trim()} 
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
