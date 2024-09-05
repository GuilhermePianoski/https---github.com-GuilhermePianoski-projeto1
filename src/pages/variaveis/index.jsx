import './index.scss'
import { useState } from 'react';

export default function Variavel() {
    const [Contador, setContador] = useState(0);

    //let Contador = 0
        function aumentar() {
             //contador = contador + 1
             if (Contador < 10) {
                setContador(Contador + 1)
             }
        }

        function diminuir() {
            //contador = contador - 1
            if (Contador > 0) {
                setContador(Contador - 1)
            } 
       }


    return(
        <div className='pagina-variaveis pagina'>
            <header className='cabecalho>'>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <div className='secao'>
                <h1> Contador </h1>

                <div className='cont'>  
                  <button onClick={aumentar}>+</button>
                  {Contador}
                  <button onClick={diminuir}>-</button>
                  </div>

            </div>
        </div>
    )
}
