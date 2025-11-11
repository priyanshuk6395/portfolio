"use client"; 

import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import AnimatedTitle from '@/components/AnimatedTitle';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Devin-AI",
    description: "A full-stack collaborative coding platform with in-browser code execution and AI-powered code suggestions.",
    techStack: ["React", "Node.js", "MongoDB", "Redis", "JWT", "Google Generative AI"],
    githubUrl: "https://github.com/priyanshuk6395/devin-ai",
    liveUrl: "https://devin-ai-iota.vercel.app/",
  },
  {
    title: "Uber Clone",
    description: "A real-time ride-booking app with live tracking and route navigation, built with Next.js and Google Maps API.",
    techStack: ["React","Node.js", "Tailwind CSS", "JWT", "Google Maps API"],
    githubUrl: "https://github.com/priyanshuk6395/uber",
    liveUrl:"https://uber-pi-swart.vercel.app/",
  },
  {
    title: "Google Drive Clone",
    description: "A secure cloud-based file manager with JWT authentication, real-time access, and scalable file handling.",
    techStack: ["Node.js", "Express", "Firebase", "MongoDB"],
    githubUrl: "https://github.com/priyanshuk6395/g-drive",
    liveUrl:"https://g-drive-zty8.onrender.com/user/login",
  },
  {
    title: "Employee Management System (EPMS)",
    description: "A scalable, role-based employee and task management system with real-time tracking and an admin dashboard.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/priyanshuk6395/Employee-management",
    liveUrl:"https://employee-management-qzxi.onrender.com/",
  }
];

// Animation variants
const gridVariants = {
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  },
  hidden: { opacity: 0 },
};

const cardVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

const Projects = () => {
  return (
    <Section id="projects" className="py-24">
      <AnimatedTitle>
        Selected Projects
      </AnimatedTitle>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectsData.map((project) => (
          <motion.div key={project.title} variants={cardVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;