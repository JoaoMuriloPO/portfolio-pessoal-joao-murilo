import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        <p className="section-subtitle">
          Entre em contato comigo através dos canais abaixo
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:j.murilo.mobile@gmail.com">j.murilo.mobile@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Telefone</h3>
                <a href="tel:+5521985405690">(21) 98540-5690</a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Localização</h3>
                <span>Rio de Janeiro – RJ</span>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/joaomurilopoo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/JoaoMuriloPO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

