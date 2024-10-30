<template>
  <div>
    <h1>COMICS</h1>
    <h2 v-if="favorito" style="background-color: green">
      Favoritos : {{ favorito }}
    </h2>
    <form v-on:submit.prevent="crearComic()">
      <label>Título: </label>
      <input type="text" v-model="comicForm.titulo" /><br /><br />
      <label>Imagen: </label>
      <input type="text" v-model="comicForm.imagen" /><br /><br />
      <label>Descripcion: </label>
      <input type="text" v-model="comicForm.descripcion" /><br /><br />
      <label>Año: </label>
      <input type="number" v-model="comicForm.year" /><br /><br />
      <button>Crear comic</button>
    </form>
    <hr />
    <div v-for="(comic, index) in comics" :key="comic">
      <ComicComponent
        :comic="comic"
        :index="index"
        v-on:seleccionarFavorito="seleccionarFavorito"
        v-on:borrarComic="borrarComic"
      />
    </div>
  </div>
</template>

<script>
import ComicComponent from "./ComicComponent.vue";

export default {
  name: "ComicsComponent",
  components: {
    ComicComponent,
  },
  data() {
    return {
      comicForm: {
        titulo: "",
        imagen: "",
        descripcion: "",
        year: 0,
      },
      favorito: null,
      comics: [
        {
          titulo: "Spiderman",
          imagen:
            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
          descripcion: "Hombre araña",
          year: 1997,
        },
        {
          titulo: "Wolverine",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
          descripcion: "Lobezno",
          year: 2003,
        },
        {
          titulo: "Guardianes de la Galaxia",
          imagen:
            "https://i1.whakoom.com/large/0b/3e/2a67d09fb43e41cea3c16d7ad34d86a3.jpg",
          descripcion: "Yo soy Groot",
          year: 2006,
        },
        {
          titulo: "Avengers",
          imagen:
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
          descripcion: "Los Vengadores",
          year: 1993,
        },
        {
          titulo: "Spawn",
          imagen:
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
          descripcion: "Al Simmons",
          year: 2000,
        },
        {
          titulo: "Batman",
          imagen:
            "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
          descripcion: "Murcielago",
          year: 2001,
        },
      ],
    };
  },
  methods: {
    crearComic() {
      this.comics.push(this.comicForm);
    },
    seleccionarFavorito(comic) {
      this.favorito = comic.titulo;
    },
    borrarComic(index) {
      this.comics.splice(index, 1);
    },
  },
};
</script>

<style>
</style>