<template>
  <div>
    <h1>SELECCION MULTIPLE</h1>
    <form v-on:submit.prevent="seleccionarJugador()">
    <label>Selecciona los jugadores: </label>
    <select multiple v-model="jugadoresSeleccionados">
        <option v-for="jugador in jugadores" :key="jugador">
            {{jugador}}
        </option>
    </select>
    <button>Seleccionar Jugador</button>
    </form>
    <hr>
    <div>
        <h3 style="color:royalblue" v-html="jugadoresMostrados"></h3>
    </div>
  </div>
</template>

<script>
export default {
    name:"SeleccionMultiple",
    data(){
        return{
            jugadores:["Messi","Rodri","Koke","Carvajal","Williams","Isco"],
            jugadoresSeleccionados:[],
            jugadoresMostrados:[]
        }
    },methods:{
        seleccionarJugador(){
             this.jugadoresMostrados = [this.jugadoresSeleccionados];
    },
    }
}
</script>

<style>

</style>