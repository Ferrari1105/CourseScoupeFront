import React, { useEffect, useState } from 'react';
import './MCrearCurso3.css';
import NavBar from '../componentes/navBar-iniciada.jsx';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CursoContext } from './../../context/cursoContext';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'; // Importar el componente Modal
import Button from 'react-bootstrap/Button';
import { uploadfile } from '../Firebase/config'
//import { v4 } from 'uuid'

function MCrearCurso3() {

  const { cursoG, setCursoG } = useContext(CursoContext);
  const [uploadedBanner, setUploadedBanner] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [fileBanner, setFileBanner] = useState()
  const [fileFoto, setFileFoto] = useState()
  const [fileVideo, setFileVideo] = useState()
  const [showModal, setShowModal] = useState(false); // Estado para controlar si se muestra el modal

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = async () => {
    const urlBanner = await uploadfile(fileBanner)
    const urlFoto = await uploadfile(fileFoto)
    const urlVideo = await uploadfile(fileVideo)
    setCursoG({ ...cursoG, PortadaCurso: urlBanner })
    setCursoG({...cursoG, imagenes: urlFoto})
    setCursoG({...cursoG, videos: urlVideo})

    setShowModal(true);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setFileFoto(file)
    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    setFileBanner(file)
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedBanner(e.target.result);
      setCursoG({ ...cursoG, PortadaCurso: e.target.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setFileVideo(file)
    reader.onload = (e) => {
      setUploadedVideo(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const terminar = async () => {
    setCursoG({...cursoG, Terminado: true })
    console.log("terminar", cursoG)
  };

  const terminar2 = async () => {
    let cursoStringified = JSON.stringify(cursoG);
    try {
      
      const response = await fetch(`http://localhost:3000/CrearCurso`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: cursoStringified,
      });

      localStorage.removeItem('Cursof1')
    } catch {
      throw new Error(`No se pudo realizar el fetch tipo POST :(`);
    }
  };

useEffect( () => {
  console.log(cursoG.Terminado)
  if (cursoG.Terminado) {
     terminar2()
  }
  else {
     terminar()
  }
}, [cursoG.Terminado]);
  return (
    <div>
      <NavBar />
      <div className="upload-container">
        <Card className="banner-card">
          <Card.Body>
            <h2 className="lesson-title">Curso:</h2>
            <div className="row">
              <h2 className="row-title">Banner:</h2>
              <div className="photo-container">
                {uploadedBanner ? (
                  <img src={uploadedBanner} alt="Banner" className="photo" />
                ) : (
                  <p className='nashe'>No se ha seleccionado ningun banner</p>
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


          </Card.Body>
        </Card>
        <div className='rowLecciones'>
  {cursoG.Lessons.map((lesson, index) => (

    <Card className="lesson-card" key={index}>
      <Card.Body>
        <h2 className="lesson-title">Lección {index + 1}:</h2>
        <div className="row">
          <h2 className="row-title">Imagenes:</h2>
          <div className="photo-container">
            {uploadedImage ? (
              <img src={uploadedImage} alt="Imagen" className="photo" />
            ) : (
              <p className='nashe'>No se ha seleccionado ninguna imagen</p>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleImageUpload(event, index, 'image')}
            id={`image-upload-${index}`}
            style={{ display: 'none' }}
          />
          <label htmlFor={`image-upload-${index}`} className="custom-upload-button">
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
              <p className='nashe'>No se ha seleccionado ningún video</p>
            )}
          </div>
          <input
            type="file"
            accept="video/*"
            onChange={(event) => handleImageUpload(event, index, 'video')}
            id={`video-upload-${index}`}
            style={{ display: 'none' }}
          />
          <label htmlFor={`video-upload-${index}`} className="custom-upload-button">
            Seleccionar Video
          </label>
        </div>
      </Card.Body>
    </Card>
  ))}

        </div>
      </div>
      <Link className={`crear-curso-option`} onClick={handleShow}>
        Terminar
      </Link>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Estas Seguro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Quieres terminar de crear el curso?
        </Modal.Body>
        <Modal.Footer>
          <Button>

            <Link
              to="/"
              variant="danger"
              onClick={terminar}
            >
              Confirmar
            </Link>
          </Button>
          <Button>
            <Link variant="danger" onClick={handleClose}>
              Cerrar
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default MCrearCurso3;