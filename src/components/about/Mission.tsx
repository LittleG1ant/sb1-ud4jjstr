import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-700 leading-relaxed"
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Tumbling of WNY, we are passionate about helping gymnasts, dancers, and 
          cheerleaders refine their skills, build strength, and grow confidence. 
          Through personalized coaching and a supportive environment, we empower 
          athletes to achieve their goals and discover their full potential.
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;