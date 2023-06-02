import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BotonCompra from './botonCompra.jsx'

function CardCurso(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <BotonCompra texto="Comprar"></BotonCompra>
      </Card.Body>
    </Card>
  );
}

export default CardCurso;