import React, { useEffect, useContext, useRef } from "react";
import "./Discos.css";
import Disco from "./Disco";
import Cargando from "./Cargando.jsx";
import { contextoDiscos } from "../componentes/Proveedor.jsx";

// Componente que representa a cada disco dentro del estado "listaDiscos", que se pasan como props.
const Discos = () => {
  const { listaDiscos, setListaDiscos, cargando} = useContext(contextoDiscos);
  const referenciaDiv = useRef(null);

  // Se toma el indice cuando se recorren los discos para usarlo en un .filter
  // y borrar el que el usuario seleccione al pulsar su boton.
  const borrarDisco = (indice) => {
    if (confirm("¿Quieres borrar el dato seleccionado?")) {
      const nuevaLista = listaDiscos.filter((valor, i) => {
        return i !== indice;
      });
      // Se actualiza el estado con los cambios y se vuelve a dibujar.
      setListaDiscos(nuevaLista);
    }
  };

  // Los mensajes de alerta se acumulan, como solucionarlo?
  useEffect(() => {
    const div = referenciaDiv.current;

    if (div) {
      // solo se añade el evento si existe en el DOM, ya que al estar el componente "Cargando.jsx", este no está ahí y dan errores.
      const manejarClick = (evento) => {
        if (evento.target.tagName === "BUTTON") {
          const id = parseInt(evento.target.id);
          borrarDisco(id);
        }
      };
      div.addEventListener("click", manejarClick, false);

      return () => {
        div.removeEventListener("click", manejarClick);
      };
    }
  }, [listaDiscos]);

  return (
    <>
      {cargando ? (
        <Cargando />
      ) : (
        <div ref={referenciaDiv}>
          <ul>
            {listaDiscos.map((disco, i) => {
              return <Disco key={i} disco={disco} i={i} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Discos;
