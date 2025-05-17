import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [showAudaces, setShowAudaces] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAudaces((prev) => !prev);
    }, 10000); // alterna a cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="container">
      <a href="#home">
        <div className="logo-container">
          <div className="logo-fade-wrapper">
            <img
              className={`logo logo-white ${!showAudaces ? "fade-in-show" : "fade-out-hide"}`}
              src="/src/assets/logoHeaderWhite.svg"
              alt="Logo Sizebay White"
              />
            <img
              className={`logo logo-dark ${showAudaces ? "fade-in-show" : "fade-out-hide"}`}
              src="/src/assets/logoHeaderDark.svg"
              alt="Logo Sizebay Dark"
              />
          </div>

          {showAudaces && (
            <>
              <span className="logo-span fade-in">by:</span>
              <img
                className="logo logo-audaces fade-in"
                src="/src/assets/logo-audaces.png"
                alt="Logo Audaces"
                />
            </>
          )}
        </div>
          </a>

        <nav>
          <a href="#about">sobre</a>
          <a href="#howwork">como funciona</a>
          <a href="#clients">clientes</a>
          <a href="#contact">contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
