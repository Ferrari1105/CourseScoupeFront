import { useState } from 'react'
import NavBar from './componentes/navBar-iniciada'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'
import './Profile.css';
import { useContext } from "react"
import { UsuarioContext } from "./../context/usuarioContext"
import { Link } from 'react-router-dom';

function Profile() {
    const {usuarioG}= useContext(UsuarioContext)
    return (
        <div>
            <NavBar ></NavBar>
            <div className="profile-page">
                <div className="profile-header">
                    <img src="https://example.com/avatar.png" alt="Avatar" />
                    <h1>{usuarioG.NombreUsuario}</h1>
                </div>
                <div className="profile-info">
                    <h2>Información del perfil</h2>
                    <p>
                        biografia   
                    </p>
                    <ul>
                        <li>
                            <strong>Nombre:</strong> 
                        </li>
                        <li>
                            <strong>Correo electrónico: {usuarioG.Email}</strong>
                        </li>
                        <li>
                            <strong>Fecha de nacimiento:</strong> 
                        </li>
                    </ul>
                </div>
                <div className="profile-actions">
                    <button>Editar perfil</button>
                    <Link to={"/"}>
                    <button>Cerrar sesión</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile


