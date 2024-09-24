export function renderMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';  // Limpiar la lista antes de renderizar nuevas películas

    movies.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('movie-item');

        li.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
        `;

        li.addEventListener('click', () => openModal(movie));
        movieList.appendChild(li);
    });
}

// Función para abrir el modal con detalles de la película
export function openModal(movie) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    modalContent.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
        <p>${movie.overview}</p>
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Rating:</strong> ${movie.vote_average}/10</p>
    `;

    modal.style.display = 'block';

    document.getElementById('modal-close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}