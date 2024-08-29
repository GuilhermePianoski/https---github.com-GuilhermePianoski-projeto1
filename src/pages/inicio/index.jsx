import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio() {
    return(
        <div className='pagina-inicio'>
            <header className='cabecalho'>
             <h1 className='titulo'>
                Estudos De React
                <i className='fa fa-heart'></i>
             </h1>
            </header>

            <div className='secao'>
             <h1 className='titulo2'>
                Estudando React JS
             </h1>

             <ul>
                <li>
                <Link to='/variaveis'>Ir para as variaveis</Link>
                </li>
                <li>
                <Link to='/contato'>Ir para o contato</Link>
                </li>
             </ul>
            </div>
        </div>
    )
}