import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';

const slides = [
  {
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqzAIUKXaRv5SBwKlUXTYwVbeL-rN-Cu9KQsE3xVnQz13zZNbnM1oE8xIj3CJ2ZNHJ0UMIiTB1_-gzlJXk1xC7t9C4c_XFoyFdK4sah97Dg0YALlCz1Lp5gcTj9UKXiguqhJ5JKUmdRUX0/s1600/IMG-20140926-WA0011%5B1%5D.jpg',
    text: 'Você é o futuro, você é o ...',
    link: 'https://senai.com.br'
  },
  {
    image: 'https://i.postimg.cc/pT2FC3XR/Gemini-Generated-Image-j1kt5oj1kt5oj1kt.png',
    text: 'Greve no senai. Queremos salas sem pilastras no meio',
    link: 'https://senai.com.br'
  },
  {
    image: 'https://prodest.es.gov.br/Media/prodestnovo/_Profiles/c4d8c6e6/cc6783d0/visitasenai042025.JPG?v=638798923155764120',
    text: 'Mais um dia de sofrimento no Senai.',
    link: 'https://senai.com.br'
  },
  {
    image: 'https://www.radiofreemobile.com/wp-content/uploads/2022/09/58601c2a00ccd21300e32bbb16225807.jpg',
    text: 'Trate bem sua IA ou ela pode vir atrás de você no futuro.',
    link: 'https://terminator.fandom.com/wiki/Skynet'
  },
  {
    image: 'https://static.vakinha.com.br/uploads/vakinha/image/3546076/1678058443.971.png?ims=700x410',
    text: 'Aceite Fernanda ser mendiga é seu destino.',
    link: 'https://www.instagram.com/nanddadantas/'
  },
  {
    image: 'https://jornal.usp.br/wp-content/uploads/20180319_00_karl-marx.jpg',
    text: 'Vocêjá ouviu a palavra de Marx hoje senhor?.',
    link: 'https://www.exemplo6.com'
  }
];

function Carousel() {
  const visibleSlides = 4;
  const total = slides.length;
  // Duplicar slides para efeito infinito perfeito
  const extendedSlides = [...slides.slice(-visibleSlides), ...slides, ...slides.slice(0, visibleSlides)];
  const [current, setCurrent] = useState(visibleSlides);
  const [transition, setTransition] = useState(true);
  const slideRef = useRef();

  // Autoplay: avança automaticamente a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Monitora mudanças de posição para loop infinito
  useEffect(() => {
    const timer = setTimeout(() => {
      if (current >= extendedSlides.length - visibleSlides) {
        // Chegou no final, volta ao início
        setTransition(false);
        setCurrent(visibleSlides);
      } else if (current < visibleSlides && current !== visibleSlides) {
        // Chegou no início, vai ao final
        setTransition(false);
        setCurrent(extendedSlides.length - visibleSlides - 1);
      } else {
        // Restaura transição para slides normais
        setTransition(true);
      }
    }, 500); // Tempo igual à transição CSS

    return () => clearTimeout(timer);
  }, [current, extendedSlides.length]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setTransition(true);
  };

  const handleTransitionEnd = () => {
    if (current >= extendedSlides.length - visibleSlides) {
      setTransition(false);
      setCurrent(visibleSlides);
    } else if (current <= 0) {
      setTransition(false);
      setCurrent(extendedSlides.length - visibleSlides - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevSlide}>&lt;</button>
      <div
        className="carousel-track"
        ref={slideRef}
        style={{
          transform: `translateX(-${(100 / visibleSlides) * current}%)`,
          transition: transition ? 'transform 0.5s' : 'none',
          width: `${(extendedSlides.length * 100) / visibleSlides}%`
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, idx) => (
          <a
            className="carousel-slide"
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            style={{ width: `${100 / extendedSlides.length}%` }}
          >
            <img 
              src={slide.image} 
              alt={slide.text} 
              onError={e => { e.target.onerror = null; e.target.src = 'https://placekitten.com/600/400'; }}
              onLoad={() => console.log('Loaded:', slide.image)}
            />
            <div className="carousel-overlay">{slide.text}</div>
          </a>
        ))}
      </div>
      <button className="carousel-btn next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Carousel;

