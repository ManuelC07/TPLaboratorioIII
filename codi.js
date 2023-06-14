const app = Vue.createApp({
  data() {
    return{
     siguiendo: false,
     Estado: "Seguir",
     color: 'cornflowerblue',
     contador :200,
     usuario: '',
     comentario: '',
     comentarios: [],
     error: ''
    };
  },
  methods: {
    seguir() {
      if (this.siguiendo === false){
      this.siguiendo = !this.siguiendo;
      this.Estado = "Dejar de Seguir"
      this.color = 'rgb(171, 182, 204)'
      }
      else{
        this.Estado = "Seguir"
        this.siguiendo = false
        this.color = 'cornflowerblue'
      }
    },
    incrementar: function() {
      if (this.contador === 200) {
        this.contador++;
      } else if (this.contador === 201) {
        this.contador--;
      }
    },
    comentar() {
      if (this.usuario === '') {
        this.error = '¡Debe ingresar un Usuario!';
      } else if (this.comentario === '') {
        this.error = '¡Debe ingresar un comentario!';
      } else {
        this.comentarios.push({
          usuario: this.usuario,
          contenido: this.comentario
        });
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
app.mount('#app');