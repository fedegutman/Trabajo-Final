let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()


let api_key_detalle_series = `https://api.themoviedb.org/3/tv/${id}?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US`

console.log(api_key_detalle_series);

fetch(api_key_detalle_series)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Capturamos DOM
        
        let titulo = document.querySelector('.titulo_detalle')
        titulo.innerHTML = data.name

        let sinopsis = document.querySelector('.texto_sinopsis')
        sinopsis.innerHTML = data.overview

        let estreno = document.querySelector('.texto_estreno')
        estreno.innerHTML = data.first_air_date

        let imagen = document.querySelector('.contenedor_imagen')
        imagen.innerHTML = `<img src="https://image.tmdb.org/t/p/original${data.poster_path}" alt="${data.name}" class="foto_series_breakingbad"></img>`

        let generos = document.querySelector('.texto_generos')
        for (let i of data.genres){
            generos.innerHTML += `<a href="detalle_generos.html?id=${i.id}"> 
            ${i.name}
            </a> <br> </br>`
        }

        let calificacion = document.querySelector('.texto_calificacion')
        calificacion.innerHTML = data.vote_average
        

    })
    .catch(function(error){
        console.log(error);
    })

let url_plataformas = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=7bb779dc3f73731cbf146b210f1f6ce4`


fetch(url_plataformas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let contenedor_html = document.querySelector('.texto_plataformas')
        let plataformas_argentinas = data.results.AR.flatrate
        console.log(plataformas_argentinas)
        if (data.results.AR){
            for (let i of plataformas_argentinas){
            contenedor_html.innerHTML +=
            `<div> 
            ${i.provider_name}
            <img src="https://image.tmdb.org/t/p/original${i.logo_path}" alt="${i.provider_name}" class="logo_plataformas"> </img>
            </div>`
            }
        }else{
            contenedor_html.innerHTML = "No disponible en Argentina"
        }

        
    })