import React, { createContext } from 'react'
import { conexionSupabase } from '../Estructura/supabase/supabase'
import { useNavigate } from 'react-router-dom'

const contextoProductos = createContext();

const ProveedorProductos = ({children}) => {

    const datos = {};
    return datos;
}

export default ProveedorProductos;
export {contextoProductos};
