import ModalImagen from "../../ModalImagen/ModalImagen";
import ModalVideo from "../../ModalVideo/ModalVideo";
import '../Main/main.css';

const Main = ({ imagenes, videos, typeSelector }) => {


    console.log({imagenes})
    return (
        <div>
            {imagenes.length > 0 && typeSelector === "v1" ? (
                <div className="main__imagenes">
                    {imagenes.map((img) => (
                        <div key={img.id}>
                            <ModalImagen img={img} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid-container">
                {videos.map((vid) => (
                    <div className="grid-container" key={vid.id}>
                        <ModalVideo vid={vid} />
                    </div>
                ))}
            </div>
            )}
        </div>
        
    );
};

export default Main;
