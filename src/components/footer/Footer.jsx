import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Sizebay. Todos os direitos
          reservados.
        </p>
        <div className="footer-links">
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
          <a href="#clients">Cases</a>
        </div>
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
        </div>
      </div>
      <p className="footer-powered">Powered by: Allan Micuanski</p>
    </footer>
  );
}

export default Footer;
