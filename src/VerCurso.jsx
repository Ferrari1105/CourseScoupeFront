import './VerCurso.css';
import React, { useState, useContext } from 'react';
import NavBar from './componentes/navBar';
import NavBarIniciada from './componentes/navBar-iniciada.jsx';
import { UsuarioContext } from '../context/usuarioContext';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row, Accordion } from 'react-bootstrap';
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'
import { useEffect } from 'react'


function VerCurso() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [lecciones, setLecciones] = useState(null);
  const [imagenSeleccionada, setImagenSeleccionada] = useState("");
  const [tituloSeleccionado, setTituloSeleccionado] = useState("");
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState("lol");
  const { usuarioG } = useContext(UsuarioContext);
  const [cursosCargados, setCursosCargados] = useState(false);
  const [AccordeonSeleccionado, setAccordeonSeleccionado] = useState(0);

  const [listaLecciones, setListaLecciones] = useState([])
  const [LeccionesCargados, setLeccionesCargados] = useState(false);

  const cargarLecciones = async () => {

    if (!cursosCargados) {
      const response = await fetch('http://localhost:3000/lecciones', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUser = await response.json();
      setListaLecciones(dbUser);
      setLeccionesCargados(true); // Marcar que los cursos se han cargado
    }
  };

  useEffect(() => async () => await cargarLecciones(), [])

  // api get leccionXcurso- 
  // lecciones[]
  //useeffcect (()=>{ setLecciones}), []

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  const cambiarLeccion = (index) => {
    // cambiar leccionSeleccionada por leccion - api
    const leccionSeleccionada = listaLecciones[index];
    setImagenSeleccionada(leccionSeleccionada.foto);
    setTituloSeleccionado(leccionSeleccionada.titulo);
    setContenidoSeleccionado(leccionSeleccionada.contenido);
    setAccordeonSeleccionado(index);
  };

  return (
    <>

      {usuarioG ? <NavBarIniciada /> : <NavBar />}
      <div className="ver-curso-container">
        <div className="container-fluid">
          <Row className='rowinsta'>
            <Col sm={6}>
              <img src={imagenSeleccionada} alt="Imagen" className="image" />
            </Col>
            <Col sm={6}>
              <Dropdown alignRight show={menuVisible} onToggle={toggleMenu}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100">
                  Lecciones
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  {listaLecciones.map((leccion, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={index.toString()}
                      onClick={() => cambiarLeccion(index)}
                    >
                      Leccion {index + 1}: {leccion.NombreLeccion}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className="leccion-seleccionada">
          <Row className='rowinsta'>
            <Col sm={12}>
              <Accordion activeKey={AccordeonSeleccionado.toString()}>
                {
                  listaLecciones.map((leccion, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                      <Accordion.Header>#{index + 1}: {leccion.NombreLeccion}</Accordion.Header>
                      <Accordion.Body> {leccion.ContenidoLeccion} </Accordion.Body>
                    </Accordion.Item>
                  ))
                }
              </Accordion>
            </Col>
          </Row>
          
        </div>
      </div>
    </>
  );
}

export default VerCurso;


