import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <h2 className="hero-title">Nós acreditamos que...</h2>
        </div>
        <div className="hero-right">
          <p className="hero-subtitle confort">CONFORTO</p>
          <p className="hero-subtitle sale">VENDE</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
