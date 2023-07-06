import React from 'react';
import './CursoTerminado.css';
import { Link, useParams } from 'react-router-dom';

function CursoTerminado() {
  return (
    <div className="photo-details-container">
      <div className="info-container">
        <h1 className="info-curso">Curso de Fotografía</h1>
        <hr className="divider" />
        <div className="info-row">
          <div className="info-label">Creador:</div>
          <div className="info-value">John Doe</div>
        </div>
        <div className="info-row">
          <div className="info-label">Valoración:</div>
          <div className="info-value">4.5</div>
        </div>
        <div className="info-row">
          <div className="info-label">Estudiantes:</div>
          <div className="info-value">500+</div>
        </div>
        <div className="info-row">
          <div className="info-label">Audio:</div>
          <div className="info-value">Sí</div>
        </div>
        <div className="info-row">
          <div className="info-label">Subtítulos:</div>
          <div className="info-value">Español, Inglés</div>
        </div>
        <div className="info-row">
            <div className="info-label">Precio:</div>
            <div className="info-value">$99.99</div>
          </div>
          <div className="info-row">
            <div className="info-label">Descuento:</div>
            <div className="info-value">Sí</div>
          </div>
          <div className="info-row">
            <div className="info-label">Lecciones:</div>
            <div className="info-value">10</div>
          </div>
          <div className="info-row">
            <div className="info-label">Nivel:</div>
            <div className="info-value">Avanzado</div>
          </div>
          <div className="info-row">
            <div className="info-label">Categorías:</div>
            <div className="info-value">Fotografía, Diseño</div>
          </div>
      </div>
      <div className="photo-container">
        <img src="/foto1.jpg" alt="Foto Grande" className="photo" />
      </div>
      <div className="summary-container">
        <h2 className="summary-title">Resumen del Curso</h2>
        <p className="summary-text">Dentro de las posibilidades que ofrecen las redes sociales hoy en día, no cabe duda de que Instagram Stories es la herramienta del momento, ya que además de compartir imágenes y vídeo nos permite generar tráfico directo hacia sitios web o listas de suscripción.</p>
        </div>
        <Link to="/" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>Siguiente</Link>
    </div>
  );
}

export default CursoTerminado;
