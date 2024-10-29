<template>
  <div>
    <h1>Padre Deporte</h1>
    <h2 style="background-color:red" v-if="favorito">
        Su deporte favorito es {{favorito}}
    </h2>
    <ul v-for="deporte in deportes" :key="deporte">
        <HijoDeporte :nombredeporte="deporte" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent" />
    </ul>
  </div>
</template>

<script>
import HijoDeporte from "./HijoDeporte.vue";
export default {
  name: "PadreDeporte",
  methods:{
    seleccionarFavoritoParent(deporteFavorito){
        this.favorito = deporteFavorito;
    }
  },
  components: {
    HijoDeporte,
  },
  data() {
    return {
      deportes: ["Fútbol", "Baloncesto", "Rugby", "Atletismo", "Pádel"],
      favorito:null
    };
  },
};
</script>

<style>
</style>