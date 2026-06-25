import React, { useState, useEffect } from "react";
import useContextTrabajadores from "../hooks/useContextTrabajadores";
import useContextEvaluaciones from "../hooks/useContextEvaluaciones";
import useContextAsignaciones from "../hooks/useContextAsignaciones";
import useContextProyectos from "../hooks/useContextProyectos";

const FormularioRendimiento = () => {
  const { trabajadores } = useContextTrabajadores();
  const [idTrabajador, setIdTrabajador] = useState("");
  const [idEvaluacion, setIdEvaluacion] = useState("");

  const { modificarEvaluaciones } = useContextEvaluaciones();

  const [evaluaciones, setEvaluaciones] = useState([]);

  const valoresIniciales = { nota: "" };
  const [formulario, setFormulario] = useState(valoresIniciales);
  const [erroresFormulario, setErroresFormulario] = useState({});

  const { obtenerAsignacionesPorTrabajador } = useContextAsignaciones();
  const { obtenerProyectoPorId } = useContextProyectos();
  const { obtenerEvaluacionesPorAsignacion } = useContextEvaluaciones();

  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setEvaluaciones({ ...evaluaciones, [name]: value });
  };

  const verificarFormulario = () => {
    let erroresLocales = {};
    if (formulario.nota < 0 || formulario.nota > 10) {
      erroresLocales.nota = "La nota debe estar en un rango del 0-10";
    }
    setErroresFormulario(erroresLocales);
    return Object.keys(erroresLocales).length === 0;
  };

  const manejarFormulario = async (evento) => {
    evento.preventDefault();
    try {
      if (verificarFormulario()) {
        const evaluacionEncontrada = evaluaciones.find((evaluacion) => {
          return evaluacion.id === idEvaluacion;
        });
        const cuerpo = {
          ...evaluacionEncontrada,
          nota: formulario.nota,
        };
        await modificarEvaluaciones(cuerpo);
        alert("Nota modificada.");
      }
    } catch (error) {
      console.log("Error al manejar el formulario: ", error);
    }
  };

  useEffect(() => {
    if (!idTrabajador) {
      return;
    }
    const cargarEvaluacion = async () => {
      try {
        const asignaciones =
          await obtenerAsignacionesPorTrabajador(idTrabajador);
        const promesas = asignaciones.map(async (asignacion) => {
          const [proyecto, evaluaciones] = await Promise.allSettled([
            obtenerProyectoPorId(asignacion.proyectoId),
            obtenerEvaluacionesPorAsignacion(asignacion.id),
          ]);
          const proyectoLimpio =
            proyecto.status === "fulfilled" ? proyecto.value : null;
          const evaluacionesLimpias =
            evaluaciones.status === "fulfilled" ? evaluaciones.value : [];

          return evaluacionesLimpias.map((evaluacion) =>{
            return {
                ...evaluacion,
                nombreProyecto: proyectoLimpio.nombre
            }
          })
        });

        const resultadoFinal = await Promise.allSettled(promesas);
        const evaluacionFinal = resultadoFinal
          .filter((resultado) => {
            return resultado.status === "fulfilled";
          })
          .map((resultado) => {
            return resultado.value;
          }).flat();

        console.log(evaluacionFinal);
        setEvaluaciones(evaluacionFinal);
      } catch (error) {
        console.log("Error al cargar la evaluacion: ", error);
      }
    };
    cargarEvaluacion();
  }, [idTrabajador]);

  return (
    <>
      <h2>Evaluación de rendimiento</h2>

      <label>Selecciona un trabajador: </label>
      <select
        value={idTrabajador}
        onChange={(e) => {
          setIdTrabajador(e.target.value);
        }}
      >
        {trabajadores.map((trabajador) => {
          return (
            <option key={trabajador.id} value={trabajador.id}>
              {trabajador.nombre}
            </option>
          );
        })}
      </select>

      {idTrabajador && evaluaciones.length && (
        <>
          <label>Selecciona una evaluación del proyecto {evaluaciones.proyecto.nombre}: </label>
          <select value={idEvaluacion} onChange={(e) =>{setIdEvaluacion(e.target.value)}}>
            {evaluaciones.evaluaciones.map((evaluacion) =>{
                return <option key={evaluacion.id}></option>
            })}
          </select>
        </>
      )}
    </>
  );
};

export default FormularioRendimiento;
