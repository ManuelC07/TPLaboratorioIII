
new Vue({
  el: '#seguir',
  data: {
    siguiendo: false,
    Estado: "seguir",
    color: 'cornflowerblue'
  },
  methods: {
    seguir() {
      if (this.siguiendo == false){
      this.siguiendo = !this.siguiendo;
      this.Estado = "dejar de seguir"
      this.color = 'grey'

      }
      else{
        this.Estado = "seguir"
        this.siguiendo = false
        this.color = 'cornflowerblue'
      }
    }
  }
});

new Vue({
  el: '#likeboton',
  data: {
    contador :200
  },
  methods: {
    incrementar: function() {
      if (this.contador === 200) {
        this.contador++;
      } else if (this.contador === 201) {
        this.contador--;
      }
    }
  }
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