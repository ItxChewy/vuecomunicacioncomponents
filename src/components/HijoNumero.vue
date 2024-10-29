<template>
  <div>
    <h3 style="color: royalblue">Número hijo: {{numero}}</h3>
    <button @click="sumarValor()">Sumar {{numero}}</button>
  </div>
</template>

<script>
export default {
    name:"HijoNumero",
    props:["numero"],
    methods:{
       sumarValor(){
        this.$emit("sumaValores",this.numero)
       } 
    }
}
</script>

<style>

</style>