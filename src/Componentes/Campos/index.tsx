import './campos.scss'

const Campos = ({type = "string",  placeholder = "string"}) => {
    return(
        <div className='campo'>
            <input 
                type = {type}
                placeholder = {placeholder}
                required = {true}
            />
        </div>
        //Cria os campos que serão reutilizados tanto no formulário quando na página inicial
    )
}

export default Campos;