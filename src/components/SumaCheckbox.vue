<template>
  <div>
    <h1>CHECKBOX</h1>
    <form v-on:submit.prevent="generarCheckbox">
    <button>Generar Checkbox</button>
    <h2 v-for="(valor,index) in valores" :key="valor" >
        <input type="checkbox" :id="index"  :value="index" v-model="sumaSeleccionada">{{valor}}
    </h2>
    </form>
    <hr>
    <div v-if="sumaSeleccionada.length >= 1" >
        <h3>La suma seleccionada es : {{calcularSuma()}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SumaCheckbox",
  methods:{
    generarCheckbox(){
        this.valores = [];
        for(var i = 1 ; i<=10;i++){
            this.valores.push(Math.floor(Math.random() * 5));
        }
    },
    calcularSuma() {
      let suma = 0;
      for (const value of this.sumaSeleccionada) {
        //console.log("value : "+ value)
        suma += this.valores[parseInt(value)]
      }
      return suma;
    }
  },
  data(){
    return{
        valores:[],
        sumaSeleccionada:[],
    }
  }
};
</script>

<style>
</style>