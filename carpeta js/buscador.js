// let buscador = document.querySelector('.buscador');
// buscador.addEventListener('focus', function() {

// });





let QS = location.search; //Obtengo la QS
let stringToObject = new URLSearchParams(QS); //La trasnformo en OL
let busqueda = stringToObject.get('buscador'); //Obtengo los datos de una propiedad con get()

let api_key = `https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US&page=1&include_adult=false`


fetch(api_key)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data);
		let info = data.results
		let container = document.querySelector('.seccion_generos');
		let peliculas = '';


		for(let i=0; i<info.length; i++){
			peliculas += `<article class='peliculasjs'>
								<h3>${info[i].title}</h3>
								<img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
								<!-- <p>Status: ${info[i].status} </p> -->
								
							</article>`
		}
		container.innerHTML = peliculas;
		document.querySelector('.seccion_buscador').innerText = `Resultados de ${busqueda}`
		
	})
		
	.catch(function(error){
		console.log(error);
	})
// probando git