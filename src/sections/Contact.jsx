function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Fale Conosco</h2>
        <p className="mb-6 text-gray-700">Entre em contato e tire suas dúvidas com nossa equipe.</p>
        <a
          href="mailto:contato@minhaempresa.com"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Enviar E-mail
        </a>
      </div>
    </section>
  )
}

export default Contact
