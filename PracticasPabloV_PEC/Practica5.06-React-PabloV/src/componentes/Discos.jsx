import React from "react";

const Discos = ({listaDiscos}) => {
  return (
    <div>
      <ul>
        {listaDiscos.map((disco, i) => {
          return (
            <div key={i} id="discos" className="discos_css">
              <li>
                <p>
                  Nombre: <strong>{disco.nombre}</strong>
                </p>
              </li>
              <li>
                <p>
                  Carátula: <strong>{disco.caratula}</strong>
                </p>
              </li>
              <li>
                <p>
                  Grupo: <strong>{disco.grupo}</strong>
                </p>
              </li>
              <li>
                <p>
                  Fecha de publicación:{" "}
                  <strong>{disco.fechaPublicacion}</strong>
                </p>
              </li>
              <li>
                <p>
                  Género: <strong>{disco.genero}</strong>
                </p>
              </li>
              <li>
                <p>
                  Código ISRC: <strong>{disco.codigo}</strong>
                </p>
              </li>
              <li>
                <p>
                  Prestado: <strong>{disco.prestado ? "Sí" : "No"}</strong>
                </p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Discos;
