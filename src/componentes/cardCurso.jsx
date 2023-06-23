import { Link } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cardCurso.css"; 

function CardCurso(prop) {
  return (
    <Card className="cardCurso">
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>
          {prop.descripcion}
        </Card.Text>
       <Button variant="primary" ><Link  to={"/store"}>Comprar</Link></Button> 
      </Card.Body>
    </Card>
  );
}

export default CardCurso;