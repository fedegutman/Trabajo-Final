url_detalle_generos = `https://api.themoviedb.org/3/genre/movie/list?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US`

fetch(url_detalle_generos)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let container = document.querySelector('.seccion_generos');
    let peliculas = '';

    for(let i=0; i < info.length; i++){
        let longitudTitulo = info[i].title.length
        console.log(longitudTitulo)
        if (longitudTitulo >= 25){
            peliculas += `<article class='peliculasjs'>
                            <a href= "detalle_peliculas.html?id=${info[i].id}">
                                <h3 class='titulo_largo'>${info[i].title}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </a>
                            </article>`
        } else {
            peliculas += `<article class='peliculasjs'>
                            <a href= "detalle_peliculas.html?id=${info[i].id}">
                                <h3>${info[i].title}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </a>
                            </article>`
        };
    }
    
    container.innerHTML = peliculas;  
})
.catch(function(error){
    console.log('El error es: ' + error);
})