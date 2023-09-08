import { useState } from 'react'
import NavBar from './componentes/navBar-iniciada'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'
import './Profile.css';
import { useContext } from "react"
import { UsuarioContext } from "./../context/usuarioContext"
import { Link } from 'react-router-dom';

function Comprar1() 
{
    return (
        <div>
            <NavBar ></NavBar>
            
        </div>
    )
}

export default Comprar1


