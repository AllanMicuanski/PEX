function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Consultoria</h3>
            <p className="text-gray-600">Ajudamos sua empresa a crescer com estratégia e tecnologia.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
            <p className="text-gray-600">Criamos soluções personalizadas, de sites a sistemas completos.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Suporte</h3>
            <p className="text-gray-600">Estamos ao seu lado com suporte técnico eficiente e ágil.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
