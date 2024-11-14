import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="#sobre">Sobre nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#recursos">Recursos</a>
          <a href="mailto:suportedigital.adc@outlook.com?subject=Assunto%20Aqui&body=Olá,%20gostaria%20de%20mais%20informações.">Contate-nos</a>

        </nav>
        <div className="footer-socials">
          <a href="https://www.instagram.com/adc.oficial.br/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/adc-oficial-br/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/ADC-Amparo-Digital-Cibernetico" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; 2024 ADC. Todos os direitos reservados. Protegendo seu mundo digital com experiência e cuidado.</p>
        <div className="footer-links">
          <a href="#politica">Política de Privacidade</a>
          <a href="#termos">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

