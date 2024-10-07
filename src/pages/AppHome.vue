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
        <div class="col d-flex flex-wrap justify-content-around my-5">
            <div class="mb-3 d-flex">
                <input type="text" class="form-control" id="ricercaEventi" placeholder="Cerca evento">
                <button class="btn btn-primary">Cerca</button>
            </div>
            <div class="mb-3 d-flex">
                <input type="text" class="form-control" id="ricercaOrganizzatore" placeholder="Cerca organizzatore">
                <button class="btn btn-primary">Cerca</button>
            </div>
            <div class="mb-3 d-flex">
                <input type="date" class="form-control" id="ricercaData" placeholder="Cerca per data">
                <button class="btn btn-primary">Cerca</button>
            </div>
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