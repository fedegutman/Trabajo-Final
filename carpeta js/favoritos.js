//lista de favoritos

// 1 - recuperar el storage 
let recuperoStorage= localStorage.getItem("pelisfavoritas");
console.log(recuperoStorage);

//2 - tengo que transformar de JSON a array
let seleccionados = JSON.parse(recuperoStorage);
console.log(seleccionados);

// 3 - captura el contenedor de los elementos a mostrar
let pelisFavoritas= document.querySelector (".seccion_favoritos");

// 4 - evaluar si el localStorage está vacío quiero indicarle al usuario que no hay favoritos seleccionados
if (seleccionados == null || seleccionados.length == 0){
    pelisFavoritas.innerHTML = `<p> No hay favoritos seleccionados </p>`
} else {
    // pedir a la api los dotos de todos los ids del array de personajes elegidos
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
            pelisFavoritas.innerHTML += `
                            <img src="${data.image}">
                            <p> Nombre: ${data.original_title}</p>
                            
                            `
        })
        .catch(function(e){
            console.log(e);
        })


}