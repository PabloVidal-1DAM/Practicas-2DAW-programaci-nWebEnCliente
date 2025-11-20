import { useState } from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Contenedor from '../../practica-react/src/components/Ej4_07/Estructura/Contenedor';
import Cabecera from './componentes/Estructura/Cabecera';
import Contenido from '../../practica-react/src/components/Ej4_07/Estructura/Contenido';
import Pie from '../../practica-react/src/components/Ej4_07/Estructura/Pie';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Contenedor>
          <Cabecera />
            <Contenido>

            </Contenido>
          <Pie />
        </Contenedor>
      </BrowserRouter>
    </>
  )
}

export default App
