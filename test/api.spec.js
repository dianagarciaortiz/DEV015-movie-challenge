// import { fetchdata }from "../src/api/api.js"


// describe('fetchdata', () => {

//     it('debe ser una funcion', () => {
//       expect(typeof fetchdata).toBe('function');
//     });
//   });
import { fetchData } from "../src/api/api.js";

// Mockeamos la función global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [{ title: "Movie 1" }, { title: "Movie 2" }] }),
  })
);

describe('fetchData', () => {
  it('debe ser una función', () => {
    expect(typeof fetchData).toBe('function');
  });

  it('debe llamar a fetch y devolver datos', async () => {
    const data = await fetchData();  // Llamamos a la función que estamos testeando

    // Comprobamos que fetch fue llamada una vez
    expect(fetch).toHaveBeenCalledTimes(1);

    // Comprobamos que fetch fue llamada con la URL correcta
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
    );

    // Comprobamos que la función devuelve los resultados esperados
    expect(data).toEqual([{ title: "Movie 1" }, { title: "Movie 2" }]);
  });

  it('debe manejar errores', async () => {
    // Cambiamos el mock de fetch para simular un error
    fetch.mockImplementationOnce(() => Promise.reject("API error"));

    // Verificamos que el error es manejado correctamente
    await expect(fetchData()).rejects.toEqual("API error");
  });
});


  import { renderMovies } from "../src/components/app.js";

  describe('renderMovies', () => {
    beforeEach(() => {
      // Configuramos el DOM para las pruebas
      document.body.innerHTML = '<ul id="movieList"></ul>';
    });
  
    it('debe renderizar las películas correctamente en el DOM', () => {
      const movies = [
        { title: "Movie 1", poster_path: "/path1.jpg", overview: "Overview 1" },
        { title: "Movie 2", poster_path: "/path2.jpg", overview: "Overview 2" }
      ];
  
      renderMovies(movies);
  
      const movieList = document.getElementById('movieList');
      const items = movieList.querySelectorAll('li');
  
      expect(items.length).toBe(2);  // Verifica que hay 2 elementos li renderizados
      expect(items[0].innerHTML).toContain("Movie 1");
      expect(items[1].innerHTML).toContain("Movie 2");
    });
  });
  


  // then y catch revisar!!
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
