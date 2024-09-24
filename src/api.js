const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
//Declara una constante llamada url que contiene la dirección de la API de The Movie Database (TMDb) para descubrir películas.
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2QzZWUwOTQ2OGU3ZjllZjllNmMzM2M2MTI5YmVkOSIsIm5iZiI6MTcyNDM0NTk2Ni43ODQ1NDEsInN1YiI6IjY2YzZkMTFhOGQ1ODBlY2E5OGMzYWY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qBe2Xv0dmsdqJPBrMD8kld-HIEI6DOFZCjn4yUzrZJ8'
    }
};


export async function fetchData() {
    try {
        const response = await fetch(url, options);  // Asegura que fetch sea asíncrono
        const data = await response.json();          // Convierte la respuesta en JSON
        return data.results;                         // Retorna los "results" de la API
    } catch (err) {
        console.error('error:' + err);               // Manejo de errores
    }
}

//ayudame a terminarlo de testear
// diseñar dos funciines oara fetchmovie y fecthc detalles cada uno cin su url 
//ene le main importar esos fetch 
//archivo de filtrop y sort 
//main seleccionar elementos
//api 
// como puedo separar este archivo en modulos 
//luego de separar todo tengo que testear 
//crear un mock con jest.fn
// mockResolvedValue MockRejectedValue


// mi test tendra asyn o wait 
// hacer un mock de jest con jest.fn, no quereemos que dependa de la api , lo que hace mi code con api
//investigar mockResolvedValue MockRejectedValue para controlar como resuelve mi mock 
//un test para cuendo fetch esta resuelto y un test esta rechazado 


