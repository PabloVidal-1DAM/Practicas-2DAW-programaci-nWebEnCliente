import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContextTrabajadores from "../hooks/useContextTrabajadores";
import useContextAsignaciones from "../hooks/useContextAsignaciones";
import useContextProyectos from "../hooks/useContextProyectos";
import useContextEvaluaciones from "../hooks/useContextEvaluaciones";

const Plantilla = () => {
  const { id } = useParams();

  const { obtenerTrabajadoresPorEmpresa } = useContextTrabajadores();
  const { obtenerAsignacionesPorTrabajador } = useContextAsignaciones();
  const { obtenerProyectoPorId } = useContextProyectos();
  const { obtenerEvaluacionesPorAsignacion } = useContextEvaluaciones();

  const [plantilla, setPlantilla] = useState([]);

  const construirPerfil = async () => {
    try {
      const asignaciones = await obtenerAsignacionesPorTrabajador(id);

      const promesas = asignaciones.map(async (asignacion) => {
        const [proyectos, evaluaciones] = await Promise.allSettled([
          obtenerProyectoPorId(asignacion.proyectoId),
          obtenerEvaluacionesPorAsignacion(asignacion.id),
        ]);

        const proyectoLimpio =
          proyectos.status === "fulfilled" ? proyectos.value : null;
        const evaluacionesLimpias =
          evaluaciones.status === "fulfilled" ? evaluaciones.value : [];

        let media = 0;
        const sumaTotal = evaluacionesLimpias.reduce(
          (acumulador, evaluacion) => acumulador + evaluacion.nota,
          0,
        );
        media = sumaTotal / evaluacionesLimpias.length;

        return {
          proyecto: proyectoLimpio,
          media: media.toFixed(1),
          evaluaciones: evaluacionesLimpias,
        };
      });

      const resultadoFinal = await Promise.allSettled(promesas);
      const plantilla = resultadoFinal
        .filter((resultado) => {
          return resultado.status === "fulfilled";
        })
        .map((resultado) => {
          return resultado.value;
        });

      console.log(plantilla);
      setPlantilla(plantilla);
    } catch (error) {
      console.log("Error al construir el perfil: ", error);
    }
  };

  useEffect(() => {
    if (id) {
      construirPerfil();
    }
  }, [id]);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Perfil del Trabajador</h2>
      <hr />

      {/* Recorremos la lista completa */}
      {plantilla.map((elemento, i) => {
        return (
          <div
            key={i}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            {/* 1. Nombre y horas del proyecto */}
            <h3>
              Proyecto: {elemento.proyecto?.nombre} -{" "}
              <span style={{ color: "green" }}>
                {elemento.proyecto?.horas} horas
              </span>
            </h3>

            {/* 2. La media */}
            <p style={{ fontWeight: "bold" }}>
              Nota Media:{" "}
              <span style={{ color: "blue" }}>{elemento.media}</span>
            </p>

            {/* 3. El listado de evaluaciones de ESTE proyecto */}
            <h4>Evaluaciones:</h4>
            <ul>
              {elemento.evaluaciones.map((evaluacion) => {
                return (
                  <li key={evaluacion.id}>
                    {evaluacion.titulo} -{" "}
                    <strong>Nota: {evaluacion.nota}</strong>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Plantilla;
