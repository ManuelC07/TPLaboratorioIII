new Vue({
  el: '#seguir',
  data: {
    following: false
  },
  methods: {
    toggleFollow() {
      this.following = !this.following;
    }
  }
});

new Vue({
  el: '#likeboton',
  data: {
    likes: 200,
    liked: false,
  },
  methods: {
    like() {
      if (!this.liked) {
        this.likes++;
        this.liked = true;
      }
    },
  },
});

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