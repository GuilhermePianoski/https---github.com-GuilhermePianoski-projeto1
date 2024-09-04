import './index.scss'


export default function Eventos() {

    return(
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>React JS | Eventos</h1>
            </header>

            <section className='secao'>
                <h1>Entendendo eventos</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore quas magni mollitia quod dolorum quo nemo soluta? Sapiente consequuntur culpa reiciendis ex velit molestiae ullam modi odit illo non.</p>

                <input type='text' placeholder='Digite aqui alguma coisa ' />

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

                <button>Clique aqui</button>
       
            </section>

        </div>
    )
}