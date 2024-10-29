<template>
  <PadreNumeros />
</template>

<script>
import PadreNumeros from "./components/PadreNumeros.vue";

export default {
  name: "App",
  components: {
    PadreNumeros
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ebb239;
  margin-top: 60px;
}
</style>
