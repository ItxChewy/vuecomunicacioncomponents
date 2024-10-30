<template>
<div>
   <MenuComponent/>
  <router-view></router-view>
</div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';



export default {
  name: "App",
  components: {
    MenuComponent
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
