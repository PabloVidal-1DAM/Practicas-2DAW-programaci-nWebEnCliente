import React, { createContext, useState } from 'react'
import {conexionSupabase} from "../Estructura/supabase/supabase.js"
import { useNavigate } from 'react-router-dom';

const contextoSesion = createContext();

const ProveedorSesion = ({children}) => {
    const datosDeSesion = {"email": "", "password": "",};
    const usuarioInicial = {};
    const errores = {};
    const sesionInicial = false;

    const navegar = useNavigate();

    const [datosSesion, setDatosSesion] = useState(datosDeSesion);
    const [usuario,setUsuario] = useState(usuarioInicial);
    const [error,setError] = useState(errores);
    const [sesionIniciada, setSesionIniciada] = useState(sesionInicial);

    const logearse = async () =>{
        try{
            const {data,error} = await conexionSupabase.auth.signUp({
                email: datosSesion.email,
                password: datosSesion.password,
            });

            if(error){
                throw error;
            }else{
                setError("Preste atención a su bandeja de entrada de correo, recibirá un mensaje de confirmación.") // En realidad no es un error.
            }

        }catch(error){
            setError("Ha ocurrido un error al intentar hacer log in: "+error.message);
        }
    }
  return (
    <contextoSesion.Provider>
        {children}
    </contextoSesion.Provider>
  );
}

export default ProveedorSesion
