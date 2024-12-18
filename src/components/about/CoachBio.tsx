import React from 'react';
import { motion } from 'framer-motion';

type CoachBioProps = {
  paragraphs: string[];
  delay: number;
};

const CoachBio: React.FC<CoachBioProps> = ({ paragraphs, delay }) => {
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, index) => (
        <motion.p 
          key={index}
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + (index * 0.1) }}
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );
};

export default CoachBio;