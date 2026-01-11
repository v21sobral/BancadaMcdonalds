// Frontend\src\pages\Home\index.jsx

import React, { useState } from 'react';
import './style.css';
import mcGif from '../../assets/mc.gif';
import nandamcdonaldsImg from '../../assets/nandamcdonalds.png';
import saramcdonaldsImg from '../../assets/saramcdonalds.png';
import victormcdonaldsImg from '../../assets/victormcdonalds.png';
import Carousel from '../../components/Carousel';
import Login from '../Login';
import '../login-modal.css';

function Home({ onLogin, usuario }) {
  const [showLogin, setShowLogin] = useState(false);
  
  const team = [
    { name: 'Fernanda Dantas', role: 'Full Stack ChatGPT', img: nandamcdonaldsImg, github: 'https://github.com/fernanddadantasm' },
    { name: 'Sara Melo', role: 'Full Stack Gemini', img: saramcdonaldsImg, github: 'https://github.com/sahmlo' },
    { name: 'Victor Sobral', role: 'Full Stack Claude', img: victormcdonaldsImg, github: 'https://github.com/v21sobral' }
  ];

  return (
    <main className="home-wrapper-col">
      <div className="home-top-row">
        <div className="home-avatars-col">
          <h3 className="team-title">Equipe:</h3>
          <div className="home-avatars">
            {team.map((member, idx) => (
              <a 
                key={idx}
                href={member.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="avatar-card"
              >
                <div className="avatar-wrapper">
                  <img src={member.img} alt={member.name} className="avatar-circle" />
                  <div className="avatar-overlay">
                    <p className="avatar-name">{member.name}</p>
                    <p className="avatar-role">{member.role}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <section className="home-text-section">
          <h2 className="home-title">Eu sou o SEM FUTURO,<br/>eu sou SENAI.</h2>
          <p className="home-subtitle">
            Bem-vindo a Bancada MequiDonalds.
            Estudantes de TI desempregados.
          </p>
          {!usuario && <button className="btn-primary" onClick={() => setShowLogin(true)}>Entrar</button>}
        </section>
        <section className="home-image-section">
          <img 
            src={mcGif} 
            alt="Animação McDonald's" 
            className="site-id-image" 
          />
        </section>
      </div>
      <div className="home-carousel-row">
        <Carousel />
      </div>
      {showLogin && (
        <div className="login-modal-bg">
          <div className="login-modal-box">
            <button className="login-modal-close" onClick={() => setShowLogin(false)} title="Fechar">×</button>
            <Login onLogin={(token, usuario) => {
              onLogin(token, usuario);
              setShowLogin(false);
            }} />
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;