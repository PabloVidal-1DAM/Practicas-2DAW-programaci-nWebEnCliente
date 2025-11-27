import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Contenedor from "../../practica-react/src/components/Ej4_07/Estructura/Contenedor";
import Cabecera from "./componentes/Estructura/Cabecera";
import Contenido from "../../practica-react/src/components/Ej4_07/Estructura/Contenido";
import Pie from "../../practica-react/src/components/Ej4_07/Estructura/Pie";
import Rutas from "./componentes/Rutas";
import Menu from "./componentes/Menu";

// NOTA: Antes de empezar, la lógica de React y formularios me sigue chocando, puede que encuentres cosas que no tengan demasiado sentido 
// y se pueda simplificar mucho más, no tengo problema en escuchar feedback para incluso rehacer esta práctica de 0, ya que no quiero flojear en React.

function App() {

  // En App estan los estados que van a compartir los componentes.
  // lo he pensado así ya que existen componentes como "Disco" que estan en Rutas.jsx y necesita la lista.
  const [listaDiscos, setListaDiscos] = useState(() => {
    // Se accede al localStorage y solo si contiene datos, serán sus valores iniciales.
    const datosGuardados = localStorage.getItem("listaDiscos");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [discosFiltrados, setDiscosFiltrados] = useState([]);
  const [discoBorrado, setDiscoBorrado] = useState([]);

  // Cada vez que el estado de "listaDiscos" se modifique, saltará este useEffect donde guarda los cambios en el Local Storage.
  useEffect(() => {
    localStorage.setItem("listaDiscos", JSON.stringify(listaDiscos));
  }, [listaDiscos]);

  return (
    <BrowserRouter>
      <Contenedor>
        <Cabecera />
        <Menu />

        <Contenido>
          <Rutas
            listaDiscos={listaDiscos}
            setListaDiscos={setListaDiscos}

            discosFiltrados={discosFiltrados}
            setDiscosFiltrados={setDiscosFiltrados}
            
            discoBorrado={discoBorrado}
            setDiscoBorrado={setDiscoBorrado}
          />
        </Contenido>

        <Pie />
      </Contenedor>
    </BrowserRouter>
  );
}

export default App;
