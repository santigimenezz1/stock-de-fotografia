export const search = async (text, setImagenes) => {
  let data = [];
  const type = "v1";
  const apiKey = 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl';

  try {
      let page = 1;
      let totalPages = 15;

      // Realizar solicitudes hasta obtener todos los datos de todas las páginas
      while (page <= totalPages) {
          const response = await fetch(`https://api.pexels.com/${type}/search?query=${text}&page=${page}`, {
              method: 'GET',
              headers: {
                  'Authorization': apiKey,
              }
          });

          if (response.ok) {
              const responseData = await response.json();
              data = data.concat(responseData.photos);
              // Actualizar el número total de páginas si no lo hemos hecho aún
              if (totalPages === 1) {
                  totalPages = Math.ceil(responseData.total_results / responseData.per_page);
              }
          } else {
              console.error('Error al recuperar datos de la API');
              break; // Salir del bucle si hay un error en la solicitud
          }
          page++; // Moverse a la siguiente página para la próxima iteración
      }

      setImagenes(data);
  } catch (error) {
      console.error('Error en la solicitud:', error);
  }
}


export const searchVideo = async (text, setVideos) => {
  let data = [];
  const type = "videos";
  const apiKey = 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl';

  try {
      let page = 1;
      let totalPages = 9;

      // Realizar solicitudes hasta obtener todos los datos de todas las páginas
      while (page <= totalPages) {
          const response = await fetch(`https://api.pexels.com/${type}/search?query=${text}&page=${page}`, {
              method: 'GET',
              headers: {
                  'Authorization': apiKey,
              }
          });

          if (response.ok) {
              const responseData = await response.json();
              data = data.concat(responseData.videos);
              // Actualizar el número total de páginas si no lo hemos hecho aún
              if (totalPages === 10) {
                  totalPages = Math.ceil(responseData.total_results / responseData.per_page);
              }
          } else {
              console.error('Error al recuperar datos de la API');
              break; // Salir del bucle si hay un error en la solicitud
          }
          page++; // Moverse a la siguiente página para la próxima iteración
      }

      setVideos(data);
  } catch (error) {
      console.error('Error en la solicitud:', error);
  }
}


export const searchFotografo = async ({ setFotografo }) => {
    let data;
  
    try {
      const response = await fetch('https://api.pexels.com/v1/photographers/2481684', {
        method: 'GET',
        headers: {
          'Authorization': 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl',
        },
      });
  
      if (response.ok) {
        data = await response.json();
        setFotografo(data);  // Aquí corregí setFotogrado a setFotografo
        return;
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
};

export const searchColeccionesId = async ({ setColeccion }) => {
    const apiKey = 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl';
    const apiUrl = 'https://api.pexels.com/v1/collections/featured';
  
    const getCollections = async () => {
      let allCollections = [];
      let nextPage = apiUrl;
  
      while (nextPage) {
        const response = await fetch(nextPage, {
          headers: {
            'Authorization': apiKey,
          },
        });
  
        const data = await response.json();
        const collections = data.collections;
  
        if (collections.length > 0) {
          allCollections = [...allCollections, ...collections];
        }
  
        nextPage = data.next_page;
      }
  
      return allCollections;
    };
  
    const getMediaFilesForCollection = async (collectionId) => {
      const mediaUrl = `https://api.pexels.com/v1/collections/${collectionId}`;
      const response = await fetch(mediaUrl, {
        headers: {
          'Authorization': apiKey,
        },
      });
  
      const mediaData = await response.json();
      return mediaData.media;
    };
  
    // Llamada a la función
    getCollections()
      .then(async (collections) => {
        let allMediaFiles = [];
  
        const firstCollection = collections.slice(0, 5);
  
        for (const collection of firstCollection) {
          const mediaFiles = await getMediaFilesForCollection(collection.id);
          allMediaFiles = [...allMediaFiles, ...mediaFiles];
        }
  
        // Actualiza el estado con todos los archivos multimedia acumulados
        setColeccion(allMediaFiles);
      })
      .catch(error => console.error('Error:', error));
  };
  

  export const searchColeccion = async (text, setColeccion) => {
    let data;
    let page = 1
    let type="v1"
    try {
        const response = await fetch(`https://api.pexels.com/${type}/search?query=${text}&page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl',
            }
        });
        if (response.ok) {
             data = await response.json();
             setColeccion(data.photos);
            return
        } else {
            console.error('Error al recuperar datos de la API');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}