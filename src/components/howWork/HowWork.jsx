
import './HowWork.css';
import { useTranslation } from 'react-i18next';


function HowWork() {
  const { t } = useTranslation();
  return (
    <section id="howwork" className="HowWork-section">
      <h2 className="how-work-title">{t('howwork.title')}</h2>
      <div className="HowWork-container">
        <iframe
          src="https://www.youtube.com/embed/bC--eNj3sIE"
          title={t('howwork.videoTitle')}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default HowWork;
