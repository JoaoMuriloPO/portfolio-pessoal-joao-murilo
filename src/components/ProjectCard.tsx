import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './ProjectCard.css'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="project-links">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`Ver código do projeto ${title} no GitHub`}
          >
            <FaGithub /> Código
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`Ver projeto ${title} ao vivo`}
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard

