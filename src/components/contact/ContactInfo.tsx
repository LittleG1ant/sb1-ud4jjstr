import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import type { ContactInfo as ContactInfoType } from '../../types/contact';

const ContactInfo = () => {
  const contactDetails: ContactInfoType[] = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'info@tumblingofwny.com',
      link: 'mailto:info@tumblingofwny.com'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'Clock',
      label: 'Hours',
      value: 'Mon–Fri: 9:00 AM – 7:00 PM\nSat: 10:00 AM – 5:00 PM'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = { Mail, Phone, Clock };
    const Icon = icons[iconName as keyof typeof icons];
    return <Icon className="w-6 h-6" />;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Contact Details
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactDetails.map((detail) => (
            <motion.div
              key={detail.label}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                {getIcon(detail.icon)}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{detail.label}</h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-gray-600 whitespace-pre-line">{detail.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;