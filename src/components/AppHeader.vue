<script>
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
                        label: 'Mappa degli eventi',
                        routeName: 'map'
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
    <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary rounded-bottom">
        <div class="container-fluid">
            <div class="ms-5" ><router-link class="navbar-brand text-light fw-bold" :to="{name: 'home'}">ToDoPi</router-link></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="lm-navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
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
    .nav-link{
        color: bisque;  
    }

    .navbar-toggler{
       
        border:  solid 1px bisque;
        .lm-navbar-toggler-icon{
            color: bisque; 
        }
    }

    .nav-link:hover{
        color: rgb(249, 204, 148);
        transition: delay 1s;
        
    }

    .nav-link.active-link {
        font-weight: bold;
        color: #ff0fa4 !important;
        }

    #navbar{
        background-color: #18172da5 !important; 
    }

    // #navbarNav.lm-gap{
    //     gap: 3rem;
    // }

    @media only screen and (min-width: 992px) {
        .lm-gap{
        gap: 12rem
    }

    .nav-link:hover{
        color: bisque;
        transform: scale(1.5);
        transition: transform .2s; 
    }

    .nav-link{
        transition: transform .2s; 
    }

}
</style>