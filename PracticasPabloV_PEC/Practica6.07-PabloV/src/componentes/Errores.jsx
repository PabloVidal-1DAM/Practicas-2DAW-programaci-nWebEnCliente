import React from "react";
import useAuth from "./hooks/useAuth";
import "./Errores.css";

const Errores = () => {
  const { error, setError } = useAuth();
  return (
    <>
      {error !== "" && (
        <div className="alerta-neutra">
          <div className="alerta-contenido">
            <span className="alerta-icono">💬</span>
            <p>{error}</p>
          </div>

          <button className="alerta-cerrar" onClick={() => setError("")}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Errores;
