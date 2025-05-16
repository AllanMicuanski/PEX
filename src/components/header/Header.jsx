import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [showAudaces, setShowAudaces] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAudaces(true);
    }, 2000); // tempo para trocar a logo

    return () => clearTimeout(timer);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="logo-container">
          {!showAudaces ? (
            <img
              className="logo logo-white fade-in"
              src="/src/assets/logoHeaderWhite.svg"
              alt="Logo Sizebay White"
            />
          ) : (
            <>
              <img
                className="logo logo-dark fade-in"
                src="/src/assets/logoHeaderDark.svg"
                alt="Logo Sizebay Dark"
              />
              <span className="logo-span fade-in">by:</span>
              <img
                className="logo logo-audaces fade-in"
                src="/src/assets/logo-audaces.png"
                alt="Logo Audaces"
              />
            </>
          )}
        </div>

        {/* Navegação */}
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#funciona">Como Funciona</a>
          <a href="#clientes">Clientes</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
