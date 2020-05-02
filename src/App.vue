<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route' (to, from) {
      document.title = to.meta.title || 'Covid19 | Bihar | Coronavirus trending data of Bihar';
      const link = document.querySelector("[rel='icon']");
      link.setAttribute('href',to.meta.icon);
    }
  }
}
</script>

<style>
@import './assets/css/bootstrap.css';
@import './assets/css/bootstrap-grid.css';
</style>
