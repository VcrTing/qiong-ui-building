import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/admin' },
        {
            path: '/admin',
            component: () => import('../screen/Home.vue'),
            children: [
                
            ]
        },
        {
            path: '/iogin',
            component: () => import('../screen/auth/iogin/Iogin.vue')
        },
        {
            path: '/ui',
            component: () => import('../screen/ui/Ui.vue')
        }
    ],
});

export default router;