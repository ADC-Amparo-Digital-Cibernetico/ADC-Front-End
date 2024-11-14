import logo from './logo.svg';
import React from 'react';
import Header from './Componentes/layout/Header/Header';
import Footer from './Componentes/layout/Footer/Footer';
import HeroSection from './Componentes/layout/HeroSection/HeroSection';
import ServiceSection from './Componentes/layout/services/ServiceSection';
import SupportSection from './Componentes/layout/support/SupportSection';
import WhyADCSection from './Componentes/layout/WhyADC/WhyADCSection';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServiceSection />
      <SupportSection />
      <WhyADCSection />
      <Footer />
    </div>
  );
}

export default App;