let qs = location.search
let qs_OL= new URLSearchParams(qs);

let id = qs_OL.get('id')



let url_Pelis_generos = `https://api.themoviedb.org/3/discover/movie?api_key=35664717fe783f635e22f58af930e36f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`

let url_series_generos = `https://api.themoviedb.org/3/discover/tv?api_key=35664717fe783f635e22f58af930e36f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`

let qstitulo = location.search
let queryStringToObject = new URLSearchParams(qs);
let idtitulo = queryStringToObject.get('id');

let url_generos =  `https://api.themoviedb.org/3/genre/movie/list?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US`
genero = ''
fetch(url_generos)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.genres
        console.log(info)
    
        for(let i=0; i < info.length; i++){
            if (info[i].id == id){
                genero += info[i].name
            }
        }
    })
    .catch(function(error){
        console.log('El error es: ' + error);
    })




fetch(url_Pelis_generos)
.then(function(response){
    return response.json();
})
.then(function(data){
    let info = data.results
    console.log(info)
    let container = document.querySelector('.seccion_generos');
    let peliculas = '';
    let seccion_generos1 = document.querySelector('.seccion_generos1')
    let seccion_generos2 = document.querySelector('.seccion_generos2')
    seccion_generos1.innerHTML = genero
    seccion_generos2.innerHTML = `Aquí encontrarás las mejores películas dentro de ${genero}.`
    for(let i=0; i < info.length; i++){
        let longitudTitulo = info[i].title.length
        if (longitudTitulo >= 25){
            peliculas += ` <article class='peliculasjs'>
                            <a href= "detalle_peliculas.html?id=${info[i].id}">
                                <h3 class='titulo_largo'>${info[i].title}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </a>
                            </article>`
        } else {
            peliculas += ` <article class='peliculasjs'>
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



fetch(url_series_generos)
.then(function(response){
    return response.json();
})
.then(function(data){
    let info = data.results
    console.log(info)
    let container = document.querySelector('.series_generos');
    let series = '';

    for(let i=0; i < info.length; i++){
        let longitudTitulo = info[i].name.length
        if (longitudTitulo >= 25){
            series += `<article class='peliculasjs'>
                            <a href= "detalle_peliculas.html?id=${info[i].id}">
                                <h3 class='titulo_largo'>${info[i].name}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </a>
                            </article>`
        } else {
            series += `<article class='peliculasjs'>
                            <a href= "detalle_peliculas.html?id=${info[i].id}">
                                <h3>${info[i].name}</h3>
                                <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            </a>
                            </article>`
        };
    }
    
    container.innerHTML = series;  
})
.catch(function(error){
    console.log('El error es: ' + error);
})

