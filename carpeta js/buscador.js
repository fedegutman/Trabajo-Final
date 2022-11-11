// let buscador = document.querySelector('.buscador');
// buscador.addEventListener('focus', function() {

// });

let apiKey = 'https://api.themoviedb.org/3/movie/76341?api_key=1c7b96c9c6844bd81ab3f6d24f285c12'

fetch(apiKey)
	.then(function(response){
			return response.json();
	})
	.then(function(data){
			console.log(data);
	})
	.catch(function(error){
			console.log('El error es: ' + error);
	})

