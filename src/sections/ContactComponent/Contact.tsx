import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import EmailModal from './EmailModal';
import './Contact.css';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="footer-section"> 
      <div className="container">
        <div className="footer-top">
          <h2 className="section-title">Vamos conversar ?</h2>
          <p className="section-subtitle">
            Estou disponível para novos projetos e oportunidades.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <button
                  type="button"
                  className="email-button"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enviar email
                </button>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Telefone</h3>
                <a
                  href="https://wa.me/5521985405690?text=Olá%20João%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
                  target="_blank"
                >
                  (21) 98540-5690
                </a>
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
            <h3>Conecte-se comigo</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/joaomurilopoo/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/JoaoMuriloPO" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub /> <span>GitHub</span>
              </a>
              <a href="https://wa.me/5521985405690" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp /> <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {isModalOpen && <EmailModal onClose={() => setIsModalOpen(false)} /> }
    </footer>
  );
};

export default Contact;