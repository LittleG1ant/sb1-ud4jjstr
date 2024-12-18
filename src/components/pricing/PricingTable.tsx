import React from 'react';
import { motion } from 'framer-motion';
import type { PricingTier } from '../../types/pricing';

const PricingTable = () => {
  const pricingData: PricingTier[] = [
    {
      duration: '30 Minutes',
      athletes: {
        one: '$40',
        two: '$60 ($30 each)',
        three: '$75 ($25 each)',
        four: '$80 ($20 each)'
      }
    },
    {
      duration: '45 Minutes',
      athletes: {
        one: '$50',
        two: '$70 ($35 each)',
        three: '$90 ($30 each)',
        four: '$100 ($25 each)'
      }
    },
    {
      duration: '1 Hour',
      athletes: {
        one: '$60',
        two: '$80 ($40 each)',
        three: '$105 ($35 each)',
        four: '$120 ($30 each)'
      }
    }
  ];

  const tableVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Choose the Session That's Right for You
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
                <th className="px-6 py-4 text-left">Duration</th>
                <th className="px-6 py-4">1 Athlete</th>
                <th className="px-6 py-4">2 Athletes</th>
                <th className="px-6 py-4">3 Athletes</th>
                <th className="px-6 py-4">4 Athletes</th>
              </motion.tr>
            </thead>
            <tbody>
              {pricingData.map((tier, index) => (
                <motion.tr 
                  key={tier.duration}
                  variants={rowVariants}
                  className="border-b"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: '#f9fafb',
                    transition: { duration: 0.2 }
                  }}
                >
                  <td className="px-6 py-4 font-medium">{tier.duration}</td>
                  <td className="px-6 py-4 text-center">{tier.athletes.one}</td>
                  <td className="px-6 py-4 text-center">{tier.athletes.two}</td>
                  <td className="px-6 py-4 text-center">{tier.athletes.three}</td>
                  <td className="px-6 py-4 text-center">{tier.athletes.four}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
        <motion.p 
          className="text-gray-600 mt-6 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          First-time lessons may start at 30 minutes for evaluation. Private or semi-private lessons
          are available for up to 4 athletes in 1-hour sessions.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingTable;