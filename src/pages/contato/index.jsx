import './index.scss'
import { Link } from 'react-router-dom'

export default function Contato() {
    
    
    
    return(
        <div className='pagina-contato'>
            <Link to='/'>    
            <img className='seta-voltar' src='/assets/images/seta.jpg' />
            </Link>
            
            <h1>Contato</h1>
            <img className='icone' src='/assets/images/contato.png' />
        </div>
    )
}