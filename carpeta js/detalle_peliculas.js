let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()


let api_key_detalle_peliculas = `https://api.themoviedb.org/3/movie/${id}?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US`

console.log(api_key_detalle_peliculas)

fetch(api_key_detalle_peliculas)
	.then(function(response){
			return response.json();
	})
	.then(function(data){
			console.log(data);
            info = data.results
            console.log(info.results)
            let id = localStorage.getItem('id');
            console.log(info.id);

	})
	.catch(function(error){
			console.log('El error es: ' + error);
	})