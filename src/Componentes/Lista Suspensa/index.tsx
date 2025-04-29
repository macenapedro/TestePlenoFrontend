import './lista-suspensa.scss'

function ListaSuspensa(){
    return(
        <form>
            <select className='cargo' required={true}>
                <option><p>Desenvolvedor Front-End</p></option>
                <option><p>Desenvolvedor Back-End</p></option>
                <option><p>UX</p></option>
                <option><p>QA</p></option>
            </select>
        </form>
        //Essa aplicação é a responsável para a criação da janela suspensa para o usuário adicionar seu cargo
    )
}

export default ListaSuspensa;