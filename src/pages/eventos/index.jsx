import './index.scss'


export default function Eventos() {

    function clicou() {
        alert('Oiii, o usuário acaboude clicar')
    }

    function mexeumouse() {
        alert('Oiiii, o usuário acabou de mexer o mouse')
    }

    function alterouvalor(e) {
        let novoValor = e.target.value
        alert('oi, o usuário alterou o valor para: ' + novoValor)
    }

    return(
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>React JS | Eventos</h1>
            </header>

            <section className='secao'>
                <h1>Entendendo eventos</h1>

                <p onClick={clicou} onMouseMove={mexeumouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore quas magni mollitia quod dolorum quo nemo soluta? Sapiente consequuntur culpa reiciendis ex velit molestiae ullam modi odit illo non.</p>

                <input onChange={alterouvalor} type='text' placeholder='Digite aqui alguma coisa ' />

                <select>
                    <option>Selecione</option>
                    <option>Item A</option>
                    <option>Item B</option>
                </select>

                <div className='grupo'> 
                <input type='checkbox' /> Opção 1
                <input type='checkbox' /> Opção 2
                </div>
                <div className='grupo'>
                    <div>
                        <input type='radio' name='gpo' /> Opção 1
                    </div>
                    <div>
                        <input type='radio' name='gpo' /> Opção 2
                    </div>
                </div>

                <button onClick={clicou}>Clique aqui</button>
       
            </section>

        </div>
    )
}