
const followButton = document.getElementById('follow-button');

followButton.addEventListener('click', function() {
  if (followButton.textContent === 'Seguir') {
    followButton.textContent = 'Dejar de seguir';
  } else {
    followButton.textContent = 'Seguir';
  }
});

var likes = 200;

function incrementLikes() {
  if (likes==200){
    likes++;
  document.getElementById("numLikes").innerHTML = likes;
  } 
};


function agregarComentario(evento) {
  evento.preventDefault();
  //Obtengo los valores ingresados
  let usuario = document.getElementById('username').value;
  let textoComentario = document.getElementById('texto-comentario').value;
  //Agrego el feedback a la página
  let texto = document.createTextNode(usuario  + ': ' +  textoComentario);
  let parrafo = document.createElement('p')
  parrafo.appendChild(texto);

  document.getElementById('comentarios').appendChild(parrafo);

  //Reinicio los valores de los input
  document.getElementById('texto-comentario').value = '';
}

document.getElementById('boton-enviar-comentario')
  .addEventListener('click', agregarComentario)