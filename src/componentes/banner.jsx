import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './banner.css'
function Banner() {
  return (
    <Container >
      <Row >
      <Col className='banner'>
        <div className='banner-text'>
          <h4>Course Scope Lo que queres ser, a un curso de distancia</h4>
          <br />
          <h5>Course Scope la mejor pagina de cursos al alcance de todos</h5>
        </div>
        <div className='banner-buttons'>
          <Button><Link to="/CrearCurso">Crear Curso</Link></Button>
          <Button>Crear Presentacion</Button>
        </div>
        </Col>
        <Col className='LogoBanner'>
          <Image className='LogoBannerFoto' src="src\Imgs\Logo.png" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;