<template>
  <div>
    <h1>Numero Doble</h1>
    <h3 v-html="mensaje"></h3>
    <h4 style="color: red" v-if="doble">Doble: {{ doble }}</h4>
    <button v-on:click="volverCasa()">Volver a Home</button>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",
  mounted() {
    let paramNumero = this.$route.params.numero;
    if (paramNumero == "") {
      this.mensaje = "Sin parametros en Routing:" + paramNumero;
    } else {
      this.mensaje = "Con Parametros " + paramNumero;
      let valor = parseInt(paramNumero);
      this.doble = valor * 2;
    }
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.mensaje = "Esto ha cambiado!!" + this.$route.params.numero;
        if (this.$route.params.numero == "") {
          this.doble = null;
        } else {
          let valor = parseInt(this.$route.params.numero);
          this.doble = valor * 2;
        }
      }
    },
  },
  methods:{
    volverCasa(){
        this.$router.push("/")
    }
  },
  data() {
    return {
      mensaje: "",
      doble: null,
    };
  },
};
</script>

<style>
</style>