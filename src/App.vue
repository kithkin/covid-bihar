<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Covid19 | Bihar | Coronavirus trending data of Bihar';
      const link = document.querySelector("[rel='icon']");
      link.setAttribute('href',to.meta.icon);
    }
  }
}
</script>
