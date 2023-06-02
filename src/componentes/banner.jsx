import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Boton from './boton.jsx'
function Banner() {
  return (
    <Container>
      <Row>
      <Col className='BotonesBanner'>
          <Boton texto="Crear Curso"></Boton>
          <Boton texto="Crear Presentacion"></Boton>
        </Col>
        <Col className='LogoBanner'>
          <Image className='LogoBannerFoto' src="./Logo.png" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;