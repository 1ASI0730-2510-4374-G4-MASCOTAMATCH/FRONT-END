/**
 * @fileoverview Router configuration for the ACME Learning Center application
 * Defines all routes and navigation behavior for the application
 */

import {createRouter, createWebHistory} from "vue-router";
import loginRegisterComponent from "@/user/components/login-register.component.vue";
import MascotaListComponente from "@/pet/components/mascota-list.componente.vue";
import MascotaFormComponent from "@/pet/components/mascota-form.component.vue";
import HistorialListComponent from "@/pet/components/historial-list.component.vue";
import PageNotFoundComponent from "@/public/pages/page-not-found.component.vue";
import PlanesPageComponent from "@/plan/pages/planes-page.component.vue";
import MedicamentosPageComponent from "@/pet/pages/medicamentos-page.component.vue";

/**
 * @description Lazy-loaded component imports for route configuration
 * Using dynamic imports to enable code splitting and improve initial load performance
 */

/**
 * @type {import('vue-router').RouteRecordRaw[]}
 * @description Application route definitions.
 * Each route object contains:
 * - path: URL path for the route
 * - name: Unique identifier for the route
 * - component: Vue component to render
 * - meta: Additional metadata including page title
 */
const routes = [
    { path: '/', name: 'login', component: loginRegisterComponent, meta: { title: 'Login' } },
    { path: '/planes', name: 'planes', component: PlanesPageComponent, meta: { title: 'Planes' } },
    { path: '/mascotas', name: 'mascotas', component: MascotaListComponente, meta: { title: 'Mascotas' } },
    { path: '/mascotas/agregar', name: 'mascota-form', component: MascotaFormComponent, meta: { title: 'Agregar Mascota' } },
    { path: '/medicamentos', name: 'medicamentos', component: MedicamentosPageComponent, meta: { title: 'Medicamentos' } },
    { path: '/historiales', name: 'historiales', component: HistorialListComponent, meta: { title: 'Historiales' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFoundComponent, meta: { title: 'Page not found' } },
];

/**
 * @type {import('vue-router').Router}
 * @description Vue Router instance configured with HTML5 history mode
 */
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

/**
 * @description Global navigation guard that runs before each route change
 * Handles:
 * - Navigation logging
 * - Dynamic page title updates based on route metadata
 *
 * @param {import('vue-router').RouteLocationNormalized} to - Target route
 * @param {import('vue-router').RouteLocationNormalized} from - Current route
 * @param {import('vue-router').NavigationGuardNext} next - Function to resolve the navigation
 */

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    // Set the page title
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;