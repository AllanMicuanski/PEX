import './index.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';
import TapeRight from './components/tape-right/TapeRight'
import TapeLeft from './components/tape-left/TapeLeft';

function App() {
  return (
    <div className="app-background">
      <Header />
      <main >
        <Hero />
      <TapeRight />

      </main>
      <Footer />
    </div>
  );
}

export default App;
