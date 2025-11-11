import Section from '@/components/Section';
import AnimatedTitle from '@/components/AnimatedTitle';

// ... (experiences data is the same)
const experiences = [
  {
    role: "Research Intern",
    company: "Indian Institute of Technology Patna",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Built a blockchain-based evidence system ensuring secure, tamper-proof digital recordkeeping.",
      "Recorded transactions on an immutable ledger for traceability and legal admissibility.",
      "Aligned design with judicial standards to enhance trust and transparency in forensic workflows."
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience" className="py-24">
      <AnimatedTitle>
        Experience
      </AnimatedTitle>
      
      <div className="relative border-l border-gray-300 dark:border-gray-800 pl-8">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10">
            {/* Timeline dot */}
            <span className="absolute -left-[9px] top-1 w-4 h-4 
                             bg-purple rounded-full 
                             border border-white dark:border-black 
                             ring-4 ring-purple/20"
            ></span>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{exp.role}</h3>
            <p className="text-gray-600 dark:text-gray-500 mb-1">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500/80 mb-3">{exp.date}</p>
            <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-500 space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;