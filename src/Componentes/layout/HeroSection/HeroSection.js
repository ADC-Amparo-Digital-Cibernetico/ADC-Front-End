import React from 'react';
import './HeroSection.css';


function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Proteja seu mundo digital</h1>
      <div className="hero-buttons">
        <button className="hero-btn primary-btn">Ver mais</button>
        <button className="hero-btn secondary-btn">Obter ajuda</button>
      </div>
    </section>
  );
}

export default HeroSection;
