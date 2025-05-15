import './HowWork.css';

function HowWork() {
  return (
    <section id="HowWork" className="HowWork-section">
      <h2 className="how-work-title">Como funciona?</h2>

      <div className="HowWork-container">
        <iframe
          src="https://www.youtube.com/embed/bC--eNj3sIE"
          title="Vídeo explicativo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default HowWork;
