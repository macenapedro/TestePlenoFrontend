import { useState, useEffect } from 'react'
import Main from './Componentes/Main'


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []); // executa apenas uma vez após a primeira renderização

  console.log(count);
  return (
      <Main/>
  )
}

export default App;
