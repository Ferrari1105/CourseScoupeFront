import { Link } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cardCurso.css"; 

function CardCurso(props) {
  return (
    <Card className="cardCurso">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
       <Button variant="secondary" ><Link  to={"/store"}>Comprar</Link></Button> 
      </Card.Body>
    </Card>
  );
}

export default CardCurso;