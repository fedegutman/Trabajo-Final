
let api_key = "https://api.themoviedb.org/3/movie/550?api_key=7bb779dc3f73731cbf146b210f1f6ce4"

fetch(api_key)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let info = data.results
    let container = document.querySelector('.seccion');
    let peliculas = '';


    for(let i=0; i<info.length; i++){
        peliculas += `<article class='peliculasjs'>
                            <h3>${info[i].title}</h3>
                            <img class = 'pelis' src=https://image.tmdb.org/t/p/w500/${info[i].poster_path} alt='' />
                            <!-- <p>Status: ${info[i].status} </p> -->
                            
                        </article>`
    }
    container.innerHTML = peliculas;    
})
    
.catch(function(error){
    console.log(error);
})

