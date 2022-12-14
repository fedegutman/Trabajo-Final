//lista de favoritos

let recuperoStorage= localStorage.getItem("pelisfavoritas");
console.log(recuperoStorage);

let seleccionados = JSON.parse(recuperoStorage);
console.log(seleccionados);

let pelisFavoritas= document.querySelector (".seccion_favoritos");

if (seleccionados == null || seleccionados.length == 0){
    pelisFavoritas.innerHTML = `<p> No hay favoritos seleccionados </p>`
} else {
    for (let i= 0; i<seleccionados.length; i++){
        buscarYMostrarFavoritos(seleccionados[i])
    }
}
function buscarYMostrarFavoritos (id){
    //fetch
    let urlpelis = `https://api.themoviedb.org/3/movie/${id}?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US`

    fetch (urlpelis)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            if (data.original_title.length >= 25){
                pelisFavoritas.innerHTML += `
                            <article class='peliculasjs'>
                            <a href='detalle_peliculas.html?id=${data.id}'>
                            <h3 class = 'titulo_largo'>${data.original_title}</h3>
                            <img src="https://image.tmdb.org/t/p/original${data.poster_path}" alt="${data.name}" class="pelis"></img>
                            <h6>${data.release_date}</h6>
                            </a>
                            </article>`

            } else{
                pelisFavoritas.innerHTML += `
                            <article class='peliculasjs'>
                            <a href='detalle_peliculas.html?id=${data.id}'>
                            <h3>${data.original_title}</h3>
                            <img src="https://image.tmdb.org/t/p/original${data.poster_path}" alt="${data.name}" class="pelis"></img>
                            <h6>${data.release_date}</h6>
                            </a>
                            </article>`
                            
            }
        })
        .catch(function(e){
            console.log(e);
        })


}

// -------------------------------------------------------------------------------------------------------------

let recuperoStorageSeries= localStorage.getItem("seriesfavoritas");
console.log(recuperoStorageSeries);

let seleccionadosSeries = JSON.parse(recuperoStorageSeries);
console.log(seleccionadosSeries);

let seriesFavoritas = document.querySelector(".seccion_favoritos_series");

if (seleccionadosSeries == null || seleccionadosSeries.length == 0){
    seriesFavoritas.innerHTML = `<p> No hay favoritos seleccionados </p>`
} else {
    for (let i= 0; i<seleccionadosSeries.length; i++){
        buscarYMostrarFavoritos2(seleccionadosSeries[i])
    }
}
function buscarYMostrarFavoritos2 (id){
    //fetch
    let urlSeries = `https://api.themoviedb.org/3/tv/${id}?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US`

    fetch (urlSeries)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            if (data.original_name.length >= 25){
                seriesFavoritas.innerHTML += `
                            <article class='peliculasjs'>
                            <a href='detalle_series.html?id=${data.id}'>
                            <h3 class = 'titulo_largo'>${data.original_name}</h3>
                            <img src="https://image.tmdb.org/t/p/original${data.poster_path}" alt="${data.name}" class="pelis"></img>
                            <h6>${data.first_air_date}</h6>
                            </a>
                            </article>`

            } else{
                seriesFavoritas.innerHTML += `
                            <a href='detalle_series.html?id=${data.id}'>
                            <article class='peliculasjs'>
                            <h3>${data.original_name}</h3>
                            <img src="https://image.tmdb.org/t/p/original${data.poster_path}" alt="${data.name}" class="pelis"></img>
                            <h6>${data.first_air_date}</h6>
                            </a>
                            </article>`
                            
            }
        })
        .catch(function(e){
            console.log(e);
        })
}
