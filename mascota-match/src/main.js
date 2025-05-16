import './assets/main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/Aura';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import App from './App.vue'
import {Button, Card, Toast, ToastService} from "primevue";
import router from './router'; // Asegúrate de que esta ruta sea correcta



const app = createApp(App)

app.use(PrimeVue, { theme: { preset: Aura }, ripple: true })
    .use(ToastService)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('Toast', Toast)
    .use(router);



// Mount App
app.mount('#app');