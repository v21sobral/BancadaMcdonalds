// Frontend\src\pages\Home\index.jsx

import React from 'react';
import './style.css';
// Importação da imagem que estava na pasta assets
import mcGif from '../../assets/mc.gif'; 

function Home() {
  return (
    <main className="home-wrapper">
      <section className="home-text-section">
        <h2 className="home-title">Qualidade que<br/>você confia.</h2>
        <p className="home-subtitle">
          Bem-vindo a Bancada MequiDonalds. 
          Profissionais de TI frustrados pelo mercado de trabalho.
        </p>
        <button className="btn-primary">Começar Agora</button>
      </section>

      <section className="home-image-section">
        {/* Imagem de identificação 400x400 no topo a direita */}
        <img 
          src={mcGif} 
          alt="Animação McDonald's" 
          className="site-id-image" 
        />
      </section>
    </main>
  );
}

export default Home;