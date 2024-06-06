import { createRouter, createWebHistory } from 'vue-router';

const Documentos = () => import('../views/Documentos.vue');
const Usuarios = () => import('../views/Usuarios.vue');
const DashBoard = () => import('../views/DashBoard.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: DashBoard,
    },
    {
        path: '/documentos',
        name: 'documentos',
        component: Documentos,
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: Usuarios,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
