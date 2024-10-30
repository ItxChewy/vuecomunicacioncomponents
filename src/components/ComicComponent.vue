<template>
  <div id="comics">
    <h1 style="color:royalblue">{{comic.titulo}}</h1>
    <p>{{comic.descripcion}}</p>
    <img :src="comic.imagen"/>
    <h4 :class="{
        rojo: comic.year <= 2000,
        verde: comic.year > 2000
    }">
        {{comic.year}}
    </h4>
    <button @click="seleccionarFavorito()">Seleccionar Favorito</button>
    <button @click="borrarComic()">Eliminar Comic</button>
  </div>
</template>

<script>
export default {
    name:"ComicComponent",
    props:["comic","index"],
    methods:{
        seleccionarFavorito(){
            this.$emit("seleccionarFavorito",this.comic)
        },
        borrarComic(){
            this.$emit("borrarComic",this.index)
        }

    }
}
</script>

<style>
@import '../assets/css/estillocomic.css'
</style>