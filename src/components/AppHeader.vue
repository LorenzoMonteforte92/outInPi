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
            toggleActiveLink (label) {
                
                if(label === 'Eventi') {
                    this.isLinkActive = !this.isLinkActive
                }
                

                console.log(this.isLinkActive)
            }
            },

        computed: {

        }
        }
	

    
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="ms-5" ><router-link class="navbar-brand" :to="{name: 'home'}">ToDoPi</router-link></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav gap-5">
                    <li class="nav-item" v-for="link in navLinks" >
                        <router-link class="nav-link" :to="{name: link.routeName}">{{ link.label }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- aria-current="page"  -->
</template>

<style scoped lang="scss">
    // .container-fluid{
    //     background-color: black;
    // }
</style>