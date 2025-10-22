import React, { useRef } from "react";
import taquillaPelicula from "../../json/Peliculas.json";
import {ocultar} from "./biblioteca.js"
import "./Taquilla.css";

const Taquilla = () => {
  // Importación de la taquilla de manera externa, desde un JSON.
  const taquilla = taquillaPelicula;
  // Referencia que por el momento no apunta a nada.
  const referenciaTaquilla = useRef(null);

  return (
    <>
      <div className="taquilla">
        <button
          onClick={() => {
            // Llamada a función externa que se encarga de ocultar la referencia.
            ocultar(referenciaTaquilla);
          }}
        >
          Taquilla
        </button>
        
        {/*Se recorre el JSON si contiene información y se devuelve una etiqueta <p> que contiene la información de la taquilla.*/}
        {taquilla.Peliculas.length > 0 ? (
            taquilla.Peliculas.map((pelicula,indice,array) =>{
               {/* Con ref={} se le aplica la referencia instanciada al principio, ahora apunta a esa etiqueta <p>*/}
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
