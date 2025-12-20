// Frontend\src\pages\Home\index.jsx

import './style.css'
import mcLogo from '../../assets/mc.gif';

function Home() {
    return (
        <div className='home'>
            {/* Logo Section */}
            <section className="logo-section">
                <img src={mcLogo} alt="McDonald's Logo" className="logo-image" />
            </section>

            {/* Hero Section */}
            <section className="hero">
                <div className='hero__content'>
                    <h1 className="hero__title">
                        Bem-vindo ao <span className="highlight">McDonald's</span>
                    </h1>
                    <p className="hero__subtitle">
                        Sabor irresistível, qualidade garantida e muito carinho em cada refeição
                    </p>

                    <div className='hero__cta'>
                        <a href="/servicos" className='btn btn--primary'>🍔 Conheça nossos produtos</a>
                        <a href="/fale-conosco" className='btn btn--secondary'>📞 Entre em contato</a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='features'>
                <div className="features-header">
                    <h2>Por que escolher o McDonald's?</h2>
                    <p className="features-subtitle">Tradição, qualidade e experiência há mais de 70 anos</p>
                </div>
                <div className='grid cols-3'>
                    <div className='card'>
                        <div className='card-icon'>🍟</div>
                        <h3>Qualidade Premium</h3>
                        <p>Ingredientes selecionados e frescos, preparados com cuidado para garantir o melhor sabor.</p>
                    </div>
                    <div className='card'>
                        <div className='card-icon'>⚡</div>
                        <h3>Atendimento Rápido</h3>
                        <p>Serviço eficiente e de qualidade, entrega rápida sem comprometer o sabor.</p>
                    </div>
                    <div className='card'>
                        <div className='card-icon'>❤️</div>
                        <h3>Satisfação Garantida</h3>
                        <p>Seu bem-estar é nossa prioridade, cada refeição é preparada com muito cuidado.</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="stat-item">
                    <h3>40+ Milhões</h3>
                    <p>De clientes diários no mundo</p>
                </div>
                <div className="stat-item">
                    <h3>190+ Países</h3>
                    <p>Com presença McDonald's</p>
                </div>
                <div className="stat-item">
                    <h3>70+ Anos</h3>
                    <p>De tradição e inovação</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Pronto para uma experiência incrível?</h2>
                <p>Visite-nos hoje e descubra o sabor que faz diferença</p>
                <a href="/servicos" className='btn btn--primary btn--large'>Fazer Pedido Agora</a>
            </section>
        </div>
    );
}

export default Home;