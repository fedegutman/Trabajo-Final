let formulario = document.querySelector(".buscador");
let campoBuscar = document.querySelector(".barra_buscadora");


// arreglar para que funcione en el home
// sacar buzz del buscador y sacar texto insertado
console.log(campoBuscar.value);
formulario.addEventListener('submit',function(event){
	event.preventDefault();
	if (campoBuscar.value == ''){
		alert('El campo esta vacio!')
	}
	else{
		this.submit()
	}
})

let api_key_pelispopulares= "https://api.themoviedb.org/3/movie/popular?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US"

fetch(api_key_pelispopulares)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let info = data.results
    console.log(info)
    let container = document.querySelector('.seccion_populares');
    let peliculas = '';


    for(let i=0; i < info.length; i++){
        let longitudTitulo = info[i].title.length
        // console.log(longitudTitulo)
        if (longitudTitulo >= 25){
            peliculas += `<article class='peliculasjs'>
                                <h3 class='titulo_largo'>${info[i].title}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                                <h6>${info[i].release_date}<h6>
                            </article>`
        } else {
            peliculas += `<article class='peliculasjs'>
                                <h3>${info[i].title}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                                <h6>${info[i].release_date}<h6>
                            </article>`
        };
    }
    
    container.innerHTML = peliculas;    
})
    
.catch(function(error){
    console.log(error);
})

// ------------------------------------------------------------------------------------------------------------------

let api_key_series = "https://api.themoviedb.org/3/tv/popular?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US"

fetch(api_key_series)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let info = data.results
    console.log(info)
    let container = document.querySelector('.seccion_series');
    let series = '';

    for(let i=0; i < info.length; i++){
        let longitudTitulo = info[i].name.length
        console.log(longitudTitulo)
        if (longitudTitulo >= 25){
            series += `<article class='peliculasjs'>
                                <h3 class='titulo_largo'>${info[i].name}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </article>`
        } else {
            series += `<article class='peliculasjs'>
                                <h3>${info[i].name}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </article>`
        };
    }
    
    container.innerHTML = series;    
})
    
.catch(function(error){
    console.log(error);
})

// ------------------------------------------------------------------------------------------------------------------

let api_key_calificadas = "https://api.themoviedb.org/3/movie/top_rated?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US"
fetch(api_key_calificadas)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let info = data.results
    console.log(info)
    let container = document.querySelector('.seccion_calificadas');
    let peliculas = '';

    for(let i=0; i < info.length; i++){
        let longitudTitulo = info[i].title.length
        console.log(longitudTitulo)
        if (longitudTitulo >= 25){
            peliculas += `<article class='peliculasjs'>
                                <h3 class='titulo_largo'>${info[i].title}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </article>`
        } else {
            peliculas += `<article class='peliculasjs'>
                                <h3>${info[i].title}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </article>`
        };
    }
    
    container.innerHTML = peliculas;    
})
    
.catch(function(error){
    console.log(error);
})