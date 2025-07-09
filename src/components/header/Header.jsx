import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useTranslation } from "react-i18next";
import "./Header.css";

function Header() {
  const [showAudaces, setShowAudaces] = useState(false);
  const { t, i18n } = useTranslation();

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

          <div className={`logo-text-wrapper ${showAudaces ? "fade-in" : ""}`}>
            {showAudaces && (
              <>
                <span className="logo-span">by</span>
                <img
                  className="logo logo-audaces"
                  src="/assets/logo-audaces.png"
                  alt="Logo Audaces"
                />
              </>
            )}
          </div>
        </a>
        <nav className="desktop-menu">
          <a href="#about">{t('menu.about')}</a>
          <a href="#howwork">{t('menu.howwork')}</a>
          <a href="#clients">{t('menu.clients')}</a>
          <a href="#virtual">{t('menu.virtual')}</a>
          <a href="#contact">{t('menu.contact')}</a>
        </nav>

        <Menu right width={"250px"} className="mobile-menu">
          <a className="menu-item" href="#about">{t('menu.about')}</a>
          <a className="menu-item" href="#howwork">{t('menu.howwork')}</a>
          <a className="menu-item" href="#clients">{t('menu.clients')}</a>
          <a className="menu-item" href="#virtual">{t('menu.virtual')}</a>
          <a className="menu-item" href="#contact">{t('menu.contact')}</a>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
