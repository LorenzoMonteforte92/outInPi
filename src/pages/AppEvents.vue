<script>
import AppEventsCard from '../components/AppEventsCard.vue'; 

    export default {
        name: 'AppEvents',
        components: {
            AppEventsCard,

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
   <div class="container-fluid my-5">
        <div class="row justify-content-center">
            <div class="col-10 d-flex flex-wrap justify-content-center gap-4">
                <AppEventsCard></AppEventsCard>
            </div>
        </div>
   </div>
   
</template>

<style scoped lang="scss">

</style>