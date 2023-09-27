import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'; // Importa useLocation de react-router-dom
import NavBar from './componentes/navBar';
import './CarritoDeCompras.css';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { UsuarioContext } from '../context/usuarioContext';
import NavBarIniciada from './componentes/navBar-iniciada.jsx'


function CarritoDeCompras({ cursoEnCarrito }) {
  const { usuarioG } = useContext(UsuarioContext);
  const location = useLocation();
  const image = location.state ? location.state.image : null;

  // Estado local para almacenar los cursos en el carrito
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: 'The Complete Python Pro Bootcamp',
      precio: 14.99,
      imagen: 'https://i.ytimg.com/vi/yQojEZeEJB8/maxresdefault.jpg',
    },
  ]);

  // Función para eliminar un curso del carrito
  const eliminarCursoDelCarrito = (cursoId) => {
    const nuevoCarrito = carrito.filter((curso) => curso.id !== cursoId);
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      {usuarioG ? <NavBarIniciada /> : <NavBar />}
      <h2>Tu Carrito de Compras</h2>
      <div className='carrito-container'>

        {carrito.map((curso) => (
          <div className='curso-en-carrito'>
          <img src={curso.imagen} alt={curso.nombre} className='imagen-curso' />
          <div className='info-curso'>
            <p className='nombre-curso'>{curso.nombre}</p>
            <p className='precio-curso'>Precio: ${curso.precio.toFixed(2)}</p>
            <button className='boton-pagos1' onClick={() => eliminarCursoDelCarrito(curso.id)}>Eliminar</button>

          </div>
        </div>
        ))}
      </div>
      <div className='botones-carrito'>
      <Link className='boton-pagos-otro-curso' to={"/"}>Agregar otro curso</Link>
      <Link className='boton-pago1-confirm' to={"/MetodoPago"}>Continuar</Link>
      </div>

    </>
  );
}

export default CarritoDeCompras;

