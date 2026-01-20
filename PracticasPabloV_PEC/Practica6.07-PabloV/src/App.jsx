import {BrowserRouter} from "react-router-dom";
import Contenedor from "../src/componentes/Estructura/Contenedor.jsx";
import "./App.css";
import Cabecera from "../src/componentes/Estructura/Cabecera.jsx";
import Menu from './componentes/Estructura/Menu.jsx';
import SupabaseAcciones from './componentes/Estructura/supabase/SupabaseAcciones.jsx';
import Contenido from '../../Practica5.06-React-PabloV/src/componentes/Estructura/Contenido.jsx';
import Productos from "./componentes/Productos.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Contenedor>
        <Cabecera />
        <Menu />
        <SupabaseAcciones />

        <Contenido>
          <Productos />
        </Contenido>
      </Contenedor>
    </BrowserRouter>
    </>
  )
}

export default App
