import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {

  const { i18n } = useTranslation();
  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'jp', label: 'JP' },
    { code: 'ch', label: 'CH' },
  ];

  // Custom dropdown state
  const [open, setOpen] = useState(false);
  const [figmaOpen, setFigmaOpen] = useState(false);
  const [figmaModal, setFigmaModal] = useState({ isOpen: false, url: '', title: '' });
  const dropdownRef = useRef(null);
  const figmaDropdownRef = useRef(null);

  const handleDropdownToggle = () => setOpen((prev) => !prev);
  const handleLanguageSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const handleFigmaClick = (url, title) => {
    setFigmaModal({ isOpen: true, url, title });
    setFigmaOpen(false);
  };

  const closeFigmaModal = () => {
    setFigmaModal({ isOpen: false, url: '', title: '' });
  };

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
      if (figmaDropdownRef.current && !figmaDropdownRef.current.contains(event.target)) {
        setFigmaOpen(false);
      }
    }
    if (open || figmaOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, figmaOpen]);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Sizebay. {i18n.t('footer.copyright')}
        </p>
        <div className="footer-links">
          <a href="#about">{i18n.t('footer.about')}</a>
          <a href="#contact">{i18n.t('footer.contact')}</a>
          <a href="#clients">{i18n.t('footer.cases')}</a>
        </div>
        <div className="footer-socials-lang">
          <div className="footer-socials">
            <a
              href="https://linkedin.com/in/allanmicuanski"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                fill="#BF512B"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.56v12H.22v-12zM8.94 8.5h4.37v1.63h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.05 5.47 7.01v8.76h-4.56v-7.76c0-1.85-.03-4.23-2.57-4.23-2.57 0-2.97 2.01-2.97 4.09v7.9H8.94v-12z" />
              </svg>
            </a>
            <a
              href="https://github.com/allanmicuanski"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                fill="#BF512B"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297a12 12 0 00-3.79 23.41c.6.11.82-.26.82-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.33-1.76c-1.09-.75.08-.74.08-.74a2.52 2.52 0 011.84 1.23 2.56 2.56 0 003.49 1 2.57 2.57 0 01.77-1.61c-2.67-.3-5.47-1.33-5.47-5.91a4.6 4.6 0 011.23-3.2 4.3 4.3 0 01.12-3.16s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.16 4.6 4.6 0 011.23 3.2c0 4.59-2.8 5.6-5.48 5.89a2.87 2.87 0 01.82 2.22v3.3c0 .32.22.69.83.57A12 12 0 0012 .297z" />
              </svg>
            </a>
            <div className="figma-dropdown" ref={figmaDropdownRef}>
              <button
                className="figma-button"
                onClick={() => setFigmaOpen(!figmaOpen)}
                aria-label="Ver Designs no Figma"
              >
                <svg
                  width="24"
                  height="24"
                  fill="#BF512B"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
                  <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
                  <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
                  <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
                  <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
                </svg>
              </button>
              {figmaOpen && (
                <ul className="figma-options">
                  <li>
                    <button
                      onClick={() => handleFigmaClick(
                        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fuq29ZOac1Kc8sgyDlxZfpF%2FWireFrame---PEX%3Fnode-id%3D0-1%26p%3Df%26t%3DcSIHyUq8Pu92tEma-0",
                        "📐 Wireframe"
                      )}
                    >
                      📐 Wireframe
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFigmaClick(
                        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fuq29ZOac1Kc8sgyDlxZfpF%2FWireFrame---PEX%3Fnode-id%3D4-5%26p%3Df%26t%3DcSIHyUq8Pu92tEma-0",
                        "🎨 Componentes"
                      )}
                    >
                      🎨 Componentes
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFigmaClick(
                        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fuq29ZOac1Kc8sgyDlxZfpF%2FWireFrame---PEX%3Fnode-id%3D86-2%26t%3DcSIHyUq8Pu92tEma-0",
                        "ℹ️ About"
                      )}
                    >
                      ℹ️ About
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="footer-lang-dropdown" ref={dropdownRef}>
            <button
              className="footer-lang-select custom"
              onClick={handleDropdownToggle}
              aria-haspopup="listbox"
              aria-expanded={open}
              tabIndex={0}
            >
              {languages.find((l) => l.code === i18n.language)?.label || 'PT'}
              <span className="footer-lang-arrow" style={{marginLeft: 6}}>
                {open ? '▲' : '▼'}
              </span>
            </button>
            {open && (
              <ul className="footer-lang-options" role="listbox">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className={`footer-lang-option${i18n.language === lang.code ? ' selected' : ''}`}
                    role="option"
                    aria-selected={i18n.language === lang.code}
                    tabIndex={0}
                    onClick={() => handleLanguageSelect(lang.code)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') handleLanguageSelect(lang.code);
                    }}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <p className="footer-powered">{i18n.t('footer.powered')}</p>

      {/* Modal do Figma */}
      {figmaModal.isOpen && (
        <div className="figma-modal-overlay" onClick={closeFigmaModal}>
          <div className="figma-modal-content" onClick={e => e.stopPropagation()}>
            <div className="figma-modal-header">
              <h3>{figmaModal.title}</h3>
              <button 
                className="figma-modal-close"
                onClick={closeFigmaModal}
                aria-label="Fechar modal"
              >
                ×
              </button>
            </div>
            <div className="figma-iframe-container">
              <iframe
                src={figmaModal.url}
                allowFullScreen
                title={`Figma Design - ${figmaModal.title}`}
              />
            </div>
            <div className="figma-modal-footer">
              <p className="figma-credits">
                🎨 <strong>Design by:</strong> 
                <a 
                  href="https://github.com/Jlvieira0909" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="figma-designer-link"
                >
                  @Jlvieira0909
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
