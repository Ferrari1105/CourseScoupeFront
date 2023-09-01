import { Link } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cardCurso.css"; 
import { useContext, useEffect } from "react"
import { CursoContext } from "./../../context/cursoContext"

function CardCurso(prop) {
  const { setCursoG } = useContext(CursoContext);

  const cargarCurso = async () => {
    const response = await fetch(`http://localhost:3000/Cursos/${prop.id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json"},
    });
    const CursoJson = await response.json();
    setCursoG(CursoJson);
    console.log(CursoJson)
  }


  return (
    <Card className="cardCurso">
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>
          {prop.descripcion}
        </Card.Text>
        <Button variant="primary" >
          <Link to={"/Store"} onClick={cargarCurso}>Comprar</Link>
        </Button> 
      </Card.Body>
    </Card>
  );
}

export default CardCurso;