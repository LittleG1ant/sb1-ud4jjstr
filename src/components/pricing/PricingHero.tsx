import React from 'react';
import { motion } from 'framer-motion';

const PricingHero = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-32 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transparent Pricing for Personalized Training
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-center font-light max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Tailored sessions to fit every athlete's goals and schedule
        </motion.p>
      </div>
    </section>
  );
};

export default PricingHero;