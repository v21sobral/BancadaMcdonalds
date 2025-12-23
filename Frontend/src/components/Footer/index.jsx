// Frontend\src\components\Footer\index.jsx

import './style.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_wrap'>
                <div>
                    <strong>MequiDonald's</strong> - CNPJ: 00.000.000/0001-00
                </div>
                <div>
                    Rua Sem saída, *** - Onde o vento faz a curva - SENAI/OFF
                </div>
                <div className='copy'>
                    © {new Date().getFullYear()} MequiDonalds. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer