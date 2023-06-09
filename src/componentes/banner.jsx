import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function Banner() {
  return (
    <Container>
      <Row>
      <Col className='ButtonesBanner'>
          <Button>Crear Curso</Button>
          <Button>Crear Presentacion</Button>
        </Col>
        <Col className='LogoBanner'>
          <Image className='LogoBannerFoto' src="./Logo.png" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;