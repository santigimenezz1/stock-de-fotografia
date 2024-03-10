import React from 'react';
import download from 'downloadjs';
import './tarjetaImagen.css';
import BotonDescarga from './BotonDescarga/BotonDescarga';

const TarjetaImagen = ({ url, handleOpen, img }) => {

  
  const handleDownload = async () => {
    try {
      // Descargar la imagen directamente desde la URL de Pexels
      const response = await fetch(url); //hago la peticion a la url de la imagen
      const blob = await response.blob(); //convierto la imagen a un blob
      download(blob, 'imagen_descargada.jpg', 'image/jpeg'); //descargo la imagen con la libreria downolad js
    } catch (error) {
      console.error('Error al descargar la imagen:', error);
    }
  };


  return (
    <div className="tarjetaImagen">
      <div onClick={() => handleOpen()}>
        <img src={url} alt="Imagen" />
      </div>
      <div className="botonDescarga">
        <div className="container__botonDescarga">
          <BotonDescarga handleDownload={handleDownload} />
        </div>
      </div>
    </div>
  );
};
export default TarjetaImagen;
