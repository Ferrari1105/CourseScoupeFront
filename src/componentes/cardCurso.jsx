import { Link } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cardCurso.css"; 

function CardCurso(prop) {
  const cargarCurso = async(id) => {
    const response = await fetch(`http://localhost:3000/Cursos/${id}`)
  }
  return (
    <Card className="cardCurso">
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>
          {prop.descripcion}
        </Card.Text>
        {/*hacer que el boton pase el id del curso para poder ponerlo en un context*/}
       <Button variant="primary" ><Link to={"/store"} onClick={cargarCurso(prop.id)}>Comprar</Link></Button> 
      </Card.Body>
    </Card>
  );
}

export default CardCurso;