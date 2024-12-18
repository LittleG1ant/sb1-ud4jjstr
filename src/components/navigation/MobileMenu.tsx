import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NavLink } from '../../types/navigation';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  currentPath: string;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links, currentPath }) => {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.1,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 p-6"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`text-lg py-2 block hover:text-gray-400 transition-colors duration-200 ${
                      currentPath === link.path ? 'text-gray-400' : ''
                    }`}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;