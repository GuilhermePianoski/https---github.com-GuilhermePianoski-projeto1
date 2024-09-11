import './index.scss'
import { useState } from 'react';

export default function Variavel() {
    const [Contador, setContador] = useState(0);
    const [tituloS2, setTituloS2] = useState('Oie');
    const [tituloS3, setTituloS3] = useState('Escolha um item');
    const [marcouOpcaoS4, setMarcouOpcaoS4] = useState(false);
    const [tituloS5, setTituloS5] = useState('Oie');
    const [descricaoS5, setDescricaoS5] = useState('Oiii');

    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const[res, setRes] = useState(0);

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

      function somar() {
        let soma = Number(num1) + Number(num2);
        setRes(soma);
      }

    return(
        <div className='pagina-variaveis pagina'>
            <header className='cabecalho>'>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <div className='secao calculadora'>
                <h1> Calculadora </h1>
                <div className='entrada'>
                    <input type='text' value={num1} onChange={e => setNum1(e.target.value)} />
                    <input type='text' value={num2} onChange={e => setNum2(e.target.value)} />
                    <div>=</div>
                    <div className='res'> {res} </div>
                </div>
                <button onClick={somar}> Somar </button>
            </div>

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
                <input type='text' value={tituloS2} onChange={e => setTituloS2(e.target.value)} />
            </div>

            <div className='secao'>
                <h1> {tituloS3} </h1>
                <select onChange={e => setTituloS3(e.target.value)}>
                    <option>Selecione</option>
                    <option>Javascript</option>
                    <option>Html/Css</option>
                    <option>ReactJS</option>
                </select>
            </div>

        
            <div className='secao'>
                <h1> Programar é lindo? {marcouOpcaoS4 ? 'Sim' : 'Não'} </h1>
                <input type='checkbox' checked={marcouOpcaoS4} onChange={e => setMarcouOpcaoS4(e.target.checked)} /> Programar é lindo?
            </div>
            
            <div className='secao'>
                <h1> {tituloS5} </h1>
                <input type='text' value={descricaoS5} onChange={e => setDescricaoS5(e.target.value)} />

                <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
            </div>


        </div>
    )
}


//'?' = "Se"