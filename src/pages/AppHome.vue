<script>
import Carousel from '../components/carousel.vue';

    export default {
        name: 'AppHome',
        components: {
            Carousel,

            },

        data(){
            return{
                
            }
        },
        methods: {
            
            }
        }
	

    
</script>

<template>
    <div class="container-md my-3 rounded">
        <div class="row justify-content-center">
            <div class="col text-center lm-text-color"><h1>Organizza la tua prossima serata</h1></div>
        </div>
    </div>
   <Carousel></Carousel>
   <div class="container-md rounded">
    <div class="row">
        <div class="col d-flex justify-content-around my-5">
            <form class="d-flex gap-4" role="search">
                <!-- ricerca nome evento -->
                <div class="d-flex" >
                    <input class="form-control" type="search" placeholder="Cerca per nome evento" aria-label="Search">
                    <button class="btn btn-primary" type="submit">Search</button>
                </div>
                <!-- ricerca per giorno -->
                <div class="d-flex" >
                    <input class="form-control" type="date" aria-label="Search">
                    <button class="btn btn-primary" type="submit">Search</button>
                </div>
                <!-- ricerca per categoria -->
                <div class="d-flex" >
                    <input class="form-control" type="search" placeholder="Cerca locali" aria-label="Search">
                <button class="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
        </div>
    </div>
   </div>
</template>

<style scoped lang="scss">
// .container-md{
//     background-color: aqua;
// }

.lm-text-color{
    color: bisque
}
</style>