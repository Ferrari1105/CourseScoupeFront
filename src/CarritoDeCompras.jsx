import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../context/usuarioContext';
import NavBar from './componentes/navBar';
import NavBarIniciada from './componentes/navBar-iniciada.jsx';
import './CarritoDeCompras.css';
import { CursoContext } from "./../context/cursoContext"
function CarritoDeCompras() {
  const { usuarioG } = useContext(UsuarioContext);
 
  // Estado local para almacenar los cursos en el carrito
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: 'The Complete Python Pro Bootcamp',
      precio: 14.99,
      imagen: 'https://i.ytimg.com/vi/yQojEZeEJB8/maxresdefault.jpg',
    },
    {
      id: 2,
      nombre: 'Prueba del curso 2',
      precio: 19.99,
      imagen: 'https://i.ytimg.com/vi/yQojEZeEJB8/maxresdefault.jpg',
    },
    // Agrega más cursos al carrito según sea necesario
  ]);

  // Función para eliminar un curso del carrito
  const eliminarCursoDelCarrito = (cursoId) => {
    const nuevoCarrito = carrito.filter((curso) => curso.id !== cursoId);
    setCarrito(nuevoCarrito);
  };

  // Función para calcular el precio total
  const calcularPrecioTotal = () => {
    return carrito.reduce((total, curso) => total + curso.precio, 0).toFixed(2);
  };

  return (
    <>
      {usuarioG ? <NavBarIniciada /> : <NavBar />}
      <h2>Tu Carrito de Compras</h2>
      <div className='botones-carrito'>
        <Link className='boton-pagos-otro-curso' to={'/'}>
          Agregar otro curso
        </Link>
      </div>
      <div className='carrito-container'>
        {carrito.map((curso) => (
          <div key={curso.id} className='curso-en-carrito'>
            <img src={curso.imagen} alt={curso.nombre} className='imagen-curso' />
            <div className='info-curso'>
              <p className='nombre-curso'>{curso.nombre}</p>
              <p className='precio-curso'>Precio: ${curso.precio.toFixed(2)}</p>
            </div>
            <button
              className='boton-pagos1 eliminar'
              onClick={() => eliminarCursoDelCarrito(curso.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className='total-container'>
        <div className='total-card'>
          <h2>Total a pagar:</h2>
          <p>${calcularPrecioTotal()}</p>
          <Link className='boton-pago1-confirm' to={'/MetodoPago'}>
            Continuar
          </Link>
        </div>
      </div>
    </>
  );
}

export default CarritoDeCompras;
