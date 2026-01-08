import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Modal.css';

interface Props {
  onClose: () => void;
}

const EmailModal = ({ onClose }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        'service_murilo',
        'template_murilo',
        form.current,
        'wh9zLHrBIcGpvTfWV'
      )
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        form.current?.reset();
        onClose();
      })
      .catch(() => {
        alert('Erro ao enviar mensagem.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <h3>Enviar mensagem</h3>
        <p>Preencha os campos abaixo</p>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Seu nome" required />

          <input
            type="email"
            name="from_email"
            placeholder="Seu email"
            required
          />

          <input type="text" name="subject" placeholder="Assunto" required />

          <textarea name="message" placeholder="Sua mensagem" required />

          <button type="submit" disabled={loading}>
            {loading ? (
              'Enviando...'
            ) : (
              <>
                <FaPaperPlane /> Enviar
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
