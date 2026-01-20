import React, { createContext, useEffect, useState } from 'react'
import {conexionSupabase} from "../Estructura/supabase/supabase.js"
import { useNavigate } from 'react-router-dom';

const contextoSesion = createContext();

const ProveedorSesion = ({children}) => {
    const datosDeSesion = {"email": "", "password": "",};
    const usuarioInicial = {};
    const erroresIniciales = {};
    const sesionInicial = false;

    const navegar = useNavigate();

    const [datosSesion, setDatosSesion] = useState(datosDeSesion);
    const [usuario,setUsuario] = useState(usuarioInicial);
    const [error,setError] = useState(erroresIniciales);
    const [sesionIniciada, setSesionIniciada] = useState(sesionInicial);

    const registrarse = async () =>{
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
            setError("Ha ocurrido un error al intentar registrarse: "+error.message);
        }
    }

    const iniciarSesion = async() =>{
        setError(erroresIniciales);
        try{
           const {data,error} = await conexionSupabase.auth.signInWithPassword({
                email: datosSesion.email,
                password: datosSesion.password,
                options: {
                    emailRedirectTo: "http://localhost:5173/",
                },
           }); 

           if(error){
                throw error;
           }

           console.log(data);
        }catch(error){
            setError("Error al intentar hacer login: "+error.message);
        }
    }

    const cerrarSesion = async() =>{
        try{
            await conexionSupabase.auth.signOut();
            setError(erroresIniciales);

            navegar("/");
        }catch(error){
            setError("Ha ocurrido un error al intentar cerrar sesion: "+error.message);
        }
    }

    const obtenerInfoUsuario = async() =>{
        try{
            const {data, error} = await conexionSupabase.auth.getUser();

            if(error){
                throw error;
            }

            setUsuario(data.user);
            setError(erroresIniciales);
            console.log(data.user);
        }catch(error){
            setError("Ha ocurrido un error al intentar obtener la info del usuario: "+error.message);
        }
    }

    const actualizarDato = (evento) =>{
        const {name,value} = evento.target;
        setDatosSesion({...datosSesion, [name]: value})
    }

    useEffect(() =>{
        const subscripcion = conexionSupabase.auth.onAuthStateChange(
            (event, session) =>{
                if(session){
                    console.log(session);
                    setSesionIniciada(true);

                    obtenerInfoUsuario();
                }else{
                    navegar("/iniciar-sesion");
                    setSesionIniciada(false);
                }
            }
        );
        console.log(subscripcion);
    }, []);

    const datos = {
        registrarse,
        iniciarSesion,
        cerrarSesion,
        sesionIniciada,
        usuario,
        error,
        setError,
        actualizarDato
    };

  return (
    <contextoSesion.Provider value={datos}>
        {children}
    </contextoSesion.Provider>
  );
}

export default ProveedorSesion;
export {contextoSesion};
