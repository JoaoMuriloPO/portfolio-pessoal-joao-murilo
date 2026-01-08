import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import './Certificates.css';

const ITEMS_PER_PAGE = 4;

const Certificates = () => {
  const certificates = [
    {
      title: 'Fundamentos de HTML e CSS',
      description: 'Micro certificado Rocketseat de HTML e CSS.',
      technologies: ['HTML', 'CSS'],
      link: 'https://app.rocketseat.com.br/certificates/da761764-b8eb-4464-9e02-90e15511f356',
    },
    {
      title: 'JavaScript',
      description: 'Micro certificado Rocketseat sobre JavaScript.',
      technologies: ['JavaScript'],
      link: 'https://app.rocketseat.com.br/certificates/b608fe5d-9377-420a-a3a7-8731dc2fc3cc',
    },
    {
      title: 'Git e GitHub',
      description: 'Micro certificado Rocketseat sobre Git e GitHub.',
      technologies: ['Git', 'GitHub'],
      link: 'https://app.rocketseat.com.br/certificates/4454bd8c-bee4-4b26-95a6-03b2bb18d41d',
    },
    {
      title: 'Clean Code',
      description: 'Curso Rocketseat focado em boas práticas e código limpo.',
      technologies: ['Clean Code', 'Boas Práticas'],
      link: 'https://app.rocketseat.com.br/certificates/d5f4728e-4a11-4f80-a6d5-7adbeedbb170',
    },
    {
      title: 'Discover',
      description:
        'Curso Rocketseat com base em lógica de programação e fundamentos web.',
      technologies: ['JavaScript', 'Web'],
      link: 'https://app.rocketseat.com.br/certificates/24cd7226-f61f-4166-84b8-a96c1029ce23',
    },
    {
      title: 'Fundamentos do React',
      description:
        'Micro certificado Rocketseat sobre os fundamentos do React.',
      technologies: ['React'],
      link: 'https://app.rocketseat.com.br/certificates/89e6a911-cd82-4e4e-99e6-107c07774dda',
    },
    {
      title: 'Fundamentos do Next.js',
      description: 'Curso Rocketseat sobre os fundamentos do Next.js.',
      technologies: ['Next.js'],
      link: 'https://app.rocketseat.com.br/certificates/0ae1e49b-4adb-4450-a905-5522d0c54604',
    },
    {
      title: 'Portfólio Ninja',
      description: 'Curso Rocketseat sobre criação de portfólio profissional.',
      technologies: ['Carreira', 'Portfólio'],
      link: 'https://app.rocketseat.com.br/certificates/9ddfe78b-0d2b-426a-b042-e165130d0873',
    },
  ];

  const [page, setPage] = useState(0);

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentItems = certificates.slice(start, end);

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);

  return (
    <section id="Certificates" className="Certificates section">
      <div className="container">
        <h2 className="section-title">Certificados</h2>
        <p className="section-subtitle">
          Alguns dos certificados que conquistei durante minha jornada como
          desenvolvedor
        </p>

        <div className="certificates-grid">
          {currentItems.map((cert, index) => (
            <ProjectCard
              key={index}
              title={cert.title}
              description={cert.description}
              technologies={cert.technologies}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="certificates-navigation">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
            >
              ‹
            </button>

            <span>
              {page + 1} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
              disabled={page === totalPages - 1}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
