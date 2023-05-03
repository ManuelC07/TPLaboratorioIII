const followButton = document.getElementById('follow-button');

followButton.addEventListener('click', function() {
  if (followButton.textContent === 'Seguir') {
    followButton.textContent = 'Dejar de seguir';
    followButton.style.backgroundColor = "#808080";
    
  } else {
    followButton.textContent = 'Seguir';
    followButton.style.backgroundColor ="#6495ed";
  }
});

var likes = 200;

function incrementLikes() {
  if (likes==200){
    likes++;
  document.getElementById("numLikes").innerHTML = likes;
  } else
  likes--;
  document.getElementById("numLikes").innerHTML = likes;
}
  


function agregarComentario() {

  var usuario = document.getElementById("usuario").value;
  var comentario = document.getElementById("comentario").value;

  if (usuario === "" || comentario === "") {
    alert("Por favor ingresa tu nombre de usuario y deja un comentario");
    return;
  }

  // Crear un nuevo elemento de comentario y agregarlo al contenedor
  var contenedor = document.getElementById("contenedor-comentarios");

  var nuevoComentario = document.createElement("div");
  nuevoComentario.classList.add("comentario");

  var nombreUsuario = document.createElement("span");
  nombreUsuario.classList.add("nombre-usuario");
  nombreUsuario.textContent = usuario + ": ";

  var textoComentario = document.createElement("span");
  textoComentario.classList.add("texto-comentario");
  textoComentario.textContent = comentario;

  nuevoComentario.appendChild(nombreUsuario);
  nuevoComentario.appendChild(textoComentario);
  contenedor.appendChild(nuevoComentario);

  document.getElementById("usuario").value = "";
  document.getElementById("comentario").value = "";
};