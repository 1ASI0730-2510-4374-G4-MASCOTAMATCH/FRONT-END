import {createRouter, createWebHistory} from "vue-router";
import App from "@/App.vue";

import LoginRegisterComponent from "@/bounded-context/components/login-register.components.vue";


const routes = [

    { path: '/login',       name: 'login',    component: LoginRegisterComponent },
    // { path: '/',           name: 'home',    components: LoginRegister },
    //{ path: '/registro',   name: 'registro', components: Registro }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 0;
            const target = document.querySelector(to.hash);

            if (target) {
                const top = target.offsetTop - headerHeight + 1;
                // Devuelve el desplazamiento con la propiedad `top`
                return { top, behavior: 'smooth' };
            }
        }
        return { top: 0 }; // Si no hay hash, devuelve la posición inicial
    }
})

export default router