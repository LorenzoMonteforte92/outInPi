import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppEvents from './pages/AppEvents.vue';
import AppMap from './pages/AppMap.vue';
import AppAbout from './pages/AppAbout.vue';
import AppSingleEvent from './pages/AppSingleEvent.vue';


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
            path: '/mappa',
            name: 'map',
            component: AppMap
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/eventi/:slug',
            name: 'single-event',
            component: AppSingleEvent
        }

        // 404 not found rule
        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "not-found",
        //     component: NotFound
        // }
    ]
});

export { router };