import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingData = [
    { duration: '30 Minutes', one: '$35', two: '$60 ($30 each)', three: 'N/A', four: 'N/A' },
    { duration: '45 Minutes', one: '$50', two: '$70 ($35 each)', three: 'N/A', four: 'N/A' },
    { duration: '1 Hour', one: '$60', two: '$80 ($40 each)', three: '$90 ($30 each)', four: '$100 ($25 each)' },
  ];

  const tableVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Transparent Pricing for Personalized Training
        </motion.h2>
        <div className="overflow-x-auto">
          <motion.table 
            className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
            variants={tableVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <thead className="bg-black text-white">
              <motion.tr variants={rowVariants}>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">1 Athlete</th>
                <th className="px-6 py-4">2 Athletes</th>
                <th className="px-6 py-4">3 Athletes</th>
                <th className="px-6 py-4">4 Athletes</th>
              </motion.tr>
            </thead>
            <tbody>
              {pricingData.map((row) => (
                <motion.tr 
                  key={row.duration} 
                  className="border-b hover:bg-gray-50 transition-all duration-200"
                  variants={rowVariants}
                  whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
                >
                  <td className="px-6 py-4 font-medium">{row.duration}</td>
                  <td className="px-6 py-4">{row.one}</td>
                  <td className="px-6 py-4">{row.two}</td>
                  <td className="px-6 py-4">{row.three}</td>
                  <td className="px-6 py-4">{row.four}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
        <motion.p 
          className="text-gray-600 mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          First-time lessons may start at 30 minutes for evaluation. Private or semi-private lessons
          are available for up to 4 athletes in 1-hour sessions.
        </motion.p>
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            onClick={() => document.getElementById('forms')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Forms to Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;