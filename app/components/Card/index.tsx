import React from 'react';

interface CardProps {
  title: string;
  value: string;
  details?: string;
  actions?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, details, actions, className, children }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow ${className}`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
      {details && <p className="text-sm text-gray-500">{details}</p>}
      {actions && <div className="mt-2">{actions}</div>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
