import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import PadreDeporte from './components/PadreDeporte.vue'
import NumeroDoble from './components/NumeroDoble.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    }, 
    {
        path: "/deportes" , component: PadreDeporte
    },
    {
        path: "/numerodoble/:numero?" , component: NumeroDoble
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router