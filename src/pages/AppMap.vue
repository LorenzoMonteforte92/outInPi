<script>
import { onMounted, ref } from 'vue'; 

    export default {
        name: 'AppMap',
        setup() {
        const mapRef = ref(null);
        onMounted(() => {
        
                const tt = window.tt;
                const pisa = [10.401886, 43.715928];
                let map = tt.map({
                key: 'IVJ2d30z4OsD1BOoMEvX2TGYuMGgRaOG',
                container: mapRef.value,
                style: 'tomtom://vector/1/basic-main',
                center: pisa,
                zoom: 13
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl()); 
            addMarker(map);

        })

        function addMarker(map){
        const tt = window.tt;
            let location = [10.401886, 43.715928];
            let popupOffsets = {
                top: [0, 0],
                bottom: [0, -30],
                'bottom-right': [0, -30],
                'bottom-left': [0, -30],
                left: [25, -35],
                right: [-25, -35]
                }

            let marker = new tt.Marker().setLngLat(location).addTo(map);
            let popup = new tt.Popup({offset: popupOffsets}).setHTML("La tua città");
            marker.setPopup(popup).togglePopup();
        }
 
            return { 
            mapRef, 
            }; 
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
    <div class="row">
        <div class="col d-flex justify-content-center p-2">
            <div class="rounded" id='map' ref="mapRef"></div>
        </div>
    </div>
   </div>
</template>

<style scoped lang="scss">
    #map { 
        height: 60vh; 
        width: 90vw; 
    } 

    @media screen and (min-width: 992px) {
        #map { 
        height: 90vh; 
        width: 90vw; 
    } 
}
</style>