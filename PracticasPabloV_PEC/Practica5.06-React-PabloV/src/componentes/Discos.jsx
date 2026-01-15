import React, { useEffect, useContext, useRef } from "react";
import "./Discos.css";
import Disco from "./Disco";
import Cargando from "./Cargando.jsx";
import { contextoDiscos } from "../componentes/Proveedor.jsx";

// Componente que representa a cada disco dentro del estado "listaDiscos", que se pasan como props.
const Discos = () => {
  const { listaDiscos, setListaDiscos, cargando, eliminarDisco} = useContext(contextoDiscos);
  const referenciaDiv = useRef(null);

  // Los mensajes de alerta se acumulan, como solucionarlo?
  useEffect(() => {
    const div = referenciaDiv.current;

    if (div) {
      // solo se añade el evento si existe en el DOM, ya que al estar el componente "Cargando.jsx", este no está ahí y dan errores.
      const manejarClick = (evento) => {
        if (evento.target.textContent === "Borrar disco") {
          const id = evento.target.id;

          if (confirm("¿Seguro que quieres eliminar este disco?")) {
            eliminarDisco(id);
          }
        }

        if (evento.target.textContent === "Modificar Disco"){
          
        }
      };
      div.addEventListener("click", manejarClick, false);

      return () => {
        div.removeEventListener("click", manejarClick);
      };
    }
  }, [listaDiscos, cargando]);

  return (
    <>
      {cargando ? (
        <Cargando />
      ) : (
        <div ref={referenciaDiv}>
          <ul>
            {listaDiscos.map((disco, i) => {
              return <Disco key={i} disco={disco} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Discos;
