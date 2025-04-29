import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastre from '../Cadastre';
import Formulario from '../Formulario';
import './main.scss'
import Final from '../Final';

function Main(){
    return(
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<Formulario/>} /> 
                    <Route path='cadastro' element={<Cadastre/>} /> 
                    <Route path='cadastro/final' element={<Final/>} /> 
                </Routes>
            </Router>
        </main>
        //Os route setam os caminhos usados para a criação da rota de redirecionamento da página

    )
}

export default Main;