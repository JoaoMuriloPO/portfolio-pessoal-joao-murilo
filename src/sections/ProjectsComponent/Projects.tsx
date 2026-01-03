import ProjectCard from '../../components/ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Calculadora em ReactJS',
      description:
        'ICalculadora desenvolvida em ReactJS durante o curso da Rocketseat, aplicando conceitos fundamentais da biblioteca.',
      technologies: ['ReactJS', 'TypeScript', 'Vite', 'CSS'],
      githubUrl: 'https://github.com/JoaoMuriloPO/react-calculadora-rocketseat',
      liveUrl: 'https://joaomurilopo.github.io/react-calculadora-rocketseat/',
    },
    {
      title: 'TODO List em ReactJS',
      description:
        'To-do List desenvolvida em ReactJS durante o curso da Rocketseat, aplicando conceitos fundamentais da biblioteca.',
      technologies: ['ReactJS', 'TypeScript', 'Vite', 'CSS'],
      githubUrl: 'https://github.com/JoaoMuriloPO/react-TODO-rocketseat',
      liveUrl: 'https://react-todo-rocketseat-gzr8.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <p className="section-subtitle">
          Alguns dos projetos que desenvolvi durante minha jornada como desenvolvedor
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

