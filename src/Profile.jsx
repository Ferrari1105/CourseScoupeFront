import { useState, useContext } from 'react';
import NavBar from './componentes/navBar-iniciada';
import './App.css';
import './Profile.css';
import { UsuarioContext } from './../context/usuarioContext';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Profile() {
  const { usuarioG, setUsuarioG } = useContext(UsuarioContext);
  const cerrarSesion = () => {
    setUsuarioG(null);
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
            <img className='fotoBanner' src="https://pbs.twimg.com/media/EIOHEVlXkAE0QWW.jpg" alt="Avatar" />
            <div className='textoBanner'>
              <h4>{usuarioG?.NombreUsuario}</h4>
              <h3>@{usuarioG?.NombreUsuario}</h3>
              <h5>📍Localidad</h5>
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
              <div className="card-images">
                {imagenes.map((imagen, index) => (
                  <div key={index} className="image-wrapper">
                    <Link to="/Store">
                      <Card.Img src={imagen} alt={`Imagen ${index + 1}`} />
                    </Link>
                  </div>
                ))}
                <div className='crear-otro-curso'>
                <Link to="/CrearCurso">+</Link>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Button className='boton-perfil-editar'>Editar</Button>
          <h3 className='textos'>Cursos en proceso</h3>
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
          <Button className='boton-perfil-editar'>Editar</Button>
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
          <Button className='boton-perfil-editar'>Editar</Button>
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