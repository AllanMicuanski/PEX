function Header() {
  return (
    <header className="bg-[#131313] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/logoHeaderDark.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Navegação */}
        <nav className="space-x-6 text-white font-medium">
          <a href="#sobre" className=" hover:text-[#BF512B]">
            Sobre
          </a>
          <a href="#funciona" className=" hover:text-[#BF512B]">
            Como Funciona
          </a>
          <a href="#clientes" className=" hover:text-[#BF512B]">
            Clientes
          </a>
          <a href="#contato" className=" hover:text-[#BF512B]">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
