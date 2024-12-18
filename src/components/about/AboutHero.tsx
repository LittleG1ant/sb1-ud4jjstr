import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="bg-black text-white py-32 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Tumbling of WNY
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-center font-light max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Helping Gymnasts, Dancers, and Cheerleaders Achieve Their Full Potential
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;