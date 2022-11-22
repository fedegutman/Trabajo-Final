url_generos = 'https://api.themoviedb.org/3/genre/movie/list?api_key=7bb779dc3f73731cbf146b210f1f6ce4&language=en-US'

fetch(url_generos)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.genres
        console.log(info)
        let container = document.querySelector('.caja_generos');
        let generos = '';

    
        for(let i=0; i < info.length; i++){

                generos += `<article>
                                <h2 class='tipo_genero'><a href='./detalle_generos.html' class='generos'>${info[i].name}<a/><h2>
                            </article>`
        
        container.innerHTML = generos;    
        }
    })
    .catch(function(error){
        console.log('El error es: ' + error);
    })


