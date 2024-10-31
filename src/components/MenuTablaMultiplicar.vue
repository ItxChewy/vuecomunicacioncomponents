<template>
  <div>
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="num in numeros" :key="num">
        <router-link :to="'/tablamultiplicar/' + num"
          >Tabla {{ num }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuTablaMultiplicar",
  data() {
    return {
      numeros: [],
    };
  },
  mounted() {
    var aux = [];
    for (var i = 1; i <= 6; i++) {
      var valor = Math.floor(Math.random() * 101);
      aux.push(valor);
    }
    this.numeros = aux;
  },
};
</script>

<style>
ul#menu li {
  display: inline;
  padding: 2%;
}
</style>