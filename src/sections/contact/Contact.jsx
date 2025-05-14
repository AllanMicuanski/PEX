import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Fale Conosco</h2>
        <p className="contact-text">Entre em contato e tire suas dúvidas com nossa equipe.</p>
        <a
          href="mailto:contato@minhaempresa.com"
          className="contact-button"
        >
          Enviar E-mail
        </a>
      </div>
    </section>
  );
}

export default Contact;
