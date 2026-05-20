import { useState } from 'react'
import './App.css'
import ProveedorCatalogo from './componentes/context/ProveedorCatalogo'
import Menu from "../src/componentes/estructura/Menu"
import Rutas from "../src/componentes/estructura/Rutas"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProveedorCatalogo>
      <Menu />
      <Rutas />
    </ProveedorCatalogo>
    </>
  )
}

export default App
