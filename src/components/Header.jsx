function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MinhaEmpresa</h1>
        <nav className="space-x-4 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600">Sobre</a>
          <a href="#services" className="hover:text-blue-600">Serviços</a>
          <a href="#contact" className="hover:text-blue-600">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
