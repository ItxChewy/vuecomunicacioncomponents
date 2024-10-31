<template>
  <div>
    <h1>Tabla Multiplicar {{ numero }}</h1>
    <table border="1px" style="background-color:royalblue">
      <thead>
        <tr>
          <th>Operacion</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(num, index) in operaciones" :key="num">
          <td>{{ num }}</td>
          <td>{{ resultados[index] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      operaciones: [],
      resultados: [],
    };
  },
  mounted() {
    this.cargarTabla();
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.cargarTabla();
      }
    },
  },
  methods: {
    cargarTabla() {
      let paramNumero = parseInt(this.$route.params.numero);
      this.numero = paramNumero;
      var auxOp = [];
      var auxRe = [];
      for (var i = 1; i <= 10; i++) {
        auxOp.push(this.numero + " * " + i);
        auxRe.push(this.numero * i);
      }
      this.operaciones = auxOp;
      this.resultados = auxRe;
    },
  },
};
</script>

<style>
</style>