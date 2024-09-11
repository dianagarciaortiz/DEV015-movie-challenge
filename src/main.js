//const fetch = require('node-fetch');
const modal = document.getElementById('modal'); // Asegúrate de tener un modal en tu HTML
const modalContent = document.querySelector('.modal-content');
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2QzZWUwOTQ2OGU3ZjllZjllNmMzM2M2MTI5YmVkOSIsIm5iZiI6MTcyNDM0NTk2Ni43ODQ1NDEsInN1YiI6IjY2YzZkMTFhOGQ1ODBlY2E5OGMzYWY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qBe2Xv0dmsdqJPBrMD8kld-HIEI6DOFZCjn4yUzrZJ8'
    }
};
let movies;
async function fetchdata() {  //Esta función obtiene datos de una API y asigna los resultados a la variable movies.
    await fetch(url, options) //Esto asegura que el código espera a que fetchdata termine antes de continuar.
        .then(res => res.json())
        .then(json => movies = json.results)
        .catch(err => console.error('error:' + err));
}
(async function () {
    await fetchdata();
    renderItems(movies);// Desplegar el array de películas
})();

function showModal(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2QzZWUwOTQ2OGU3ZjllZjllNmMzM2M2MTI5YmVkOSIsIm5iZiI6MTcyNDM0NTk2Ni43ODQ1NDEsInN1YiI6IjY2YzZkMTFhOGQ1ODBlY2E5OGMzYWY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qBe2Xv0dmsdqJPBrMD8kld-HIEI6DOFZCjn4yUzrZJ8'
        }
    };

    fetch(url, options)
        .then(Response => Response.json())
        .then(movie => {

            modalContent.innerHTML = `
                <h2>${movie.title}</h2>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <p>Release Date: ${movie.release_date}</p>
                <p>Overview: ${movie.overview}</p>
                <p>Genres: ${movie.genres.map(genre => genre.name).join(', ')}</p>
                <p>Rating: ${movie.vote_average}</p>
            `;
            modal.style.display = 'block'; // Muestra el modal
        })

        .catch(error => {
            console.error('Error fetching movie details:', error);
        });
}

function renderItems(items) {
    const movieList = document.getElementById('movieList');  // Asegúrate de tener este contenedor en tu HTML

    movieList.innerHTML = '';  // Limpiar cualquier contenido previo


    items.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.innerHTML = ` <article> 
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"> 
         <h2>${movie.title}</h2> 
         <p>${movie.release_date}</p>  
        </article> `
        listItem.addEventListener('click', () => {
            showModal(movie.id);

        });
        movieList.appendChild(listItem);
    });
}

(async function () {
    await fetchdata();  // Espera a que los datos se obtengan
    renderItems(movies);  // Luego muestra las películas 
})();





// Event listener para cerrar el modal
document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';

    (async function () {
        await fetchdata();  
        renderItems(movies);  
});

// let movies;

async function fetchdata(genreId = "") {  
    let url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

   
    if (genreId) {
        url += `&with_genres=${genreId}`;
    }

    // await fetch(url, options)
    //     .then(res => res.json())
    //     .then(json => movies = json.results)
    //     .catch(err => console.error('error:' + err));
}

// function renderItems(items) {
//     const movieList = document.getElementById('movieList');  // Asegúrate de tener este contenedor en tu HTML

//     movieList.innerHTML = '';  // Limpiar cualquier contenido previo

    items.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.innerHTML = ` <article> 
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"> 
         <h2>${movie.title}</h2> 
         <p>${movie.release_date}</p>  
        </article> `;
        listItem.addEventListener('click', () => {
            showModal(movie.id);
        });
        movieList.appendChild(listItem);
    });
})

(async function () {
    await fetchdata();  
    renderItems(movies); 
})();


document.getElementById('genreSelect').addEventListener('change', async function () {
    const selectedGenre = this.value;  
    await fetchdata(selectedGenre);  
    renderItems(movies); 
}); 