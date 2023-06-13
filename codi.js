
new Vue({
  el: '#seguir',
  data: {
    siguiendo: false,
    Estado: "Seguir",
    color: 'cornflowerblue'
  },
  methods: {
    seguir() {
      if (this.siguiendo == false){
      this.siguiendo = !this.siguiendo;
      this.Estado = "Dejar de Seguir"
      this.color = 'grey'

      }
      else{
        this.Estado = "Seguir"
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

new Vue({
  el: '#comentarios',
  props: {
    usuario:{
        type: String,
        required: true,
    },
  },
  data() {
    return {
      usuario: '',
      comentario: '',
      error: '',
      comentarios: []
    };
  },
  methods: {
    comentar() {
      if (!this.usuario) {
        this.error = 'Debes ingresar un usuario';
      } else if (!this.comentario) {
        this.error = 'Debes ingresar un comentario';
      } else {
        this.comentarios.push({
          usuario: this.usuario,
          contenido: this.comentario
        });

        // Limpiar los campos
        this.usuario = '';
        this.comentario = '';
        this.error = '';
      }
    },
    eliminarComentario(index) {
      this.comentarios.splice(index, 1);
    }
  }
});