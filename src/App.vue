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
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style lang="scss" >
  @use './style/generic.scss'
</style>