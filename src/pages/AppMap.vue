<script>
import { onMounted, ref } from 'vue'; 

    export default {
        name: 'AppMap',
        setup() {
        const mapRef = ref(null);
        onMounted(() => {
        
                const tt = window.tt;
                let map = tt.map({
                key: 'IVJ2d30z4OsD1BOoMEvX2TGYuMGgRaOG',
                container: mapRef.value,
                style: 'tomtom://vector/1/basic-main',
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl()); 
            addMarker(map);

        })

        function addMarker(map){
        const tt = window.tt;
            let location = [-121.91595, 37.36729];
            let popupOffsets = {
                top: [0, 0],
                bottom: [0, -30],
                'bottom-right': [0, -30],
                'bottom-left': [0, -30],
                left: [25, -35],
                right: [-25, -35]
                }

            let marker = new tt.Marker().setLngLat(location).addTo(map);
            let popup = new tt.Popup({offset: popupOffsets}).setHTML("Your address!");
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
    <div id='map' ref="mapRef"></div>
   </div>
</template>

<style scoped lang="scss">
    #map { 
        height: 50vh; 
        width: 50vw; 
    } 
</style>