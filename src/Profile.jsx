import { useState } from 'react'
import NavBar from './componentes/navBar-iniciada'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'
import './Profile.css';



function Profile() {
    return (
        <div>
            <NavBar ></NavBar>
            <div className="profile-page">
                <div className="profile-header">
                    <img src="https://example.com/avatar.png" alt="Avatar" />
                    <h1>NOMBREE</h1>
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
                            <strong>Correo electrónico:</strong>
                        </li>
                        <li>
                            <strong>Fecha de nacimiento:</strong> 
                        </li>
                    </ul>
                </div>
                <div className="profile-actions">
                    <button>Editar perfil</button>
                    <button>Cerrar sesión</button>
                </div>
            </div>
        </div>
    )
}

export default Profile


