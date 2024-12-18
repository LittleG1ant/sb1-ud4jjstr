import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&q=80")',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-32 text-white">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Personalized Training for Gymnasts, Dancers, and Cheerleaders
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-light max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Private and semi-private sessions tailored to build skills, strength, and confidence.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection('forms')}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Inquiry Forms
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('pricing')}
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Pricing & Options
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;