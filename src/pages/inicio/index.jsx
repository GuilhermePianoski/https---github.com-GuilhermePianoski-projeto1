import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio() {
    return(
        <div className='pagina-inicio pagina'>
            <header className='cabecalho'>
             <h1 className='titulo'>
                Estudos De React
                <i className='fa fa-heart'></i>
             </h1>
            </header>

            <div className='secao'>
             <h1>
                Estudando React JS
             </h1>

             <input type='text' placeholder='Digite aqui' />
             <br /><br />
             <select>
                <option>Item 1</option>
                <option>Item 2</option>
             </select>
             <br /><br />
             <button>Clique aqui</button>

             <ul>
                <li>
                <Link to='/variaveis'>Ir para as variaveis</Link>
                </li>
                <li>
                <Link to='/contato'>Ir para o contato</Link>
                </li>
                <li>
                  <Link to='/eventos'>Ir para eventos</Link>
                </li>
             </ul>
            </div>
        </div>
    )
}