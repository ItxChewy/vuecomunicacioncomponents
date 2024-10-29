<template>
  <div>
    <li style="color: royalblue">{{ nombredeporte }}
      <button v-on:click="seleccionarFavorito()">Seleccionar Favorito</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "HijoDeporte",
  props: ["nombredeporte"],
  methods: {
    seleccionarFavorito(){
      this.$emit("seleccionarFavoritoParent",this.nombredeporte);

    }
  },
};
</script>

<style>
</style>