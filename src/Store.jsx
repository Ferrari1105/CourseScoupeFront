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
  const [Curso, setCurso] = useState()
  const [lolsas, setLolsas] = useState(false)
  const llamada = async () => {
    if(!lolsas){
   
      const response = await fetch(`http://localhost:3000/CursoProcesado`, {
        method: 'post',
        headers: { "Accept": 'application/json', "Content-Type": 'application/json'},
        body: JSON.stringify(cursoG)
      });
      const dbCurso = await response.json();
      setCurso(dbCurso)
      setLolsas(true) 
    }
  }
  llamada()
  return (
    <>
    <NavBar></NavBar>
    <div className='store-container'>
      <Row>
        <Col sm={8} className='left-side'>
            <h1 className="name">{Curso?.NombreDelCurso}</h1>
            <h6>Un Curso de: Lucas Vazquez</h6>
            <img className="img" src={Curso?.PortadaCurso} alt="" />
            <br />
            <h3>Resumen del curso: {Curso?.ResumenCurso}</h3>
            <h3 className="descripcion"></h3>
            <h3>Adelanto:{Curso?.Adelanto}</h3>

        </Col >
        <Col sm={4} className='right-side '>
            <div><h1>{cursoG?.PrecioDelCurso}</h1></div>
            <div><p>Descuento: sin codigo </p></div>
            <Button><Link to ={"src/componentes/CardCart.jsx"} >Comprar</Link></Button>
            <div className='store-info-container'>
              <div className='store-info-item' >
                <h3>Clasficaciones:</h3>
              </div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{Curso?.Categorias}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{Curso?.Areas}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{Curso?.Estilo}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{Curso?.Idioma}</p></div>
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
