import React, { useState } from "react";
import { traerDatos } from "../biblioteca/biblioteca.js";

const InterpretePilota = ({ personaje }) => {
  const [transportes, setTransportes] = useState([]);
  const [mostrarFicha, setMostrarFicha] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const traerVehiculos = async () => {
    // Se fusiona la parte "vehicles" y "starships" en uno solo para traer su información más tarde.
    const urlsTransportes = [...personaje.starships, ...personaje.vehicles];

    if (transportes.length > 0 || mostrarFicha) {
      // Si ya se dispone de datos de la API, no se llama.
      setMostrarFicha(!mostrarFicha);
      setMensaje(""); 
    } else if (urlsTransportes.length === 0) {
      // Si el interprete no tiene ni naves ni vehiculos, se informa al usuario de esto.
      setMensaje("Este personaje no pilota naves ni vehículos.");
    } else {
      // Se llama a la API.
      try {
        const promesas = urlsTransportes.map((url) => traerDatos(url));
        const resultados = await Promise.all(promesas);
        setTransportes(resultados);
        setMostrarFicha(true);
        setMensaje(""); // Limpiar anteriores mensajes de información.
      } catch (error) {
        setMensaje("Hubo un error al obtener los datos de la flota.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="ficha-personaje">
      <h4>{personaje.name}</h4>
      <button onClick={traerVehiculos}>Pilota</button>

      {/* Mesnaje de Información. */}
      {mensaje !== "" ? (
        <p className="mensaje-alerta" style={{ color: "orange", fontWeight: "bold" }}>
          {mensaje}
        </p>
      ) : null}

      {/* Si el estado de "mostrarFicha" es true, se muestran las naves y vehículos. */}
      {mostrarFicha ? (
        <div className="contenedor-naves">
          {transportes.length > 0 ? (
            transportes.map((t, i) => (
              <div key={i} className="nave-card">
                <p><strong>Nombre:</strong> {t.name}</p>
                <p><strong>Modelo:</strong> {t.model}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron datos de naves.</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default InterpretePilota;