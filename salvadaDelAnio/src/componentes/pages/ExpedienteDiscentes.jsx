import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useContextMatriculas from "../hooks/useContextMatrículas";
import useContextModulos from "../hooks/useContextModulos";
import useContextPracticas from "../hooks/useContextPracticas";

const ExpedienteDiscentes = () => {
  const { id } = useParams();

  const [expedienteCompleto, setExpedienteCompleto] = useState([]);
  const [cargandoExpediente, setCargandoExpediente] = useState(false);

  const { obtenerMatriculaPorDiscente } = useContextMatriculas();
  const { obtenerModuloPorId } = useContextModulos();
  const { obtenerPracticasPorMatricula } = useContextPracticas();

  const constuirExpediente = async () => {
    setCargandoExpediente(true);
    try {
      const matriculasAlumno = await obtenerMatriculaPorDiscente(id);

      const promesas = matriculasAlumno.map(async (matricula) => {
        const [modulo, practicas] = await Promise.allSettled([
          obtenerModuloPorId(matricula.moduloId),
          obtenerPracticasPorMatricula(matricula.id),
        ]);

        const moduloLimpio =
          modulo.status === "fulfilled" ? modulo.value : null;
        const practicasLimpias =
          practicas.status === "fulfilled" ? practicas.value : [];

        let media = 0;
        const sumaTotal = practicasLimpias.reduce(
          (acumulador, practica) => acumulador + practica.nota,
          0,
        );
        media = sumaTotal / practicasLimpias.length;

        return {
          modulo: moduloLimpio,
          media: media.toFixed(1),
          practicas: practicasLimpias,
        };
      });

      const resultadoFinal = await Promise.allSettled(promesas);
      const expediente = resultadoFinal
        .filter((resultado) => resultado.status === "fulfilled")
        .map((resultado) => resultado.value);

      setExpedienteCompleto(expediente);

      console.log(expediente);
    } catch (error) {
      console.log("Ha ocurrido un error al crear el expediente: ", error);
    } finally {
      setCargandoExpediente(false);
    }
  };

  useEffect(() => {
    if (id) {
      constuirExpediente();
    }
  }, [id]);
  return (
    <>
      {cargandoExpediente ? (
        <div>Cargando Expediente, porfavor espera...</div>
      ) : (
        <div>
          <h2>Expediente del Alumno</h2>
          <br />
          {expedienteCompleto.map((item, i) => {
            return (
              <div key={i}>
                <h3>Modulo: {item.modulo.nombre}</h3>
                <p>
                  Nota media:{" "}
                  <span style={{ color: "blue" }}>{item.media}</span>
                </p>
                <h4 style={{ color: "green" }}>Practicas:</h4>
                <ul>
                  {item.practicas.map((practica) => {
                    return <li key={practica.id}>{practica.titulo} - {practica.nota}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ExpedienteDiscentes;
