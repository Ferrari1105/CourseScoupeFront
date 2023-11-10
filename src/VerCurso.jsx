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
  const [AccordeonSeleccionado, setAccordeonSeleccionado] = useState(0);


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const curso = {
    lecciones: [
      {
        titulo: "Gente arriba de un libro",
        foto: "https://www.lukcomunicacion.com/wp-content/uploads/2017/06/5-webs-donde-encontrar-fotografi%CC%81as-de-calidad-gratis-unsplash.jpg",
        contenido: "Contenido de la lección 1"
      },
      {
        titulo: "Personas mirando una laptop",
        foto: "https://ovacen.com/wp-content/uploads/2020/02/mejorar-calidad-imagenes.jpg",
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
                  {curso.lecciones.map((leccion, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={index.toString()}
                      onClick={() => cambiarLeccion(index)}
                    >
                      Leccion {index + 1}: {leccion.titulo}
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
                  curso.lecciones.map((leccion, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                      <Accordion.Header>#{index + 1}: {leccion.titulo}</Accordion.Header>
                      <Accordion.Body> {leccion.contenido} </Accordion.Body>
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
