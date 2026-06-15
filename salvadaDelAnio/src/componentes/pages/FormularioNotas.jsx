import React, { useState } from "react";
import useContextDiscentes from "../hooks/useContextDiscentes";

const FormularioNotas = () => {

    // no sé como hacer para que se llegue hasta el formulario para poder modificar la nota, 
    // así que tristemente voy a optar por hacer el formulario aquí directamente.

    const { modulos, practicas, discentes, anyadirItem} = useContextDiscentes();
    const valoresIniciales = {
        siglas: "",
        nombre: "",
        horas: "",
        docenteId: ""
    };
    const [nuevoModulo, setNuevoModulo] = useState(valoresIniciales);
    const [erroresFormulario, setErroresFormulario] = useState({});

    const actualizarDatos = (evento) => {
        const { name, value } = evento;
        nuevoModulo({...nuevoModulo, [name]: value});
    }

    const verificarFormulario = () =>{
        const erroresLocales = {};
        if (nuevoModulo.horas in Range(0,10)){
            erroresLocales.horas = "Las horas deben ser mayores de 10."
            setErroresFormulario(erroresLocales.horas);
        }

        return Object.keys(erroresLocales.length === 0);
    }

    const manejarFormulario = async(evento) =>{
        evento.preventDefault();

        if(verificarFormulario){
            await anyadirItem('modulos', nuevoModulo);
            alert("Nuevo Modulo Insertado Correctamente!.");
        }

    }

    return (
        <>
            <form noValidate onSubmit={manejarFormulario}>
                <label htmlFor="siglas">Introduce las siglas del módulo: </label>
                <input type="text" name="siglas" value={nuevoModulo.siglas} onChange={actualizarDatos} />

                <label htmlFor="nombre">Introduce el nombre del módulo: </label>
                <input type="text" name="nombre" value={nuevoModulo.nombre} />

                <label htmlFor="horas">Introduce el número de horas: </label>
                <input type="number" name="horas" value={nuevoModulo.horas} />
                {erroresFormulario.horas && <span style={{color: "red"}}>{erroresFormulario.horas}</span>}

                <button type="submit" style={{marginTop: "20px"}}>Enviar Datos</button>

            </form>
        </>
    );
}

export default FormularioNotas