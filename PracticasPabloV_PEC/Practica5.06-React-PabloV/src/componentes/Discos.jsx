import React, { useEffect, useRef } from "react";
import "./Discos.css";
import Disco from "./Disco";

// Componente que representa a cada disco dentro del estado "listaDiscos", que se pasan como props.
const Discos = ({ listaDiscos, setListaDiscos }) => {
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
    div.addEventListener(
      "click",
      (evento) => {
        if (evento.target.tagName === "BUTTON") {
          const id = parseInt(evento.target.id);
          borrarDisco(id);
        }
      },
      false
    );
  }, [listaDiscos]);

  return (
    <div ref={referenciaDiv}>
      <ul>
        {listaDiscos.map((disco, i) => {
          return (
            <Disco key={i} disco={disco} i={i} />
          );
        })}
      </ul>
    </div>
  );
};

export default Discos;
