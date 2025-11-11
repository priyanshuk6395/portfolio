import Section from '@/components/Section';
import AnimatedTitle from '@/components/AnimatedTitle';
import { Linkedin, Github, Code } from 'lucide-react';

// ... (socialLinks data is the same)
const socialLinks = [
  { href: "...", icon: Linkedin, label: "LinkedIn" },
  { href: "...", icon: Github, label: "GitHub" },
  { href: "...", icon: Code, label: "LeetCode" },
];

const Contact = () => {
  return (
    <Section id="contact" className="py-24 text-center">
      <AnimatedTitle className="max-w-xl mx-auto">
        Get in Touch
      </AnimatedTitle>
      <p className="text-lg text-gray-600 dark:text-gray-500 max-w-xl mx-auto mb-8">
        My inbox is always open. Feel free to reach out about new opportunities, project ideas, or just to say hello.
      </p>
      
      {/* Railway-style Button */}
      <a 
        href="mailto:priyanshu.of26@gmail.com"
        className="inline-block px-6 py-3 rounded-lg text-base font-medium
                   text-gray-100
                   bg-gradient-to-r from-purple to-magenta
                   shadow-lg shadow-purple/30
                   transition-all duration-300
                   hover:scale-105 hover:shadow-purple/40
                   focus:outline-none focus:ring-2 focus:ring-purple-light focus:ring-offset-2 focus:ring-offset-black"
      >
        priyanshu.of26@gmail.com
      </a>

      <div className="flex gap-6 justify-center mt-10">
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
      </div>
    </Section>
  );
};

export default Contact;