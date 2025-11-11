"use client"; 

import { motion } from 'framer-motion';

const Section = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
      className={`container mx-auto px-4 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default Section;