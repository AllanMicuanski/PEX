import Header from './components/Header'
import Hero from './components/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* espaço para o header fixo */}
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
