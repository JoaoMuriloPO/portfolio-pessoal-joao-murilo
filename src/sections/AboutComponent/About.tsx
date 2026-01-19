import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Desenvolvedor Front-End com mais de 2 anos de experiência prática
              em desenvolvimento web, incluindo estágio na CI&T. Atuação com
              ReactJS, TypeScript e Node.js, focado na criação de interfaces
              escaláveis, integração com APIs REST e trabalho em ambientes
              ágeis. Experiência em colaboração com times multidisciplinares e
              entrega de soluções eficientes e de qualidade.
            </p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <h3>Informações Pessoais</h3>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Rio de Janeiro – RJ</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <a href="mailto:j.murilo.mobile@gmail.com">
                  j.murilo.mobile@gmail.com
                </a>
              </div>
              <div className="info-item">
                <FaLinkedin className="info-icon" />
                <a
                  href="https://www.linkedin.com/in/joaomurilopoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="info-item">
                <FaGithub className="info-icon" />
                <a
                  href="https://github.com/JoaoMuriloPO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="experience-card">
              <h3>Experiência Profissional</h3>

              <div className="experience-item">
                <h4>Estagiário em Desenvolvimento Front-End</h4>
                <p className="company">CI&T</p>
                <p className="period">mar/2025 – dez/2025</p>
                <ul className="experience-list">
                  <li>
                    Desenvolvimento e manutenção de aplicações web utilizando
                    ReactJS, TypeScript e Node.js
                  </li>
                  <li>Integração e consumo de APIs REST (Kanbanize)</li>
                  <li>
                    Criação de componentes reutilizáveis e interfaces
                    responsivas
                  </li>
                  <li>
                    Atuação com Scrum (dailys, plannings, reviews e demos)
                  </li>
                  <li>Participação em projetos com automação e IA</li>
                </ul>
              </div>

              <div className="experience-item">
                <h4>Desenvolvedor Web Freelancer</h4>
                <p className="company">Freelancer</p>
                <p className="period">out/2024 – dez/2024</p>
                <ul className="experience-list">
                  <li>
                    Desenvolvimento de interfaces web, portfólios, e-commerces e
                    bots para Discord
                  </li>
                  <li>Uso de ReactJS, HTML, CSS, JavaScript e TypeScript</li>
                  <li>Boas práticas de UX/UI e versionamento com Git/GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About

