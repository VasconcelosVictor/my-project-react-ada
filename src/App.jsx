import { useState } from "react"
import MeuContador from "./components/MeuContador"

function App() {
  const [contador,setContador] = useState(0)

  function aumentar ( ){
    setContador(contador +1 )
  }

  return (
    <MeuContador/>
  )
}

export default App
