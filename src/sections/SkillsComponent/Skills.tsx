import { 
  FaReact, 
  FaNode, 
  FaGitAlt, 
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from 'react-icons/fa'
import { SiTypescript, SiExpress, SiPostman } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: [
        { name: 'ReactJS', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JSX/TSX', icon: <FaReact /> },
      ]
    },
    {
      title: 'Back-End',
      skills: [
        { name: 'Node.js', icon: <FaNode /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'APIs REST', icon: <FaNode /> },
      ]
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGitAlt /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Postman', icon: <SiPostman /> },
      ]
    },
    {
      title: 'Metodologias',
      skills: [
        { name: 'Scrum', icon: null },
        { name: 'Kanban', icon: null },
      ]
    },
    {
      title: 'Idiomas',
      skills: [
        { name: 'Inglês (B1)', icon: null },
      ]
    },
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">
          Tecnologias e ferramentas que utilizo no meu dia a dia
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

