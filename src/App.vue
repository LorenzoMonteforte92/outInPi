<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMap from './pages/AppMap.vue';  

export default {
  components: {
    AppHeader,
    AppFooter,
    AppMap

  },

  data() {
    return {
      store
    };
  },
  
  methods: {
   
  },
  mounted() {
   
  }
}
</script>

<template>
  <div class="video-background-container">
    <!-- Sfondo video -->
    <video autoplay loop muted playsinline id="video-background">
      <source src="./assets/video/luci.mp4" type="video/mp4">
    </video>
  </div>
  <div class="content-container">
    <AppHeader></AppHeader>
    <router-view class="content" ></router-view>
    <AppFooter class="footer" ></AppFooter>
  </div>
</template>


<style lang="scss" >
  @use './style/generic.scss'
</style>