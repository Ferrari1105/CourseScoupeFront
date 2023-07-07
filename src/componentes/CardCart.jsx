import { useState } from 'react';
import NavBar from './navBar-iniciada';
import CardCurso from './cardCurso';
import Cart from './Cart';
import './App.css';
import Button from 'react-bootstrap/Button';
import Store from '../Store';
import { Link } from 'react-router-dom'

export default function CardCart() {
    const imageUrl = "https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg";
    const namee = "C#";
    const descripcion = "curso de C#";
    return (
        <>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="cardCart-container">
                <div className="cardCart-image">
                    <img src={imageUrl} alt="Product Image" />
                </div>
                <div className="cardCart-info">
                    <h2 className="cardCart-title">{namee}</h2>
                    <p className="cardCart-description">{descripcion}</p>
                    <Button className="cardCart-button" variant="primary" ><Link to={"/store"}>Comprar</Link></Button>
                </div>
            </div>
        </>
    );
}
