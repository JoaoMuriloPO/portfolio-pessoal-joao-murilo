import { FaArrowDown } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const handleScrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home section">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">
            Olá, eu sou <span className="highlight">João Murilo</span>
          </h1>
          <h2 className="home-subtitle">Desenvolvedor Front-End</h2>
          <p className="home-description">
            Desenvolvedor Front-End com mais de 2 anos de experiência prática em desenvolvimento web, 
            focado na criação de interfaces escaláveis e soluções eficientes.
          </p>
          <div className="home-buttons">
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Entre em Contato
            </a>
            <a 
              href="#projects" 
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver Projetos
            </a>
          </div>
          <button 
            className="scroll-indicator"
            onClick={handleScrollToAbout}
            aria-label="Rolar para baixo"
          >
            <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home

