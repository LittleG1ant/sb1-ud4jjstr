import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Dumbbell, Shield } from 'lucide-react';
import type { TrainingFeature } from '../../types/pricing';

const TrainingFeatures = () => {
  const features: TrainingFeature[] = [
    {
      icon: 'Users',
      title: 'Personalized Coaching',
      description: 'Tailored to your goals'
    },
    {
      icon: 'Clock',
      title: 'Flexible Sessions',
      description: '30, 45, and 60 minutes'
    },
    {
      icon: 'Dumbbell',
      title: 'Comprehensive Training',
      description: 'Strength, flexibility, and skills'
    },
    {
      icon: 'Shield',
      title: 'Safe Environment',
      description: 'Supportive atmosphere for growth'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      Users,
      Clock,
      Dumbbell,
      Shield
    };
    const Icon = icons[iconName as keyof typeof icons];
    return <Icon className="w-8 h-8 mb-4" />;
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What's Included in Your Training
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.title} 
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-black"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                {getIcon(feature.icon)}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingFeatures;