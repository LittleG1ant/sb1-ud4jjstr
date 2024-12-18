import React from 'react';
import { motion } from 'framer-motion';

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
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Please fill out the forms below to get started. We will contact you to schedule your first session.
        </motion.p>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="w-full min-h-[600px] shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/your-inquiry-form-url/viewform?embedded=true"
              className="w-full h-full border-0"
              title="Inquiry Form"
            >
              Loading Inquiry Form...
            </iframe>
          </motion.div>
          <motion.div 
            className="w-full min-h-[600px] shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/your-waiver-form-url/viewform?embedded=true"
              className="w-full h-full border-0"
              title="Waiver Form"
            >
              Loading Waiver Form...
            </iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Forms;