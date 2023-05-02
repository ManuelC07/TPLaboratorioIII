//Aca esta la parte del codigo del boton seguir.
const followButton = document.getElementById('follow-button');

followButton.addEventListener('click', function() {
  if (followButton.textContent === 'Seguir') {
    followButton.textContent = 'Dejar de seguir';
  } else {
    followButton.textContent = 'Seguir';
  }
});
//Parte del codigo para el boton de Me gusta y su contador de likes.
var likes = 200;

function incrementLikes() {
  likes++;
  document.getElementById("numLikes").innerHTML = likes;
}
//Parte del codigo donde se verifica el user, el comentario y si todo esta bien lo comenta.
// Obtener los valores de los inputs
const username = document.getElementById("username");
const comment = document.getElementById("comment");
const btncomentario = document.getElementById("btn-comentario");

btncomentario.addEventListener('click', function(){
  // Verificar que se haya ingresado un usuario
  if (!username) {
    alert("Por favor, ingrese un usuario");
    return;
  }
  
  // Verificar que se haya ingresado un comentario
  if (!comment) {
    alert("Por favor, ingrese un comentario");
    return;
  }
  
  // Crear un nuevo elemento de comentario
  var nuevoComentario = document.createElement("div");
  nuevoComentario.innerHTML = "<strong>" + username + ":</strong> " + comment;
  
  // Agregar el nuevo elemento al contenedor de comentarios
  var contenedorComentarios = document.getElementById("comentarios");
  contenedorComentarios.appendChild(nuevoComentario);
  
  // Limpiar los inputs
  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";
});