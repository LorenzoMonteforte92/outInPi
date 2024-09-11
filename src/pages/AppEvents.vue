<script>
import AppEventsCard from './components/AppEventsCard.vue'; 

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
   <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-10 text-light">lista eventi</div>
        </div>
   </div>
   <AppEventsCard></AppEventsCard>
</template>

<style scoped lang="scss">

</style>