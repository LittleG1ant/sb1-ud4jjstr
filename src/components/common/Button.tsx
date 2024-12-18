import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  to,
  onClick,
  className = '',
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-colors duration-300";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-white hover:text-black",
    secondary: "bg-white text-black hover:bg-black hover:text-white",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;