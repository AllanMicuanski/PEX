import { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#131313] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-screen-lg">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/logoHeaderDark.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex space-x-6 text-white font-medium text-right">
          <a href="#sobre" className="hover:text-[#BF512B]">
            Sobre
          </a>
          <a href="#funciona" className="hover:text-[#BF512B]">
            Como Funciona
          </a>
          <a href="#clientes" className="hover:text-[#BF512B]">
            Clientes
          </a>
          <a href="#contato" className="hover:text-[#BF512B]">
            Contato
          </a>
        </nav>

        {/* Menu Mobile Button (Hamburguer) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile (Aparece quando o botão de hamburguer é clicado) */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-[#131313] text-white py-4 px-6  `}
      >
        <a href="#sobre" className="block py-2 text-right hover:text-[#BF512B]">
          Sobre
        </a>
        <a
          href="#funciona"
          className="block py-2 text-right hover:text-[#BF512B]"
        >
          Como Funciona
        </a>
        <a
          href="#clientes"
          className="block py-2 text-right hover:text-[#BF512B]"
        >
          Clientes
        </a>
        <a
          href="#contato"
          className="block py-2 text-right hover:text-[#BF512B]"
        >
          Contato
        </a>
      </div>
    </header>
  );
}

export default Header;
