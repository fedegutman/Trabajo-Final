let qs = location.search
let qs_OL= new URLSearchParams(qs);

let idPelis = qs_OL.get('id_peliculas')
let idSeries = qs_OL.get('id_series')


let url_Pelis = `https://api.themoviedb.org/3/discover/movie?api_key=35664717fe783f635e22f58af930e36f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idPelis}&with_watch_monetization_types=flatrate`

let url_series = `https://api.themoviedb.org/3/discover/tv?api_key=35664717fe783f635e22f58af930e36f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idSeries}&with_watch_monetization_types=flatrate`


fetch(url_Pelis)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let info = data.results
    console.log(info);
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