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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
        
        <div className="nav-container">
          <nav className="desktop-menu">
            <a href="#about">{t('menu.about')}</a>
            <a href="#howwork">{t('menu.howwork')}</a>
            <a href="#clients">{t('menu.clients')}</a>
            <a href="#virtual">{t('menu.virtual')}</a>
            <a href="#contact">{t('menu.contact')}</a>
          </nav>
          
          <div className="language-selector">
            <select 
              value={i18n.language} 
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-dropdown"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="it">IT</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="jp">JP</option>
              <option value="ch">CH</option>
            </select>
          </div>
        </div>

        <Menu right width={"250px"} className="mobile-menu">
          <a className="menu-item" href="#about">{t('menu.about')}</a>
          <a className="menu-item" href="#howwork">{t('menu.howwork')}</a>
          <a className="menu-item" href="#clients">{t('menu.clients')}</a>
          <a className="menu-item" href="#virtual">{t('menu.virtual')}</a>
          <a className="menu-item" href="#contact">{t('menu.contact')}</a>
          
          <div className="mobile-language-selector">
            <select 
              value={i18n.language} 
              onChange={(e) => changeLanguage(e.target.value)}
              className="mobile-language-dropdown"
            >
              <option value="pt">🇧🇷 Português</option>
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
              <option value="it">🇮🇹 Italiano</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="jp">🇯🇵 日本語</option>
              <option value="ch">🇨🇳 中文</option>
            </select>
          </div>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
