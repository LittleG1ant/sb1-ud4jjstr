import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavLink } from '../types/navigation';
import HamburgerButton from './navigation/HamburgerButton';
import MobileMenu from './navigation/MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const links: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 px-4 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Tumbling of WNY Home"
        >
          <span className="text-2xl md:text-3xl font-bold font-sans hover:text-gray-200 transition-colors duration-300">
            Tumbling of WNY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`hover:text-gray-400 transition-colors duration-200 ${
                location.pathname === path ? 'text-gray-400' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <HamburgerButton onClick={() => setIsMenuOpen(true)} />
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          links={links}
          currentPath={location.pathname}
        />
      </div>
    </nav>
  );
};

export default Navbar;