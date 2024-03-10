import React, { useState, useRef } from 'react';
import download from 'downloadjs';
import '../TarjetaVideo/tarjetaVideo.css';
import BotonDescarga from '../TarjetaImagen/BotonDescarga/BotonDescarga';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TarjetaVideo = ({ vid, handleOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const videosSd = vid.video_files

  const handleHover = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };


  console.log({vid})



  return (
    <div className="tarjetaVideo" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <div className='tarjetaVideo__imagenReproductor'>
        <PlayArrowIcon style={{color:"rgba(128, 0, 128, 0.651)", fontSize:"50px"}}/>
      </div>
      <div onClick={() => handleOpen()}>
        <video
          ref={videoRef}
          poster={vid.video_pictures[0].picture}
          src={videosSd[0].link}
          style={{ borderRadius: '20px' }}
        ></video>
      </div>    
    </div>
  );
};

export default TarjetaVideo;
