// Frontend\src\components\Header\index.jsx

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import nandamcdonaldsImg from '../../assets/nandamcdonalds.png';
import saramcdonaldsImg from '../../assets/saramcdonalds.png';
import victormcdonaldsImg from '../../assets/victormcdonalds.png';

function Header({ usuario, onLogout }) {
  // Mapeamento de nomes para imagens
  const imagemUsuario = {
    'Victor Sobral de Moraes': victormcdonaldsImg,
    'Sara Melo': saramcdonaldsImg,
    'Fernanda Dantas Moreira Cruz': nandamcdonaldsImg
  };

  const getFoto = (nome) => {
    return imagemUsuario[nome] || null;
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <header className="header-container">
      <div className="brand">
        <h1>BANCADA MequiDonalds</h1>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/code" className="nav-link">Code</Link>
        <Link to="/sobre-nos" className="nav-link">Sobre Nós</Link>
      </nav>
      {usuario && (
        <div className="user-profile">
          <img src={getFoto(usuario.nome)} alt={usuario.nome} className="user-avatar" title={usuario.nome} />
          <span className="user-name">{usuario.nome}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
}

export default Header;