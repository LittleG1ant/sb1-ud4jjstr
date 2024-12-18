import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Forms = () => {
  return (
    <section id="forms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Submit Your Inquiry and Waiver Forms
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Please fill out the forms below to get started. We will contact you to schedule your first session.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://forms.gle/3KuA53AVxexsaVB77"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-semibold">Submit Registration Form</span>
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <motion.a
            href="https://forms.gle/nD3ve8TntjHp55Rq6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-semibold">Submit Lesson Request Form</span>
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Forms;