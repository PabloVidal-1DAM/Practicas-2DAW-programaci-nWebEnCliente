import React from "react";
import useAuth from "./hooks/useAuth";
import "./Confirmacion.css";

const Confirmacion = () => {
  const { AccionConfirmacion, mensajeAccion, confirmarMensaje, cerrarMensaje } =
    useAuth();

  return (
    <>
      {AccionConfirmacion && (
        <div className="modal-confirmacion-overlay">
          <div className="modal-confirmacion-contenido">
            <h3>¿Estás seguro?</h3>
            <p>{mensajeAccion}</p>

            <div className="modal-confirmacion-botones">
              <button className="btn-cancelar" onClick={cerrarMensaje}>
                No, cancelar
              </button>
              <button className="btn-confirmar" onClick={confirmarMensaje}>
                Sí, continuar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Confirmacion;
