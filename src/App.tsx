import { useState } from 'react'
import styled from 'styled-components';
import Cabecalho from './Componentes/Cabecalho';

const MainEstilo = styled.div`
    background: #01121f;
`

function App() {
  // const [count, setCount] = useState(0)
  // setCount(1);
  // console.log(count);
  return (
    <MainEstilo>
      <Cabecalho />
      <div>
        <h3>Teste Frontend PL </h3>
      </div>
    </MainEstilo>
  )
}

export default App
