
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Code from './pages/Code';
import Login from './pages/Login';
import './pages/login.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function App() {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [usuario, setUsuario] = useState(() => {
    const u = localStorage.getItem('usuario');
    return u ? JSON.parse(u) : null;
  });

  const handleLogin = (token, usuario) => {
    setToken(token);
    setUsuario(usuario);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  };

  const handleLogout = () => {
    setToken('');
    setUsuario(null);
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  };

  return (
    <Router>
      <Header usuario={usuario} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home onLogin={handleLogin} usuario={usuario} />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/code" element={<Code token={token} usuario={usuario} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
