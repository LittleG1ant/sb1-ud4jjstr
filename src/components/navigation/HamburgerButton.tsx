import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

type HamburgerButtonProps = {
  onClick: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200 md:hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Open menu"
    >
      <Menu className="w-6 h-6" />
    </motion.button>
  );
};

export default HamburgerButton;