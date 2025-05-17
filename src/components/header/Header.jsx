import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Header.css";

function Header() {
  const [showAudaces, setShowAudaces] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAudaces((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="container">
        <a href="#home" className="logo-container">
          <div className="logo-fade-wrapper">
            <img
              className={`logo logo-white ${!showAudaces ? "fade-in-show" : "fade-out-hide"}`}
              src="/assets/logoHeaderWhite.svg"
              alt="Logo Sizebay White"
            />
            <img
              className={`logo logo-dark ${showAudaces ? "fade-in-show" : "fade-out-hide"}`}
              src="/assets/logoHeaderDark.svg"
              alt="Logo Sizebay Dark"
            />
          </div>

          {showAudaces && (
            <>
              <span className="logo-span fade-in">by</span>
              <img
                className="logo logo-audaces fade-in"
                src="/assets/logo-audaces.png"
                alt="Logo Audaces"
              />
            </>
          )}
        </a>

        {/* Menu hamburguer */}
        <nav className="desktop-menu">
          <a href="#about">sobre</a>
          <a href="#howwork">como funciona</a>
          <a href="#clients">clientes</a>
          <a href="#contact">contato</a>
        </nav>

        <Menu right width={"250px"} className="mobile-menu">
          <a className="menu-item" href="#about">sobre</a>
          <a className="menu-item" href="#howwork">como funciona</a>
          <a className="menu-item" href="#clients">clientes</a>
          <a className="menu-item" href="#contact">contato</a>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
