import Contenedor from "../src/componentes/Estructura/Contenedor.jsx";
import "./App.css";
import Cabecera from "../src/componentes/Estructura/Cabecera.jsx";
import Pie from "../src/componentes/Estructura/Pie.jsx";
import Menu from "./componentes/Estructura/Menu.jsx";
import SupabaseAcciones from "./componentes/Estructura/supabase/SupabaseAcciones.jsx";
import Contenido from "../../Practica5.06-React-PabloV/src/componentes/Estructura/Contenido.jsx";
import ProveedorSesion from "./componentes/context/ProveedorSesion.jsx";
import Rutas from "./componentes/Estructura/Rutas.jsx";
import Cargando from "./componentes/Cargando.jsx"
import ProveedorProductos from "./componentes/context/ProveedorProductos.jsx";
import Errores from "./componentes/Errores.jsx";

function App() {
  return (
    <>
      {/* Ya que la sesión suele ser algo que se acaba usando en cualquier rincón de la app, se engloba el proveedor que la ofrece a toda la interfaz. */}
      <ProveedorSesion>
        <Contenedor>
          <Cabecera />
          <div className="navbar-principal">
            <Menu />
            <SupabaseAcciones />
          </div>

          <Contenido>
            <ProveedorProductos>
              <Cargando>
                <Rutas />
              </Cargando>
            </ProveedorProductos>
          </Contenido>
          <Errores />
          <Pie />
        </Contenedor>
      </ProveedorSesion>
    </>
  );
}

export default App;
