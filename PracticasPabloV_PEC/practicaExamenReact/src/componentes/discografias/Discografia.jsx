import React from "react";
import useContextCatalogo from "../hook/useContextCatalogo";

const Discografia = ({ discografica }) => {
  const {borrarItem} = useContextCatalogo();
  return (
    <div>
      <h3>{discografica.nombre}</h3>

      <p>
        <strong>Sede:</strong>
        {discografica.sede}
      </p>

      <button onClick={() =>{borrarItem(`/discograficas/${discografica.id}`)}}>Borrar</button>
    </div>
  );
};

export default Discografia;
