<template>
  <v-footer
  padless
  absolute
  app
  >
      <v-row
      >
        <v-col
        class="blue lighten-2 text-center white--text"
        cols="12"
        >
          <div class="py-3">
            <v-btn
              icon
            >
              <social />
            </v-btn>
          </div>
          
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
import social from './../../socialsharing/social.vue';

  export default {
    name: 'FooterCard',
    components: {
      social
    },

    data: () => ({
      
    }),
  }
</script>