import React from 'react';
import { motion } from 'framer-motion';
import CoachCard from './CoachCard';
import { coaches } from '../../data/coaches';

const Coaches = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Coaches
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {coaches.map((coach, index) => (
            <CoachCard 
              key={coach.name} 
              {...coach} 
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;