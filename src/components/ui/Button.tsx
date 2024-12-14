import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-md font-medium transition-colors duration-300',
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'border border-gray-300 text-gray-700 hover:bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};