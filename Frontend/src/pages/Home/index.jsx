// Frontend\src\pages\Home\index.jsx

import React from 'react';
import './style.css';
import mcGif from '../../assets/mc.gif';
import nandamcdonaldsImg from '../../assets/nandamcdonalds.png';
import saramcdonaldsImg from '../../assets/saramcdonalds.png';
import victormcdonaldsImg from '../../assets/victormcdonalds.png';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <main className="home-wrapper-col">
      <div className="home-top-row">
        <div className="home-avatars-col">
          <div className="home-avatars">
            <a href="https://github.com/fernanddadantasm" target="_blank" rel="noopener noreferrer">
              <img src={nandamcdonaldsImg} alt="nandamcdonalds" className="avatar-circle" />
            </a>
            <a href="https://github.com/sahmlo" target="_blank" rel="noopener noreferrer">
              <img src={saramcdonaldsImg} alt="saramcdonalds" className="avatar-circle" />
            </a>
            <a href="https://github.com/v21sobral" target="_blank" rel="noopener noreferrer">
              <img src={victormcdonaldsImg} alt="victormcdonalds" className="avatar-circle" />
            </a>
          </div>
        </div>
        <section className="home-text-section">
          <h2 className="home-title">Eu sou o SEM FUTURO,<br/>eu sou SENAI.</h2>
          <p className="home-subtitle">
            Bem-vindo a Bancada MequiDonalds.
            Profissionais de TI frustrados pelo mercado de trabalho.
          </p>
          <button className="btn-primary">Começar Agora</button>
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
    </main>
  );
}

export default Home;