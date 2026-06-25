import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContextMatriculas from "../hooks/useContextMatrículas";
import useContextModulos from "../hooks/useContextModulos";
import useContextPracticas from "../hooks/useContextPracticas";

const ExpedienteDiscentes = () =>{
  const {id} = useParams();
  const [expedienteFinal, setExpedienteFinal] = useState([]);

  const {obtenerMatriculaPorDiscente} = useContextMatriculas();
  const {obtenerModuloPorId} = useContextModulos();
  const {obtenerPracticasPorMatricula} = useContextPracticas();

  const cargarExpediente = async() =>{
    const matriculas=  await obtenerMatriculaPorDiscente(id);
    
    const promesas = matriculas.map(async(matricula) =>{
      const [modulo, practicas] = await Promise.allSettled([
        obtenerModuloPorId(matricula.moduloId),
        obtenerPracticasPorMatricula(matricula.id)
      ]);

      const moduloLimpio = modulo.status === "fulfilled" ? modulo.value : null;
      const practicasLimpias = practicas.status === "fulfilled" ? practicas.value : [];

      let media = 0;
      const sumaTotal = practicasLimpias.reduce((acumulador, practica) => acumulador + practica.nota, 0);
      media = sumaTotal / practicasLimpias.length;

      return{
        modulo: moduloLimpio,
        media: media.toFixed(1),
        practicas: practicasLimpias
      }
    });

    const resultadoFinal = await Promise.allSettled(promesas);
    const expedienteFinal = resultadoFinal.filter((resultado) =>{
      return resultado.status === "fulfilled"
    }).map((resultado) =>{
      return resultado.value
    });
    console.log(expedienteFinal);
    setExpedienteFinal(expedienteFinal);
  }

  useEffect(() =>{
    if(id){
      cargarExpediente();
    }
  }, [id]);

  return(
    <>
    <h3>Expediente Completo</h3>
    {expedienteFinal.map((expediente, i) =>{
      return <div key={i}>
        <p><span style={{color: "orange"}}>Modulo: </span>{expediente.modulo.nombre}</p>
        <h3>Practicas</h3>
        <ul>
          {expediente.practicas.map((practica) =>{
            return <li key={practica.id}>{practica.titulo}</li>
          })}
        </ul>
      </div>
    })}
    </>
  );
}

export default ExpedienteDiscentes;