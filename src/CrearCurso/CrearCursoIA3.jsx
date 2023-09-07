import React, { useState } from 'react';
import './CrearCursoIA3.css';
import NavBar from '../componentes/navBar-iniciada.jsx';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CursoContext } from './../../context/cursoContext';

function MCrearCurso3() {

  const { cursoG } = useContext(CursoContext);
  const [uploadedBanner, setUploadedBanner] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
console.log(cursoG)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedBanner(e.target.result);
      //setCursoG({ ...cursoG, PortadaCurso: e.target.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedVideo(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const terminar = async () => {
    console.log(cursoG);
    let cursoStringified = JSON.stringify(cursoG);
    try {
      const response = await fetch('http://localhost:3000/MCrearCurso3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: cursoStringified,
      });
      return await response.json();
    } catch {
      throw new Error(`No se pudo realizar el fetch tipo ${method} :(`);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="three-rows-view">
        <div className="row">
          <h2 className="row-title">Banner:</h2>
          <div className="photo-container">
            {uploadedBanner ? (
              <img src={uploadedBanner} alt="Banner" className="photo" />
            ) : (
              <p>No se ha seleccionado ningun banner</p>
            )}
          </div>
          <input
            type="file"
            accept="banner/*"
            onChange={handleBannerUpload}
            id="banner-upload"
            style={{ display: 'none' }}
          />
          <label htmlFor="banner-upload" className="custom-upload-button">
            Seleccionar Banner
          </label>
        </div>

        <div className="row">
          <h2 className="row-title">Imagenes:</h2>
          <div className="photo-container">
            {uploadedImage ? (
              <img src={uploadedImage} alt="Imagen" className="photo" />
            ) : (
              <p>No se ha seleccionado ninguna imagen</p>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="image-upload"
            style={{ display: 'none' }}
          />
          <label htmlFor="image-upload" className="custom-upload-button">
            Seleccionar Imagen
          </label>
        </div>

        <div className="row">
          <h2 className="row-title">Videos:</h2>
          <div className="photo-container">
            {uploadedVideo ? (
              <video controls>
                <source src={uploadedVideo} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            ) : (
              <p>No se ha seleccionado ningún video</p>
            )}
          </div>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            id="video-upload"
            style={{ display: 'none' }}
          />
          <label htmlFor="video-upload" className="custom-upload-button">
            Seleccionar Video
          </label>
        </div>
        <Link
          to="/Store"
          className={`crear-curso-option`}
          onClick={terminar}
        >
          Terminar
        </Link>
      </div>
    </div>
  );
}

export default MCrearCurso3;

