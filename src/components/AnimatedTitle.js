"use client";

import { motion } from 'framer-motion';

const AnimatedTitle = ({ children, className = '' }) => {
  return (
    <motion.h2
      className={`text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent 
                  bg-gradient-to-r from-purple-light to-magenta 
                  ${className}`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitle;