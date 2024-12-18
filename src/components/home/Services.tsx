import React from 'react';
import { Dumbbell, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength & Flexibility Training',
      description: 'Enhance your foundation with tailored exercises.',
    },
    {
      icon: Target,
      title: 'Tumbling & Technique Refinement',
      description: 'Master tumbling skills and improve form.',
    },
    {
      icon: Award,
      title: 'Skill Development & Confidence Building',
      description: 'Grow in a supportive and goal-driven environment.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Strength, Technique, and Confidence for Every Athlete
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.title} 
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <service.icon className="w-16 h-16 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;