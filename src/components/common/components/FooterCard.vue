<template>
  <v-footer
  padless
  >
      <v-row
      >
        <v-col
        class="blue lighten-2 py-4 text-center white--text"
        cols="12"
        >
          <strong>COVID19</strong>
          <div class="body-1 font-weight-light pt-3 text-center">
              &copy; {{ new Date().getFullYear() }}, made with
              <v-icon size="18" color='purple darken-2'>
                mdi-heart
              </v-icon>
          </div>
        </v-col>
      </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      
    }),
  }
</script>