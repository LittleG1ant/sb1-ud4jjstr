import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to get started? Learn more about our services or contact us today!
        </motion.h2>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button to="/pricing" variant="secondary">
            View Pricing & Options
          </Button>
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;