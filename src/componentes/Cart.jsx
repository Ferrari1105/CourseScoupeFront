import { useState } from 'react';
import NavBar from './navBar-iniciada';
import Banner from './banner';
import Button from 'react-bootstrap/Button';
import CardCurso from './cardCurso';
import Card from 'react-bootstrap/Card';
import './Cart.css';

function Cart(props) {
    return (
        <div>
            <Card className="CardCart">
                <Card.Img className="CardCart-img" src={props.img} alt="Product Image" />
                <Card.Body>
                    <Card.Title className="CardCart-title">{props.name}</Card.Title>
                    <Card.Text className="CardCart-description">{props.descripcion}</Card.Text>
                    <Button className="CardCart-button">ASHE</Button>
                </Card.Body>
            </Card>
        </div>
    );
}


export default Cart;
