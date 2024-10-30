<template>
  <div>
    <ul id="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/deportes">Deportes</router-link>
      </li>
      <li v-for="num in numeros" :key="num">
        <router-link :to="`/numerodoble/${num}`">Numero {{ num }}</router-link>
      </li>
      <li>
        <router-link to="/numerodoble">Numero Doble</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      numeros: [3, 2, 1, 67, 19],
    };
  },
};
</script>

<style>
ul#menu li {
  display: inline;
  padding: 2%;
}
</style>