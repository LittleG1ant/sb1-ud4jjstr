import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "My daughter has gained so much confidence and strength through these private lessons!",
      author: "Sarah M., Parent"
    },
    {
      quote: "The personalized attention has helped me master skills I struggled with for years.",
      author: "Emily R., Gymnast"
    },
    {
      quote: "The coaches here truly care about each athlete's progress and safety.",
      author: "Michael P., Parent"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          What Our Clients Are Saying
        </motion.h2>
        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <blockquote className="text-center">
                <motion.p 
                  className="text-xl italic mb-4"
                  whileHover={{ scale: 1.05, color: '#000000' }}
                  transition={{ duration: 0.2 }}
                >
                  {testimonials[current].quote}
                </motion.p>
                <footer className="text-gray-600">- {testimonials[current].author}</footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;