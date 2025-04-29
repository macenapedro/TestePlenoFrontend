import Cabecalho from '../Cabecalho';
import './final.scss'
import { Link } from 'react-router-dom'

function Final(){
    const rotas = [{
        label: 'Sair',
        to: '/'
    }]
    return(
        <section className='final'>
            <header className='cabecalho-final'>
                <div className='cima'>
                    <Cabecalho/>
                    <div className='botao-sair'>
                        {rotas.map((rota) => (
                                <Link to={rota.to}>
                                    <button className='sair'>
                                        {rota.label}
                                    </button>
                                </Link>
                            ))}
                    </div>
                </div>
            </header>
        </section>
        //Essa é a última página quando o usuário clica em se cadastrar
    )
}
export default Final;