import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';
import './index.css'

function App() {
  return (
    <div className="app-background">
      <Header />
      <main className="pt-20">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
