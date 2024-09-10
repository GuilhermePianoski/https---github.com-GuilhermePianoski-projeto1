import './index.scss'
import { useState } from 'react';

export default function Variavel() {
    const [Contador, setContador] = useState(0);
    const [tituloS2, setTituloS2] = useState('Oie');
    const [tituloS3, setTituloS3] = useState('Escolha um item');
    const [marcouOpcaoS4, setMarcouOpcaoS4] = useState(false);
    const [tituloS5, setTituloS5] = useState('Oie');
    const [descricaoS5, setDescricaoS5] = useState('Oiii');

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

       function alterarTituloS2(e) {
         let novoValor = e.target.value;
         setTituloS2(novoValor);
       }

       function alterarTituloS3(e) {
        let novoValor = e.target.value;
        setTituloS3(novoValor);
      }

      function alterarOpcaos4(e) {
        let novoValor = e.target.value.checked;
        setMarcouOpcaoS4(novoValor)
      }

      function alterarDescricaoS5(e) {
        let novoValor = e.target.value;
        setDescricaoS5(novoValor);
      }

      function alterarTituloS5() {
         setTituloS5(descricaoS5);
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

            <div className='secao'>
                <h1> {tituloS2} </h1>
                <input type='text' value={tituloS2} onChange={alterarTituloS2} />
            </div>

            <div className='secao'>
                <h1> {tituloS3} </h1>
                <select onChange={alterarTituloS3}>
                    <option>Selecione</option>
                    <option>Javascript</option>
                    <option>Html/Css</option>
                    <option>ReactJS</option>
                </select>
            </div>

        
            <div className='secao'>
                <h1> Programar é lindo? {marcouOpcaoS4 ? 'Sim' : 'Não'} </h1>
                <input type='checkbox' checked={marcouOpcaoS4} onChange={alterarOpcaos4} /> Programar é lindo?
            </div>
            
            <div className='secao'>
                <h1> {tituloS5} </h1>
                <input type='text' value={descricaoS5} onChange={alterarDescricaoS5} />

                <button onClick={alterarTituloS5}>Alterar</button>
            </div>


        </div>
    )
}


//'?' = "Se"