import './Certificates.css';

const Certificates = () => {
 const certificates = [
    { title: 'Formação React', institution: 'Rocketseat', hours: '35h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/180541f3-0a8e-40d8-b55c-50d9b3389757' },
    { title: 'JavaScript', institution: 'Rocketseat', hours: '31h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/b608fe5d-9377-420a-a3a7-8731dc2fc3cc' },
    { title: 'Fundamentos de HTML e CSS', institution: 'Rocketseat', hours: '30h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/da761764-b8eb-4464-9e02-90e15511f356' },
    { title: 'Formação Lógica de programação', institution: 'Rocketseat', hours: '30h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/23cfcc43-4bfe-4783-9869-af1ac74c205f' },
    { title: 'Fundamentos do Next.js', institution: 'Rocketseat', hours: '15h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/0ae1e49b-4adb-4450-a905-5522d0c54604' },
    { title: 'Discover', institution: 'Rocketseat', hours: '12h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/24cd7226-f61f-4166-84b8-a96c1029ce23' },
    { title: 'Fundamentos do React', institution: 'Rocketseat', hours: '6h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/89e6a911-cd82-4e4e-99e6-107c07774dda' },
    { title: 'Git e GitHub', institution: 'Rocketseat', hours: '4h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/4454bd8c-bee4-4b26-95a6-03b2bb18d41d' },
    { title: 'Clean Code', institution: 'Rocketseat', hours: '3h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/d5f4728e-4a11-4f80-a6d5-7adbeedbb170' },
    { title: 'Fundamentos da Lógica de Programação', institution: 'Rocketseat', hours: '3h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/460de195-7e6e-48ba-910f-7672a8f99b59' },
    { title: 'Portfólio Ninja', institution: 'Rocketseat', hours: '2h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/9ddfe78b-0d2b-426a-b042-e165130d0873' },
    { title: 'O básico de Git e GitHub', institution: 'Rocketseat', hours: '1h', year: '2026', link: 'https://app.rocketseat.com.br/certificates/4454bd8c-bee4-4b26-95a6-03b2bb18d41d' }
  ];

  return (
    <section id="Certificates" className="Certificates section">
      <div className="container">
        <h2 className="section-title">Formação</h2>
        <p className="section-subtitle">Minha jornada acadêmica e especializações técnicas</p>

        <div className="education-grid">
          {/* Formação Acadêmica Principal */}
          <div className="education-item highlight">
            <h3 className="category-label">Tecnólogo</h3>
            <p className="education-name"><strong>Redes de Computadores</strong></p>
            <p className="education-institution">Instituto Federal do Rio de Janeiro (IFRJ)</p>
            <p className="time">2024 - 2027</p>
          </div>

          {/* Listagem de Certificações da Rocketseat */}
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="education-item" 
              onClick={() => window.open(cert.link, '_blank')}
            >
              <h3 className="category-label">Curso</h3>
              <p className="education-name"><strong>{cert.title}</strong></p>
              <p className="education-institution">{cert.institution}</p>
              <p className="time">{cert.hours} - {cert.year}</p>
            </div>
          ))}
        </div>

        {/* Seção de Habilidades (Baseada no currículo e inspiração) */}
        <div className="skills-container">
          
          <div className="skill-group">
            <h3 className="skill-category-title">Hard Skills</h3>
            <div className="skill-grid">
              <div className="skill-column">
                <p>ReactJS</p>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>HTML5 / CSS3</p>
              </div>
              <div className="skill-column">
                <p>Node.js</p>
                <p>Express</p>
                <p>APIs REST</p>
                <p>Docker</p>
              </div>
              <div className="skill-column">
                <p>Git / GitHub</p>
                <p>Postman</p>
                <p>Python</p>
                <p>UX/UI Design</p>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <h3 className="skill-category-title">Soft Skills & Metodologias</h3>
            <div className="skill-grid">
              <div className="skill-column">
                <p>Scrum / Kanban</p>
                <p>Metodologias Ágeis</p>
                <p>Trabalho em Equipe</p>
              </div>
              <div className="skill-column">
                <p>Escalabilidade</p>
                <p>Comunicação Técnica</p>
                <p>Resolução de Problemas</p>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <h3 className="skill-category-title">Idiomas</h3>
            <div className="skill-grid">
              <div className="skill-column">
                <p><strong>Português</strong> / Nativo</p>
                <p><strong>Inglês</strong> / Nível B1 (Intermediário)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;