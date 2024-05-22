<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from './components/Header.vue'
import SiteFooter from './components/Footer.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>

<style scoped>
body {
  margin: 0 5%;
}
  main{
    width: auto;
    height: auto;
    
  }

</style>
