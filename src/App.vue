<template>
  <div id="app">
      <v-app id="covid">

        <!-- app bar component -->
        <app-bar></app-bar>

        <!-- back to top component -->
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          color="primary"
          @click="toTop"
        >
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>

        <!-- router view -->
        <router-view />

        <!-- footer component -->
        <footer-card />
      </v-app>
  </div>
</template>

<script>
import AppBar from './components/common/components/AppBar.vue';
import FooterCard from './components/common/components/FooterCard.vue';

export default {
  name: 'App',
  components: {
      AppBar,
      FooterCard
  },
  data() {
      return {
        fab: false,
      }
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
          const top = window.pageYOffset ||   e.target.scrollTop || 0
          this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0);
    }
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Covid19 | Bihar | Coronavirus trending data of Bihar';
      const link = document.querySelector("[rel='icon']");
      link.setAttribute('href',to.meta.icon);
    }
  }
}
</script>
