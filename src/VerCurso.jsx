import './VerCurso.css';
import React, { useState, useContext } from 'react';
import NavBar from './componentes/navBar';
import NavBarIniciada from './componentes/navBar-iniciada.jsx';
import { UsuarioContext } from '../context/usuarioContext';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row, Accordion } from 'react-bootstrap';

function VerCurso() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5lOdTBvvWpCvfsl-bxnRuanTl2nnNX8W4igMJTVGilQHTTrDIt2q1OME71wN5FmcUk8&usqp=CAU");
  const [tituloSeleccionado, setTituloSeleccionado] = useState("");
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState("lol");
  const { usuarioG } = useContext(UsuarioContext);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const curso = {
    lecciones: [
      {
        titulo: "Gente arriba de un libro",
        foto: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
        contenido: "Contenido de la lección 1"
      },
      {
        titulo: "Personas mirando una laptop",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqJfYaPsCvkQ9RElXcf3-6Eup2Zikz0oz8A&usqp=CAU",
        contenido: "Contenido de la lección 2"
      },
      // ... Otras lecciones
    ]
  };

  const cambiarLeccion = (index) => {
    const leccionSeleccionada = curso.lecciones[index];
    setImagenSeleccionada(leccionSeleccionada.foto);
    setTituloSeleccionado(leccionSeleccionada.titulo);
    setContenidoSeleccionado(leccionSeleccionada.contenido);
  };

  return (
    <>
    
      {usuarioG ? <NavBarIniciada /> : <NavBar />}
      <div className="ver-curso-container">
        <div className="container-fluid">
          <Row>
            <Col sm={6}>
              <img src={imagenSeleccionada} alt="Imagen" className="image" />
            </Col>
            <Col sm={6}>
              <Dropdown alignRight show={menuVisible} onToggle={toggleMenu}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100">
                  Lecciones
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  {curso.lecciones.map((leccion, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={index.toString()}
                      onClick={() => cambiarLeccion(index)}
                    >
                      Leccion {index+1}: {leccion.titulo}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className="leccion-seleccionada">
          <Row>
            <Col sm={6}>
            <Accordion defaultActiveKey="0">
              {
                curso.lecciones.map((leccion, index) => (
                  <Accordion.Item eventKey={index}>
                  <Accordion.Header>#{index + 1}: {leccion.titulo}</Accordion.Header>
                  <Accordion.Body> { leccion.contenido } </Accordion.Body>
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
