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
			let longitudTitulo = info[i].title.length
			console.log(longitudTitulo)
			if ((longitudTitulo >= 25)  && (info[i].poster_path != null)){
				peliculas += `<article class='peliculasjs'>
									<a href= "detalle_peliculas.html?id=${info[i].id}">
									<h3 class='titulo_largo'>${info[i].title}</h3>
									<img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
									<h6>${info[i].release_date}<h6>
									</a>
								</article>`
			} else if ((longitudTitulo >= 25) && (info[i].poster_path == null)) {
				peliculas += `<article class='peliculasjs'>
									<a href= "detalle_peliculas.html?id=${info[i].id}">
									<h3 class='titulo_largo'>${info[i].title}</h3>
									<img class = 'pelis' src='img/no_image.png' alt='' />
									<h6>${info[i].release_date}<h6>
									</a>
								</article>`
			} else if ((longitudTitulo < 25) && (info[i].poster_path == null)) {
				peliculas += `<article class='peliculasjs'>
									<a href= "detalle_peliculas.html?id=${info[i].id}">
									<h3>${info[i].title}</h3>
									<img class = 'pelis' src='img/no_image.png' alt='' />
									<h6>${info[i].release_date}<h6>
									</a>
								</article>`
			} else {
				peliculas += `<article class='peliculasjs'>
									<a href= "detalle_peliculas.html?id=${info[i].id}">
									<h3>${info[i].title}</h3>
									<img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
									<h6>${info[i].release_date}<h6>
									</a>
								</article>`
			};
		}
		container.innerHTML = peliculas;
		document.querySelector('.seccion_buscador').innerText = `Resultados de búsqueda: ${busqueda}`
		
	})
		
	.catch(function(error){
		console.log(error);
	})

// -------------------------------------------------------------------------------------------------------

let api_key_series =`https://api.themoviedb.org/3/search/tv?query=${busqueda}&api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US&page=1&include_adult=false`
fetch(api_key_series)
.then(function(response){
	return response.json();
})
.then(function(data){
	console.log(data);
	let info = data.results
	let container = document.querySelector('.seccion_generos');
	let series = '';

	if (data.results.length == 0){
		series += "<p class='no_results'>¡Ups! No hay resultados para su busqueda :( </p>"
	}
	
	for(let i=0; i<info.length; i++){
		let longitudTitulo = info[i].name.length
		console.log(longitudTitulo)
		if ((longitudTitulo >= 25) && (info[i].poster_path != null)) {
			series += `<article class='peliculasjs'>
								<a href= "detalle_series.html?id=${info[i].id}">
								<h3 class='titulo_largo'>${info[i].name}</h3>
								<img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
								<h6>${info[i].first_air_date}<h6>
								</a>
							</article>`
		} else if ((longitudTitulo >= 25) && (info[i].poster_path == null)){
			series += `<article class='peliculasjs'>
								<a href= "detalle_series.html?id=${info[i].id}">
								<h3 class='titulo_largo'>${info[i].name}</h3>
								<img class = 'pelis' src='img/no_image.png' alt='' />
								<h6>${info[i].first_air_date}<h6>
								</a>
							</article>`

		} else if ((longitudTitulo < 25) && (info[i].poster_path == null)){
			series += `<article class='peliculasjs'>
								<a href= "detalle_series.html?id=${info[i].id}">
								<h3>${info[i].name}</h3>
								<img class = 'pelis' src= 'img/no_image.png' alt='' />
								<h6>${info[i].first_air_date}<h6>
								</a>
							</article>`

		} else{
			series += `<article class='peliculasjs'>
								<a href= "detalle_series.html?id=${info[i].id}">
								<h3>${info[i].name}</h3>
								<img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
								<h6>${info[i].first_air_date}<h6>
								</a>
							</article>`
		};
	}
	container.innerHTML = series;
	document.querySelector('.seccion_buscador').innerText = `Resultados de ${busqueda}`
	
})
	
.catch(function(error){
	console.log(error);
})

