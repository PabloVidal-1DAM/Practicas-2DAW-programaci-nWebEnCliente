import { useState } from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Contenedor from '../../practica-react/src/components/Ej4_07/Estructura/Contenedor';
import Cabecera from './componentes/Estructura/Cabecera';
import Contenido from '../../practica-react/src/components/Ej4_07/Estructura/Contenido';
import Pie from '../../practica-react/src/components/Ej4_07/Estructura/Pie';
import Rutas from './componentes/Rutas';
import Menu from './componentes/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Contenedor>
          <Cabecera />
          <Menu />
            <Contenido>
              <Rutas />
            </Contenido>
          <Pie />
        </Contenedor>
      </BrowserRouter>
    </>
  )
}

export default App
