import { useState } from 'react'
import NavBar from './componentes/navBar'
import { Row, Col } from 'react-bootstrap'
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Store.css'
import { useContext } from "react"
import { CursoContext } from "./../context/cursoContext"
function Store({ idCurso }) {
  // fetch para acceder al curso a partir del id
  // mostar la info del curso
  const {cursoG} = useContext(CursoContext)
  console.log(cursoG)
  return (
    <>
    <NavBar></NavBar>
    <div className='store-container'>
      <Row>
        <Col sm={8} className='left-side'>
            <h1 class="name">{cursoG?.NombreDelCurso}</h1>
            <h6>Un Curso de: Lucas Vazquez</h6>
            <img class="img" src={cursoG?.PortadaCurso} alt="" />
            <br />
            <h3>Resumen del curso: {cursoG?.ResumenCurso}</h3>
            <h3 class="descripcion"></h3>
            <h3>Adelanto:{cursoG?.Adelanto}</h3>

        </Col >
        <Col sm={4} className='right-side '>
            <div><h1>{cursoG?.PrecioDelCurso}</h1></div>
            <div><p>Descuento: sin codigo </p></div>
            <Button><Link to ={"src/componentes/CardCart.jsx"} >Comprar</Link></Button>
            <div className='store-info-container'>
              <div className='store-info-item' >
                <div className='store-info-icon'></div>
                <p>Lorem ipsum dolor sit amet consecta.</p>
              </div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{cursoG?.idLecciones}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{cursoG?.idCategorias}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{cursoG?.idAreas}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{cursoG?.idEstilo}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{cursoG?.idRecursosAdicionales}</p></div>
            </div>
              <div className='descripcion-Usuario'><div className='store-info-icon'></div><p>Un curso de Lucas Vazquez Programador senior, ex-empleado de microsoft  </p></div> 
              <Button><Link>Regalo</Link></Button>
              <div className='categorias-areas'>
                <p>aaaaa|bbbbbbb|ccccc|ddddd</p>
                <p>Areas: 1 | 2 | 3 | 4</p>
              </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Store
