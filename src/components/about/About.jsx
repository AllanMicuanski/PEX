import "./About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">{t('about.title')}</h2>

        <div className="about-block">
          <h3>{t('about.historyTitle')}</h3>
          <p>{t('about.historyP1')}</p>
          <p>{t('about.historyP2')}</p>
        </div>

        <div className="about-block">
          <h3>{t('about.impactTitle')}</h3>
          <ul>
            <li>{t('about.impactStores')}</li>
            <li>{t('about.impactConsumers')}</li>
            <li>{t('about.impactManufacturers')}</li>
            <li>{t('about.impactEnvironment')}</li>
          </ul>
        </div>

        <div className="about-block">
          <h3>{t('about.expertiseTitle')}</h3>
          <p>{t('about.expertiseP')}</p>
        </div>

        <div className="about-block">
          <h3>{t('about.valuesTitle')}</h3>
          <ul>
            <li>{t('about.values1')}</li>
            <li>{t('about.values2')}</li>
            <li>{t('about.values3')}</li>
            <li>{t('about.values4')}</li>
            <li>{t('about.values5')}</li>
          </ul>
        </div>

        <div className="about-block">
          <h3>{t('about.globalTitle')}</h3>
          <p>{t('about.globalP1')}</p>
          <p className="about-contact">
            {t('about.globalP2')}
            <a href="mailto:privacy@sizebay.com">{t('about.privacyEmail')}</a>.
          </p>
        </div>

        <div className="img-about">
          <img src="/assets/mixMatch.svg" alt="Tape Right" />
          <img src="/assets/sizeFit.svg" alt="Tape Right" />
        </div>
      </div>
    </section>
  );
}

export default About;
