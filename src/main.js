import './assets/main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import '@primevue/themes/aura-light-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import App from './App.vue'
import {Button, Card, Toast, ToastService} from "primevue";
import router from './router';



const app = createApp(App)

app.use(PrimeVue, { ripple: true })
    .use(ToastService)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('Toast', Toast)
    .use(router);



// Mount App
app.mount('#app');
