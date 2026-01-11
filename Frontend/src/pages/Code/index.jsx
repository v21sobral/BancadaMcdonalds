// Frontend\src\pages\Code\index.jsx

import React, { useState, useEffect } from 'react';
import './style.css';

function Code({ token, usuario }) {
    const [mensagens, setMensagens] = useState([]);
    const [textoAtual, setTextoAtual] = useState('');
    const [tituloAtual, setTituloAtual] = useState('');
    const [mostrarCaixa, setMostrarCaixa] = useState(false);
    const [editandoId, setEditandoId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    // Carregar mensagens do backend
    useEffect(() => {
        async function fetchMensagens() {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:3000/mensagens');
                const data = await res.json();
                setMensagens(data);
            } catch (e) {
                setErro('Erro ao carregar mensagens.');
            }
            setLoading(false);
        }
        fetchMensagens();
    }, []);

    // Garante que o body tenha a classe de fundo amarelo apenas nesta página
    useEffect(() => {
        document.body.classList.add('code-bg-yellow');
        return () => {
            document.body.classList.remove('code-bg-yellow');
        };
    }, []);

    const abrirCaixa = () => {
        setMostrarCaixa(true);
        setTextoAtual('');
        setTituloAtual('');
        setEditandoId(null);
        setErro('');
    };

    const cancelarEdicao = () => {
        setMostrarCaixa(false);
        setTextoAtual('');
        setTituloAtual('');
        setEditandoId(null);
        setErro('');
    };

    const guardarMensagem = async () => {
        const texto = textoAtual.trim();
        const titulo = tituloAtual.trim();
        if (titulo.length === 0) {
            alert('Por favor, digite um título para a mensagem.');
            return;
        }
        if (texto.length === 0) {
            alert('Por favor, digite uma mensagem antes de guardar.');
            return;
        }
        setErro('');
        setLoading(true);
        try {
            if (editandoId !== null) {
                // Editar mensagem existente
                const res = await fetch(`http://localhost:3000/mensagens/${editandoId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ titulo, texto })
                });
                if (!res.ok) throw new Error('Erro ao editar mensagem.');
            } else {
                // Nova mensagem
                const agora = new Date();
                const dataHora = agora.toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                const res = await fetch('http://localhost:3000/mensagens', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ titulo, texto, dataHora })
                });
                if (!res.ok) throw new Error('Erro ao criar mensagem.');
            }
            // Atualiza lista
            const res = await fetch('http://localhost:3000/mensagens');
            setMensagens(await res.json());
            setMostrarCaixa(false);
            setTextoAtual('');
            setTituloAtual('');
            setEditandoId(null);
        } catch (e) {
            setErro('Erro ao salvar mensagem. Faça login novamente.');
        }
        setLoading(false);
    };

    const editarMensagem = (id) => {
        const msg = mensagens.find(m => m.id === id);
        if (msg) {
            setTextoAtual(msg.texto);
            setTituloAtual(msg.titulo || '');
            setMostrarCaixa(true);
            setEditandoId(id);
            setErro('');
        }
    };

    const apagarMensagem = async (id) => {
        if (!window.confirm('Tem certeza que deseja apagar esta mensagem?')) return;
        setErro('');
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3000/mensagens/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error('Erro ao apagar mensagem.');
            // Atualiza lista
            const res2 = await fetch('http://localhost:3000/mensagens');
            setMensagens(await res2.json());
        } catch (e) {
            setErro('Erro ao apagar mensagem. Faça login novamente.');
        }
        setLoading(false);
    };

    const handleTextChange = (e) => setTextoAtual(e.target.value);
    const handleTituloChange = (e) => setTituloAtual(e.target.value);

    return (
        <div className="container code-bg-yellow">
            <h1>📝 Registro de Mensagens</h1>
            {usuario && (
                <button className="register-btn" onClick={abrirCaixa}>
                    ✍️ Registrar
                </button>
            )}
            {erro && <div style={{color:'#e74c3c', margin:'8px 0'}}>{erro}</div>}
            {mostrarCaixa && usuario && (
                <div className="text-box show">
                    <input
                        type="text"
                        value={tituloAtual}
                        onChange={handleTituloChange}
                        placeholder="Título da mensagem"
                        maxLength={100}
                        style={{ width: '100%', marginBottom: '12px', padding: '10px', fontSize: '1.1em', borderRadius: '8px', border: '2px solid #e0e0e0' }}
                        autoFocus
                    />
                    <textarea
                        value={textoAtual}
                        onChange={handleTextChange}
                        placeholder="Digite sua mensagem aqui..."
                        maxLength={3000}
                        style={{ marginBottom: '8px' }}
                    />
                    <div className="char-count">
                        {textoAtual.length} / 3000 caracteres
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                            className="save-btn"
                            onClick={guardarMensagem}
                            disabled={textoAtual.length === 0 || tituloAtual.length === 0 || loading}
                        >
                            {editandoId !== null ? '✏️ Salvar edição' : '💾 Guardar'}
                        </button>
                        <button
                            className="save-btn"
                            onClick={cancelarEdicao}
                            style={{ background: '#95a5a6' }}
                        >
                            ❌ Cancelar
                        </button>
                    </div>
                </div>
            )}
            <div className="messages-container-grid">
                {loading ? (
                    <div className="empty-state">Carregando...</div>
                ) : mensagens.length === 0 ? (
                    <div className="empty-state">Nenhuma mensagem registrada ainda</div>
                ) : (
                    Array.from({ length: Math.ceil(mensagens.length / 5) }).map((_, rowIdx) => (
                        <div className="messages-row" key={rowIdx}>
                            {mensagens.slice(rowIdx * 5, rowIdx * 5 + 5).map((msg, index) => (
                                <div className="message-card" key={msg.id}>
                                    <div className="message-header">
                                        <span className="message-time">📅 {msg.dataHora}</span>
                                        <span className="message-number">#{mensagens.length - (rowIdx * 5 + index)}</span>
                                    </div>
                                    <div style={{fontWeight: 'bold', fontSize: '1.1em', marginBottom: '6px'}}>{msg.titulo}</div>
                                    <div className="message-content">{msg.texto}</div>
                                    {usuario && (
                                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                            <button className="save-btn" style={{padding: '6px 18px', fontSize: '0.95em'}} onClick={() => editarMensagem(msg.id)}>
                                                ✏️ Editar
                                            </button>
                                            <button className="save-btn" style={{background: '#e74c3c', padding: '6px 18px', fontSize: '0.95em'}} onClick={() => apagarMensagem(msg.id)}>
                                                🗑️ Apagar
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Code;