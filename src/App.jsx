import './index.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import TapeRight from './components/tape-right/TapeRight';
import TapeLeft from './components/tape-left/TapeLeft';
import HowWork from './components/howWork/HowWork';
import Clients from './components/clients/Clients';
import Contact from './components/contact/Contact';
import Vfr from './components/vfr/Vfr';
import Faq from './components/faq/Faq';
import ChatBot from './components/chatbot/ChatBot';

function App() {
  return (
    <div className="app-background">
      <Header />
      <main>
        <Hero />
        <TapeRight />
        <About />
        <TapeLeft />
        <HowWork />
        <TapeRight />
        <Clients />
        <TapeLeft />
        <Vfr/>
        <Contact />
        <Faq />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
