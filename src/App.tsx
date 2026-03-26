import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightSection from './components/HighlightSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HighlightSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
