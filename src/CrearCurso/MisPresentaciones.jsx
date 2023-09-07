import React, { useState } from 'react';
import './MisPresentaciones.css';
import { Link } from 'react-router-dom';
import NavBar from '../componentes/navBar-iniciada.jsx';

const MisPresentaciones = () => {
    const [presentations, setPresentations] = useState([]);
    const [newPresentation, setNewPresentation] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

    const handleAddPresentation = () => {
        if (newPresentation) {
            setPresentations([...presentations, newPresentation]);
            setNewPresentation('');
        }
    };
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const filteredPresentations = presentations.filter(presentation =>
        presentation.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <NavBar></NavBar>
            <div className="presentation-container">
                <div className="columns-container">
                    <div className="right-column">
                        <button className="new-button">Nuevo</button>
                        <div className="sidebar">
                            <p>Mis presentaciones</p>
                            <p>Compartidos conmigo</p>
                            <p>Recientes</p>
                            <p>Destacado</p>
                            <p>Papelera</p>
                        </div>
                    </div>
                    <div className="left-column">
                        <input type="text" placeholder="Buscar presentación" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="search-input" />
                        <p className="suggested-text">Sugerido</p>
                        <div className="modal-link" onClick={openModal}>
                            <img className="fotos" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JhX-wP6ihaNdbiBs9EKa8uXR3ZFh22c4_i3WQ2Ln&s" alt="Imagen" />
                            <img className="fotos" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JhX-wP6ihaNdbiBs9EKa8uXR3ZFh22c4_i3WQ2Ln&s" alt="Imagen" />
                            <img className="fotos" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JhX-wP6ihaNdbiBs9EKa8uXR3ZFh22c4_i3WQ2Ln&s" alt="Imagen" />
                            <Link to="/CrearPresentacion" className="add-button">Agregar</Link>
                        </div>
                    </div>
                    {/* Agregamos el modal */}
                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                {/* Contenido del modal */}
                                <p>Contenido del modal</p>
                                <button onClick={closeModal}>Cerrar</button>
                            </div>
                        </div>
                    )}
                    {/* Fin del modal */}
                    <ul className="presentation-list">
                        {filteredPresentations.map((presentation, index) => (
                            <li key={index} className="presentation-item">{presentation}</li>
                        ))}
                    </ul>
                </div>
                <div className="divider" />
            </div>
        </div>
    );
};

export default MisPresentaciones;
