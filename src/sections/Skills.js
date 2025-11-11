"use client"; 

import Section from '@/components/Section';
import SkillTag from '@/components/SkillTag';
import AnimatedTitle from '@/components/AnimatedTitle';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages & Databases",
    skills: ["C++", "C", "JavaScript", "Python", "Java", "MongoDB", "Firebase", "MySQL", "Redis"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "NumPy", "Pandas", "Matplotlib", "Tailwind CSS", "WebContainers"]
  },
  {
    title: "Tools & Concepts",
    skills: ["RESTful APIs", "JWT", "OAuth", "Git", "GitHub", "Linux", "Cloud Storage"]
  }
];

// Animation variants
const listVariants = {
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05 } 
  },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Skills = () => {
  return (
    <Section id="skills" className="py-24">
      <AnimatedTitle>
        Technologies
      </AnimatedTitle>
      <div className="flex flex-col gap-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            {/* --- THIS IS THE FIX ---
              Changed text-gray-900 to text-gray-600 (light mode)
              Changed dark:text-text-primary to dark:text-gray-500 (dark mode)
            */}
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-500 mb-4">
              {category.title}
            </h3>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <SkillTag skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;