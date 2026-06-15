import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../Inicio';
import Productos from '../Productos';
import IniciarSesion from '../IniciarSesion';
import CerrarSesion from "../CerrarSesion.jsx";
import Registrarse from "../Registrarse.jsx";
import AnyadirProducto from '../AnyadirProducto.jsx';
import AnyadirListaCompra from '../AnyadirListaCompra.jsx';
import ListaCompras from '../ListaCompras.jsx';
import DetallesListaCompra from '../DetallesListaCompra.jsx';
import Usuarios from '../Usuarios.jsx';
import Perfil from '../Perfil.jsx';

const Rutas = () => {

  /*1.0: Función para crear un perfil al crear una sesión el usuario. */

  /*create or replace function public.crearperfil()
    returns trigger as $$
    begin
      insert into public.perfiles(id_usuario, foto, "nombreCompleto", descripcion)
      values (new.id, new.raw_user_meta_data->>'full_name', '', '' );
      return new;
    end;
    $$ language plpgsql security definer; 
    
    Trigger que lanza la función: 
      create or replace trigger usuariocrearperfil
        after insert on auth.users
        for each row execute procedure public.crearperfil();
  */

  /*2.0: Función para crear el rol al crear una sesión al usuario.*/

  /*create or replace function public.insertarRol()
    returns trigger as $$
    begin
      insert into public.roles (id_rol, correo, rol)
      values (new.id, new.email, 'usuario');
      return new;
    end;
    $$ language plpgsql security definer;

    Trigger que lanza la función:
      create or replace trigger alCrearUsuario
      after insert on auth.users
      for each row execute procedure public.insertarrol();
  */

  /*3.0: Función para sacar si el usuario es admin o no (devuelve un booleano): */

  /*create or replace function public.soyAdmin()
    returns boolean as $$
    begin
    return exists(
      select 1
      from public.roles
      where id_rol = auth.uid()
      and rol = 'administrador'
    );
    end;
$$ language plpgsql security definer set search_path = public;auth*/



  return (
    <>
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/cerrar-sesion" element={<CerrarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path='/productos/añadir' element={<AnyadirProducto />} />
        <Route path='/listaCompra' element={<ListaCompras />} />
        <Route path='/listaCompra/añadir' element={<AnyadirListaCompra />} />
        <Route path='listaCompra/detalles' element={<DetallesListaCompra />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/perfil' element={<Perfil />} />
    </Routes>
    </>
  )
}

export default Rutas
