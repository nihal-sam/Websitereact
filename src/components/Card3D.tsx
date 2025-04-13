import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`${className} transition-all duration-200 ease-out`}>
      {children}
    </div>
  );
};

export default Card;