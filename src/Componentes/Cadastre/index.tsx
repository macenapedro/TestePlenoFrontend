import Cabecalho from "../Cabecalho";
import Campos from "../Campos";
import ListaSuspensa from "../Lista Suspensa";
import './cadastre.scss'
import { Link } from 'react-router-dom'

function Cadastre(){
    const rotas = [{
        label: 'Voltar',
        to: '/'
    }
    ]
    return (
        <section className='formulario-cadastro-container'>
            <header> <Cabecalho /> 
            <div >
                    {rotas.map((rota) => (
                            <h2><Link to={rota.to}>
                                <button className='volta'>
                                    {rota.label}
                                </button>
                            </Link></h2>
                        ))}
                </div>
            </header>
            <form className='formulario-cadastro'>
                <h1>Crie sua conta</h1>
                <h3>Rapido e grátis, vamos nessa</h3>
                <h2>Nome</h2>
                <Campos type="text"
                    placeholder="Digite o seu nome"
                />
                <h2>Email</h2>
                <Campos type="text"
                    placeholder="Digite aqui seu email"
                />
                <h2>Senha</h2>
                <Campos type="text"
                    placeholder="Digite aqui sua senha"
                />
                <h2>Confirmar senha</h2>
                <Campos type="text"
                    placeholder="Confirmar senha"
                />
                <h2>Bio</h2>
                <Campos type="text"
                    placeholder="Fale sobre você"
                />
                <h2>Contato</h2>
                <Campos type="text"
                    placeholder="Opção de contato"
                />
                <h2>Selecionar Cargo</h2>
                <ListaSuspensa />
                <div >
                    {rotas.map((rota) => (
                            <h2><Link to='final'>
                                <button className='cadastrar'>
                                    {'Cadastrar'}
                                </button>
                            </Link></h2>
                        ))}
                </div>
            </form>
        </section>
        //Cria a página de cadastro
    )
}

export default Cadastre;