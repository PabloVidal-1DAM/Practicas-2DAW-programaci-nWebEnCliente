import React, { useEffect, useState } from "react";
import useContextDiscentes from "../hooks/useContextDiscentes";
import useContextPracticas from "../hooks/useContextPracticas";
import useContextMatriculas from "../hooks/useContextMatrículas";
import useContextModulos from "../hooks/useContextModulos";

const FormularioNotas = () =>{

  const {discentes} = useContextDiscentes();
  const [idDiscente, setIdDiscente] = useState("");
  const [idPractica, setIdPractica] = useState("");
  const [practicas, setPracticas] = useState([]);

  const valoresInciales = {nota: ""}
  const [formulario, setFormulario] = useState(valoresInciales);
  const [erroresFormulario, setErroresFormulario] = useState({});

  const {modificarPractica, obtenerPracticasPorMatricula} = useContextPracticas();

  const {obtenerMatriculaPorDiscente} = useContextMatriculas();
  const {obtenerModuloPorId} = useContextModulos();

  const actualizarDato = (evento) =>{
    const {name, value} = evento.target;
    setFormulario({...formulario, [name]: value});
  }

  const verificarFormulario = () =>{
    let erroresLocales = {};
    if(formulario.nota < 0 || formulario.nota > 10){
      erroresLocales.nota = "La nota debe tener un rango del 0-10"
    }
    setErroresFormulario(erroresLocales);
    return Object.keys(erroresLocales).length === 0;
  }

  const manejarFormulario = async(evento) =>{
    evento.preventDefault();
    try{
      if(verificarFormulario()){
        const practicaEncontrada = practicas.find((practica) =>{
          return practica.id === idPractica
        });
        const cuerpo = {
          ...practicaEncontrada,
          nota: formulario.nota
        }
        await modificarPractica(cuerpo);
        alert("Practica modificada.")
      }
    }catch(error){
      console.log("Error al manejar el formulario: ", error)
    }
  }

  useEffect(() =>{
    if(!idDiscente){
      return;
    }
    const cargarPracticas = async() =>{
      const matriculas = await obtenerMatriculaPorDiscente(idDiscente);
      const promesas = matriculas.map(async(matricula) =>{
        const [modulo, practicas] = await Promise.allSettled([
          obtenerModuloPorId(matricula.moduloId),
          obtenerPracticasPorMatricula(matricula.id)
        ]);

      const moduloLimpio = modulo.status === "fulfilled" ? modulo.value : null;
      const practicasLimpias = practicas.status === "fulfilled" ? practicas.value : [];

      return{
        practicasLimpias
      }
      });

      const resultadoFinal = await Promise.allSettled(promesas);
      const practicas = resultadoFinal.filter((resultado) =>{
        return resultado.status === "fulfilled"
      }).map((resultado) =>{
        return resultado.value
      }).flat();
      console.log(practicas);
      setPracticas(practicas);
    }
    cargarPracticas();
  }, [idDiscente])

  return (
    <>
    <h2>Formulario de Notas</h2>
    <label>Seleciona un discente: </label>
    <select value={idDiscente} onChange={(e) =>{setIdDiscente(e.target.value)}}>
      {discentes.map((discente) =>{
        return <option key={discente.id} value={discente.id}>{discente.nombre}</option>
      })}
    </select>
    </>
  );
}

export default FormularioNotas;