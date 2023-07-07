import React from 'react';
import './CursoTerminado.css';
import { Link, useParams } from 'react-router-dom';
import NavBar from './componentes/navBar';
import { Navbar } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'
import {Button } from 'react-bootstrap';

function CursoTerminado() {
  return (
    <div>
        <NavBar></NavBar>
    <div className='store-container'>
      <Row>
        <Col sm={8} className='left-side'>
            <h1 class="name">Creación y edición de contenido para Instagram Stories</h1>
            <h6>Un Curso de: Lucas Vazquez</h6>
            <img class="img" src="src/Imgs/foto1.jpg" alt="" />
            <br />
            <h3>Resumen del curso:</h3>
            <h3 class="descripcion">Dentro de las posibilidades que ofrecen las redes sociales hoy en día, no cabe duda de que Instagram Stories es la herramienta del momento, ya que además de compartir imágenes y vídeo nos permite generar tráfico directo hacia sitios web o listas de suscripción.</h3>

        </Col >
        <Col sm={4} className='right-side '>
            <div><h1>$200</h1></div>
            <div><p>Descuento: sin codigo </p></div>
            <Link to="/" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>
        Comprar
          </Link>
            <div className='store-info-container'>
              <div className='store-info-item' >
              </div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Valoracion: Positiva</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>10.000 Estudiantes</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Audio: Español,Ingles</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Español,Frances,Aleman,Ingles </p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>4 Lecciones</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>5 Recursos Adicionales</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Online y a tu ritmo</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Nivel: Inicial</p></div>
            </div>
              <div className='descripcion-Usuario'><p>Un curso de Lucas Vazquez Programador senior, ex-empleado de microsoft </p></div> 
              <div className='categorias-areas'>
                <p>aaaaa|bbbbbbb|ccccc|ddddd</p>
                <p>Areas: 1 | 2 | 3 | 4</p>
                <Link to="/" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>
        Regalar
          </Link>
              </div>
        </Col>
      </Row>
    </div>
    </div>
    
  );
}

export default CursoTerminado;
