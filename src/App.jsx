import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";

function App() {
  return (
    <>
      <div className="bg-gray-50">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
