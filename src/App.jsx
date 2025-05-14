import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {' '}
        {/* espaço para o header fixo */}
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
