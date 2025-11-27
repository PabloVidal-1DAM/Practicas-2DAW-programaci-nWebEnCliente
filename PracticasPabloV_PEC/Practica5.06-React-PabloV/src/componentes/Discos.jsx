import React from "react";
import "./Discos.css";

// Componente que representa a cada disco dentro del estado "listaDiscos", que se pasan como props.
const Discos = ({ listaDiscos, setListaDiscos }) => {

// Se toma el indice cuando se recorren los discos para usarlo en un .filter 
// y borrar el que el usuario seleccione al pulsar su boton.
  const borrarDisco = (indice) => {
    if (confirm("¿Quieres borrar el dato seleccionado?")){
      const nuevaLista = listaDiscos.filter((valor, i) => {
        return i !== indice;
      });
      // Se actualiza el estado con los cambios y se vuelve a dibujar.
      setListaDiscos(nuevaLista);
    }
  };

  return (
    <div>
      <ul>
        {listaDiscos.map((disco, i) => {
          return (
            <div key={i} id="discos" className="discos_css">
              <li>
                <p>Nombre: <strong>{disco.nombre}</strong></p>
              </li>
              <li>
                <p>Carátula: <strong>{disco.caratula}</strong></p>
              </li>
              <li>
                <p>Grupo: <strong>{disco.grupo}</strong></p>
              </li>
              <li>
                <p>Fecha de publicación: <strong>{disco.fechaPublicacion}</strong></p>
              </li>
              <li>
                <p>Género: <strong>{disco.genero}</strong></p>
              </li>
              <li>
                <p>Código ISRC: <strong>{disco.codigo}</strong></p>
              </li>
              <li>
                <p>Prestado: <strong>{disco.prestado ? "Sí" : "No"}</strong></p>
              </li>

              <button onClick={() => borrarDisco(i)}>
                Borrar disco
              </button>

            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Discos;

