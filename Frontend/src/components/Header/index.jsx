// Frontend\src\components\Header\index.jsx

import React from 'react';
import './style.css';

function Header() {
  return (
    <header className="header-container">
      <div className="brand">
        <h1>BANCADA McDONALDS</h1>
      </div>
      
      <nav className="nav-menu">
        <a href="#home" className="nav-link">Home</a>
        <a href="#sobre" className="nav-link">Sobre Nós</a>
        <a href="#servicos" className="nav-link">Serviços</a>
      </nav>
    </header>
  );
}

export default Header;
    