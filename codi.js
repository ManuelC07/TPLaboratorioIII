
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

new Vue({
})
