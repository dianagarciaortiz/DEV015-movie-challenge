// main.js
import { fetchData } from './api.js';
import { renderMovies } from './app.js';

// Inicializar el proceso
async function init() {
    const movies = await fetchData();  // Espera la data de las películas
    renderMovies(movies);              // Renderiza las películas en el DOM
}

init();  // Llama a la función para iniciar









// import { fetchData } from './api/api.js'; // Asegúrate de que este archivo exporta fetchData

// // Función para renderizar las películas en el DOM
// function renderMovies(movies) {
//     const movieList = document.getElementById('movieList');
//     movieList.innerHTML = '';  // Limpiar la lista antes de renderizar nuevas películas

//     // Recorre el array de películas
//     movies.forEach(movie => {
//         // Crea un elemento de lista para cada película
//         const li = document.createElement('li');
//         li.classList.add('movie-item');

//         // Inserta el contenido dentro de cada elemento de lista
//         li.innerHTML = `
//             <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
//             <h3>${movie.title}</h3>
//             <p>${movie.overview}</p>
//         `;

//         // Añadir evento para mostrar detalles en un modal al hacer clic
//         li.addEventListener('click', () => openModal(movie));

//         // Añade el elemento li a la lista
//         movieList.appendChild(li);
//     });
// }

// // Función para abrir el modal con detalles de la película
// function openModal(movie) {
//     const modal = document.getElementById('modal');
//     const modalContent = document.querySelector('.modal-content');
    
//     // Inserta detalles de la película en el modal
//     modalContent.innerHTML = `
//         <h2>${movie.title}</h2>
//         <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
//         <p>${movie.overview}</p>
//         <p><strong>Release Date:</strong> ${movie.release_date}</p>
//         <p><strong>Rating:</strong> ${movie.vote_average}/10</p>
//     `;

//     // Muestra el modal
//     modal.style.display = 'block';

//     // Añade evento para cerrar el modal
//     document.getElementById('modal-close').addEventListener('click', () => {
//         modal.style.display = 'none';
//     });
// }

// // Inicializar el proceso
// async function init() {
//     const movies = await fetchData();  // Espera la data de las películas
//     renderMovies(movies);              // Renderiza las películas en el DOM
// }

// init();  // Llama a la función para iniciar
  



















// import { fetchData } from "./api.js";
// const modal = document.getElementById('modal');
// const modalContent= document.querySelector('.modal-content');


// let movies;
// (async function(){
//     movies= await fetchData()
//     renderItems(movies);


// })

// function showModal(id) {
//     const url = `https://api.themoviedb.org/3/movie/${id}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2QzZWUwOTQ2OGU3ZjllZjllNmMzM2M2MTI5YmVkOSIsIm5iZiI6MTcyNDM0NTk2Ni43ODQ1NDEsInN1YiI6IjY2YzZkMTFhOGQ1ODBlY2E5OGMzYWY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qBe2Xv0dmsdqJPBrMD8kld-HIEI6DOFZCjn4yUzrZJ8'
        
//     }
// };
// fetch(url, options)
// .then(Response=>
//     Response.json())
//     .then(movie=>{
//         modalContent.innerHTML=
//         <h2>${movie.title}</h2>
        
//     })

// }

