import React, { useState, useEffect } from 'react';
import { searchColeccion, searchColeccionesId } from '../PeticionesFetch/Peticiones';
import TarjetaExplorar from './TarjetaExplorar/TarjetaExplorar';
import '../Explorar/explorar.css'
import NavBar from '../NavBar/NavBar';

const Explorar = () => {
  const [gatos, setGatos] = useState([]);
  const [perros, setPerros] = useState([]);
  const [valencia, setValencia] = useState([]);
  const [madrid, setMadrid] = useState([]);
  const [barcelona, setBarcelona] = useState([]);
  const [playa, setPlaya] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [mar, setMar] = useState([]);
  const [autos, setAutos] = useState([]);
  const [pc, setPc] = useState([]);
  const [ferrari, setFerrari] = useState([]);
  const [iphone, setIphone] = useState([]);
  const [comida, setComida] = useState([]);
  const [pajaro, setPajaro] = useState([]);
  const [miami, setMiami] = useState([]);
  const [book, setBook] = useState([]);
  const [oldSchool, setOldSchool] = useState([]);
  const [vintage, setVintage] = useState([]);
  const [roma, setRoma] = useState([]);
  const [father, setFather] = useState([]);
  const [mother, setMother] = useState([]);
  const [child, setChild] = useState([]);
  const [toys, setToys] = useState([]);
  const [racers, setRacers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await searchColeccion("gatos", setGatos);
      await searchColeccion("perros", setPerros);
      await searchColeccion("valencia", setValencia);
      await searchColeccion("madrid", setMadrid);
      await searchColeccion("barcelona", setBarcelona);
      await searchColeccion("playa", setPlaya);
      await searchColeccion("pizza", setPizza);
      await searchColeccion("mar", setMar);
      await searchColeccion("autos", setAutos);
      await searchColeccion("pc", setPc);
      await searchColeccion("ferrari", setFerrari);
      await searchColeccion("iphone", setIphone);
      await searchColeccion("comida", setComida);
      await searchColeccion("pajaro", setPajaro);
      await searchColeccion("miami", setMiami);
      await searchColeccion("book", setBook);
      await searchColeccion("oldSchool", setOldSchool);
      await searchColeccion("vintage", setVintage);
      await searchColeccion("roma", setRoma);
      await searchColeccion("father", setFather);
      await searchColeccion("mother", setMother);
      await searchColeccion("child", setChild);
      await searchColeccion("toys", setToys);
      await searchColeccion("racers", setRacers);
    };
    fetchData();
  }, []);




  return (
    <>
    <NavBar />
    <h1 style={{textAlign:"center", letterSpacing:"2px", marginTop:"80px", fontSize:"45px"}}>Descubre lo mejor de Pixel studio</h1>


    <div className='container__tarjetasExplorar'>
        <h1 style={{letterSpacing:"2px"}}>Colecciones populares</h1>
    <div className='tarjetas__explorar'>
      <TarjetaExplorar coleccion={gatos} text={"gatos"} />
      <TarjetaExplorar coleccion={perros} text={"perros"}  />
      <TarjetaExplorar coleccion={valencia} text={"valencia"}  />
    </div>

    <div className='tarjetas__explorar'>
      <TarjetaExplorar coleccion={madrid} text={"madrid"}  />
      <TarjetaExplorar coleccion={barcelona} text={"barcelona"}  />
      <TarjetaExplorar coleccion={playa} text={"playa"}  />
    </div>

    <div className='tarjetas__explorar'>
      <TarjetaExplorar coleccion={pizza} text={"gatpizzaos"}  />
      <TarjetaExplorar coleccion={mar} text={"mar"}  />
      <TarjetaExplorar coleccion={autos} text={"autos"}  />
    </div>

    <div className='tarjetas__explorar'>
      <TarjetaExplorar coleccion={pc} text={"pc"}  />
      <TarjetaExplorar coleccion={ferrari} text={"ferrari"}  />
      <TarjetaExplorar coleccion={iphone} text={"iphone"}  />
    </div>


    </div>




   <div className='container__tarjetas__flex'>
      <TarjetaExplorar coleccion={comida} text={"comida"} />
      <TarjetaExplorar coleccion={pajaro} text={"pajaro"} />
      <TarjetaExplorar coleccion={miami} text={"miami"} />
      <TarjetaExplorar coleccion={book} text={"book"} />
      <TarjetaExplorar coleccion={oldSchool} text={"oldSchool"} />
      <TarjetaExplorar coleccion={vintage} text={"vintage"} />
      <TarjetaExplorar coleccion={book} text={"book"} />
      <TarjetaExplorar coleccion={oldSchool} text={"oldSchool"} />
      <TarjetaExplorar coleccion={vintage} text={"vintage"} />
      <TarjetaExplorar coleccion={roma} text={"roma"} />
      <TarjetaExplorar coleccion={father} text={"father"} />
      <TarjetaExplorar coleccion={mother} text={"mother"} />
      <TarjetaExplorar coleccion={child} text={"child"} />
      <TarjetaExplorar coleccion={toys} text={"toys"} />
      <TarjetaExplorar coleccion={racers} text={"racers"} />
      <TarjetaExplorar coleccion={pajaro} text={"pajaro"} />
   </div>

   <footer>
    <h1>este es el footer</h1>
   </footer>






    </>

    
  );
};

export default Explorar;
