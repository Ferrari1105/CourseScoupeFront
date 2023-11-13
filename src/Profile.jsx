import { useState, useContext, useEffect } from 'react';
import NavBar from './componentes/navBar-iniciada';
import './App.css';
import './Profile.css';
import { UsuarioContext } from './../context/usuarioContext';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardCurso from './componentes/cardCurso2';

function Profile() {
  const { usuarioG, setUsuarioG } = useContext(UsuarioContext);
  const [listaCursos, setListaCursos] = useState([])
  const [cursosCargados, setCursosCargados] = useState(false);
  const cargarCursos2 = async () => {

    if (!cursosCargados) {
      const response = await fetch('http://localhost:3000/cursos', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUser = await response.json();
      setListaCursos(dbUser);
      setCursosCargados(true); // Marcar que los cursos se han cargado
    }
  };

  useEffect(() => async () => await cargarCursos2(), [])



  console.log(usuarioG)
  const cerrarSesion = () => {
    setUsuarioG(null);
    localStorage.removeItem('usuario')
    localStorage.removeItem('Cursof1')
  }

  // Simula la carga de las URLs de las imágenes
  const imagenes = [
    'https://i.ytimg.com/vi/yQojEZeEJB8/maxresdefault.jpg',
    'https://i.ytimg.com/vi/yQojEZeEJB8/maxresdefault.jpg',
    'https://i.ytimg.com/vi/yQojEZeEJB8/maxresdefault.jpg',
  ];

  return (
    <div>
      <NavBar />
      <div className="profile-page">
        <div className='bannerPerfil'>
          <div className='contenidoBanner'>
            <img className='fotoBanner' src={usuarioG?.FotoDePerfil} alt="Avatar" />
            <div className='textoBanner'>
              <h4>@{usuarioG?.NombreUsuario}</h4>
              <h3>{usuarioG?.Email}</h3>
              <h5>📍{usuarioG?.Ubicacion}</h5>
              <button className='botonBanner'>Editar perfil</button>
            </div>
          </div>
        </div>
        <div className='lista'>
          <Link>{usuarioG?.NombreUsuario} </Link>
          <Link to="/">Actividad </Link>
          <Link to="/Store">Cursos </Link>
          <Link to="/">Listas </Link>
          <Link to="/">Porfolio </Link>
        </div>
        <div className='textosPerfil'>
          <h3 className='textos'>Tus cursos</h3>
          <Card className="card"> {/* Agrega la clase 'card' */}
            <Card.Body>
              <Card.Title>{usuarioG?.NombreUsuario}</Card.Title>
              <div className='crear-otro-curso'>
                <Link to="/CrearCurso">+</Link>
              </div>
            </Card.Body>
          </Card>
          <div className='boton-perfil-editar'>
            <Link to="/CrearCurso">Crear más cursos</Link>
          </div>
          <h3 className='textos'>Cursos en proceso</h3>
          <Card className="card">
            <Card.Body>
              <Card.Title>{usuarioG?.NombreUsuario}</Card.Title>
               <div className='CardsHome'> 
              <div className="card-images">
                {listaCursos.map(curso => (
                  <CardCurso key={curso.idCurso} id={curso.idCurso} img={curso.PortadaCurso} name={curso.NombreDelCurso} descripcion={curso.ResumenCurso} />
                ))
                }
              </div>
              </div>
            </Card.Body>
          </Card>
          <Button className='boton-perfil-editar'>Buscar mas cursos</Button>
          <h3 className='textos'>Cursos terminados</h3>
          <Card className="card">
            <Card.Body>
              <Card.Title>{usuarioG?.NombreUsuario}</Card.Title>
              <div className="card-images">
                {imagenes.map((imagen, index) => (
                  <div key={index} className="image-wrapper">
                    <Link to="/Store">
                      <Card.Img src={imagen} alt={`Imagen ${index + 1}`} />
                    </Link>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
          <Button className='boton-perfil-editar'>Seguir con tus cursos</Button>
        </div>
      </div>
      <div className="profile-actions">
        <Link to={"/"} onClick={cerrarSesion}>
          <button>Cerrar sesión</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile;