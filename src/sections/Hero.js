"use client"; 

import Section from '@/components/Section';
import { Linkedin, Github, Code } from 'lucide-react';
import { motion } from 'framer-motion';

// ... (socialLinks, sentenceVariants, wordVariants are unchanged)
const socialLinks = [
  { href: "https://www.linkedin.com/in/priyanshu-kumar-51452b232/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/priyanshuk6395", icon: Github, label: "GitHub" },
  { href: "https://leetcode.com/u/priyanshuk6395/", icon: Code, label: "LeetCode" },
];
const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.04,
    },
  },
};
const wordVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const subHeadline = "B.Tech Student & Full-Stack Developer focused on building scalable and intuitive web applications.";

  return (
    <div className="relative overflow-hidden">
      {/* Optional: Add a subtle gradient "glow" at the top,
        similar to Railway's home page.
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-3/4 h-3/4
                      rounded-full
                      bg-gradient-to-br from-purple-dark/20 to-magenta/20 
                      dark:from-purple-dark/10 dark:to-magenta/10
                      blur-[120px] 
                      animate-border-pulse"
      />
      
      <Section id="home" className="relative z-10 min-h-screen flex flex-col justify-center py-24">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Priyanshu Kumar
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-500 max-w-3xl"
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          {subHeadline.split(" ").map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        
        <motion.div 
          className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-500 hover:text-purple-light transition-colors"
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

export default Hero;