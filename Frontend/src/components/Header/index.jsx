// Frontend\src\components\Header\index.jsx

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
      <div className="brand">
        <h1>BANCADA MequiDonalds</h1>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/sobre-nos" className="nav-link">Sobre Nós</Link>
        <Link to="/servicos" className="nav-link">Serviços</Link>
      </nav>
    </header>
  );
}

export default Header;
    