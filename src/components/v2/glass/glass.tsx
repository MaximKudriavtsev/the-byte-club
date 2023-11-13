import React, { FC } from 'react';
import './glass.scss';

interface GlassProps {
  children: React.ReactNode;
  className?: string;
}

const Glass: FC<GlassProps> = ({ children, className }) => {
  return <div className={`glass ${className}`}>{children}</div>;
};

export { Glass };
