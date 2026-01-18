import React, { useEffect, useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Discos.css";
import Disco from "./Disco";
import Cargando from "./Cargando.jsx";
import useDiscos from "../hooks/useDiscos.js";

// Componente que representa a cada disco dentro del estado "listaDiscos", que se pasan como props.
const Discos = () => {
  const {
    listaDiscos,
    cargando,
    eliminarDisco,
    obtenerDiscoPorId,
    setDiscosEditados,
    discosFiltrados
  } = useDiscos();

  const referenciaDiv = useRef(null);
  const rutaActual = useLocation()
  const navegar = useNavigate();

  const datos = rutaActual.pathname === "/filtrado" ? discosFiltrados : listaDiscos; // Si se está en la ruta /filtrado, se usa el estado de discos filtrados.

  // Los mensajes de alerta se acumulan, como solucionarlo?
  useEffect(() => {
    const div = referenciaDiv.current;

    if (div) {
      // solo se añade el evento si existe en el DOM, ya que al estar el componente "Cargando.jsx", este no está ahí y dan errores.
      const manejarClick = async (evento) => {
        const id = evento.target.id;

        if (evento.target.textContent === "Borrar disco") {
          if (confirm("¿Seguro que quieres eliminar este disco?")) {
            eliminarDisco(id);
          }
        }

        if (evento.target.textContent === "Modificar Disco") {
          setDiscosEditados(null); // Se hace un reseteo antes de asignarle el nuevo para evitar problemas de anteriores editados.
          const disco = await obtenerDiscoPorId(id);
          setDiscosEditados(disco);

          navegar(`/discos/${id}`); // Se navega al formulario usando ruta dinámica para editar el disco seleccionado.
        }
      };
      div.addEventListener("click", manejarClick, false);

      return () => {
        div.removeEventListener("click", manejarClick);
      };
    }
  }, [listaDiscos, cargando]);

  return (
    <>
      {cargando ? (
        <Cargando />
      ) : (
        <div ref={referenciaDiv}>
          <ul>
            {datos.map((disco, i) => {
              return <Disco key={i} disco={disco} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Discos;
