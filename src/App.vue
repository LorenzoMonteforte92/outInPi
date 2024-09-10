<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';  

export default {
  components: {
    AppHeader,
    AppFooter,

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
      <AppHeader></AppHeader>
      <router-view></router-view>
  </div>
  <AppFooter></AppFooter>
</template>

<style lang="scss" >
  @use './style/generic.scss'
</style>