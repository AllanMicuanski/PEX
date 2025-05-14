import "./Services.css";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Consultoria</h3>
            <p className="service-text">Ajudamos sua empresa a crescer com estratégia e tecnologia.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Desenvolvimento</h3>
            <p className="service-text">Criamos soluções personalizadas, de sites a sistemas completos.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Suporte</h3>
            <p className="service-text">Estamos ao seu lado com suporte técnico eficiente e ágil.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
