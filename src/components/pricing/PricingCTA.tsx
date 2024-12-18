import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const PricingCTA = () => {
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
          Ready to begin your training journey?
        </motion.h2>
        <motion.p 
          className="text-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Submit your inquiry and waiver forms to get started!
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button to="/#forms" variant="secondary">
            Submit Forms
          </Button>
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTA;