
app.components('comentarios', {
    props: {
        usuario=this.usuario
    },
    template:
    /*html*/
    `<form class="cajacoments" @submit.prevent="onSubmit">
	    <textarea id="comentario" v-model="comentario" class="comentinput" placeholder="ingrese su comentario"></textarea>
	    <input type="submit" class="enviar-btn" value="enviar">
    </form>`,
    data() {
        return {
            comentario:'',
            usuario:
        }
    },
    methods: {
        onsubmit(){
            let comentarios ={
                usuario: this.usuario,
                comentario: this.comentario
                
            }
            this.$emit('comentarioHchoe', 'comentarios')
            this.usuario=''
            this.comentario=''

        }
    },
    })