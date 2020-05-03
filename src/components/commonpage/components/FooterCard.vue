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
          <strong>कोविड-बिहार</strong>
          <div class="body-1 font-weight-light pt-2 text-center">
              &copy; {{ new Date().getFullYear() }}, 
              <v-icon size="20" color='red darken-2'>
                mdi-heart
              </v-icon>
              बिहारियों के लिए
          </div>
        </v-col>
      </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'FooterCard',

    data: () => ({
      
    }),
  }
</script>