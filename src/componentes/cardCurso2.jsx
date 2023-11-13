import { Link } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cardCurso2.css"; 
import { useContext, useEffect } from "react"
import { CursoContext } from "./../../context/cursoContext"

function CardCurso(prop) {
  const { setCursoG } = useContext(CursoContext);

  return (
    <Card className="cardCurso">
      <Card.Img variant="top" src={prop.img} />
      <Card.Body className='cardBody'>
        <Card.Title>{prop.name}</Card.Title>
          <Link className='Link linkCard' to={"/VerCurso"} state={{ from: prop.id }} >Seguir Curso</Link>
      </Card.Body>
    </Card>
  );
}

export default CardCurso;