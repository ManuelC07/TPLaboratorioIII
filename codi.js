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
