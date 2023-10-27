import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../context/usuarioContext';
import NavBar from './componentes/navBar';
import NavBarIniciada from './componentes/navBar-iniciada.jsx';
import './CarritoDeCompras.css';
import { CursoContext } from "./../context/cursoContext";

function CarritoDeCompras() {
  const { usuarioG } = useContext(UsuarioContext);
  const [carrito, setCarrito] = useState([]);

  const llamada = async () => {
    const usuarioGJSON = JSON.stringify(usuarioG);
    console.log(usuarioGJSON)
    const response = await fetch(`http://localhost:3000/traerCarrito`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: usuarioGJSON
    });
    const CursoJson = await response.json();
    console.log(CursoJson)
    const ids = JSON.stringify(CursoJson);
    console.log(ids)
    const response1 = await fetch(`http://localhost:3000/cursosById`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: ids
    });
    const listaCursos = await response1.json();
    console.log("listaCursos", listaCursos)
    setCarrito(listaCursos);
  }

  useEffect(() => {
    llamada();
  }, []);


// Función para eliminar un curso del carrito
const eliminarCursoDelCarrito = async (cursoId) => {
  const ids = JSON.stringify({ idCurso: cursoId, idUsuario: usuarioG.IdUsuario });
  console.log("id", ids);

  try {
    const response = await fetch(`http://localhost:3000/eliminarCursoDelCarrito`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: ids
    });

    if (response.ok) {
      // Utiliza prevState para actualizar carrito
      setCarrito((prevState) => {
        const nuevoCarrito = prevState.filter((curso) => curso.id !== cursoId);
        return nuevoCarrito;
      });
    } else {
      console.error('Error al eliminar el curso del carrito');
    }
  } catch (error) {
    console.error('Error al enviar la solicitud al servidor:', error);
  }
};

// ...

  
  // Función para calcular el precio total
  const calcularPrecioTotal = () => {
    if (carrito) {
      return carrito.reduce((total, curso) => total + curso.PrecioDelCurso, 0).toFixed(2);
    }
    return "0.00"; // Valor predeterminado si carrito es undefined
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
        {carrito?.map((curso) => (
          <div className='curso-en-carrito'>
            <img alt={curso.NombreDelCurso} className='imagen-curso' />
            <div className='info-curso'>
              <p className='nombre-curso'>{curso.NombreDelCurso}</p>
              <p className='precio-curso'>Precio: ${curso.PrecioDelCurso.toFixed(2)}</p>
            </div>
            <button
              className='boton-pagos1 eliminar'
              onClick={() => eliminarCursoDelCarrito(curso.idCurso)}
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
