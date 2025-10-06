import React, { useState } from "react";
import "./ContadorLikes.css";
import Contador from "./Contador";

const ContadorLikes = () => {
  // Se crean dos estados, que guardarán los likes y dislikes, se inicializan como un array vacío.
  let [likes, setLikes] = useState([]);
  let [dislikes, setDislikes] = useState([]);

  // Ambas funciones hacen lo mismo: incrementan el array.
  const darLike = () => {
    setLikes([...likes, likes.length + 1]);
  };

  const darDislike = () => {
    setDislikes([...dislikes, dislikes.length + 1]);
  };

  return (
    <>
      <div className="ContadorLimite">
        <h1>Contador de Likes</h1>
        <img src="https://i.pinimg.com/736x/bc/41/3e/bc413e725a0597e9ba2b1767cdca166b.jpg" />

        <div className="botones">
          <button
            className="btnLike"
            onClick={() => {
              darLike();
            }}
          >
            Like
          </button>

          <button
            className="btnDislike"
            onClick={() => {
              darDislike();
            }}
          >
            Dislike
          </button>
        </div>
        
        <div className="likes">
           {/*Se comprueba que el estado sea un array y que contenga datos.*/}
        {Array.isArray(likes) && likes.length >= 0 ?
        // Se recorre el array y se llama al componente "Contador" que representa a cada número dentro del array.
           likes.map((like, indice, array) => {
              return <Contador key={indice} dato={indice + 1} />;
            })
          : "No existe ningún contador"}
        </div>
        
        <div className="dislikes">
          {/*Misma lógica que arriba.*/}
        {Array.isArray(dislikes) && dislikes.length >= 0
          ? dislikes.map((dislike, indice, array) => {
              return <Contador key={indice} dato={indice + 1} />;
            })
          : "No existe ningún contador"}
        </div>
      </div>
    </>
  );
};

export default ContadorLikes;
