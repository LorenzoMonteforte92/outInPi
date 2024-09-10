<script>
// import { Events } from 'vue';
// import AppEvents from '../pages/AppEvents.vue';
// import AppHome from '../pages/AppHome.vue';

    export default {
        name: 'AppHeader',

        data(){
            return{
                
                isLinkActive: false,
                navLinks: [
                    {
                        label: 'Home',
                        routeName: 'home'
                    },
                    {
                        label: 'Eventi',
                        routeName: 'events'
                    },
                    {
                        label: 'Calendario',
                        routeName: 'calendar'
                    },
                    {
                        label: 'Chi Siamo',
                        routeName: 'about'
                    },
                    
                ]
            }
        },
        methods: {
           
            },

        computed: {

        }
    }
	

    
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-bottom">
        <div class="container-fluid">
            <div class="ms-5" ><router-link class="navbar-brand" :to="{name: 'home'}">ToDoPi</router-link></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav lm-gap">
                    <li class="nav-item" v-for="link in navLinks" >
                        <router-link class="nav-link" 
                        :to="{name: link.routeName}"
                        :class="{ 'active-link': $route.name === link.routeName }"
                        :aria-current="$route.name === link.routeName ? 'page' : null"
                        >{{ link.label }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
//creare CSS per un link che si ingrandisca all'hover e abbia un colore contrastante se selezionato
    .nav-link.active-link {
        font-weight: bold;
    }

    #navbarNav.lm-gap{
        gap: 3rem;
    }

    @media only screen and (min-width: 992px) {
        .lm-gap{
        gap: 12rem
    }
}
</style>