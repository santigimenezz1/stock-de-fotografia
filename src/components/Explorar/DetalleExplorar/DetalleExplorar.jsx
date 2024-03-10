import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import '../DetalleExplorar/detalleExplorar.css';
import { useEffect, useState } from "react";
import Main from "../../Home/Main/Main";
import { searchColeccion, searchVideo } from "../../PeticionesFetch/Peticiones";
import ModalImagen from "../../ModalImagen/ModalImagen";
import BotonBack from "../../BotonBack/BotonBack";
import ModalVideo from "../../ModalVideo/ModalVideo";

const DetalleExplorar = () => {
  const { nombre } = useParams();
  const [imagenes, setImagenes] = useState([]);
  const [videos, setVideos] = useState([])

  useEffect(() => {
    searchColeccion(nombre, setImagenes);
  }, []);

  useEffect(()=>{
    searchVideo( nombre, setVideos)
},[])


  console.log(nombre);
  console.log(imagenes);
  console.log(videos)

  return (
    <div>
      <NavBar />

      <BotonBack />

      {imagenes.length > 0 && (
        <div className="main__imagenes" style={{ marginTop: "50px" }}>
          {imagenes.map((img) => (
            <div key={img.id}>
              <ModalImagen img={img} />
            </div>
          ))}
        </div>
      )}
                      <div className="grid-container">
                {videos.map((vid) => (
                    <div className="grid-container" key={vid.id}>
                        <ModalVideo vid={vid} />
                    </div>
                ))}
            </div>
    </div>
  );
};

export default DetalleExplorar;
