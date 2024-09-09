import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppEvents from './pages/AppEvents.vue';
import AppCalendar from './pages/AppCalendar.vue';
import AppAbout from './pages/AppAbout.vue';


const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/eventi',
            name: 'events',
            component: AppEvents
        },
        {
            path: '/calendario',
            name: 'calendar',
            component: AppCalendar
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AppAbout
        },
        // 404 not found rule
        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "not-found",
        //     component: NotFound
        // }
    ]
});

export { router };