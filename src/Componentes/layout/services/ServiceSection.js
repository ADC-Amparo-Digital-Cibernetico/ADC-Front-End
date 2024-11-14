import React from 'react';
import ServiceItem from './ServiceItem';
import './ServiceSection.css';

const services = [
  {
    title: "Assessoria Técnica",
    imageUrl: "https://img.freepik.com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg"
  },
  {
    title: "Assessoria Psicológica",
    imageUrl: "https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-avatar-metaverso_52683-96427.jpg"
  },
  {
    title: "Conteúdo Educativo",
    imageUrl: "https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-numerologia_23-2150061749.jpg"
  }
];

function ServiceSection() {
  return (
    <section className="service-section">
      <h2>Nossos serviços</h2>
      <div className="service-content">
        <div className="service-images">
          {services.map((service, index) => (
            <ServiceItem key={index} imageUrl={service.imageUrl} />
          ))}
        </div>
        <div className="service-texts">
          {services.map((service, index) => (
            <h3 key={index}>{service.title}</h3>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
