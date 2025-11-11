"use client";

import { motion } from 'framer-motion';

/**
 * A glassmorphic card with an animated "shiny" gradient border.
 * It uses a conic-gradient mask and CSS custom properties to animate.
 */
const GlassCard = ({ children, className = '' }) => {
  return (
    <motion.div
      // Main container with relative positioning
      className={`relative w-full h-full p-px rounded-lg 
                  bg-gradient-to-b from-purple-light/20 to-magenta/20
                  ${className}`}
      
      // Animation variants for framer-motion
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}

      // --- THIS IS THE FIX ---
      // Add the "floating" effect on hover
      whileHover={{ y: -8, scale: 1.03 }}
      // --- END OF FIX ---
    >
      {/* The "shiny" border effect */}
      <div 
        className="absolute inset-0 w-full h-full rounded-lg
                   bg-[conic-gradient(from_var(--tw-gradient-angle),_#A78BFA_0%,_#E11D48_50%,_#A78BFA_100%)] 
                   animate-border-spin" 
        style={{
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      />
      
      {/* The actual content container */}
      <div className="relative w-full h-full p-6 rounded-lg 
                      bg-gray-900/90 dark:bg-gray-900/80 
                      backdrop-blur-md">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;