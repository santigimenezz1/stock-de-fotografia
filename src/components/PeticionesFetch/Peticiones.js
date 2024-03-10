export const search = async (text, setImagenes) => {
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
            setImagenes(data.photos);
            console.log({data})
            return
        } else {
            console.error('Error al recuperar datos de la API');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

export const searchVideo = async (text, setVideos) => {
    let data;
    let page = 1
    let type="videos"
    try {
        const response = await fetch(`https://api.pexels.com/${type}/search?query=${text}&page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl',
            }
        });
        if (response.ok) {
             data = await response.json();
             setVideos(data.videos);
            return
        } else {
            console.error('Error al recuperar datos de la API');
        }
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