import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import PadreDeporte from './components/PadreDeporte.vue'
import NumeroDoble from './components/NumeroDoble.vue'
import TablaMultiplicar from './components/TablaMultiplicar.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    }, 
    {
        path: "/deportes" , component: PadreDeporte
    },
    {
        path: "/numerodoble/:numero?" , component: NumeroDoble
    },
    {
        path: "/tablamultiplicar/:numero?" , component : TablaMultiplicar
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router