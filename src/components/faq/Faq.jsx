import { useTranslation } from 'react-i18next';
import './Faq.css';

function Faq() {
  const { t } = useTranslation();

  // Obtém as perguntas do arquivo de tradução
  const questions = t('faq.questions', { returnObjects: true });

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">{t('faq.title')}</h2>
        
        <div className="faq-list">
          {Array.isArray(questions) && questions.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">
                {item.question}
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
