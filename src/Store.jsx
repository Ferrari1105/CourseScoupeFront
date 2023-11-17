import { useEffect, useState } from 'react';
import NavBar from './componentes/navBar';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Store.css';
import { useContext } from 'react';
import { CursoContext } from './../context/cursoContext';
import { UsuarioContext } from '../context/usuarioContext';
import NavBarIniciada from './componentes/navBar-iniciada.jsx';
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordions from './componentes/Accordions';
import { CarritoContext } from '../context/carritoContext';

function Store() {
  const { cursoG, setCursoG } = useContext(CursoContext);
  const [Curso, setCurso] = useState();
  const [cursoLecciones, setcursoLecciones] = useState();
  const { usuarioG } = useContext(UsuarioContext);
  const [showModal, setShowModal] = useState(false);
  const [carritoBack, setCarritoBack] = useState([]);
  const location = useLocation();
  const { from } = location.state || {};
  const { setCarritoG } = useContext(CarritoContext);

  const llamada = async () => {
    const response1 = await fetch(`http://localhost:3000/Cursos/${from}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const CursoJson = await response1.json();

    const response2 = await fetch(`http://localhost:3000/CursoProcesado/${CursoJson.idCurso}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const dbCurso = await response2.json();
    setCurso(dbCurso);
    setCursoG(dbCurso);
    console.log('dbCurso', dbCurso);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  useEffect(() => async () => await llamada(), []);

  const añadirCarrito = async () => {
    const ids = {
      idCurso: Curso?.idCurso,
      idUsuario: usuarioG.IdUsuario,
    };

    const usuarioGJSON = JSON.stringify(usuarioG);
    const response1 = await fetch(`http://localhost:3000/traerCarrito`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: usuarioGJSON,
    });
    const carritoActual = await response1.json();

    const cursoExistente = carritoActual.find((item) => item.idCurso === ids.idCurso);

    if (cursoExistente) {
      alert('El curso ya está en el carrito');
    } else {
      const idsStringified = JSON.stringify(ids);
      setCarritoG(idsStringified);
      const response = await fetch(`http://localhost:3000/cargarCarrito`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: idsStringified,
      });
    }
  };

  return (
    <>
      {usuarioG ? <NavBarIniciada /> : <NavBar />}
      <div className='row content'>
        <div className='col-7 tituloStore'>
          <div>
            <h1 style={{ color: 'black' }}> {Curso?.NombreDelCurso || 'Esta data no fue cargada'}</h1>
            <h3 style={{ color: 'black' }}>{Curso?.ResumenCurso || 'Esta data no fue cargada'}</h3>
            <h6 style={{ color: 'gray' }}> 1,021,292 students</h6>
            <div style={{ color: 'gray' }}>
              <h6>
                Created by: <Link style={{ color: 'blue' }}>{Curso?.Creador || 'Esta data no fue cargada'}</Link>
              </h6>
            </div>
            <div style={{ color: 'gray' }}>
              <text style={{ fontSize: '15px', color: 'gray' }}>
                Idioma: Ingles {Curso?.Idioma}{' '}
              </text>
            </div>
          </div>
          <br />
          <br />
          <div>
            <h1 style={{ color: 'black' }}>Paso a Paso Del Curso:</h1>
            {Curso?.Lecciones ? (
              Curso.Lecciones.map((item, index) => (
                <Accordions key={index} title={item.NombreLeccion || 'Esta data no fue cargada'} num={index + 1} />
              ))
            ) : (
              <p>Esta data no fue cargada</p>
            )}
          </div>
          <br />
          <br />
          <div>
            <h1 style={{ color: 'black' }}>Adelanto:</h1>
            <text style={{ fontSize: '20px', color: 'gray' }}>{Curso?.Adelanto || 'Esta data no fue cargada'}</text>
          </div>
        </div>

        <div className='col-4' style={{ paddingLeft: '5rem' }}>
          <Card className='cardStore'>
            <Card.Img className='fotoStore' variant='top' src={Curso?.PortadaCurso} />
            <Card.Body className='cardBodyStore'>
              <Card.Title>
                <div className='precioCard'>
                  <h1>${Math.round(Curso?.PrecioDelCurso * 0.2, -1)}</h1>
                  <h5 className='originalPrice'> Original Price ${Curso?.PrecioDelCurso}</h5>
                  <h5>Discount 80% off</h5>
                </div>
              </Card.Title>
              <div className='botonesStore'>
                <Link
                  className='Link linkCard botonStore'
                  style={{ backgroundColor: 'crimson' }}
                  onClick={añadirCarrito}
                >
                  Add to cart
                </Link>
                <Link className='Link linkCard botonStore' to={'/CarritoDeCompras'}>
                  Ir al Carrito
                </Link>
              </div>
              <Card.Text>
                <ul>
                  <h4>Categoria:</h4>
                  <li>{Curso?.Categorias || 'Esta data no fue cargada'}</li>
                  <h4>Area:</h4>
                  <li>{Curso?.Areas || 'Esta data no fue cargada'}</li>
                  <h4>Estilo:</h4>
                  <li>{Curso?.Estilo || 'Esta data no fue cargada'}</li>
                </ul>
              </Card.Text>
              <div className='extras'>
                <Link>Gift This Course</Link>
                <Link>Apply Coupon</Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Store;
