import React, { useState, useEffect } from 'react';
import NavBar from './componentes/navBar';
import NavBarIniciada from './componentes/navBar-iniciada.jsx';
import Banner from './componentes/banner';
import CardCurso from './componentes/cardCurso';
import { useContext } from 'react';
import { UsuarioContext } from '../context/usuarioContext';
import './VerCurso.css';

function VerCurso() {
  const [cursos, setCursos] = useState([]);

  const proyectosIniciales = [
    {
      nombre: "Curso de Programación Web",
      imagen: "https://crehana-blog.imgix.net/media/filer_public/41/5a/415a14f0-4073-42d0-ad39-cc15fcea6455/mejores-cursos-fotografia-online.jpg",
      lecciones: [
        { nombre: "Introducción a HTML", contenido: "lolsas" },
        { nombre: "CSS Básico", contenido: "..." },
        { nombre: "JavaScript Fundamentals", contenido: "..." }
      ],
      descripcion: "Este curso te enseñará los fundamentos de la programación web.",
      valoracion: 4.5,
      creador: "John Doe",
      categoria: "Desarrollo Web",
      estilo: "Interactivo",
      area: "Tecnología"
    }
  ];

  useEffect(() => {
    setCursos(proyectosIniciales);
  }, []);

  const { usuarioG } = useContext(UsuarioContext);
  return (
    <>
      {usuarioG ? <NavBarIniciada /> : <NavBar />}
      <div className="ver-curso-container">
        {cursos.map((curso, index) => (
          <div className="curso-card" key={index}>
            {/* Tarjeta de la foto */}
            <div className="curso-imagen-container">
              <img className="curso-imagen" src={curso.imagen} alt={curso.nombre} />
            </div>

            {/* Tarjeta de información */}
            <div className="curso-info">
              <h1>{curso.nombre}</h1>
              <h2>Lecciones:</h2>
              <ul>
                {curso.lecciones.map((leccion, leccionIndex) => (
                  <li key={leccionIndex}>
                    <strong>{leccion.nombre}:</strong> {leccion.contenido}
                  </li>
                ))}
              </ul>
              {/* Resto de la información del curso */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VerCurso;
