import { useState } from 'react'
import NavBar from './componentes/navBar-iniciada'
import './App.css'
import './Profile.css';
import { useContext } from "react"
import { UsuarioContext } from "./../context/usuarioContext"
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Profile() {
  const {usuarioG,setUsuarioG}= useContext(UsuarioContext)
  const cerrarSesion = () => {
    setUsuarioG(null)
  }
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
        <Link>Actividad </Link>
        <Link>Cursos </Link>
        <Link>Listas </Link>
        <Link>Porfolio </Link>
        </div>
        <div className='textosPerfil'>  
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{usuarioG?.NombreUsuario}</Form.Label>
        <Form.Control className='textareaPerfil'  as="textarea" rows={6} />
        <Button></Button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tus cursos</Form.Label>
        <Form.Control className='textareaPerfil'   as="textarea" rows={6} />
        <Button></Button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Cursos en proceso</Form.Label>
        <Form.Control className='textareaPerfil'  as="textarea" rows={6} />
        <Button></Button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Cursos terminados</Form.Label>
        <Form.Control className='textareaPerfil' as="textarea" rows={6} />
        <Button></Button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Tus presentaciones</Form.Label>
        <Form.Control className='textareaPerfil' as="textarea" rows={6} />
        <Button></Button>
      </Form.Group>

    </Form>
        </div>
                <div className="profile-actions">
                    <Link to={"/"} onClick={cerrarSesion}>
                        <button>Cerrar sesión</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile


