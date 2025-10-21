import React, { useRef } from "react";
import taquillaPelicula from "../../json/Peliculas.json";
import "./Taquilla.css";

const Taquilla = () => {
  const taquilla = taquillaPelicula;
  const referenciaTaquilla = useRef(null);

  const ocultarTaquilla = (referencia) => {
    referencia.current.classList.toggle("ocultar");
  };
  return (
    <>
      <div className="taquilla">
        <button
          onClick={() => {
            ocultarTaquilla(referenciaTaquilla);
          }}
        >
          Taquilla
        </button>

        {taquilla.Peliculas.length > 0 ? (
            taquilla.Peliculas.map((pelicula,indice,array) =>{
                return (
                    <p key={indice} ref={referenciaTaquilla} className="ocultar">{pelicula.taquilla}</p>
                )
            })
        ) : ("No hay Información")}
        
      </div>
    </>
  );
};

export default Taquilla;
