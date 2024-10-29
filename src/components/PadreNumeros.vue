<template>
  <div>
    <h1>Numeros Padre</h1>
    <h2 style="color:red" v-if="suma">La suma es: {{suma}}</h2>
    <button @click="generarNumeroAleatorio()">Generar Numero</button>
    <div v-if="numeros.length >= 1">
        <h3 v-for="num in numeros" :key="num">
            <HijoNumero :numero=num v-on:sumaValores="sumaValores" />
        </h3>
    </div>
  </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue'
export default {
    name:"PadreNumeros",
    components:{
        HijoNumero
    },
    data(){
        return{
             numeros:[],
             suma:null
        }  
    },
    methods:{
        generarNumeroAleatorio(){
            let random = Math.floor(Math.random() * 100);
            this.numeros.push(random)
        },
        sumaValores(valor){
            this.suma = this.suma + valor
        }
    }
}
</script>

<style>

</style>