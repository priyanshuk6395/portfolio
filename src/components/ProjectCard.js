import { Github, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard'; // Import the new card

const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl }) => {
  return (
    <GlassCard className="flex flex-col">
      <h3 className="text-xl font-semibold text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-500 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-800 text-gray-500 rounded-md px-3 py-1 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub repository`}
            className="text-gray-500 hover:text-purple-light transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo`}
            className="text-gray-500 hover:text-purple-light transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;