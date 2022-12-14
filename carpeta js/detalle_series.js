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
        if (data.poster_path == null){
            imagen.innerHTML = `<img src="img/no_image.png" alt="${data.name}" class="foto_series_breakingbad"></img>`
        } else {
            imagen.innerHTML = `<img src="https://image.tmdb.org/t/p/original${data.poster_path}" alt="${data.name}" class="foto_series_breakingbad"></img>`
        }

        let generos = document.querySelector('.texto_generos')
        for (let i of data.genres){
            generos.innerHTML += `<a class ='texto_azul' href="detalle_generos.html?id=${i.id}"> 
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
        
        if (data.results.AR){
            let plataformas_argentinas = data.results.AR.flatrate
            console.log(plataformas_argentinas)
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


let seriesFavoritas = []
let recuperoStorageSeries = localStorage.getItem("seriesfavoritas")
console.log(recuperoStorageSeries)

if (recuperoStorageSeries !== null){
    seriesFavoritas = JSON.parse(recuperoStorageSeries)
}
let botonfavoritos = document.querySelector(".boton_favoritos");
if (seriesFavoritas.includes(id)){
    botonfavoritos.innerText = "Remover de favoritos"
}
botonfavoritos.addEventListener("click", function(){
    if(seriesFavoritas.includes(id)){
        let indiceSerie = seriesFavoritas.indexOf(id);
        seriesFavoritas.splice(indiceSerie,1)
        botonfavoritos.innerText = "Agregar a Favoritos"
    } else {
        seriesFavoritas.push(id)
        botonfavoritos.innerText = "Sacar de Favoritos";
    }
    let favs = JSON.stringify(seriesFavoritas)
    localStorage.setItem("seriesfavoritas", favs)
    console.log(localStorage)
})


// ---------------------------------------------------------------------------------------------

url_recomendaciones = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1`
let botonRecomendaciones = document.querySelector('.boton_recomendaciones');
let mostrarRecomendados = document.querySelector('.recomendaciones');
botonRecomendaciones.addEventListener('click', function(){
    if (mostrarRecomendados.style.display == 'flex'){
        mostrarRecomendados.style.display = 'none'
        botonRecomendaciones.innerText = 'Ver recomendaciones'
    } else{
        mostrarRecomendados.style.display = 'flex'
        botonRecomendaciones.innerText = 'Ocultar recomendaciones'
    }   
})

fetch(url_recomendaciones)
.then(function(response){
    return response.json();
})
.then(function(data){
        console.log(data);
        let conteinerRecomendaciones = document.querySelector('.recomendaciones')
        info = data.results
        console.log(info.name)

        recomendaciones = '';
        recomendaciones += `<article class='pelis_recomendadas'>
                                <a class ='conteinerrecomendados' href='detalle_series.html?id=${info[0].id}'>
                                <h3 class='titulo_recomendados'>${info[0].name}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[0].poster_path}' alt=''>
                                </a>
                            </article>`
        recomendaciones += `<article class='pelis_recomendadas'>
                                <a class ='conteinerrecomendados' href='detalle_series.html?id=${info[1].id}'>
                                <h3 class='titulo_recomendados'>${info[1].name}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[1].poster_path}' alt=''>
                                </a>
                            </article>`

        recomendaciones += `<article class='pelis_recomendadas'>
                                <a class ='conteinerrecomendados' href='detalle_series.html?id=${info[2].id}'>
                                <h3 class='titulo_recomendados'>${info[2].name}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[2].poster_path}' alt=''>
                                </a>
                            </article>`

    conteinerRecomendaciones.innerHTML = recomendaciones
})
.catch(function(error){
        console.log('El error es: ' + error);
})



