<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from './components/homepage/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@import './assets/css/bootstrap.css';
@import './assets/css/bootstrap-grid.css';
</style>
