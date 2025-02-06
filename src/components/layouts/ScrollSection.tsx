import React from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className = '', 
  id 
}) => {
  return (
    <section 
      id={id}
      className={`relative min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
}; 