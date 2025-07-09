import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <h2 className="hero-title">{t('hero.title')}</h2>
        </div>
        <div className="hero-right">
          <p className="hero-subtitle confort">{t('hero.comfort')}</p>
          <p className="hero-subtitle sale">{t('hero.sale')}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
