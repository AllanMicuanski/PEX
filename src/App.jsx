import './index.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
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
      <About/>

      </main>
      <Footer />
    </div>
  );
}

export default App;
