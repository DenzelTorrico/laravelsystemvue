import './bootstrap';
import '../css/app.css'
import { createApp } from 'vue';
import router from './router/index'; // Importa el router correctamente
import App from './App.vue';

createApp(App).use(router).mount('#app');
