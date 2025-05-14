import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <div className="logo-container">
          <img
            src="/src/assets/logoHeaderDark.svg"
            alt="Logo"
          />
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
