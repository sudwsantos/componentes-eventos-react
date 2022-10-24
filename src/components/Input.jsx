import React from 'react';
import Titulo from './Titulo';


function Input(props) {
    const enterUser = (e) => {
        props.setUser(e.target.value)
    }
    const enterPassword = (e) => {
        props.setPassword(e.target.value)
    }
  return (
    <div className='contenedor-principal'>
        <Titulo 
            titulo='Desafío Estado de los componentes y eventos' />

        <label>Nombre</label>
        <input type='text' placeholder='Ingresa un texto' onChange={enterUser} />
        <label>Contraseña</label>
        <input type='password' placeholder='Ingresa una contraseña' name='' id='password' onChange={enterPassword} />
    </div>
  );
}

export default Input