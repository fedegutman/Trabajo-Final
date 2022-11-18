// let buscador = document.querySelector('.buscador');
// buscador.addEventListener('focus', function() {

// });

let apiKey = 'https://api.themoviedb.org/3/movie/76341?api_key=1c7b96c9c6844bd81ab3f6d24f285c12';
let buscador = document.querySelector('.buscador');




	let QS = location.search; //Obtengo la QS
	let stringToObject = new URLSearchParams(QS); //La trasnformo en OL
	let aBuscar = stringToObject.get('q'); //Obtengo los datos de una propiedad con get()
	
	
	// let url = `https://rickandmortyapi.com/api/character/?name=${aBuscar}`

let api_key = `https://api.themoviedb.org/3/movie/550?api_key=7bb779dc3f73731cbf146b210f1f6ce4`
	
fetch(api_key)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data);
		let info = data.results
		let container = document.querySelector('.searchResults');
		let characters = '';


		for(let i=0; i<info.length; i++){
			characters += `<article>
								<img src=${info[i].image} alt='' />
								<a href='detalle.html?id=${info[i].id}'><p>Name: ${info[i].name}</p></a>
								<p>Status: ${info[i].status} </p>
								
							</article>`
		}
		container.innerHTML = characters;

		
	})
		
	.catch(function(error){
		console.log(error);
	})
// probando git