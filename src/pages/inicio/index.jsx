import './index.scss'

import { Link } from 'react-router-dom'

export default function Inicio() {
    return(
        <div className='pagina-inicio'>
            <header className='cabecalho'>
             <h1 className='titulos1'>
                Estudos De React
                <i className='fa fa-heart'></i>
             </h1>
            </header>

            <ul>
                <li>
                    <Link to='/variaveis'>Ir para as variaveis</Link>
                </li>
                <li>
                <Link to='/contato'>Ir para o contato</Link>
                </li>
            </ul>
        </div>
    )
}