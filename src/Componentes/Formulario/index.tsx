import Cabecalho from '../Cabecalho';
import Campos from '../Campos';
import './formulario.scss'
import { Link } from 'react-router-dom'

function Formulario(){
    const rotas = [{
        label: 'Cadastre-se',
        to: '/cadastro'
      }];
    return (
        <>
        <header><Cabecalho /> </header>
        <section className='formulario-container'>            
            <form className='formulario'>
                <h1>Login</h1>
                <h2 className='txt'>Email</h2>
                <Campos
                    type='text'
                    placeholder='Digite o seu email'
                />
                <h2 className='txt'>Senha</h2>
                <Campos
                    type='password'
                    placeholder='Digite sua senha'
                />
                <button className='entrar'>
                    <h2>Entrar</h2>
                </button>
                <h3>Ainda não possui uma conta?</h3>
                <div className='cadastrese'>
                    {rotas.map((rota) => (
                            <h2><Link to={rota.to}>
                                <button>
                                    {rota.label}
                                </button>
                            </Link></h2>
                        ))}
                </div>

            </form>

        </section>
        </>
        //Essa página representa o formulário que o usuário tem que preencher para criar uma conta
    )
}

export default Formulario;