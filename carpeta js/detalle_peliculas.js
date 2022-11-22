let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()


let api_key_detalle_peliculas = `https://api.themoviedb.org/3/movie/${id}?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US`

console.log(api_key_detalle_peliculas)

fetch(api_key_detalle_peliculas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Capturamos DOM
        
        let titulo = document.querySelector('.titulo_detalle')
        titulo.innerHTML = data.original_title

        let sinopsis = document.querySelector('.texto_sinopsis')
        sinopsis.innerHTML = data.overview

		let duracion = document.querySelector('.texto_duracion')
		duracion.innerHTML = data.runtime + " minutos"

        let estreno = document.querySelector('.texto_estreno')
        estreno.innerHTML = data.release_date

		let calificacion = document.querySelector('.texto_calificacion')
        calificacion.innerHTML = data.vote_average

		let imagen = document.querySelector('.contenedor_imagen_pelis')
        if (data.poster_path == null){
            imagen.innerHTML = `<img src="img/no_image.png" alt="${data.name}" class="foto_detalle_topgun"></img>`
        } else{
		    imagen.innerHTML = `<img src="https://image.tmdb.org/t/p/original${data.poster_path}" alt="${data.name}" class="foto_detalle_topgun"></img>`
        }
        
	
        let generos = document.querySelector('.texto_generos')
        for (let i = 0; i < data.genres.length; i++){
            console.log(data.genres)
            generos.innerHTML += `<a class='texto_azul' href="detalle_generos.html?id=${data.genres[i].id}"> 
            ${data.genres[i].name}
            </a> <br> </br>`
        }

    })
    .catch(function(error){
        console.log(error);
    })

let url_plataformas = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=7bb779dc3f73731cbf146b210f1f6ce4`


fetch(url_plataformas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let contenedor_html = document.querySelector('.texto_plataformas')
        let plataformas_argentinas = data.results.AR.flatrate
        console.log(plataformas_argentinas)
			if (data.results.AR == undefined){
                contenedor_html.innerHTML += "No disponible en Argentina"
				
			}else{
				
                for (let i of plataformas_argentinas){
                    contenedor_html.innerHTML +=
                    `<div> 
                    ${i.provider_name}
                    <img src="https://image.tmdb.org/t/p/original${i.logo_path}" alt="${i.provider_name}" class="logo_plataformas"> </img>
                    </div>`
                }
                    
			}
		
		
    })


    let pelisFavoritas = []
    let recuperoStoragePelis = localStorage.getItem("pelisfavoritas")
    console.log(recuperoStoragePelis)

    if (recuperoStoragePelis !== null){
        pelisFavoritas = JSON.parse(recuperoStoragePelis)
    }
    let botonfavoritos = document.querySelector(".boton_favoritos");
    if (pelisFavoritas.includes(id)){
        botonfavoritos.innerText = "Remover de favoritos"
    }
    botonfavoritos.addEventListener("click", function(){
        if(pelisFavoritas.includes(id)){
            let indicePeli = pelisFavoritas.indexOf(id);
            pelisFavoritas.splice(indicePeli,1)
            botonfavoritos.innerText = "Agregar a Favoritos"
        } else {
            pelisFavoritas.push(id)
            botonfavoritos.innerText = "Sacar de Favoritos";
        }
        let favs = JSON.stringify(pelisFavoritas)
        localStorage.setItem("pelisfavoritas", favs)
        console.log(localStorage)
    })
    


url_recomendaciones = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1`
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
                                <a class ='conteinerrecomendados' href='detalle_peliculas.html?id=${info[0].id}'>
                                <h3 class='titulo_recomendados'>${info[0].original_title}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[0].poster_path}' alt=''>
                                </a>
                            </article>`
        recomendaciones += `<article class='pelis_recomendadas'>
                                <a class ='conteinerrecomendados' href='detalle_peliculas.html?id=${info[1].id}'>
                                <h3 class='titulo_recomendados'>${info[1].original_title}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[1].poster_path}' alt=''>
                                </a>
                            </article>`

        recomendaciones += `<article class='pelis_recomendadas'>
                                <a class ='conteinerrecomendados' href='detalle_peliculas.html?id=${info[2].id}'>
                                <h3 class='titulo_recomendados'>${info[2].original_title}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[2].poster_path}' alt=''>
                                </a>
                            </article>`

    conteinerRecomendaciones.innerHTML = recomendaciones
})
.catch(function(error){
        console.log('El error es: ' + error);
})



