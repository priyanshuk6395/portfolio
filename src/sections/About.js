import Section from '@/components/Section';
import AnimatedTitle from '@/components/AnimatedTitle';

const About = () => {
  return (
    <Section id="about" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <AnimatedTitle className="md:col-span-1 mb-0">
          About
        </AnimatedTitle>
        <div className="md:col-span-2 flex flex-col gap-6">
          <p className="text-lg text-gray-600 dark:text-text-secondary">
            I am a passionate B.Tech in Information Technology student at NIT Srinagar (2022-2026). With a strong foundation in full-stack development (React, Node.js) and a keen interest in AI and system architecture, I excel at building scalable, real-time applications. My experience ranges from collaborative coding platforms to secure, blockchain-based evidence systems.
          </p>
          <p className="text-lg text-gray-500 dark:text-text-primary font-medium">
            B.Tech in Information Technology, NIT Srinagar | CGPA: 8.17 | 2022-2026
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;