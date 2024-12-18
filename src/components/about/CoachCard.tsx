import React from 'react';
import { motion } from 'framer-motion';
import CoachBio from './CoachBio';
import type { Coach } from '../../types/coach';

type CoachCardProps = Coach & {
  delay?: number;
};

const CoachCard: React.FC<CoachCardProps> = ({ 
  name, 
  title,
  bio, 
  imageUrl, 
  altText, 
  delay = 0 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-lg text-gray-600">{title}</p>
        </motion.div>
        <CoachBio paragraphs={bio} delay={delay + 0.4} />
      </div>
    </motion.div>
  );
};

export default CoachCard;