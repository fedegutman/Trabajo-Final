let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
api_key_detalle_peliculas = `https://api.themoviedb.org/3/movie/popular?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US`

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
            infoPeli = `https://api.themoviedb.org/3/movie/popular?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US/${id}`
            console.log(infoPeli)

	})
	.catch(function(error){
			console.log('El error es: ' + error);
	})