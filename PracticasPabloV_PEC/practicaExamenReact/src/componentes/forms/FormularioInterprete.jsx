import React, { useContext, useEffect, useState } from "react";
import useContextCatalogo from "../hook/useContextCatalogo";
import { useParams } from "react-router-dom";

const FormularioInterprete = () =>{
    const {cargando, errorGlobal, anyadirItem, modificarItem ,interpretes, discograficas} = useContextCatalogo();

    const {id} = useParams();

    const valoresIniciales = {
        nombre: "",
        genero: "",
        discograficaId: ""
    };
    const [nuevoInterprete, setNuevoInterprete] = useState(valoresIniciales);
    const [erroresFormulario, setErroresFormulario] = useState({});

    useEffect(() =>{

        if(id){
            setNuevoInterprete()
        }

    }, [id, interpretes])

    const actualizarDato = (evento) =>{
        const {name, value} = evento.target;
        setNuevoInterprete({...nuevoInterprete, [name]: value});
    }
    const verificarFormulario = () =>{

    }
    const manejarEnvio = async(evento) =>{
        try{
            evento.preventDefault();
        if(id){
            setNuevoInterprete();
            await modificarItem(`interpretes/${id}`, nuevoInterprete);
        }else{
            await anyadirItem(`interpretes`, nuevoInterprete);
            alert("Interprete insertado correctamente!");
        }
        setNuevoInterprete(valoresIniciales)
        }catch(error){
            console.log("error al enviar el formulario", error)
        }
    }
    return(
    <form>

    </form>
    );
}

export default FormularioInterprete;
