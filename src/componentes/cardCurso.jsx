import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BotonCompra from './boton.jsx'
import "./cardCurso.css"; 
import { Link } from 'react-router' 

function CardCurso(props) {
  return (
    <Card className="cardCurso">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <Link to={"/"}>Comprar</Link>
      </Card.Body>
    </Card>
  );
}

export default CardCurso;