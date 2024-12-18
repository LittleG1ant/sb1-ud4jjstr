import React from 'react';
import { motion } from 'framer-motion';

const LocationMap = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Find Us Here
        </motion.h2>
        <motion.div 
          className="aspect-w-16 aspect-h-9 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.0607137766895!2d-78.8783!3d42.8863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUzJzEwLjciTiA3OMKwNTInNDEuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tumbling of WNY Location"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl">123 Main Street, Buffalo, NY 14201</p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;