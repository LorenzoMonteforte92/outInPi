<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
  

export default {
  components: {
    AppHeader,

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
      <video autoplay loop muted playsinline class="video-background">
        <source src="./assets/video/luci.mp4" type="video/mp4">
      </video>
      <AppHeader></AppHeader>
      <router-view></router-view>
  </div>
</template>

<style lang="scss" >
  @use './style/generic.scss'
</style>