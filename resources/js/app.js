import './bootstrap';
import '../css/app.css';
import 'primevue/resources/themes/aura-light-green/theme.css'; // Tema de PrimeVue
import 'primevue/resources/primevue.min.css'; // Estilos principales de PrimeVue
import 'primeicons/primeicons.css'; // Iconos de PrimeIcons
import 'primeflex/primeflex.css'; // PrimeFlex para diseño flexible (opcional)
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Importa el router correctamente
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(router);

app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('Toast', Toast);

app.mount('#app');
