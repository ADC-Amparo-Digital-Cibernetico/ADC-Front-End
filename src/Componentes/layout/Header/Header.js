import React from 'react';
import './Header1.css'

function Header() {
  return (
    <header className="header">
      <div className="nav-wrapper">
        <nav className="nav-menu">
          <a href="#sobre-nos" className="nav-link">Sobre nós</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#apoio-vitima" className="nav-link">Apoio à Vítima</a>
        </nav>
      </div>
      <div className="button-group">
        <button className="btn btn-create-account">Criar Conta</button>
        <button className="btn btn-login">Entrar</button>
      </div>
    </header>
  );
}

export default Header;


