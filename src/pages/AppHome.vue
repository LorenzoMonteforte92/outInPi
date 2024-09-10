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
            <div class="col text-center text-purple"><h1>Organizza la tua prossima serata</h1></div>
        </div>
    </div>
   <Carousel></Carousel>
   <div class="container-md my-3 rounded">
    <div class="row">
        <div class="col">
            <h1>Boobs</h1>
        </div>
    </div>
   </div>
</template>

<style scoped lang="scss">
// .container-md{
//     background-color: aqua;
// }

.text-purple{
    color: #6E2CF3;
}
</style>